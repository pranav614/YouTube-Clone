import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import Body from './Body';
import Header from './Header/Header';
import MainContainer from './MainContainer';
import VideoPlayer from './VideoPlayer';
import './App.css';

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
          path:'watch',
          element:<VideoPlayer/>
        }
      ]
    }
  ]) 
  return (
    <div >
      <Header/>
      <RouterProvider router={wholeRouter}/>

    </div>
  );
}

export default App;
