import React from 'react'

const KpiButtons = () => {
  return (
			<aside className="kpi-buttons">
				<button type="button">Open Requests</button>
				<button type="button">Urgent</button>
				<button type="button">Unassigned</button>
				<button type="button">Created Today</button>
				<button type="button">Resolved Today</button>
			</aside>
		);
}

export default KpiButtons