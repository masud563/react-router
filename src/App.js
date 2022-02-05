import './App.css';
import Navbar from './component/navbar/Navbar';
import NotFound from './component/notFound/NotFound';
import Products from './component/products/Products';
import Post from './component/post/Post';
import Dashboard from './component/dashboard/Dashboard';
import Home from './component/home/Home';
import {Route, Switch, Redirect} from 'react-router-dom';
import PostDetail from './component/postDetail/postDetail';

function App() {
  return (
    <div>
      <Navbar />
      <div className='content'>
        <Switch>
          <Route path='/products' component={Products} />
          <Route path='/post/:year?/:month?/:id' component={PostDetail} />
          <Route path='/post' component={Post} />
          <Route path='/admin' component={Dashboard} />
          <Route path='/notFound' component={NotFound}/>
          <Route exact path='/' component={Home} />
          <Redirect from='/postOne' to='post/1' />
          <Redirect to={'/notFound'} />
          
        </Switch>
      </div>
    </div>
  );
}

export default App;
