import logo from './logo.svg';
import './App.css';
import LoginSignup from './Components/LoginSignup/LoginSignup';
import Register from './Components/Registration/Register'
import Dashboard from './Components/Dashboard/Dashboard';
// Import react router dom
import{
  createBrowserRouter,
  RouterProvider
}from 'react-router-dom'

// Router Creation
const router = createBrowserRouter([
  {
    path : '/',
    element: <div><LoginSignup/></div>
  },
  {
    path : '/Register',
    element: <div><Register/></div>
  },
  {
    path : '/Dashboard',
    element: <div><Dashboard/></div>
  }
]);

function App() {
  return (
    <div >
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
