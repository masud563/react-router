import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return ( 
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/admin">Admin</Link></li>
          <li><Link to="/post">Post</Link></li>
          <li><Link to="/products">Products</Link></li>
        </ul>
      </nav>
    </div>
   );
}
 
export default Navbar;