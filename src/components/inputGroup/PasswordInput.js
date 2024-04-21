import React from 'react'
import {Input} from "./Input";
import {passwordEqual} from "./inputFunc";

export const PasswordInput = () => {
	return (
		<>
			<Input type="password" placeholder="비밀번호를 입력하세요"/>
			<div className={"space"}></div>
			<Input onBlur={passwordEqual} type="password" placeholder="비밀번호를 한번 더 입력하세요"/>
		</>
	)
}
