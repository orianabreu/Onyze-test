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
  }));
  
  export const MainContainer = styled.div`
    width: ${({isMobile}) => isMobile ? '100vw' : '70vw'};
    padding: 24px;
  `;

  export default useStyles;