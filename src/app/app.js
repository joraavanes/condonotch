import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route,Switch,NavLink} from 'react-router-dom';
import Question from './components/Question';
import AppBar from './components/AppBar';
import Drawer from './components/Drawer';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Home from './components/Home';
import FurnishedCondos from './components/FurnishedCondos';
import '../styles/main.scss';
import { Divider } from '@material-ui/core';
import Rentals from './components/Rentals';
import StyledButton from './components/widgets/StyledButton'

console.time('Initial load');

const styles = {
    dialog:{
        fontFamily:'georgia'
    }
};

const paperStyles = {
    margin:10,
    padding:10
};

const imgStyles = {
    borderRadius: 7,
    maxWidth:'30vw'
};

const headerStyle = {
    width:'100vw'
}

class HelloCondoNotch extends React.Component{
    constructor(props){
        super(props);
        this.handleIdeaAnswer = this.handleIdeaAnswer.bind(this);
        this.changeDrawerState = this.changeDrawerState.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.getRemoteInfo = this.getRemoteInfo.bind(this);
        this.state = {
            questions: ['What is your idea about this topic?',
                        'Do you agree with my thoughts?'],
            answer:null,
            drawerState: false,
            dialogOpen: false,
            loading: false            
        }
    }
    
    // Make ajax call to nodejs server 
    getRemoteInfo = () => {

        let req = new Request('http://localhost:3000',
            {
                method: 'POST',
                mode:'cors',
                headers:{
                    'X-PINGOTHER':'pingpong',
                    'Content-Type':'application/json'
                }
            }
        );

        fetch(req)
            .then(res => console.log(res))
            .then(data=> console.log(data))
            .catch((err)=> console.log(err));
    };

    handleIdeaAnswer(answer){
        this.setState(()=> {
            return{answer:answer};
        });
    }

    changeDrawerState = ()=>{
        this.setState((prevState)=>{
            return{
                drawerState:!prevState.drawerState
            }
        });
        console.log(`%c drawer state ${this.state.drawerState}`,'color: orange;font-weight:1000;');
    }
    
    toggleClose=()=>{
        this.setState((prevState)=>{
            return{
                drawerState:!prevState.drawerState
            }
        });
        console.log(`%c drawer state ${this.state.drawerState}`,'color: orange;font-weight:1000;font-size:16px;');
    }

    handleBtnClick = () => {
        this.setState((prevState) => ({ dialogOpen: !prevState.dialogOpen, loading: !prevState.loading }));
    }

    handleClose = () => {
        this.setState((prevState) => ({dialogOpen: false, loading: !prevState.loading }));
    }

    render(){
        return (
                <BrowserRouter>
                    <div>
                        <AppBar drawerState={this.state.drawerState} loading={this.state.loading} changeDrawerState={this.changeDrawerState} companyName={this.props.companyName}/>
                        <Grid container>

                            <Grid item xs={12} sm={3}>
                                <Paper style={paperStyles}>
                                    <Drawer drawerState={this.state.drawerState} toggleAppDrawer={this.toggleClose}/>

                                    <h2 className="header2">Questionaire</h2>
                                    <Button variant="contained" color="secondary" onClick={this.handleBtnClick}>
                                        Ask something
                                    </Button>

                                    <Divider style={{margin:'5px 0 5px 0'}}/>
                                    <Button variant="contained" color="secondary" style={{padding:0}}>
                                        <NavLink to="/" style={{color:'white',textDecoration:'none',padding:'6px 16px'}}>Home</NavLink>
                                    </Button>
                                    <Divider style={{margin:'5px 0 5px 0'}}/>
                                    <Button variant="contained" color="secondary" style={{padding:0}}>
                                        <NavLink to="/FurnishedCondos" style={{color:'white',textDecoration:'none',padding:'6px 16px',fontSize:'1vw'}}>Furnished Condos</NavLink>
                                    </Button>

                                    <Divider style={{margin:'5px 0 5px 0'}}/>
                                    <Button variant="contained" color="secondary" style={{padding:0}}>
                                        <NavLink to="/rentals" style={{color:'white',textDecoration:'none',padding:'6px 16px'}}>Rentals</NavLink>
                                    </Button>

                                    <Divider style={{margin:'5px 0 5px 0'}}/>
                                    <StyledButton>Nice Button</StyledButton>
                                </Paper>
                            </Grid>

                            <Switch>
                                <Route path="/" component={Home} exact={true}/>
                                <Route path="/FurnishedCondos" component={FurnishedCondos}/>
                                <Route path="/Rentals" component={Rentals}/>
                            </Switch>
                            
                            
                        </Grid>

                        <Dialog
                        open={this.state.dialogOpen}
                        onClose={this.handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                        styles={styles.dialog}
                        >
                            <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
                            <DialogContent>
                                <DialogContentText id="alert-dialog-description">
                                Let Google help apps determine location. This means sending anonymous location data to
                                Google, even when no apps are running.
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={this.handleClose} color="primary">
                                Disagree
                                </Button>
                                <Button onClick={this.handleClose} color="primary" autoFocus>
                                Agree
                                </Button>
                            </DialogActions>
                        </Dialog>
                        
                            {/* <Question questions={this.state.questions} handleIdeaAnswer={this.handleIdeaAnswer} answer={this.state.answer}/> */}
                        
                    </div>
                </BrowserRouter>
            );
    }
};

ReactDOM.render(<HelloCondoNotch companyName="Condo-notch Co."/>,document.querySelector('#app'));

console.timeEnd('Initial load');