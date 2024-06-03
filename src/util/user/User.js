export default class User {
	constructor(){
		this.dummyUser = [
			{
				id:"dbgmlwns",
				pwd:"1234",
				email:"dbgmlwns@hs.ac.kr",
				major:"정보통신학부",
				HSNumber:"201955067",
				name:"유희준",
			},
			{
				id:"yhj3855",
				pwd:"1234",
				email:"dbgmlwns12@hs.ac.kr",
				major:"정보통신학부",
				HSNumber:"201955067",
				name:"유희준",
			},

		]
	}
	async isExist(id, pwd) {
		for (let user of this.dummyUser) {
			if(user.id === id && user.pwd === pwd) {
				return true;
			}
		}
		return false;
	}

	async signup(account) {
		this.dummyUser.push(account);
	}

	async modified(account) {
		this.dummyUser = this.dummyUser
			.map(user => {
				return user.id === account.id
					?
					({...user}) :
					user
			});
	}
}
