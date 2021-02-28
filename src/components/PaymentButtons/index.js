import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {Visa, Mastercard} from '@styled-icons/boxicons-logos';
import {ApplePay, Paypal} from '@styled-icons/fa-brands';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import useStyles from './styles';

export default function PaymentButtons() {

    const [isClicked, setIsClicked] = useState(false);

    const isMobile = useMediaQuery('(max-width:600px)');
    const { clickedButton } = useStyles();

    const handleClick = () => {
        setIsClicked(!isClicked);
    }

  return (
      <Grid container spacing={2} direction='column'>

        <Grid container item xs={2} md={6} spacing={isMobile ? 2 : 10}>
            <Grid item xs={2} md={4}>
                <Button 
                    variant='outlined' 
                    size='large' 
                    className={isClicked ? clickedButton : 'none'} 
                    onClick={() => handleClick()}
                >
                    <Paypal size='40'/>
                </Button>
            </Grid>

            <Grid item xs={2} md={4}>
                <Button 
                    variant='outlined' 
                    size='large' 
                    className={isClicked ? clickedButton : 'none'} 
                    onClick={() => handleClick()}
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
                    className={isClicked ? clickedButton : 'none'} 
                    onClick={() => handleClick()}
                >
                    <Mastercard size='40'/>
                </Button>
            </Grid>
            
            <Grid item xs={2} md={4}>
                <Button 
                    variant='outlined' 
                    size='large' 
                    className={isClicked ? clickedButton : 'none'} 
                    onClick={() => handleClick()}
                >
                    <ApplePay size='40'/>
                </Button>
            </Grid>
        </Grid>

      </Grid>
  );
}
