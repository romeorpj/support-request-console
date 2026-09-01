import { useState } from "react";
import SideNav from "./components/SideNav.js"
import ActionHeader from "./ActionHeader.js";

function App() {
	return (
		<main className="dashboard">
			<SideNav />
			<div className="dashboard-content">
				<ActionHeader/>
				<aside className="kpi-buttons"></aside>
				<section className="ticket-table"></section>
			</div>
		</main>
	);
}

export default App;
