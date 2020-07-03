import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red, blue } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import '../cards/card1.css'
import { Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';










const useStyles = makeStyles(theme => ({

  container: {
    display: 'flex',
    flexWrap: 'wrap',
    paddingTop:'18px'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
    
  },



  root: {
    maxWidth: 345,
    marginLeft: 30,
    marginTop: 20,

    height:'400px'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  range: {
    color: '#57a0da',
  },
  display: {
    display: 'flex',
    height: '60px',

  },
  Sar: {
    border: "1px solid #dfdfdf",
    height: '50px',
    width: '80px',
    marginLeft: '20px',

    borderRadius: "4px"
  },
  animal: {
    fontSize: '0.6rem',
    // display: 'flex',
    // content:'justify',
    // width:'90px'
  },
  mar: {
    marginLeft: '5px'
  },
  adjbtn: {
    // marginTop: '15px',
    marginBottom: '15px',
    // width: "100%",


  },
  btn: {
    // backGroundColor: '#dfdfdf',
    backgroundColor: "#57a0da",
    float: 'right',
    borderRadius: "25px",
    border: 'none',
    outline: 'none',
    // marginRight: '-150px',
    // marginTop: '15px'
  },
  liftRight: {
    marginTop: '6px',
    marginBottom: '15px',
    width: "100%",
    height: "20px",
    
  },
  left: {
    float: 'left',
    height: "20px",
    
  },
  haha: {
    display: 'flex',
    height: '50px',
    marginTop:"30px",
    
  },
  right: {
    float: 'right',
    height: "20px",
    
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const { classes1 } = props;
  return (
    <Card className={classes.root}>
      {/* <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        } */}

      <CardMedia
        className={classes.media}
        // image="/static/images/cards/paella.jpg"
        image={props.addvideo}

        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">

          <div className={classes.display}>

            <h5 className={classes.range}> Range Rover Vogue</h5>
            <div className={classes.Sar}> <strong>5000</strong> SAR Insurance </div>

          </div>
          <div className={classes.animal}> <pre>Pstoo: 6 Hours ago   Location: Al Kharaj    category: Animal</pre>  </div>
          {/* <div className={classes.animal}> <div>Pstoo: 6 Hours ago </div>  <div className={classes.mar}>Location: Al Kharaj </div> <div> Category: Animal </div>   </div> */}




        </Typography>
      </CardContent>
      <div className="liftRight">

        <div className={classes.left}><i class="fa fa-calendar" style={{ marginRight: "8px" }} aria-hidden="true"></i>End in</div>
        <div className={classes.right}> <pre>participant:0  Bids:0</pre> </div>

      </div>

      <div className={classes.haha}>
        <div className={classes.time}>

          <form className={classes.container} noValidate>
            <TextField
              id="date"
              type="date"
              defaultValue="2017-05-24"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </form>

        </div>
        <div className={classes.adjbtn}>
          <button className={classes.btn}>Login In Participate</button>
        </div>
      </div>

      {/* <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions> */}
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
            minutes.
          </Typography>
          {/* <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
            heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
            browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
            and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
            pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography> */}
          {/* <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
            without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
            medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
            again without stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don’t open.)
          </Typography> */}
          {/* <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography> */}
        </CardContent>
      </Collapse>
    </Card>
  );
}
