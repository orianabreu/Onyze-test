import React from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import CheckIcon from '@material-ui/icons/Check';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import useStyles from './styles';

export default function TravelStepper() {

  const isMobile = useMediaQuery('(max-width:600px)');
  
  const {root, MuiStepIcon, IconContainer} = useStyles();

  return (
    <div className={root}>
      <Stepper alternativeLabel orientation={isMobile ? 'vertical' : 'horizontal'}>
          <Step >
            <StepLabel StepIconComponent={()=><div className={IconContainer}><CheckIcon className={MuiStepIcon}/></div>} >
                <Typography>
                    Jackson Heights 
                    <br /> 
                    37-27 74th Street
                </Typography>
            </StepLabel>
          </Step>
          <Step active={true}>
            <StepLabel StepIconComponent={()=><div className={IconContainer}><LocationOnIcon className={MuiStepIcon}/></div>}>
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
