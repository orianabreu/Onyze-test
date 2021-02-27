import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const IOSSwitch = withStyles((theme) => ({
    root: {
      width: 42,
      height: 26,
      padding: 0,
      margin: theme.spacing(1),
    },
    switchBase: {
      padding: 1,
      '&$checked': {
        transform: 'translateX(16px)',
        color: theme.palette.common.white,
        '& + $track': {
          backgroundColor: '#52d869',
          opacity: 1,
          border: 'none',
        },
      },
      '&$focusVisible $thumb': {
        color: '#52d869',
        border: '6px solid #fff',
      },
    },
    thumb: {
      width: 24,
      height: 24,
    },
    track: {
      borderRadius: 26 / 2,
      border: `1px solid ${theme.palette.grey[400]}`,
      backgroundColor: theme.palette.grey[50],
      opacity: 1,
      transition: theme.transitions.create(['background-color', 'border']),
    }, 
    checked: {},
    focusVisible: {},
  }))(({ root, switchBase, thumb, track, checked, focusVisible, ...props }) => {
    return (
        <FormControlLabel 
            control={
                <Switch
                    focusVisibleClassName={focusVisible}
                    disableRipple
                    classes={{
                    root,
                    switchBase,
                    thumb,
                    track,
                    checked,
                    }}
                    {...props}
                />
            }
            label="Hide information"
            labelPlacement="start"
        />
    );
  });

  export default IOSSwitch;