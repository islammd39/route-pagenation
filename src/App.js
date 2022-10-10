
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home/Home';
import Service from './Components/Service/Service';
import Main from './Main/Main';
import Error from './Error/Error';
import Users from './Components/Users/Users';
import PostDetails from './Components/PostDetails';
import Albums from './Components/Albums/Albums';
import ThumbnailDetails from './Components/ThumbnailDetails/ThumbnailDetails';

function App() {
  const router = createBrowserRouter([
    {path:'/', element:<Main></Main>, children:[
      {path:'/Home', element:<Home></Home>},
      {path:'/Users',
       loader: async()=>{
        return fetch('https://jsonplaceholder.typicode.com/posts')
       },
       element:<Users></Users>},
       {
        path:'/Users/:id',
        loader: async({params})=>{
          // console.log(params.id);
          return fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
        },
        element:<PostDetails></PostDetails>
      },
      {
       path:'albums',
       loader:async()=>{
        return fetch('https://jsonplaceholder.typicode.com/photos')
       },
       element:<Albums></Albums>
      },
      {
        path:'/albums/:id',
        loader: async({params})=>{
           return fetch(`https://jsonplaceholder.typicode.com/photos/${params.id}`)
        },
        element:<ThumbnailDetails></ThumbnailDetails>
      },
      {path:'/Service', element:<Service></Service>}
      
    ]},
   {path:'*', element:<Error></Error>}
  ])
  return (
    <div className="App">
         <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
