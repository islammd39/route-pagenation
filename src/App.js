
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Service from './Components/Service/Service';

function App() {
  const router = createBrowserRouter([
    {path:'/', element:<div>This is by default</div>},
    {path:'/Home', element:<Home></Home>},
    {path:'/About', element:<About></About>},
    {path:'/Service', element:<Service></Service>}
  ])
  return (
    <div className="App">
         <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
