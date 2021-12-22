// import logo from './logo.svg';
// import './App.css';
import {Router as BrowserRouter, Route,Routes as Switch} from 'react-router-dom'
import AdminPage from './pages/AdminPage';
function App() {
  return (
   <>
    <AdminPage/>
    {/* <BrowserRouter>
      <Switch>
        <Route path='/' component={AdminPage}/>
      </Switch>
    </BrowserRouter> */}
    </>
  );
}

export default App;
