import React from 'react'
import ReactDOM from 'react-dom'
import { Grid, Button, withStyles } from '@material-ui/core';
import Rental from './Rental';

let styles = {
    customBtn: {
        margin:10,
        marginLeft:0
    }
};

class Rentals extends React.Component{
    constructor(props){
        super(props);
        this.handleAddRental = this.handleAddRental.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            quantity: [1]
        }
    }

    componentWillMount(){
        console.log('component will mount');
    }
    
    componentDidMount(){
        console.log('component did mount');
    }

    componentWillUpdate(){
        console.log('component will update');
    }
    
    componentDidUpdate(){
        console.log('component did update');
    }

    componentWillUnmount(){
        console.log('component will unmount');
    }

    handleAddRental(){
        this.setState((prevState) => ({quantity: prevState.quantity.concat(prevState.quantity + 1)}));
    }

    handleReset(){
        this.setState(() => ({ quantity: [0]}));
    }

    render(){
        const {classes} = this.props;
        return(
            <Grid item xs={9}>
                <Grid container>
                    <Button variant="contained" className={classes.customBtn} onClick={this.handleAddRental}>Add new rental</Button>
                    <Button variant="contained" className={classes.customBtn} onClick={this.handleReset}>Reset</Button>
                </Grid>
                <Grid container>
                    {this.state.quantity.map((i) =>{
                       return <Rental key={i}/>
                    })}
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(Rentals);