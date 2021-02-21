import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {Visa, Mastercard} from '@styled-icons/boxicons-logos';
import {ApplePay, Paypal} from '@styled-icons/fa-brands';
import useStyles from './styles';

export default function PaymentButtons() {
  const {root} = useStyles();

  return (
    <div className={root}>
      <Grid container spacing={1} direction='column'>

        <Grid container item xs={4} spacing={10}>
            <Grid item xs={6} spacing={5}>
                <Button variant='outlined' size='large'>
                    <Paypal size='40'/>
                </Button>
            </Grid>
            <Grid item xs={6} spacing={5}>
                <Button variant='outlined' size='large'>
                    <Visa size='40'/>
                </Button>
            </Grid>
        </Grid>
        
        <Grid container item xs={4} spacing={10}>
            <Grid item xs={6} spacing={5}>
                <Button variant='outlined' size='large'>
                    <Mastercard size='40'/>
                </Button>
            </Grid>
            <Grid item xs={6} spacing={5}>
                <Button variant='outlined' size='large'>
                    <ApplePay size='40'/>
                </Button>
            </Grid>
        </Grid>

      </Grid>
    </div>
  );
}
