import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

const styles = {
  card: {
    maxWidth: 345,
    marginTop:10,
    marginRight:10
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover',
  },
};

class Rental extends React.Component
{
    constructor(props){
        super(props);
    }

    render(){
        const { classes } = this.props;
        return (
            <Grid item xs={12} sm={4} md={3}>
                    <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        className={classes.media}
                        height="140"
                        image="./images/uxui.jpg"
                        title="Contemplative Reptile"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Lizard
                        </Typography>
                        <Typography component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                        Share
                        </Button>
                        <Button size="small" color="primary">
                        Learn More
                        </Button>
                    </CardActions>
                    </Card>      
            </Grid>
        );      
    }
}

// function Rental(props) {
  
// }

Rental.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Rental);