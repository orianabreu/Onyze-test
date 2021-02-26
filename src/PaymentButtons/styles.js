import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      textAlign: 'center',
    },
    visaButton: {
      backgroundColor: theme.palette.primary.main,
      borderColor: theme.palette.primary.main,
      color: '#fff',
    },
  }));

export default useStyles;