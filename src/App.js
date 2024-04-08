import './App.css';
import {Outlet, Route, Routes} from "react-router-dom";
import Nav from "./components/nav/Nav";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import React from "react";
import {Footer} from "./components/Footer";
import SearchPage from "./pages/SearchPage";
import {Signup} from "./pages/Signup/Signup";

const Layout = () => {
	return(
		<div>
			<Nav/>

			<Outlet/>
			<Footer/>
		</div>
	)
}

function App() {
  return (
	  <div className="app">
		  <Routes>
			  <Route index element={<LoginPage/>}/>
			  <Route path="signup" element={<Signup/>}/>
			  <Route path="/" element={<Layout/>} >
				  <Route index element={<></>}/>
				  <Route path="main" element={<MainPage/>}/>
				  <Route path="search" element={<SearchPage/>}/>
			  </Route>
		  </Routes>
	  </div>
  );
}

export default App;
