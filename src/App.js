import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const SignUpPage = lazy(async () => await import('./pages/SignUpPage'));
const SignInPage = lazy(async () => await import('./pages/SignInPage'));

function App() {
  return (
    <Suspense fallback={<div className="p-5">Loading...</div>}>
      <Routes>
        <Route
          path="/"
          element={<></>}
        />
        <Route
          path="/sign-up"
          element={<SignUpPage />}
        />
        <Route
          path="/sign-in"
          element={<SignInPage />}
        />
      </Routes>
    </Suspense>
  );
}

export default App;
