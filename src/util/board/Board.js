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
			createDate: new Date(),
		});
		console.log(this.dummyData);
		return id;
	}
}