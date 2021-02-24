import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import clsx from 'clsx';
import SwitchButton from '../SwitchButton';
import PaymentButtons from '../PaymentButtons';
import passenger1 from '../assets/passenger1.jpg';
import useStyles from './styles';
import TravelStepper from '../TravelStepper';

const AccordionSummary = withStyles({
    expandIcon: {
        transform: 'none !important',
    },
})(MuiAccordionSummary);

export default function Passenger() {

    const isMobile = useMediaQuery('(max-width:600px)');

    const {MainContainer, heading, subtitle, container, MuiAvatar, MuiTypography, textContainer} = useStyles();

  return (
    <div className={MainContainer} isMobile={isMobile}>
        <Accordion defaultExpanded>
            <AccordionSummary
            expandIcon={<SwitchButton />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
            <Typography className={clsx(heading, container)}>
                PASSENGER INFO
            </Typography>
        </AccordionSummary>

        <AccordionDetails>
            <Grid container spacing={1} className={container}>

                <Grid container xs={9} md={6} spacing={2} alignItems='flex-start'>
                    <Grid container xs={12}>
                        <Avatar 
                            alt="Passenger" 
                            src={passenger1}
                            className={MuiAvatar} 
                        />
                        <div className={textContainer}>
                            <Typography className={MuiTypography}>
                                Carlos Perez 
                            </Typography>
                            <Typography className={subtitle}>
                                4 interactions
                            </Typography>
                        </div>
                    </Grid>

                    <Grid item xs={12} >
                        <Typography className={heading}>
                            EMAIL
                        </Typography>
                        <Typography>
                            email@email.com
                        </Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <Typography className={heading}>
                            PHONE
                        </Typography>
                        <Typography>
                            +34 555 55 55 55
                        </Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <Typography className={heading}>
                            LOCATION
                        </Typography>
                        <Typography>
                            Madrid, ES
                        </Typography>
                    </Grid>
                </Grid>
                
                <Grid container xs={3} md={6}>
                    <PaymentButtons />
                </Grid>

                    <Grid container xs={12} direction={isMobile ? 'row' : 'column'} alignItems='center'>
                        <Grid container xs={12}>
                            <TravelStepper />
                        </Grid>

                        <Grid container xs={12} md={6}>
                            <Grid item xs={3}>
                                <Typography className={MuiTypography}>
                                    12.3 km
                                </Typography>
                                <Typography className={subtitle}>
                                    Distance
                                </Typography>
                            </Grid>
                            <Grid item xs={3}>
                            <Typography className={MuiTypography}>
                                    42 min
                                </Typography>
                                <Typography className={subtitle}>
                                    Time
                                </Typography>
                            </Grid>
                            <Grid item xs={3}>
                            <Typography className={MuiTypography}>
                                    $34.20
                                </Typography>
                                <Typography className={subtitle}>
                                    Price
                                </Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <Typography className={MuiTypography}>
                                    12.4 kWh
                                </Typography>
                                <Typography className={subtitle}>
                                    Energy
                                </Typography>
                            </Grid>
                        </Grid> 
                    </Grid>
                </Grid>          

        </AccordionDetails>
      </Accordion>
    </div>
  );
}
