import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const SignUpPage = lazy(async () => await import('./pages/SignUpPage'));
const SignInPage = lazy(async () => await import('./pages/SignInPage'));

function App() {
  return (
    <Routes>
      <Route
        path="/sign-up"
        element={<SignUpPage />}
      />
      <Route
        path="/sign-in"
        element={<SignInPage />}
      />
    </Routes>
  );
}

export default App;
