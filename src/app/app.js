import React from 'react';
import ReactDOM from 'react-dom';
import Question from './components/Question';
import AppBar from './components/AppBar';
import Drawer from './components/Drawer';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import '../styles/main.scss';

const styles = {
    dialog:{
        fontFamily:'georgia'
    }
}

class HelloCondoNotch extends React.Component{
    constructor(props){
        super(props);
        this.handleIdeaAnswer = this.handleIdeaAnswer.bind(this);
        this.changeDrawerState = this.changeDrawerState.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.state = {
            questions: ['What is your idea about this topic?',
                        'Do you agree with my thoughts?'],
            answer:null,
            drawerState: false,
            dialogOpen: false
            
        }
    }

    handleIdeaAnswer(answer){
        this.setState(()=> {
            return{answer:answer};
        });
    }

    changeDrawerState = ()=>{
        console.log(this.state.drawerState);
        this.setState((prevState)=>{
            return{
                drawerState:!prevState.drawerState
            }
        });
    }

    toggleClose=()=>{
        this.setState((prevState)=>{
            return{
                drawerState:!prevState.drawerState
            }
        });
    }

    handleBtnClick = () => {
        this.setState((prevState) => ({ dialogOpen: !prevState.dialogOpen }));
    }

    handleClose = () => {
        this.setState(() => ({dialogOpen: false }));
    }

    render(){
        return (
                <div style={{color: 'gray'}}>
                    <AppBar drawerState={this.state.drawerState} changeDrawerState={this.changeDrawerState} companyName={this.props.companyName}/>
                    <Drawer drawerState={this.state.drawerState} toggleAppDrawer={this.toggleClose}/>
                    <h2>Questionaire</h2>

                    <Button variant="contained" color="secondary" onClick={this.handleBtnClick}>
                        Ask something
                    </Button>

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
            );
    }
};

ReactDOM.render(<HelloCondoNotch companyName="Condo-notch Co."/>,document.querySelector('#app'));