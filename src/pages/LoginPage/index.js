import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import styled from "styled-components";
import './LoginPage.css'
import Swal from 'sweetalert2'
import {Input} from "../../components/inputGroup/Input";
import {totalState} from "../../util/state";

const LoginPage = () => {
	const [id, setId] = useState("");
	const [pwd, setPwd] = useState("");
	const {user} = totalState;
	const checkId = (event) => {
		setId(event.target.value);
	}
	const checkPwd = (event) => {
		setPwd(event.target.value);
	}
	const navigate = useNavigate();
	const goToMain = async () => {
		console.log(user)
		await user
			.isExist(id, pwd)
			.then(async (res) => {
				await Swal.fire({
					title: res ? "로그인 성공!" : "로그인 실패",
					icon: res ? "success": "error",
					showConfirmButton: false,
					timer: 1000,
				})
				if(res) {
					totalState.userId = id;
					navigate("/main");
				}
			})

	}
	return (
		<Login>
			<header>
				<h1 className="title">한신대학교 알리미</h1>
			</header>
			<img src="/image/login_img.png" className="login__img" alt="로그인 이미지"/>
			<LoginMain>
				<Input type="text" onChange={checkId} placeholder="아이디를 입력하세요."/>
				<div className={"mt-[16px]"}></div>
				<Input type="password" onChange={checkPwd} placeholder="비밀번호를 입력하세요."/>
				<div className={"mt-[16px]"}></div>
				<LoginButton onClick={goToMain}>
					<span className="login-btn-txt">로그인</span>
				</LoginButton>
				<div className="footer_text">회원 가입은 <Link className="go-to-signup" to="/signup">여기</Link>를 클릭해주세요</div>
			</LoginMain>
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
const LoginMain = styled.main`
	width: 100%;
`
const LoginButton = styled.button`
	border: 1px solid #101010;
  border-radius: 16px;
  background-color: #472F91;
  width: calc(100%);
  height: 48px;
  font-size: 16px;
  letter-spacing: 1.25px;
	&:hover {
		cursor: pointer;
	}
`