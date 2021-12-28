// import logo from './logo.svg';
// import './App.css';
import {BrowserRouter, Route,Switch} from 'react-router-dom'
import AdminPage from './pages/AdminPage';
function App() {
  return (
   
    <BrowserRouter>
      <Switch>
        <Route path='/admin/:page' component={AdminPage}/>
      </Switch>
    </BrowserRouter>
    
  );
}

export default App;
