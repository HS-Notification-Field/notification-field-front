import React from 'react';
import styled from "styled-components";
import "./Nav.css"
import {Link} from "react-router-dom";


const Nav = () => {
	return (
		<Header>
			<Ul>
				<li><Link to="main">홈</Link></li>
				<li><Link to="main">게시판</Link></li>
				<li><Link to="Search">검색</Link></li>
				<li><Link to="main">내정보</Link></li>
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