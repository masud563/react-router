import React from 'react';
import {Link, Route} from 'react-router-dom';
import Users from './users/Users';
import Post from '../post/Post';

const Dashboard = () => {
  return ( 
    <React.Fragment>
      <h1>Admin Dashboard</h1>
      <ul>
        <li>
          <Link to='/admin/posts'>Post</Link>
        </li>
        <li>
          <Link to='/admin/users'>Users</Link>
        </li>
      </ul>
      <Route path='/admin/users' component={Users} />
      <Route path='/admin/posts' component={Post} />
    </React.Fragment>
   );
}
 
export default Dashboard;