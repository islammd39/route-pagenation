
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Service from './Components/Service/Service';
import Main from './Main/Main';

function App() {
  const router = createBrowserRouter([
    {path:'/', element:<Main></Main>, children:[
      {path:'/Home', element:<Home></Home>},
      {path:'/About', element:<About></About>},
      {path:'/Service', element:<Service></Service>}
    ]},
   
  ])
  return (
    <div className="App">
         <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
