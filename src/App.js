import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import MyFavList from './components/MyFavList/MyFavList';
import Authentication from './components/Authentication/Authentication';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { createTheme, ThemeProvider } from '@mui/material';
import NotFound from './components/NotFound/NotFound';
import MyProfile from './components/MyProfile/MyProfile';

const App = () => {
  let theme = createTheme();

  return (
    <div className="App">
      <Router>
        <ThemeProvider theme={theme}>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />}> </Route>
            <Route path='/auth' element={<Authentication></Authentication>}> </Route>
            <Route element={<PrivateRoute />} >
              <Route path='/favourite' element={<MyFavList />}> </Route>
            </Route>
            <Route path='/profile' element={<MyProfile/>}> </Route>
            <Route path='*' element={<NotFound/>}> </Route>
          </Routes>
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;



//npm install -g firebase-tools
//firebase login
//firebase init
// firebase deploy