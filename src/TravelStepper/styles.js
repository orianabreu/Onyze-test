import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
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
  }));

  export default useStyles;