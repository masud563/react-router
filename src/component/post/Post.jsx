import React from 'react';
import { Link } from 'react-router-dom';
const Posts = () => {
  return ( 
    <>
      <h1>Posts</h1>
      <ul>
        <li>
          <Link to={'/post/2018/may/1'}>Post 1</Link>
        </li>
        <li>
          <Link to={'/post/2019/april/2'}>Post 2</Link>
        </li>
        <li>
          <Link to={'/post/2020/june/3'}>Post 3</Link>
        </li>
      </ul>
    </>
   );
}
 
export default Posts;