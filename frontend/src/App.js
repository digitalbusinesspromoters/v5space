// import logo from './logo.svg';
// import './App.css';
import {BrowserRouter, Route,Switch,Link} from 'react-router-dom'
import AdminPage from './pages/AdminPage';
function App() {
  return (
   
    <BrowserRouter>
      <Switch>
        <Route path='/admin/:page' component={AdminPage}/>
        <Route path='/'>
          <Link to='/admin/dashboard'>
            admin
          </Link>
        </Route>
      </Switch>
    </BrowserRouter>
    
  );
}

export default App;
