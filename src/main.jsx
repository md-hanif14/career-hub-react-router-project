import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/Home/Home';
import Main from './component/Layout/Main';
import Stat from './component/Stat/Stat';
import ViewDetails from './component/ViewDetails/ViewDetails';
import Blog from './component/Blog/Blog';
import AppliedJobsCart from './component/AppliedJobsCart/AppliedJobsCart';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'viewD',
        element: <ViewDetails></ViewDetails>
      },
      {
        path: 'viewD/:jobId',
        element: <ViewDetails></ViewDetails>,
        loader: ({ params }) => fetch(`jobData.json/${params.jobId}`)
      },
      {
        path: 'statistics',
        element: <Stat> </Stat>
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      },
      {
        path: 'appliedJobs',
        element: <AppliedJobsCart></AppliedJobsCart>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
