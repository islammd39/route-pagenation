
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home/Home';
import Service from './Components/Service/Service';
import Main from './Main/Main';
import Error from './Error/Error';
import Users from './Components/Users/Users';
import PostDetails from './Components/PostDetails';

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
