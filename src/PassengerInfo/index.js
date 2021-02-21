import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import SwitchButton from '../SwitchButton';
import Grid from '@material-ui/core/Grid';
import passenger1 from '../assets/passenger1.jpg';
import useStyles from './styles';
import PaymentButtons from '../PaymentButtons';

const AccordionSummary = withStyles({
    expandIcon: {
        transform: 'none !important',
    },
})(MuiAccordionSummary);

export default function Passenger() {

  const {root, heading, MuiGrid} = useStyles();

  return (
    <div className={root}>
        <Accordion defaultExpanded>
            <AccordionSummary
            expandIcon={<SwitchButton />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
            <Typography className={heading}>
                PASSENGER INFO
            </Typography>
        </AccordionSummary>

        <AccordionDetails>
            <Grid container spacing={3} className={MuiGrid}>

                
                <Grid container xs={12}>
                    <Avatar 
                        alt="Passenger" 
                        src={passenger1} 
                    />
                    <Typography>
                        Carlos Perez <br /> 
                        4 interactions
                    </Typography>
                </Grid>

                <Grid item xs={12} className={MuiGrid}>
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

                <PaymentButtons />

            </Grid>

        </AccordionDetails>
      </Accordion>
    </div>
  );
}
