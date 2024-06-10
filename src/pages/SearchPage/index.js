import React from 'react';
import Board from "../../util/board/Board";
import {useNavigate} from "react-router-dom";
import {totalState} from "../../util/state";

const Search = () => {
	const boardList = totalState.board.dummyData;
	const navigate = useNavigate();
	return (
		<div className="text-[#E7E7E5] mx-[200px] ">
			<div className="w-full flex justify-between">
				<div className="w-[200px]">d</div>
				<div className="w-full flex gap-[16px] flex-wrap">
					{
						boardList.map((board) =>(
							<div key={board.id} className="w-[250px] h-[230px] bg-[#1C1C1C] rounded-[8px] text-[#E7E7E5] px-[14px] pt-[14px] hover:scale-110 cursor-pointer">
								<img className="rounded-[16px] w-[222px] h-[138px]" src={board.img_url} alt=""/>
								<div className="pt-[12px]">
									<span className="text-[18px] font-bold break-all">{board.title}</span>
								</div>
							</div>
						))

					}
				</div>
			</div>

			<div className="fixed right-12 bottom-12 hover:scale-110">
				<button onClick={() => navigate("/write")} className="bg-[#472F91] rounded-[8px] w-[80px] h-[40px]">
					새 글쓰기
				</button>
			</div>
		</div>
	);
}

export default Search;