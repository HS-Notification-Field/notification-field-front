import React, {useState} from 'react'
import styled from "styled-components";
import {Input} from "./Input";
import "./Input.css"
import {checkEmailReg} from "./inputFunc";
import {InputValidResult} from "./InputValidResult";

export const EmailInput = () => {
	const [emailState, setEmailState] = useState(" ");
	// const checkEmailReg = (e) => setEmailState(()=> /^[0-9a-zA-Z]([-_]?[0-9a-zA-Z])*$/.test(e.target.value))
	return (
		<>
			<EmailArea >
				<Input onBlur={checkEmailReg(setEmailState)} className={`email-input ${emailState === false && 'email-validate-fail'}`} type="text" placeholder="이메일을 입력해주세요."/>
				<EmailType>@hs.ac.kr</EmailType>
			</EmailArea>
			{emailState === false && <InputValidResult/>}
			<EmailArea>
				<Input className="email-check-input" type="text" placeholder="인증번호를 입력해주세요"/>
				<EmailCheck className={emailState === true && 'active' } disabled={!emailState}>인증번호 받기</EmailCheck>
			</EmailArea>
		</>
	)
}

const EmailArea = styled.div`
  position: relative;
  display: flex;
  //flex-wrap: wrap;
  &:not(:first-child){margin-top: 8px;}
  align-items: stretch;
  width: 100%;
`

const EmailCheck = styled.button`
  display: flex;
  align-items: center;
  font-size: 1rem;
  font-weight: 400;
  //letter-spacing: 1.25px;
  //line-height: 48px;
  padding: 0 16px;
  color: #7F7F7F;
  text-align: center;
  white-space: nowrap;
  background-color: #141414;
  border: 1px solid #35383F;
  border-left: none;
  border-top-right-radius: 16px;	
  border-bottom-right-radius: 16px;
`

const EmailType = styled.span`
  display: flex;
  align-items: center;
  font-size: 1rem;
  font-weight: 400;
  //letter-spacing: 1.25px;
  //line-height: 48px;
  padding: 0 16px;
  color: #7F7F7F;
  text-align: center;
  white-space: nowrap;
  background-color: #141414;
  border: 1px solid #35383F;
  border-left: none;
  border-top-right-radius: 16px;
  border-bottom-right-radius: 16px;
`;
