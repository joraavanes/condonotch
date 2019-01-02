import React from 'react'
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import pink from '@material-ui/core/colors/pink';
import green from '@material-ui/core/colors/green';
import Avatar from '@material-ui/core/Avatar';
import FolderIcon from '@material-ui/icons/Folder';
import PageviewIcon from '@material-ui/icons/Pageview';
import Chip from '@material-ui/core/Chip';
import AssignmentIcon from '@material-ui/icons/Assignment';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';


const styles = theme => ({
    card:{
        padding:15,
        marginBottom:20
    },
    avatar: {
      margin: 10,
    },
    pinkAvatar: {
      margin: 10,
      color: '#fff',
      backgroundColor: pink[500],
    },
    greenAvatar: {
      margin: 10,
      color: '#fff',
      backgroundColor: green[500],
    },
    row: {
      display: 'flex',
      justifyContent: 'center',
    },
    chip: {
        margin: theme.spacing.unit,
      },
  });

class Question extends React.Component{
    constructor(props){
        super(props);
        this.handleQuestion = this.handleQuestion.bind(this);
    }
    
    handleQuestion(e){
        e.preventDefault();
        
        var value = e.target.elements.answer0.value;
        this.props.handleIdeaAnswer(value);
    }
    
    render(){
        const {classes} = this.props;
        return(
            <div>
                {this.props.questions.map((question,i)=>{
                    return (
                                <Card key={i} className={classes.card}>
                                    <p>{question}</p>
                                    <form onSubmit={this.handleQuestion}>
                                        <input type="text" name={"answer"+ i} id={"answer"+ i} autoComplete="off"/>
                                        <Button variant="contained" color="primary" type="submit">Submit it !!</Button>
                                        <hr/>
                                        
                                        <Chip
                                            avatar={
                                            <Avatar>
                                                <FaceIcon />
                                            </Avatar>
                                            }
                                            label={this.props.answer? this.props.answer:"Deletable Secondary Chip"}
                                            className={classes.chip}
                                            color="secondary"
                                            variant="outlined"
                                        />
                                        <Chip
                                            icon={<FaceIcon />}
                                            label="Primary Clickable Chip"
                                            clickable
                                            className={classes.chip}
                                            color="primary"
                                            deleteIcon={<DoneIcon />}
                                            variant="outlined"
                                        />
                                    </form>
                                </Card>                            
                            );
                })}
            </div>
        );
    }
};


Question.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Question);