// import logo from './logo.svg';
 import { Route, Routes } from 'react-router-dom';

import Api from './Api';
import './App.css';


import Index from './user/Index';
import About from './user/Pages/About/About';
import Blog from './user/Pages/About/Blog';
import Protfolio from './user/Pages/About/Protfolio';
import Contact from './user/Pages/Contact';
import Error from './user/Pages/Error';
import Home from './user/Pages/Home';
import Pricing from './user/Pages/Pricing';
import Bpo_Services from './user/Pages/services/Bpo_Services';
import Digital_Marketing from './user/Pages/services/Digital_Marketing';
import Mobile_Services from './user/Pages/services/Mobile_Services';
import Software_Services from './user/Pages/services/Software_Services';
import Web_Services from './user/Pages/services/Web_Services';






function App() {
    
    // const script = document.createElement('script');
    // let url ='http://localhost:3000/assets/js/custom.js';
    // script.src = url;   //(This is external js url)
    // script.async = true;
    // document.body.appendChild(script);
    
  

  return (
<>

<Routes>
<Route exact path='/' element={<Index/>}>
<Route path='/'  element={<Home/>}/>
<Route exact path='/about' element= {<About/>} />
<Route exact path='/blog' element= {<Blog/>} />
<Route exact path='/protfolio' element= {<Protfolio/>} />
<Route exact path='/contact' element= {<Contact/>} />
<Route exact path='/pricing' element= {<Pricing/>} />
<Route exact path='/Software-Services' element ={ <Software_Services/>} />
<Route exact path='/web-Services' element ={ <Web_Services/>} />
<Route exact path='/Mobile-Services' element ={ <Mobile_Services/>} />
<Route exact path='/Digital-Marketing' element ={ <Digital_Marketing/>} />
<Route exact path='/bpo-services/' element ={ <Bpo_Services/>} />
<Route  path='*' element ={ <Error/>} />
</Route>


 
    </Routes>
   
{/* <Api/> */}

        </>

  );
}

export default App;
