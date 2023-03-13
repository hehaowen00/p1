import Components from './views/Components';
import Home from './views/Home';
import Login from './views/Login';
import Policy from './views/Policy';
import Register from './views/Register';
import Software from './views/Software';

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';

import './App.css';
import Pricing from './views/Pricing';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/pricing',
    element: <Pricing />
  },
  {
    path: '/policy',
    element: <Policy />,
  },
  {
    path: '/verify',
    element: <App />
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/components',
    element: <Components />,
  },
  {
    path: '/app',
    element: <Software />
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
