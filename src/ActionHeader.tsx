import React from "react";
import notificationBell from "./assets/notifications_32dp_000000_FILL0_wght400_GRAD0_opsz40.svg"
import questions from "./assets/help_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg"


const ActionHeader = () => {
	return (
		<header className="top-header">
			<h1>SIDE NAV</h1>
			<input type="search" name="ticket-search" id="ticket-search" />
			<div className="header-actions">
				<img src={notificationBell} alt="notifications" />
				<img src={questions} alt="questions" />
        <button type="button">New Request</button>
			</div>
		</header>
	);
};

export default ActionHeader;
