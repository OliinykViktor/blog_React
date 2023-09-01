
import './App.css'
import BlogPage from './pages/BlogPage';
import AboutPage from './pages/AboutPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RespAppBar from './components/RespAppBar';

function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      Component:RespAppBar,
      children:[
        {
          index:true,
          element:<AboutPage/>
        },
        {
          path:'blog',
          element:<BlogPage/>
        }
      ]
    }
  ])
  return (
    <RouterProvider router={routes}/>
  )
}

export default App;
