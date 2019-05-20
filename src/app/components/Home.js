import React from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import {Spring} from 'react-spring/renderprops'

const paperStyles = {
    margin:10,
    padding:10
};

const imgStyles = {
    borderRadius: 7,
    maxWidth:'30vw'
};

const Home = () =>{
    return(
        <Spring
            from={{marginTop:-20, opacity:0}}
            to={{marginTop:0, opacity:1}}
        >
            {props => (
                <Grid item xs={12} sm={9} style={props}>
                    <Paper style={paperStyles}>
                        <h3>What are you interested in?</h3>
                        <img src="./images/uxui.jpg" style={imgStyles}/>

                        <p style={{textAlign:"justify",fontFamily:"Montserrat"}}>
                        Material-UI is an MIT-licensed open source project. It's an independent project with ongoing development made possible entirely thanks to the support of these awesome backers.
                        Material-UI is an MIT-licensed open source project. It's an independent project with ongoing development made possible entirely thanks to the support of these awesome backers.
                        Material-UI is an MIT-licensed open source project. It's an independent project with ongoing development made possible entirely thanks to the support of these awesome backers.
                        Material-UI is an MIT-licensed open source project. It's an independent project with ongoing development made possible entirely thanks to the support of these awesome backers.
                        Material-UI is an MIT-licensed open source project. It's an independent project with ongoing development made possible entirely thanks to the support of these awesome backers.
                        Material-UI is an MIT-licensed open source project. It's an independent project with ongoing development made possible entirely thanks to the support of these awesome backers.
                        Material-UI is an MIT-licensed open source project. It's an independent project with ongoing development made possible entirely thanks to the support of these awesome backers.
                        Material-UI is an MIT-licensed open source project. It's an independent project with ongoing development made possible entirely thanks to the support of these awesome backers.
                        </p>
                        <Button variant="contained">Get some info 🦄</Button>
                    </Paper>
                </Grid>
            )}
        </Spring>
    );
};

export default Home;