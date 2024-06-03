import React, {useEffect, useRef, useState} from 'react'
import styled from "styled-components";
import {Input} from "./Input";
import "./Input.css"
import {checkEmailReg} from "./inputFunc";
import {InputValidResult} from "./InputValidResult";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

export const EmailInput = (props) => {
	const [emailState, setEmailState] = useState(" ");
	const [email, setEmail] = useState();
	const [isSend, setIsSend] = useState(false);
	const randNum = useRef({message:''});
	const [authNum, setAuthNum] = useState();
	const [authCheck, setAuthCheck] = useState(null);

	const changeEmail = (e) => {
		setEmail(e.target.value);
	}
	const sendEmail = () => {
		randNum.current = {message:String(Math.floor(Math.random() * 1000000)).padStart(6, "0")}
		emailjs.send("service_ndlrp3n","template_g74apye",{
			to_email: `${email}@hs.ac.kr`,
			message: randNum.current.message,
			reply_to: "no-reply",
		},{
			publicKey:"8Agqj8FFMCN0PzIpX"
		})
		.then(async () =>{
			setIsSend(v => !v);
			await Swal.fire({
				title:`인증번호를 ${email}@hs.ac.kr 로 보냈습니다!`,
				showConfirmButton: false,
				icon: "success",
				timer: 1000,
			});
		});
			setIsSend(v => !v);

	}
	const emailAuthCheck = async () => {
		// setAuthCheck(v => authNum === randNum.current.message);
		props.authCheck(`${email}@hs.ac.kr`)
	}
	return (
		<>
			<EmailArea >
				<Input onBlur={checkEmailReg(setEmailState)} onChange={changeEmail} className={`email-input ${emailState === false && 'email-validate-fail'}`} type="text" placeholder="이메일을 입력해주세요."/>
				<EmailType>@hs.ac.kr</EmailType>
			</EmailArea>
			{emailState === false && <InputValidResult/>}
			<EmailArea>
				<Input className="email-check-input" onChange={(e) => setAuthNum(e.target.value)} type="text" placeholder="인증번호를 입력해주세요"/>
				{
					isSend ?<EmailCheck className={'active'} onClick={emailAuthCheck}>인증번호 확인</EmailCheck>:
						<EmailCheck className={emailState === true && 'active' } onClick={sendEmail} disabled={emailState !== true}>인증번호 받기</EmailCheck>
				}

			</EmailArea>
			{

				authCheck === null ? <></> :
					authCheck ?
					<span className={"text-[12px] text-[#3366FF]"}>인증번호가 일치합니다.</span>:
						<span className={"text-[12px] text-[#F05056]"}>인증번호가 일치하지 않습니다.</span>
			}
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
