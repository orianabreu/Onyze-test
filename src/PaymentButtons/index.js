import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import PayPal from '../assets/paypal.png';
import MasterCard from '../assets/mastercard.png';
import {Visa} from '@styled-icons/boxicons-logos';
import {ApplePay} from '@styled-icons/fa-brands';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    textAlign: 'center',
  },
  button: {
      variant: 'outlined',
  }
}));

export default function PaymentButtons() {
  const classes = useStyles();

  console.log(PayPal);

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
        <Grid item xs={4}>
            <Button variant='outlined'>
                <img src={PayPal}/>
            </Button>
        </Grid>
        <Grid item xs={4}>
            <Button variant='outlined'>
                <Visa />
            </Button>
        </Grid>
        </Grid>
        <Grid container item xs={12} spacing={3}>
        <Grid item xs={4}>
            <Button variant='outlined'>
                <img src={MasterCard}/>
            </Button>
        </Grid>
        <Grid item xs={4}>
            <Button variant='outlined'>
                <ApplePay />
            </Button>
        </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
