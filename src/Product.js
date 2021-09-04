import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
// import doCartActions from './doShopAction/doCartActions';
// import { connect } from 'react-redux';
import { addToCart } from './doShopAction/doCartActions';
import {  useDispatch } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
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
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function Product(props) {
  const {item} = props;
  const classes = useStyles();
  const price = `$${item.price}`;
  const dispatch = useDispatch();
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {item.rating.rate}
          </Avatar>
        }
        title= {item.title}
        subheader= {price}
      />
      <CardMedia
        className={classes.media}
        image={item.image}
        title= {item.category}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {item.description}
        </Typography>
        {
          <IconButton aria-label="settings" onClick = {()=> dispatch(addToCart({item}))}>
            <ShoppingCartIcon />
          </IconButton>
        }
      </CardContent>
    </Card>
  );
}