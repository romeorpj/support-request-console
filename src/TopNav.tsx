import React from "react";
import questions from "./assets/help_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg";
import notificationBell from "./assets/notifications_32dp_000000_FILL0_wght400_GRAD0_opsz40.svg";
import magnifyGlass from "./assets/search_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg";

const TopNav = () => {
	return (
		<header className="top-header">
			<h1>Support Console</h1>
			<div className="search-wrapper">
				<img className="magnify-glass" src={magnifyGlass} alt="notifications" />
				<input
					type="search"
					name="searchbar"
					placeholder="Search requests by subject, customer or request ID..."
					id="searchbar"
				/>
			</div>

			<div className="header-actions">
				<img className="notification-bell"
        src={notificationBell} alt="notifications" />
				<img src={questions} alt="questions" />
				<button type="button">New Request</button>
			</div>
		</header>
	);
};

export default TopNav;
