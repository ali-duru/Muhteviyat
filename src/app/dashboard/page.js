import TopicsList from '@/components/TopicsList';
import DataEntry from '@/components/dataentry/Dataentry';
import React from 'react';

function Dashboard() {
	return (
		// <div className="flex min-w-full min-h-screen flex-col items-center justify-between p-24 bg-gray-800">
		// 	<DataEntry />
		// </div>
		<TopicsList />
	);
}

export default Dashboard;
