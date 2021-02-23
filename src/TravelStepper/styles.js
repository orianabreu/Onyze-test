import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    root: {
      width: '100%',
    },
    MuiStepIcon: {
      width: 40,
      height: 40,
      padding: 5,
      color: '#3f51b5',
    },
    IconContainer: {
      borderRadius: '80%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#aab6fe',
    },
  }));

  export default useStyles;