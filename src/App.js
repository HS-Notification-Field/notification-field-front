import './App.css';
import {Outlet, Route, Routes} from "react-router-dom";
import Nav from "./components/nav/Nav";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import React from "react";
import SearchPage from "./pages/SearchPage";
import {Index} from "./pages/Signup";
import {Redirect} from "./util/Redirect";
import {WritePage} from "./pages/WritePage";
import DetailPage from "./pages/DetailPage";

const Layout = () => {
	return(
		<div>
			<Nav/>

			<Outlet/>
		</div>
	)
}

function App() {
  return (
	  <div className="app">
		  <Routes>
			  <Route index element={<LoginPage/>}/>
			  <Route path="signup" element={<Index/>}/>
			  <Route path="/" element={<Layout/>} >
				  {/*<Route index element={<></>}/>*/}
				  <Route path="main" element={<MainPage/>}/>
				  <Route path="search" element={<SearchPage/>}/>
			    <Route path="search/:boardId" element={<DetailPage/>}/>
				  <Route path="write" element={<WritePage/>}/>
			  </Route>
			  <Route path="/redirect" element={<Redirect/>}/>
		  </Routes>
	  </div>
  );
}

export default App;
