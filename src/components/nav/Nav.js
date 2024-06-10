import React from 'react';
import styled from "styled-components";
import "./Nav.css"
import {Link, useNavigate} from "react-router-dom";
import {Input} from "../inputGroup/Input";
import {ReactComponent as ReadingGlasses} from "../../assets/Vector.svg";
import {ReactComponent as Alram} from "../../assets/alram.svg";
import {ReactComponent as User} from "../../assets/User.svg";


const Nav = () => {
	const navigate = useNavigate(),
		move = (location) => () => navigate(location),
		// goToHS = () => navigate("/redirect", {state: {url:"https://hs.ac.kr/sites/kor/index.do"}})
		goToHS = () => window.open('about:blank').location.href='https://hs.ac.kr/sites/kor/index.do'
	;
	return (
		<header className="">
			<div className="h-[40px] my-auto mx-[200px] text-right align-middle leading-[40px] ">
				<span className="hover:cursor-pointer"
					onClick={goToHS}
				>
					홈페이지 가기
				</span>
			</div>
			<div className="border-b border-[#303030] w-full h-[1px]"></div>
			<div className="flex justify-between items-center h-[80px] mx-[200px] my-auto">
				<div id="logo" className="hover:cursor-pointer">
					<img src="/image/logo.png" onClick={() => navigate("/main")} alt=""/>
				</div>
				<div className="relative">
					<Input className="h-[50px!important] w-[400px!important] bg-[#252525!important] pr-[50px!important]"></Input>
					<ReadingGlasses className="absolute right-[13px] top-1/2 translate-y-[-50%]"/>
				</div>
				<div className="flex gap-[24px]">
					<button className="w-[45px] h-[28px] text-[14px] border border-[#E5E5E7] rounded-[8px]"
						onClick={move("search")}
					>
						게시글
					</button>
					<button className="w-[45px] h-[28px] text-[14px] border border-[#E5E5E7] rounded-[8px]"
		        onClick={move("signup")}
					>
						맛집
					</button>
					<Alram/>
					<User/>
				</div>
			</div>
		</header>
	)
};

export default Nav


const Ul = styled.ul`
  display: flex;
  column-gap: 8px;
`