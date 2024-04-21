import React, {useState} from 'react'
import "./Dropdown.css"
import {DropdownList} from "./DropdownList";
import styled from "styled-components";

export const Dropdown = () => {
	const [text, setText] = useState("학과를 선택해주세요");
	const [open, setOpen] = useState(false);
	const [select, setSelect] = useState(false);
	const dropDown = () => setOpen(o => !o);
	return (
		<div className={"drop-text-wrapper"}>
			<DropTextArea onClick={dropDown}>
				<DropText color={select ? '#E7E7E5' : '#7F7F7F'}>
					{text}
				</DropText>
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M8.29492 7.41L12.8749 12L8.29492 16.59L9.70492 18L15.7049 12L9.70492 6L8.29492 7.41Z"
					      fill={select ? '#E7E7E5' : '#7F7F7F'}/>
				</svg>
			</DropTextArea>
			{
				open ?
					<DropdownList onclick={{setText, setOpen, setSelect}} text={text}/> :
					null
			}
		</div>
	);
}

const DropTextArea = styled.div`
  position: relative;
  border: 1px solid #35383F;
  border-radius: 16px;
  background-color: #141414;
  width: calc(100%);
  height: 48px;
  line-height: 48px;
  vertical-align: middle;
  //margin-bottom: 16px;
  padding: 0 16px;
  font-size: 16px;
  letter-spacing: 1.25px;
	z-index: 9999;

  &:hover {
    border: 1px solid #E7E7E5;
  }

  &:focus {
    outline: 1px solid #E7E7E5;
  }

  > svg {
    position: absolute;
    display: inline-block;
    right: 0;
    transform: translate(-50%, 50%);
  }
`
const DropText = styled.span`
  color: ${({color}) => color};
`