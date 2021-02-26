import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepConnector from '@material-ui/core/StepConnector';
import StepLabel from '@material-ui/core/StepLabel';
import CheckIcon from '@material-ui/icons/Check';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import clsx from 'clsx';
import SwitchButton from '../SwitchButton';
import PaymentButtons from '../PaymentButtons';
import useStyles from './styles';
import { MainContainer, StepContainer } from './styles';

const AccordionSummary = withStyles({
    expandIcon: {
        transform: 'none !important',
    },
})(MuiAccordionSummary);

export default function Passenger(props) {

    const [events, setEvents] = useState({
        distance: '0',
        time: '0',
        price: '3',
        energy: '0'
    });

    const { distance, time, price, energy } = events;

    const isMobile = useMediaQuery('(max-width:600px)');

    const {heading, subtitle, container, MuiAvatar, MuiTypography, textContainer, MuiStepIcon, IconContainer, divider, MuiStep, MuiStepper, connectorLine} = useStyles();

  return (
    <MainContainer isMobile={isMobile}>
        <Accordion defaultExpanded>
            <AccordionSummary
                expandIcon={<SwitchButton />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography className={clsx(heading, container)}>
                    PASSENGER INFO
                    <br/>
                    {props.name}
                </Typography>
            </AccordionSummary>

            <AccordionDetails>
                <Grid container spacing={1} className={container}>

                    <Grid container xs={9} md={6} spacing={2} alignItems='flex-start'>
                        <Grid container xs={12}>
                            <Avatar 
                                alt="Passenger" 
                                src={props.img}
                                className={MuiAvatar} 
                            />
                            <div className={textContainer}>
                                <Typography className={MuiTypography}>
                                    {props.name} 
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
                                {props.email}
                            </Typography>
                        </Grid>

                        <Grid item xs={12}>
                            <Typography className={heading}>
                                PHONE
                            </Typography>
                            <Typography>
                                {props.phone}
                            </Typography>
                        </Grid>

                        <Grid item xs={12}>
                            <Typography className={heading}>
                                LOCATION
                            </Typography>
                            <Typography>
                                {props.location}
                            </Typography>
                        </Grid>
                    </Grid>
                    
                    <Grid container xs={3} md={6}>
                        <PaymentButtons />
                    </Grid>

                        <Grid container xs={12} direction={isMobile ? 'row' : 'column'} alignItems='center'>
                            <Grid container xs={12}>
                                <StepContainer>
                                    <Stepper 
                                    alternativeLabel 
                                    orientation={isMobile ? 'vertical' : 'horizontal'}
                                    className={MuiStepper}
                                    connector={<StepConnector classes={{lineVertical:connectorLine}}/>}
                                    >
                                        <Step className={MuiStep}>

                                            <StepLabel StepIconComponent={() => 
                                            <div className={IconContainer}>
                                                <CheckIcon className={MuiStepIcon}/>
                                            </div>
                                            }
                                            >
                                                <Typography>
                                                    {props.departure}
                                                    <br /> 
                                                    {props.address1}
                                                </Typography>
                                            </StepLabel>
                                        </Step>

                                        {isMobile && 
                                            <Grid item container xs={12} justify='center'>
                                                <div className={divider}/>
                                            </Grid>
                                        }
                                        
                                        <Step active={true} MuiStepConnector='disabled' className={(MuiStep)}>
                                            
                                            <StepLabel StepIconComponent={() => 
                                            <div className={IconContainer}>
                                                <LocationOnIcon className={MuiStepIcon}/>
                                            </div>
                                            }
                                            >
                                                <Typography>
                                                    {props.arrival} 
                                                    <br /> 
                                                    {props.address2}
                                                </Typography>
                                            </StepLabel>
                                        </Step>
                                    </Stepper>
                                </StepContainer>
                            </Grid>

                            <Grid container xs={12} md={6}>
                                <Grid item xs={3}>
                                    <Typography className={MuiTypography}>
                                        {distance} km
                                    </Typography>
                                    <Typography className={subtitle}>
                                        Distance
                                    </Typography>
                                </Grid>
                                <Grid item xs={3}>
                                <Typography className={MuiTypography}>
                                        {time} min
                                    </Typography>
                                    <Typography className={subtitle}>
                                        Time
                                    </Typography>
                                </Grid>
                                <Grid item xs={3}>
                                <Typography className={MuiTypography}>
                                        ${price}
                                    </Typography>
                                    <Typography className={subtitle}>
                                        Price
                                    </Typography>
                                </Grid>
                                <Grid item xs={3}>
                                    <Typography className={MuiTypography}>
                                        {energy} kWh
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
    </MainContainer>
  );
}
