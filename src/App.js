import { Route, Routes } from 'react-router-dom';
import Breadcrumbs from './components/layouts/breadcrumbs';
import Footer from './components/layouts/footer';
import Header from './components/layouts/header';
import Hero from './components/layouts/hero';
import Home from './components/pages/home';
import Shop from './components/pages/shop';
import AboutUs from './components/pages/aboutus';
import Category from './components/pages/category';
import Product from './components/pages/product';
import { useState } from 'react';
import STATE from './context/initState';
import { UserProvider } from './context/context';
function App() {
  const [state,setState] = useState(STATE);
  return (
    <UserProvider value={{state,setState}}>
    <div id="preloder" style={{opacity:0.8,display:state.loading?"block":"none"}}>
        <div class="loader"></div>
    </div>
    <div className="App">
        <Header />
        <Hero/>
        <Breadcrumbs/>
        <section className="product spad">
          <div className="container">
              <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/shop' element={<Shop/>} />
                <Route path='/category/:id' element={<Category/>} />
                <Route path='/product/:id' element={<Product/>} />
                <Route path='/about-us' element={<AboutUs/>} />
              </Routes>
            </div>
          </section>
          <Footer/>
    </div>
    </UserProvider>
  );
}

export default App;
