import React from 'react';
import { Provider } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { SignUpPage, SignInPage, MainPage, SinglePage } from './pages';
import { Layout } from './layout';
import store from './redux/store';
import './App.css';

function App() {

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
