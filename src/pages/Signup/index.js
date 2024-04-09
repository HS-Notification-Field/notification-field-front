import React from 'react'
import styled from "styled-components";
import './Signup.css'
import {Input} from "../../components/buttons/Input";

export const Index = () => {
	return (
		<SignupWrapper>
			<div className="title">회원 가입</div>
			<div className="list">
				아이디
				<Input type="text" placeholder="아이디를 입력해주세요."/>
			</div>
			<div className="list">
				비밀번호
				<Input type="password" placeholder="비밀번호를 입력하세요"/>
				<Input type="password" placeholder="비밀번호를 한번 더 입력하세요"/>
			</div>
			<div className="list">
				이메일
				<Input type="text" placeholder="이메일을 입력해주세요."/>
				<Input type="text" placeholder="인증번호를 입력해주세요"/>
			</div>
			<div className="list">
				학과
				<Input type="text" placeholder="학과를 입력해주세요."/>
			</div>
			<div className="list">
				학번/사번
				<Input type="text" placeholder="학번/사번을 입력해주세요"/>
			</div>
			<div className="list">
				이름
				<Input type="text" placeholder="이름을 입력해주세요."/>
			</div>
			<SignupButton>
				<span className="login-btn-txt">회원가입</span>
			</SignupButton>
		</SignupWrapper>
	)
}

const SignupWrapper = styled.div`
	margin: 0 auto;
	max-width:400px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height:100vh;
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
