import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {Visa, Mastercard} from '@styled-icons/boxicons-logos';
import {ApplePay, Paypal} from '@styled-icons/fa-brands';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import useStyles from './styles';

export default function PaymentButtons() {

    const isMobile = useMediaQuery('(max-width:600px)');
    const {root} = useStyles();

  return (
    <div className={root}>
      <Grid container spacing={2} direction='column'>

        <Grid container item xs={2} md={6} spacing={isMobile ? 2 : 5}>
            <Grid item xs={2} md={4} >
                <Button variant='outlined' size='large'>
                    <Paypal size='40'/>
                </Button>
            </Grid>
            <Grid item xs={2} md={4} >
                <Button variant='outlined' size='large'>
                    <Visa size='40'/>
                </Button>
            </Grid>
        </Grid>
        
        <Grid container item xs={2} md={6} spacing={isMobile ? 2 : 5}>
            <Grid item xs={2} md={4} >
                <Button variant='outlined' size='large'>
                    <Mastercard size='40'/>
                </Button>
            </Grid>
            <Grid item xs={2} md={4} >
                <Button variant='outlined' size='large'>
                    <ApplePay size='40'/>
                </Button>
            </Grid>
        </Grid>

      </Grid>
    </div>
  );
}
