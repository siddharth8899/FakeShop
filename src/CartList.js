import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {  useDispatch } from 'react-redux';
import { addQty, removeFromCart, removeQty } from './doShopAction/doCartActions';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function CartList({item}) {
    const dispatch = useDispatch();
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={item.image}
          title= {item.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {item.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {item.price} * {item.qty} = {item.price *item.qty}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick = {() => dispatch(addQty({item}))}>
          ➕ 
        </Button>
        <Button size="small" color="primary" onClick = {() => dispatch(removeQty({item}))}>
          ➖ 
        </Button>
        <Button size="small" color="primary" onClick = {()=> dispatch(removeFromCart({item}))}>
            DELETE
        </Button>
      </CardActions>
    </Card>
  );
}

