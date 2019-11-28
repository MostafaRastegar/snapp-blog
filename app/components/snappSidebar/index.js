// Learn more or give us feedback
import React, { useEffect, useState } from 'react';
import LayoutWidget from '../snappLayoutWidget';
import SnappCaregoryList from '../snappCaregoryList';
import SnappLatesPost from '../snappLatesPost';
import {tagsAllGet} from '../../api/application/tags';
import {articlesAllGet} from '../../api/application/articles';
const Sidbar = (props) => {
  const [categoryList,setCategoryList] = useState([]);
  const [latesPost,setLatesPost] = useState({});

  useEffect(()=>{
    tagsAllGet().then(response => {
      setCategoryList(response.tags);
    });
    articlesAllGet().then(response => {
      setLatesPost(response.articles);
    });
  },[])
  return (
    <React.Fragment>
      {!!categoryList.length &&
            <SnappCaregoryList title="Category" data={categoryList}/>
      }
      {!!latesPost.length &&
            <SnappLatesPost title="Lates Posts" data={latesPost}/>
      }

    </React.Fragment>
  )
}

export default Sidbar;
