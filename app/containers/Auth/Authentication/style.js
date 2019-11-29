import {createUseStyles} from 'react-jss';
export const useStyles = createUseStyles({
  borderLeft: {
    borderLeft:'1px solid rgba(0,0,0,0.125)'
  },
  '@media screen and (max-width: 768px)': {
    borderLeft: {
      borderLeft:'0',
      borderTop:'1px solid rgba(0,0,0,0.125)',
      marginTop:'50px',
      paddingTop:'50px',
      paddingBottom:'50px',
    },
  }
});