import { Fragment, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import Cart from './pages/Cart';
import RecipeDetailed from './components/RecipeDetailed';
import { MyContext } from './MyContext';
import Footer from './components/Footer';
// https://api.edamam.com/auto-complete

// https://api.edamam.com/auto-complete?app_id=00dce459&app_key=ebe32a83af1e1a963eb0c02a523bb31a&q=healthy
function App() {
  const [favorite, setFavorite] = useState(localStorage.getItem("favorite") ? JSON.parse(localStorage.getItem("favorite")) : [])
  const [gSearch, setGSearch] = useState("pizza")
  useEffect(() => {

  }, [favorite])
  return (
      <MyContext.Provider value={{favorite, setFavorite, gSearch, setGSearch}}>
        <Fragment>
            <NavBar />
            <Routes>
              <Route path='/' element={ <Home /> } />
              <Route path='/detailedRecepi/:id' element={ <RecipeDetailed /> } />
              <Route path='/cart/detailedRecepi/:id' element={ <RecipeDetailed /> } />

              <Route path='/cart' element={ <Cart /> } />
            </Routes>
            <Footer />
          </Fragment>
      </MyContext.Provider>
  );
}

export default App;
