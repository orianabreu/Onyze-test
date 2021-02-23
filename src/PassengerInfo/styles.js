import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    MainContainer: {
      width: '85vw',
      padding: theme.spacing(3),
    },
    heading: {
      fontSize: theme.typography.pxToRem(17),
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
        display: 'flex',
        alignItems: 'center',
        fontWeight: 'bold',
    },
    divider: {
      width: '70%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    }
  }));



  export default useStyles;