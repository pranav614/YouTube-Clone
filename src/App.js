import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import Body from './Body';
import MainContainer from './MainContainer';
import VideoPlayer from './VideoPlayer';
import './App.css';
import MainHeader from './Header/MainHeader';

function App() {
  const wholeRouter =createBrowserRouter([
    {
      path:'/',
      element:<Body />,
      children:[
        {
          path:'/',
          element:<MainContainer/>
        },
        {
          path:'/watch',
          element:<VideoPlayer/>
        }
      ]
    }
  ]) 
  return (
    <div >
     
      <MainHeader/>
      <RouterProvider router={wholeRouter}/>
    </div>
  );
}

export default App;
