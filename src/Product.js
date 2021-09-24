import {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red, orange, yellow, green } from '@material-ui/core/colors';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
// import doCartActions from './doShopAction/doCartActions';
// import { connect } from 'react-redux';
import { addQty, addToCart, removeFromCart, removeQty } from './doShopAction/doCartActions';
import { useDispatch } from 'react-redux';
import { Box, Button, Modal } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin: '10%'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    margin: '10%'
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },

  qty: {

  },
  red: {
    backgroundColor: red[500],
  },

  orange: {
    backgroundColor: orange[500],
  },

  yellow: {
    backgroundColor: yellow[500],
  },

  green: {
    backgroundColor: green[500],
  },
}));



export default function Product(props) {
  const { item, cart } = props;
  const classes = useStyles();
  const price = `$${item.price}`;
  const { id, qty } = cart || '';
  const dispatch = useDispatch();
  const [addedModal, setAddedModal] = useState(true);

  const addToCartOnClick = (item) => {
    //setAddedModal(true);
    dispatch(addToCart(item));
   };

   <Modal
   open = {addedModal}
   onClose = {() => setAddedModal(false)}
   >
<div >
 { console.log("triggered", addedModal)}
            Text in a modal
</div>
   </Modal>


  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="rating" className=
            {
              `${item.rating.rate > 4 ? classes.green :
                item.rating.rate > 3 ? classes.yellow :
                  item.rating.rate > 2 ? classes.orange : classes.red}`
            }
          >
            {item.rating.rate}
          </Avatar>
        }
        title={item.title}
        subheader={price}
      />
      <CardMedia
        className={classes.media}
        image={item.image}
        title={item.category}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {item.description}
        </Typography>
        {
          <IconButton aria-label="settings" onClick={() => addToCartOnClick({item})} className={classes.cart}>
            <ShoppingCartIcon />
            {/* {
              cart.map((cartItem, index) => {
                <div className={classes.qty}>
                  <Button size="small" color="primary" onClick={() => dispatch(addQty({ item }))}>
                    ➕
                  </Button>
                  {cartItem.qty}
                  <Button size="small" color="primary" onClick={() => dispatch(removeQty({ item }))}>
                    ➖
                  </Button>
                  <Button size="small" color="primary" onClick={() => dispatch(removeFromCart({ item }))}>
                    DELETE
                  </Button>
                </div>
              })
            } */}
          </IconButton>
        }
      </CardContent>
    </Card>
  );
}