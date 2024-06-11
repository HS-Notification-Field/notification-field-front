export default class Board{
	constructor() {
		this.dummyData = [
			{
				id:"1",
				title:"한고미가 운영하는 한신대 학교 유튜브 구경하기",
				content:"한고미가 운영하는 한신대 학교 유튜브 구경하기",
				writer:"dbgmlwns",
				hashTags: ["한신대학교", "꿀잼"],
				img_url:"https://hs.ac.kr/sites/hsguide/images/youtuber_hangomi.png",
				comment:[
					{
						id:"1",
						writer: "yhj3855",
						content: "재밌어요!",
						created_at: "2024. 6. 11. 오전 10:09:46",
					}
				],
				createDate: new Date().toLocaleString(),
			},
			{
				id:"2",
				title:"새내기 발표 어떻게 해야할까요",
				content:"발표 너무 떨리고 무서운데 어떻게 하죠..",
				writer:"dbgmlwns",
				hashTags: ["한신대학교", "발표", "새내기"],
				img_url:"https://www.hs.ac.kr/sites/hsguide/images/new_kookoo.png",
				comment:[
					{
						id:"1",
						writer: "yhj3855",
						content: "잘 해야죠",
						created_at: "2024. 6. 11. 오전 10:09:46",
					}
				],
				createDate: new Date().toLocaleString(),
			},
		]
	}

	async postBoard(boardObj) {
		let id = Math.round(Math.random() * 10000).toString();
		this.dummyData.push({
			id: id,
			title: boardObj.title,
			content:boardObj.content,
			writer:boardObj.writer,
			hashTags: boardObj.hashTags,
			comment:[],
			img_url: "https://www.hs.ac.kr/sites/hsguide/images/congrats.png",
			createDate: new Date(),
		});
		console.log(this.dummyData);
		return id;
	}
}