import React from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import CheckIcon from '@material-ui/icons/Check';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import useStyles from './styles';
import Grid from '@material-ui/core/Grid';

export default function TravelStepper(props) {

  const isMobile = useMediaQuery('(max-width:600px)');
  
  const {root, MuiStepIcon, IconContainer} = useStyles();

  return (
    <div className={root}>
      <Stepper alternativeLabel orientation={isMobile ? 'vertical' : 'horizontal'}>
          <Step style={{width:isMobile?'100%': '50%'}}>
            <StepLabel StepIconComponent={()=><div className={IconContainer}><CheckIcon className={MuiStepIcon}/></div>} >
                <Typography>
                    Jackson Heights
                    <br /> 
                    37-27 74th Street
                </Typography>
            </StepLabel>
          </Step>
          {isMobile && <Grid item container xs={12} justify='center'><div style={{backgroundColor: '#efefef', width:2, height:100}}/></Grid>}
          
          <Step active={true}  style={{width:isMobile?'100%': '50%'}}>
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
