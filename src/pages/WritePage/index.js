import React, {useState} from 'react'
import './WritePage.css'
import {totalState} from "../../util/state";
import Swal from 'sweetalert2'

export const WritePage = () => {
	const [inputHashTag, setInputHashTag] = useState('');
	const [hashTags, setHashTags] = useState([]);
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const isEmptyValue = (value) => {
		return !value.length;

	};
	const addHashTag = (e) => {
		const allowedCommand = ['Comma', 'Enter', 'NumpadEnter'];
		if (!allowedCommand.includes(e.code)) return;

		if (isEmptyValue(e.target.value.trim())) {
			return setInputHashTag('');
		}

		let newHashTag = e.target.value.trim();
		const regExp = /[{}[\]/?.;:|)*~`!^\-_+<>@#$%&\\=('"]/g;
		if (regExp.test(newHashTag)) {
			newHashTag = newHashTag.replace(regExp, '');
		}
		if (newHashTag.includes(',')) {
			newHashTag = newHashTag.split(',').join('');
		}

		if (isEmptyValue(newHashTag)) return;

		setHashTags((prevHashTags) => {
			return [...new Set([...prevHashTags, newHashTag])];
		});

		setInputHashTag('');
	};

	const keyDownHandler = (e) => {
		if(e.code === 'Backspace' && inputHashTag === "") {
			const newHashTags = [...hashTags]
			newHashTags.pop();
			setHashTags(newHashTags);
		}
		if (e.code !== 'Enter'/* && e.code !== 'NumpadEnter'*/) return;
		e.preventDefault();

		const regExp = /^[a-z|A-Z|가-힣|ㄱ-ㅎ|ㅏ-ㅣ|0-9| \t|]+$/g;
		if (!regExp.test(e.target.value)) {
			setInputHashTag('');
		}
	};

	const changeHashTagInput = (e) => {
		setInputHashTag(e.target.value);
	};

	const writeBoard = async () => {
		let timerInterval
		await Swal.fire({
			title: "글 저장 중!",
			html: "<b></b> 초 경과!",
			timer: 1200,
			allowOutsideClick: false,
			timerProgressBar: true,
			didOpen: () => {
				Swal.showLoading();
				const timer = Swal.getPopup().querySelector("b");
				timerInterval = setInterval(() => {
					timer.textContent = `${((1200 - Swal.getTimerLeft()) / 1000).toFixed(2)}`;

				}, 100);
			},
			willClose: () => {
				clearInterval(timerInterval);
			}
		}).then((result) => {

		});
		await totalState.board.postBoard({
			title,
			content,
			hashTags,
			"writer":totalState.userId
		}).then();

	}
	return (
		<div className="mx-[200px]">
			<div className=" ">
				<label htmlFor="large-input" className="block  text-lg font-medium text-[#e7e7e5] "></label>
				<input onChange={(e) => setTitle(v => v = e.target.value)} type="text" id="large-input" placeholder={"제목"} className="focus:outline-0 block w-full p-4 text-[#e7e7e5] rounded-t-lg bg-[#252525] text-[36px] focus:ring-blue-500 focus:border-blue-500"/>
			</div>
			<div className="bg-[#252525] ">
				<div className="bg-[#495057] h-[6px] w-[4rem] rounded-[1px]"></div>
			</div>
			<div className="bg-[#252525] ">
				<label htmlFor="large-input" className="block  text-sm font-medium text-[#e7e7e5] "></label>
				{/*<input type="text" id="large-input" placeholder={"제목"} className="block w-full p-4 text-[#e7e7e5] border border-0 rounded-lg bg-[#252525] text-base focus:ring-blue-500 focus:border-blue-500"/>*/}
				<div className='hashTags p-4'>
					{hashTags.length > 0 &&
						hashTags.map((hashTag) => {
							return (
								<div key={hashTag} className='tag inline bg-[#472F91] me-[8px] rounded-[32px] p-1'>
									{hashTag}
								</div>
							);
						})}

					<input
						value={inputHashTag}
						onChange={changeHashTagInput}
						onKeyUp={addHashTag}
						onKeyDown={keyDownHandler}
						placeholder='태그를 등록해주세요.'
						className='hashTagInput text-lg inline bg-[#252525] focus:border-0 focus:outline-0'
					/>
				</div>
			</div>
			<div className=" ">
				<label htmlFor="large-input" className="block  text-sm font-medium text-[#e7e7e5] "></label>
				<textarea onChange={(e) => setContent(v => v = e.target.value)} id="large-input" placeholder={"여러분의 이야기를 작성해주세요..."} className="resize-none  focus:outline-0 block w-full h-[560px] p-4 text-[#e7e7e5] rounded-b-lg bg-[#252525] text-base focus:ring-blue-500 focus:border-blue-500"/>
			</div>


			<div className="fixed right-12 bottom-12 hover:scale-110">
				<button onClick={writeBoard} className="bg-[#472F91] rounded-[8px] w-[80px] h-[40px]">
					완료
				</button>
			</div>
		</div>
	)
}
