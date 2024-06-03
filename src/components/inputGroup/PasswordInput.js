import React, {useState} from 'react'
import {Input} from "./Input";
import {passwordEqual} from "./inputFunc";

export const PasswordInput = (props) => {
	const [pwd, setPwd] = useState();
	const [rePwd, setRePwd] = useState();
	const [isequal, setIsequal] = useState(null);
	const changePwd = (event) => {
		setPwd(event.target.value);
	}
	const checkRePwd = (event) => {
		setRePwd(event.target.value);
	}

	const passwordEqual = ()=> {
		setIsequal(v => pwd === rePwd);
		if(pwd===rePwd) {
 		  props.pwdCheck(pwd);
		}
	}

	return (
		<>
			<Input type="password" onChange={changePwd} placeholder="비밀번호를 입력하세요"/>
			<div className={"space"}></div>
			<Input onBlur={passwordEqual} onChange={checkRePwd} type="password" placeholder="비밀번호를 한번 더 입력하세요"/>
			{isequal === true ?
				<span className={"text-[12px] text-[#3366FF]"}>비밀번호가 일치합니다.</span>: isequal === null ? <></> : <span className={"text-[12px] text-[#F05056]"}>비밀번호가 일치하지 않습니다.</span>}
		</>
	)
}
