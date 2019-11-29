import {createUseStyles} from 'react-jss';
export const useStyles = createUseStyles({
  authorImageSize: {
    width: 70,
    height:70,
  },
  pageArticleComments:{
    '& .card-header':{
      fontWeight:'bold',
      marginBottom:'30px'
    }
  }
});