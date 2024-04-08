import React from 'react';
import styled from "styled-components";
import "./Nav.css"
import {Link, useLocation} from "react-router-dom";


const Nav = () => {
	const {pathname:location} = useLocation();
	return (
		<Header>
			<Ul>
				<li><Link to="main">홈</Link></li>
				<li><Link to="main">게시판</Link></li>
				<li><Link to="Search">검색</Link></li>
				<li><Link to="main">설정</Link></li>
			</Ul>
		</Header>
	)
};

export default Nav

const Header = styled.div`
	//&:hover { 
	//	background-color: #61dafb;
	//}
`

const Ul = styled.ul`
  display: flex;
  column-gap: 8px;
`