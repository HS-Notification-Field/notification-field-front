import React, {useEffect, useState} from 'react'
import styled from "styled-components";
import './Signup.css'
import {Input} from "../../components/inputGroup/Input";
import {useNavigate} from "react-router-dom";
import {Dropdown} from "../../components/menu/Dropdown";
import {EmailInput} from "../../components/inputGroup/EmailInput";
import {PasswordInput} from "../../components/inputGroup/PasswordInput";
import {userState} from "../../util/state";

export const Index = () => {
	const navigate = useNavigate();
	const [id, setId] = useState('');
	const [pwd, setPwd] = useState('');
	const [email, setEmail] = useState('');
	const [major, setMajor] = useState('');
	const [HSNumber, setHSNum] = useState('');
	const [name, setName] = useState('');
	const [pass, setPass] = useState('');
	const {user} = userState;
	// const user = useRecoilValue(userState);
	const onCheck = (setState) => (v) => {
		setState(value => v)
	};
	const onChangeInputValue = (setState) => (event) => {
		setState(event.target.value);
	};

	useEffect(() => {
		setPass(v => id && pwd && email && major && HSNumber && name)
	}, [id, pwd, email, major, HSNumber, name])

	const signup = () => {
		user.signup(
			{
				id: id,
				pwd: pwd,
				email: email,
				major: major,
				HSNumber: HSNumber,
				name: name
			}
		);
		console.log(user);
		navigate("/")
	};

	return (
		<SignupWrapper>
			<div className="title">회원 가입</div>
			<div className="list">
				<Category>아이디</Category>
				<Input onChange={onChangeInputValue(setId)} type="text" placeholder="아이디를 입력해주세요."/>
			</div>
			<div className="list">
				<Category>비밀번호</Category>
				<PasswordInput pwdCheck={onCheck(setPwd)}/>
			</div>
			<div className="list">
				<Category>이메일</Category>
				<EmailInput authCheck={setEmail}/>
			</div>
			<div className="list">
				<Category>학과</Category>
				<Dropdown onSet={onCheck(setMajor)}/>
			</div>
			<div className="list">
				<Category>학번/사번</Category>
				<Input type="text" onChange={onChangeInputValue(setHSNum)} placeholder="학번/사번을 입력해주세요"/>
			</div>
			<div className="list">
				<Category>이름</Category>
				<Input type="text" onChange={onChangeInputValue(setName)} placeholder="이름을 입력해주세요."/>
			</div>
			<SignupButton disabled={!pass} bgcolor={pass? "#472F91" : "#231F20"} onClick={signup}>
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
  background-color: ${props => props.bgcolor};
  width: calc(100%);
  height: 48px;
  font-size: 16px;
  letter-spacing: 1.25px;
	&:hover {
		cursor: pointer;
	}
`
