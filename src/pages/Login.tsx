import "./Login.css";

import { IonButton } from "@ionic/react";
import { login } from "../firebase";
import { useState } from "react";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<div className="container">
			<label htmlFor="email">Adresse mail</label>
			<input
				type="text"
				name="email"
				id="email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			/>
			<label htmlFor="password">Mot de passe</label>
			<input
				type="password"
				name="password"
				id="password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>
			<IonButton onClick={() => login(email, password)}>Connexion</IonButton>
		</div>
	);
};

export default Login;
