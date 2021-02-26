import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

const useStyles = makeStyles((theme) => ({
    heading: {
      fontSize: '1rem',
      color: theme.palette.grey.light,
      fontWeight: 'bold',
      letterSpacing: '2px',
    },
    subtitle: {
      color: theme.palette.grey.light,
    },
    container: {
        padding: theme.spacing(2),
    },
    MuiAvatar: {
        margin: theme.spacing(1),
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
    MuiTypography: {
        fontWeight: 'bold',
    },
    textContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    MuiStepIcon: {
      width: 40,
      height: 40,
      padding: 5,
      color: theme.palette.primary.dark,
    },
    IconContainer: {
      borderRadius: '80%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.palette.primary.light, 
    },
    divider: {
      backgroundColor: '#efefef',
      width: 2,
      height: 100,
    },
    MuiStep: {
      width: `${({isMobile}) => isMobile ? '100%' : '50%'}`,
    },
    MuiStepper: {
      alignItems: 'center',
    },
    connectorLine: {
      borderColor: '#fff',
    },
  }));
  
  export const MainContainer = styled.div`
    width: ${({isMobile}) => isMobile ? '100vw' : '70vw'};
    padding: 24px;
  `;

  export const StepContainer = styled.div`
    width: 100%;
`;

  export default useStyles;