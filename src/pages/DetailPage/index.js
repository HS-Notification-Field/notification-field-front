import React from 'react'
import {totalState} from "../../util/state";
import {useParams} from "react-router-dom";

const Index = () => {
	const {boardId} = useParams();
	const boardList = totalState.board.dummyData;
	const board = boardList.filter(board => board.id === boardId).at(0)
	const hashTags = board.hashTags;
	return (
		<div className={"w-full"}>
			<div className="mx-[200px]">
				<div className=" ">
					<label htmlFor="large-input" className="block  text-lg font-medium text-[#e7e7e5] "></label>
					<input type="text" id="large-input" placeholder={"제목"} value={board.title} readOnly
					       className="focus:outline-0 block w-full p-4 text-[#e7e7e5] rounded-t-lg bg-[#252525] text-[36px] focus:ring-blue-500 focus:border-blue-500"/>
				</div>
				<div className="bg-[#252525] ">
					<div className="bg-[#495057] h-[6px] w-[4rem] rounded-[1px]"></div>
				</div>
				<div className="bg-[#252525] ">
					<label htmlFor="large-input" className="block  text-sm font-medium text-[#e7e7e5] "></label>
					{/*<input type="text" id="large-input" placeholder={"제목"} className="block w-full p-4 text-[#e7e7e5] border border-0 rounded-lg bg-[#252525] text-base focus:ring-blue-500 focus:border-blue-500"/>*/}
					<div className='hashTags p-4'>
						{
							hashTags.map((hashTag) => (
								<div className={"inline bg-[#472F91] me-[8px] rounded-[32px] p-1"}>{hashTag}</div>
							))
						}
					</div>
				</div>
				<div className=" ">
					<label htmlFor="large-input" className="block  text-sm font-medium text-[#e7e7e5] "></label>
					<textarea id="large-input" placeholder={"여러분의 이야기를 작성해주세요..."} value={board.content} readOnly
					          className="resize-none  focus:outline-0 block w-full h-[560px] p-4 text-[#e7e7e5] rounded-b-lg bg-[#252525] text-base focus:ring-blue-500 focus:border-blue-500"/>
				</div>
			</div>
		</div>

	);
}
export default Index
