export default class Board{
	constructor() {
		this.dummyData = [
			{
				id:"1",
				title:"ㅋㅋㅋㅋ",
				content:"zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz",
				writer:"dbgmlwns",
				hashTags: [],
				img_url:"",
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