import {createRoot} from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CountryDetails from './components/CountryDetails';
import Home from './components/Home';


const router = createBrowserRouter([
   { path : "/",
    element:<App />,
    children:[
        { path : "/",
            element: <Home />,
        },
        { path : "/:country", 
            element: <CountryDetails />,
        },
    ],
    },
  
])


const root = createRoot(document.querySelector('#root'));

root.render( <RouterProvider router={router} />  );