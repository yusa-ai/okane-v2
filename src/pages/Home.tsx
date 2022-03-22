import "./Home.css";

import {
	IonContent,
	IonHeader,
	IonPage,
	IonTitle,
	IonToolbar,
} from "@ionic/react";

import Dashboard from "./Dashboard";
import Login from "./Login";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Home = () => {
	const [user, loading, error] = useAuthState(auth);

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Blank</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<IonHeader collapse="condense">
					<IonToolbar>
						<IonTitle size="large">Blank</IonTitle>
					</IonToolbar>
				</IonHeader>
				{!user && <Login />}
				{user && <Dashboard user={user} />}
			</IonContent>
		</IonPage>
	);
};

export default Home;
