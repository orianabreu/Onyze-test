import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

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
    details: {
      alignItems: 'center',
    },
    column: {
      flexBasis: '33.33%',
      display: 'flex',
    },
    helper: {
      borderLeft: `2px solid ${theme.palette.divider}`,
      padding: theme.spacing(1, 2),
    },
    link: {
      color: theme.palette.primary.main,
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline',
      },
    },
  }));

 export const Container = styled.div`
    display: flex;
    justify-content: flex-star;
    align-items: center;
 `;

  export default useStyles;