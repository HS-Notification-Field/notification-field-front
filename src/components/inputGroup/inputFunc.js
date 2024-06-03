const
	checkEmailReg =
		setEmailState =>
			e =>
				setEmailState(
					() => /^[0-9a-zA-Z]([-_]?[0-9a-zA-Z])*$/.test(e.target.value)
				),
	passwordCheckReg = e =>
		/^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/.test(e.target.value)
	,
	idCheckReg = e =>
		/^[a-z]+[a-z0-9]{3,19}$/g.test(e.target.value)
;

export {checkEmailReg, passwordCheckReg};