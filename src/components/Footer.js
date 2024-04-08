import React from 'react';
import {useLocation} from "react-router-dom";

export const Footer = () => {
	const {pathname:location} = useLocation();

	return(
		<div>Footer</div>
	)
}