import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '85vw',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
      fontWeight: 'bold',
      letterSpacing: '2px',
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
        
    }
  }));

 export const StyledButton = styled(Button)`
    background-color: #6772e5;
    color: #fff;
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
    padding: 7px 14px;
    &:hover {
    background-color: #5469d4;
    }
`;

  export default useStyles;