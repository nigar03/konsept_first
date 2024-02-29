import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './components/Nav';
import Sectionone from './components/Sectionone';
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import Login from './pages/Login';




const A =()=>{
  return(
    
    <BrowserRouter>
     
   <App />
   
    <Routes>
    <Route path='/' element={<Sectionone/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    </Routes>


    </BrowserRouter>
      
   

   
  )
}







const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <A/>
  
  
  
  </React.StrictMode>
);
