import React from 'react'
import styled from "styled-components";

export const Input = (props) => {
	return (

			// props.onBlur ?
			<InputButton
				onBlur={props.onBlur}
				onChange={props.onChange}
				className={props.className}
				type={props.type}
				placeholder={props.placeholder}
			/>
				// :
				// <InputButton
				// 	className={props.className}
				// 	type={props.type}
				// 	placeholder={props.placeholder}
				// />

	)
}

const InputButton = styled.input`
  border: 1px solid #35383F;
  border-radius: 16px;
  background-color: #141414;
  width: calc(100%);
  height: 48px;
  padding: 0 16px;
  font-size: 16px;
  color: #E7E7E5;
  letter-spacing: 1.25px;
	&:hover {
		border: 1px solid #E7E7E5;
	}
	&:focus {
		outline: none;
		border: 1px solid #E7E7E5;
	}
	&::placeholder {
		color: #7F7F7F;
	}
`