import React, { useState } from "react";
import Login from "../components/auth/Login";
import Signup from "../components/auth/Signup";
import PageTitle from "../components/PageTitle";
import "../styles/auth.scss";

const LoginPage = () => {
	const [showSignup, setShowSignup] = useState(false);

	const toggleShowSignup = () => {
		setShowSignup(!showSignup);
	};

	const pageTitleSuffix = showSignup ? "S'inscrire" : "Se connecter";

	return (
		<>
			<PageTitle suffix={pageTitleSuffix} />
			<img className="logo" src="img/Logo.svg" alt="Logo de TaskBuddies" />
			<div className="loginPageContainer">
				{showSignup ? (
					<Signup toggleShowSignup={toggleShowSignup} />
				) : (
					<Login toggleShowSignup={toggleShowSignup} />
				)}
			</div>
		</>
	);
};

export default LoginPage;
