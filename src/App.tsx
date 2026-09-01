import { useState } from "react";
import SideNav from "./components/SideNav.js"
import KpiButtons from "./components/KpiButtons.js";
import ActionHeader from "./TopNav.js";

function App() {
	return (
		<main className="dashboard">
			<SideNav />
			<div className="dashboard-content">
				<ActionHeader/>
				<KpiButtons/>
				<section className="ticket-table"></section>
			</div>
		</main>
	);
}

export default App;
