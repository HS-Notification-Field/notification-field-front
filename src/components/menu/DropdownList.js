import React from 'react'
import styled from "styled-components";

export const DropdownList = (props) => {
	const departments = ["컴퓨터공학부", "정보통신학부", "소프트웨어융합학부", "IT영상콘텐츠학부", "응용통계학과"]
	const changeText = (text) => () => {
		props.onclick.setText(text);
		props.onclick.setOpen(o => !o);
		props.onclick.setSelect(true);
	}
	return (
		<DropdownContainer>
			{
				departments.map(
					(data, idx) =>
						<DropdownItem
							className={
								props.text === data ? 'selected': ''
							}
							key={idx}
							onClick={changeText(data)}>{data}
						</DropdownItem>
				)
			}
		</DropdownContainer>
	)
}
const DropdownContainer = styled.div`
	position: absolute;
	background-color: #141414;
  border: 1px solid #35383F;
	border-radius: 16px;
	margin-block: 16px;
	box-shadow: 0 0 12px 0 rgba(255,255,255,.05);
	width: 100%;
	max-height: 192px;
	overflow-y: auto;
	font-size: 16px;
  &::-webkit-scrollbar{
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #7F7F7F;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track{
    background-color: #35383F;
    border-radius: 10px;
  }
`
const DropdownItem = styled.div`
  cursor: pointer;
  padding: 0 16px;
	height:48px;
	line-height:48px;
	vertical-align: middle;
	color: #7F7F7F;
	&:hover {
		background-color: #1C1C1C;
	}

`
