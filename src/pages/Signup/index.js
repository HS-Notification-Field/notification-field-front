import React from 'react'
import styled from "styled-components";
import './Signup.css'
import {Input} from "../../components/inputGroup/Input";
import {useNavigate} from "react-router-dom";
import {Dropdown} from "../../components/menu/Dropdown";
import {EmailInput} from "../../components/inputGroup/EmailInput";
import {PasswordInput} from "../../components/inputGroup/PasswordInput";

export const Index = () => {
	const navigate = useNavigate();

	const signup = () => {
		navigate("/main")
	}

	return (
		<SignupWrapper>
			<div className="title">회원 가입</div>
			<div className="list">
				<Category>아이디</Category>
				<Input type="text" placeholder="아이디를 입력해주세요."/>
			</div>
			<div className="list">
				<Category>비밀번호</Category>
				<PasswordInput/>
			</div>
			<div className="list">
				<Category>이메일</Category>
				<EmailInput/>
			</div>
			<div className="list">
				<Category>학과</Category>
				<Dropdown/>
			</div>
			<div className="list">
				<Category>학번/사번</Category>
				<Input type="text" placeholder="학번/사번을 입력해주세요"/>
			</div>
			<div className="list">
				<Category>이름</Category>
				<Input type="text" placeholder="이름을 입력해주세요."/>
			</div>
			<SignupButton disabled onClick={signup}>
				<span className="login-btn-txt">회원가입</span>
			</SignupButton>
		</SignupWrapper>
	);
}



const Category = styled.span`
	margin-bottom: 4px;

`

const SignupWrapper = styled.div`
	margin: 0 auto;
	max-width:400px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	min-height:100vh;
`

const SignupButton = styled.button`
	border: 1px solid #101010;
  border-radius: 16px;
  background-color: #231F20;
  width: calc(100%);
  height: 48px;
  font-size: 16px;
  letter-spacing: 1.25px;
	&:hover {
		cursor: pointer;
	}
`
