import React from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'

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
        <Grid item xs={12} sm={9}>
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
    );
};

export default Home;