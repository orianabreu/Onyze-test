import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Visa, Mastercard } from '@styled-icons/boxicons-logos';
import { ApplePay, Paypal } from '@styled-icons/fa-brands';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import useStyles from './styles';

export default function PaymentButtons() {

    const [isClicked, setIsClicked] = useState(1);

    const isMobile = useMediaQuery('(max-width:600px)');
    const { clickedButton } = useStyles();

  return (
      <Grid container spacing={2} direction='column'>

        <Grid container item xs={2} md={6} spacing={isMobile ? 2 : 10}>
            <Grid item xs={2} md={4}>
                <Button 
                    variant='outlined' 
                    size='large' 
                    className={isClicked === '1' ? clickedButton : 'none'} 
                    onClick={() => setIsClicked('1')}
                >
                    <Paypal size='40'/>
                </Button>
            </Grid>

            <Grid item xs={2} md={4}>
                <Button 
                    variant='outlined' 
                    size='large' 
                    className={isClicked === '2' ? clickedButton : 'none'}  
                    onClick={() => setIsClicked('2')}
                >
                    <Visa size='40'/>
                </Button>
            </Grid>
        </Grid>
        
        <Grid container item xs={2} md={6} spacing={isMobile ? 2 : 10}>
            <Grid item xs={2} md={4}>
                <Button 
                    variant='outlined' 
                    size='large' 
                    className={isClicked === '3' ? clickedButton : 'none'} 
                    onClick={() => setIsClicked('3')}
                >
                    <Mastercard size='40'/>
                </Button>
            </Grid>
            
            <Grid item xs={2} md={4}>
                <Button 
                    variant='outlined' 
                    size='large' 
                    className={isClicked === '4' ? clickedButton : 'none'} 
                    onClick={() => setIsClicked('4')}
                >
                    <ApplePay size='40'/>
                </Button>
            </Grid>
        </Grid>

      </Grid>
  );
}
