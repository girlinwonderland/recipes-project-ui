import React, {useEffect} from 'react';
import {Provider, useDispatch} from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { SignUpPage, SignInPage, MainPage, SinglePage } from './pages';
import { Layout } from './layout';
import store from './redux/store';
import './App.css';
import { checkAuth } from './redux/actions';

function App() {

    const dispatch = useDispatch();

    useEffect(() => {
        if (localStorage.getItem('token')){
            dispatch(checkAuth());
        }
        // eslint-disable-next-line
    },[]);

  return (
      <div className="App" >
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<Layout />} >
              <Route index element={<MainPage />} />
              {/*<Route path="signUp/success" element={<Navigate to="/signIn" />} />*/}
              <Route path="signUp" element={<SignUpPage />} />
              <Route path="signIn" element={<SignInPage />} />
              {/*<Route path="myPosts" element={<PersonalPage />} />*/}
              <Route path="myRecipes" element={<SinglePage />} />
            </Route>
          </Routes>
        </Provider>
      </div>
  );
}

export default App;
