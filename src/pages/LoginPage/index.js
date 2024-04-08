import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import styled from "styled-components";
import './LoginPage.css'

const LoginPage = () => {
	const navigate = useNavigate();
	const goToMain = () => {
		navigate("/main")
	}
	return (
		<Login>
			<header>
				<h1 className="title">한신대학교 알리미</h1>
			</header>
			<img src="/image/login_img.png" className="login__img" alt="로그인 이미지"/>
			<main>
				<InputButton placeholder="아이디를 입력하세요."/>
				<InputButton placeholder="비밀번호를 입력하세요."/>
				<LoginButton onClick={goToMain}>
					<span className="login-btn-txt">로그인</span>
				</LoginButton>
				<div className="footer_text">회원 가입은 <Link className="go-to-signup" to="/signup">여기</Link>를 클릭해주세요</div>
			</main>
		</Login>
	)
}
export default LoginPage;

const Login = styled.div`
  position: relative;
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

`

const LoginButton = styled.button`
  border-radius: 16px;
  background-color: #472F91;
  width: calc(100%);
  height: 48px;
  font-size: 16px;
  letter-spacing: 1.25px;
`

const InputButton = styled.input`
  border: 1px solid #35383F;
  border-radius: 16px;
  background-color: #141414;
  width: calc(100%);
  height: 48px;
  margin-bottom: 16px;
  color: #7F7F7F;
  font-size: 16px;
  padding: 0 16px;
  letter-spacing: 1.25px;
`