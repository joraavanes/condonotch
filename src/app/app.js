import React from 'react';
import ReactDOM from 'react-dom';
import Question from './components/Question';
import AppBar from './components/AppBar';
import Drawer from './components/Drawer';
import '../styles/main.scss';

class HelloCondoNotch extends React.Component{
    constructor(props){
        super(props);
        this.handleIdeaAnswer = this.handleIdeaAnswer.bind(this);
        this.changeDrawerState = this.changeDrawerState.bind(this);
        this.state = {
            questions: ['What is your idea about this topic?',
                        'Do you agree with my thoughts?'],
            answer:null,
            drawerState: false
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

    render(){
        return (
                <div style={{color: 'gray'}}>
                    <AppBar drawerState={this.state.drawerState} changeDrawerState={this.changeDrawerState} companyName={this.props.companyName}/>
                    <Drawer drawerState={this.state.drawerState} toggleAppDrawer={this.toggleClose}/>
                    <h2>Questionaire</h2>
                    
                        {/* <Question questions={this.state.questions} handleIdeaAnswer={this.handleIdeaAnswer} answer={this.state.answer}/> */}
                    
                </div>
            );
    }
};

ReactDOM.render(<HelloCondoNotch companyName="Condo-notch Co."/>,document.querySelector('#app'));