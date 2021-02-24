import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    MainContainer: {
      width: `${({isMobile}) => isMobile ? '90vw' : '80vw'}`,
      padding: theme.spacing(3),
    },
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
    infoContainer: {
      alignItems: 'center',
    }
  }));



  export default useStyles;