import React from 'react';
import {totalState} from "../../util/state";

const MainPage = () => {
	const {user, board} = totalState,
		haksa = [
		{title: "[성적] 2024-1학기 성적조회 및 이의신청기간 안내", writer: "신한나", date: "2024.06.04", viewCount: "338"},
		{title: "[강의평가] 2024학년도 1학기 기말강의평가 시행 안내", writer: "류수윤", date: "2024.06.04", viewCount: "272"},
		{title: "[계절학기] 2024학년도 여름계절학기 수강료 납부 및 환불 안내", writer: "류수윤", date: "2024.05.23", viewCount: "921"},
		{title: "[공결] 2024-1학기 개별출석인정 및 공결처리 마감 안내", writer: "류수윤", date: "2024.05.21", viewCount: "2092"},
		{title: "(경인지역대학 학점교류학생 대상)전산회계 , AWS 클라우드서비스 학점이수 과정안내", writer: "류수윤", date: "2024.05.21", viewCount: "274"},
		{title: "[학적] 2024학년도 2학기 재학생 복수(융합)전공 신청 및 취소기간 안내", writer: "신한나", date: "2024.05.13", viewCount: "538"},
		{title: "[분납등록] 2024학년도 1학기 학부 분납4차 등록금 납부 안내", writer: "서민지", date: "2024.05.13", viewCount: "169"},
		{title: "[계절학기](과목수정)2024학년도 여름계절학기 개설예정과목 및 수강관련 안내", writer: "류수윤", date: "2024.05.13", viewCount: "1335"},
	], content = board.dummyData;


	return (
		<div className="">
			<div className="h-[300px] bg-[#9B9ECE]">
				<div className="mx-[200px] font-bold relative w-full h-full ">
					<div className="absolute top-[50%] translate-y-[-50%]">
						<div className="text-[24px] mb-[4px]">
							<span className="text-[#472F91]">Hanshin University</span>
						</div>
						<div className="text-[44px] mb-[4px]">
							그동안 보기 <span className="text-[#472F91]">불편</span>했던 학교 홈페이지를 한 눈에<span className="text-[#472F91]">!!</span>
						</div>
						<div className="text-[24px] ">
							<span className="text-[#472F91]">편하게</span> 소통하고 검색하자!
						</div>
					</div>
				</div>
			</div>
			<div className="mt-[40px] mx-[200px]">
				<header className="mb-[12px]">
					<span className="text-[28px]">계열 공지사항 바로가기</span>
				</header>
				<main className="flex w-full justify-between py-[7px]">
					<div className="grid hover:scale-110 cursor-pointer">
						<img className="justify-self-center" src="/image/homepage/IMG_0220%201.png" alt={""}/>
						<span className="text-[14px]">신학·인문융합</span>
					</div>
					<div className="grid hover:scale-110 cursor-pointer">
						<img className="justify-self-center" src="/image/homepage/앉아있는%20쿠오%201.png" alt={""}/>
						<span className="text-[14px]">경제통상·국제지역</span>
					</div>
					<div className="grid hover:scale-110 cursor-pointer">
						<img className="justify-self-center" src="/image/homepage/지금우리전공은%201.png" alt={""}/>
						<span className="text-[14px]">글로벌·공공인재융합</span>
					</div>
					<div className="grid hover:scale-110 cursor-pointer">
						<img className="justify-self-center" src="/image/homepage/제목_없는_아트워크%201%201.png" alt={""}/>
						<span className="text-[14px]">경영·미디어</span>
					</div>
					<div className="grid hover:scale-110 cursor-pointer">
						<img className="justify-self-center" src="/image/homepage/제목_없는_아트워크%20(6)%201.png" alt={""}/>
						<span className="text-[14px]">휴먼서비스</span>
					</div>
					<div className="grid hover:scale-110 cursor-pointer">
						<img className="justify-self-center" src="/image/homepage/IMG_0257%201.png" alt={""}/>
						<span className="text-[14px]">특수체육학</span>
					</div>
					<div className="grid hover:scale-110 cursor-pointer">
						<img className="justify-self-center" src="/image/homepage/IMG_0256%201.png" alt={""}/>
						<span className="text-[14px]">이공계융합</span>
					</div>
					<div className="grid hover:scale-110 cursor-pointer">
						<img className="justify-self-center" src="/image/homepage/노트북쿠오%201.png" alt={""}/>
						<span className="text-[14px]">AI·SW</span>
					</div>
				</main>
			</div>
			<div className="mt-[40px] mx-[200px]">
				<header className="mb-[12px]">
					<span className="text-[28px]">최신 공지사항 &gt;</span>
				</header>
				<main className="">
					<div className="flex gap-x-[8px] flex-nowrap overflow-x-hidden w-full">
						{
							haksa.map((item) => (
								<div>
									<div
										className="w-[250px] h-[120px] bg-[#1C1C1C] rounded-[8px] text-[#E7E7E5] flex flex-col justify-center gap-[12px] p-[8px] cursor-pointer">
										<div className="line-clamp-2 truncate whitespace-normal">
											<span className="text-[16px] font-bold">{item.title}</span>
										</div>
										<div className="flex justify-between">
											<span className="text-[11px]">작성자: {item.writer}</span>
											<span className="text-[11px]">작성일: {item.date}</span>
											<span className="text-[11px]">조회수: {item.viewCount}</span>
										</div>
									</div>
								</div>
							))
						}
					</div>
				</main>
			</div>
			<div className="mt-[40px] mx-[200px]">
				<header className="mb-[12px] ">
					<span className="text-[28px]">우리 학교 숨겨진 꿀잼 컨텐츠!&gt;</span>
				</header>
				<main className={"w-full flex gap-[16px] flex-nowrap"}>
					{
						content.map((item) => (
							<div className="w-[250px] h-[230px] bg-[#1C1C1C] rounded-[8px] text-[#E7E7E5] px-[14px] pt-[14px] hover:scale-110 cursor-pointer">
								<img className="rounded-[16px] w-[222px] h-[138px]" src={item.img_url} alt=""/>
								<div className="pt-[12px] truncate">
									<span className="text-[18px] font-bold break-all">{item.title}</span>
								</div>
							</div>
						))
					}

				</main>
			</div>
		</div>
	);
}
export default MainPage