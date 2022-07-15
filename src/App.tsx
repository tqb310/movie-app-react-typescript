import React, { Suspense, lazy } from "react";
import Navbar from "./components/partials/Navbar";
import Footer from "./components/partials/Footer";
import { Routes, Route, Navigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./App.css";
import Searchbar from "./components/partials/Searchbar";

const HomeLazy = lazy(() => import("./pages/Home"));
const AccountLazy = lazy(() => import("./pages/Account"));
const CatalogLazy = lazy(() => import("./pages/Catalog"));
const CatalogTypeLazy = lazy(() => import("./pages/Catalog/Type"));
const DetailLazy = lazy(() => import("./pages/Detail"));
const SignInLazy = lazy(() => import("./pages/SignIn"));
const SignUpLazy = lazy(() => import("./pages/SignUp"));
const SearchLazy = lazy(() => import("./pages/Search"));

const Navigator = () => {
  const params = useParams();
  if (/^\d+$/.test(params.typeOrId || "")) return <DetailLazy />;
  return <CatalogTypeLazy />;
};

function App() {
  return (
    <div className='bg-gradient-to-t from-black/90 to-black'>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        <Searchbar />
        <Routes>
          <Route path='/' element={<HomeLazy />} />
          <Route path='/sign-in' element={<SignInLazy />} />
          <Route path='/sign-up' element={<SignUpLazy />} />
          <Route path='/account' element={<AccountLazy />} />
          <Route path='/search/:query' element={<SearchLazy />} />
          <Route path='/:category'>
            <Route index element={<CatalogLazy />} />
            <Route path=':typeOrId' element={<Navigator />} />
          </Route>
          <Route element={<Navigate to={"/"} />} />
        </Routes>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
