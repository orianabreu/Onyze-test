import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Select master blaster campaign settings', 'Create an ad group'];
}

export default function TravelStepper() {
  const classes = useStyles();
  const steps = getSteps();

  return (
    <div className={classes.root}>
      <Stepper alternativeLabel>
          <Step >
            <StepLabel>
                <Typography>
                    Jackson Heights 
                    <br /> 
                    37-27 74th Street
                </Typography>
            </StepLabel>
          </Step>
          <Step active='true'>
            <StepLabel>
                <Typography>
                     Greenpoint 
                    <br /> 
                    81 Gate St Brookling
                </Typography>
            </StepLabel>
          </Step>
        </Stepper>
      <div>
      </div>
    </div>
  );
}
