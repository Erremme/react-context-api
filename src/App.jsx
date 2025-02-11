import { BrowserRouter, Routes, Route } from "react-router-dom";
//Layout
import DefaulLayout from "./layout/DefaultLayout";
import AuthLayout from "./layout/AuthLayout";
import Dashboard from "./layout/Dashboard";
//Pages
import HomePage from "./page/HomePage";
import Prodotti from "./page/Prodotti";
import Prodotto from "./page/Prodotto";
import ChiSiamo from "./page/ChiSiamo";
import PageNotFound from "./page/PageNotFound";

import { AlertProvider } from "./context/AlertContext";
//Admin pages
import Login from "./page/admin/Login";
import AdminIndex from "./page/admin/AdminIndex";

export default function App(){
 return(
  <AlertProvider>
  <BrowserRouter>
    <Routes>
      <Route element ={<DefaulLayout />}>
        <Route index element = {<HomePage />}/>
        <Route path="/Prodotti"  element= {<Prodotti />}/>
        <Route path="/Prodotti/:id" element={<Prodotto />} />
        <Route path="ChiSiamo" element={<ChiSiamo />}/>
      </Route>

      <Route element={<AuthLayout />}>
      <Route path="/Login"  element={<Login />}/>
      </Route>

      <Route path="/admin"  element={<Dashboard />}>
      <Route index element={<AdminIndex/>} />
      </Route>

      <Route path="*" element={<PageNotFound />}/>

    </Routes>
  </BrowserRouter>
  </AlertProvider>
 )
}