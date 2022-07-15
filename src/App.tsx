import React, { Suspense, lazy } from "react";
import Navbar from "./components/partials/Navbar";
import Footer from "./components/partials/Footer";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

const HomeLazy = lazy(() => import("./pages/Home"));
const AccountLazy = lazy(() => import("./pages/Account"));
const MovieLazy = lazy(() => import("./pages/Movie"));
const MovieDetailLazy = lazy(() => import("./pages/Movie/Detail"));
const TvShowLazy = lazy(() => import("./pages/TvShow"));
const TvShowDetailLazy = lazy(() => import("./pages/TvShow/Detail"));
const SignInLazy = lazy(() => import("./pages/SignIn"));
const SignUpLazy = lazy(() => import("./pages/SignUp"));
const SearchLazy = lazy(() => import("./pages/Search"));

function App() {
  return (
    <div className='bg-gradient-to-t from-black/90 to-black'>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomeLazy />} />
          <Route path='/sign-in' element={<SignInLazy />} />
          <Route path='/sign-up' element={<SignUpLazy />} />
          <Route path='/account' element={<AccountLazy />} />
          <Route path='/search' element={<SearchLazy />} />
          <Route path='/:category/:type'>
            <Route index element={<MovieLazy />} />
            <Route path=':id' element={<MovieDetailLazy />} />
          </Route>
          {/* <Route path='/tvshow'>
            <Route index element={<TvShowLazy />} />
            <Route path=':id' element={<TvShowDetailLazy />} />
          </Route> */}
          <Route element={<Navigate to={"/"} />} />
        </Routes>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
