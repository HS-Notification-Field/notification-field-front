import React, {useEffect, useState} from 'react'
import {totalState} from "../../util/state";
import {useParams} from "react-router-dom";

const Index = () => {
	const {boardId} = useParams();
	const [comment, setComment] = useState("");

	const boardList = totalState.board.dummyData;
	const board = {...boardList.filter(board => board.id === boardId).at(0)}

	const [boardComment, setBoardComment] = useState(board.comment);
	const hashTags = board.hashTags;


	useEffect(() => {
		board.comment = boardComment; console.log(board);
	}, [board, boardComment])

	const writeComment = () => {
		setBoardComment([...boardComment, {"id":`${boardComment.length+1}`, "writer": totalState.userId, "content": comment, created_at: new Date().toLocaleString()}])
		setComment(v => v = "")
	}
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


				<div className="my-[20px]">
					<span className={"text-[20px]"}>댓글</span>
				</div>

				<div className="w-full mb-4  rounded-lg bg-gray-50 ">
					<div className="px-4 py-2 bg-[#252525] rounded-t-lg ">
						<label for="comment" className="sr-only">Your comment</label>
						<textarea value={comment} onChange={(e) => {setComment(v => v = e.target.value)}} id="comment" rows="4" className=" resize-none focus:outline-0 w-full px-0 text-[14px] text-[#e7e7e5] bg-[#252525] border-0 " placeholder="댓글을 작성해주세요..." required ></textarea>
					</div>
					<div className="flex justify-end px-3 py-2 border-t rounded-b-lg border-[#252525] bg-[#252525]">
						<button onClick={writeComment} type="submit" className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-[#e7e7e5] bg-[#472F91] rounded-lg">
							댓글 작성
						</button>
					</div>
				</div>
					{
						boardComment.map(c => (
							<div key={c.id} className="bg-[#202020] mb-[12px] rounded">
								<div className="mb-[4px] p-[8px] text-[12px] flex justify-between">
									<div>
										{c.writer}
									</div>
									<div>
										{c.created_at}
									</div>
								</div>
								<div className="p-[8px]">
									{c.content}
								</div>
							</div>
						))
					}
			</div>
		</div>

	);
}
export default Index
