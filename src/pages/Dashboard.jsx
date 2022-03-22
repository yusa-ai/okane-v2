import "./Dashboard.css";

import { collection } from "firebase/firestore";
import { db } from "../firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";

const Dashboard = ({ user }) => {
	const [depenses, loading, error] = useCollectionData(
		collection(db, "users", user.uid, "depenses")
	);

	return (
		<div className="container">
			<h1>Hello, World!</h1>

			{error && <p>Erreur : {JSON.stringify(error)}</p>}
			{loading && <p>Chargement de vos dernières dépenses...</p>}
			{depenses && (
				<ul>
					{depenses.map((depense, index) => {
						return <li key={index}>{JSON.stringify(depense)}</li>;
					})}
				</ul>
			)}
		</div>
	);
};

export default Dashboard;
