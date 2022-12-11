import { Toaster } from 'react-hot-toast';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import AboutMe from './components/AboutMe/AboutMe';
import Blog from './components/Blog/Blog';
import ContactMe from './components/ContactMe/ContactMe';
import Home from './components/Home/Home';
import CodePlanner from './components/Projects/CodePlanner';
import Journalist from './components/Projects/Journalist';
import Sellcell from './components/Projects/Sellcell';
import Main from './Layout.js/Main';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <Main></Main>,
      children: [
        {
          path:'/',
          element: <Home></Home>
        },
        {
          path:'/aboutMe',
          element: <AboutMe></AboutMe>
        },
        {
          path:'/contactMe',
          element:<ContactMe></ContactMe>
        },
        {
          path:'/blog',
          element: <Blog></Blog>
        },
        {
          path:'/sellcell',
          element:<Sellcell></Sellcell>
        },
        {
          path:'/codePlanner',
          element: <CodePlanner></CodePlanner>
        },
        {
          path:'/journalist',
          element: <Journalist></Journalist>
        }

      ]
    }
  ])
  return (
    <div className='bg-black'>
          <RouterProvider router = {router}></RouterProvider>
          <Toaster></Toaster>
    </div>
  );
}

export default App;
