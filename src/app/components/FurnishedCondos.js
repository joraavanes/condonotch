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

class FurnishedCondos extends React.Component{
    constructor(props){
        super(props);
        this.handleInfoBtn = this.handleInfoBtn.bind(this);
    }
    
    handleInfoBtn = ()=>{
        alert('Some Info !!');
    }

    render(){
        return(
            <Grid item xs={12} sm={9}>
                <Paper style={paperStyles}>
                    <h2>Furnished condos</h2>
                    <h4>Tips and trick to choose one</h4>
    
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
                    <Button variant="contained" onClick={this.handleInfoBtn}>Get some info 🦄</Button>
                </Paper>
            </Grid>
        );    
    }
}

///* Stateless component *///
// const FurnishedCondos = () =>{
//     return(
//         <Grid item xs={12} sm={9}>
//             <Paper style={paperStyles}>
//                 <h2>Furnished condos</h2>
//                 <h4>Tips and trick to choose one</h4>

//                 <p style={{textAlign:"justify",fontFamily:"Montserrat"}}>
//                 Material-UI is an MIT-licensed open source project. It's an independent project with ongoing development made possible entirely thanks to the support of these awesome backers.
//                 Material-UI is an MIT-licensed open source project. It's an independent project with ongoing development made possible entirely thanks to the support of these awesome backers.
//                 Material-UI is an MIT-licensed open source project. It's an independent project with ongoing development made possible entirely thanks to the support of these awesome backers.
//                 Material-UI is an MIT-licensed open source project. It's an independent project with ongoing development made possible entirely thanks to the support of these awesome backers.
//                 Material-UI is an MIT-licensed open source project. It's an independent project with ongoing development made possible entirely thanks to the support of these awesome backers.
//                 Material-UI is an MIT-licensed open source project. It's an independent project with ongoing development made possible entirely thanks to the support of these awesome backers.
//                 Material-UI is an MIT-licensed open source project. It's an independent project with ongoing development made possible entirely thanks to the support of these awesome backers.
//                 Material-UI is an MIT-licensed open source project. It's an independent project with ongoing development made possible entirely thanks to the support of these awesome backers.
//                 </p>
//                 <Button variant="contained">Get some info 🦄</Button>
//             </Paper>
//         </Grid>
//     );
// };

export default FurnishedCondos;