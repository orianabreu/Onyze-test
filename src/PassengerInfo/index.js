import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import SwitchButton from '../SwitchButton';
import { XGrid } from '@material-ui/x-grid';
import passenger1 from '../assets/passenger1.jpg';
import useStyles from './styles';


const AccordionSummary = withStyles({
    expandIcon: {
        transform: 'none !important',
    },
})(MuiAccordionSummary);

export default function Passenger() {

  const {root, heading, secondaryHeading, details, column, row, helper, link} = useStyles();

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
            <Avatar 
                alt="Passenger" 
                src={passenger1} 
            />
            <Typography>
                Carlos Perez
            </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
