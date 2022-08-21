import React from 'react';
import { Provider } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { SignUpPage, SignInPage, MainPage } from './pages';
import { Layout } from './layout';
import store from './redux';
import './App.css';

function App() {

  return (
      <div className="App" >
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<Layout />} >
              <Route index element={<MainPage />} />
              {/*<Route path="success" element={<Navigate to="/" />} />*/}
              <Route path="signUp" element={<SignUpPage />} />
              <Route path="signIn" element={<SignInPage />} />
              {/*<Route path="myPosts" element={<PersonalPage />} />*/}
              {/*<Route path="myPosts/:id" element={<SinglePage />} />*/}
            </Route>
          </Routes>
        </Provider>
      </div>
  );
}

export default App;
