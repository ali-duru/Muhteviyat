'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function EditTopicForm({ id, name, about, vision, mission }) {
	const [newName, setNewName] = useState(name);
	const [newAbout, setNewAbout] = useState(about);
	const [newVision, setNewVision] = useState(vision);
	const [newMission, setNewMission] = useState(mission);

	const router = useRouter();

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
				method: 'PUT',
				headers: {
					'Content-type': 'application/json',
				},
				body: JSON.stringify({
					newName,
					newAbout,
					newVision,
					newMission,
				}),
			});

			if (!res.ok) {
				throw new Error('Failed to update topic');
			}

			router.refresh();
			router.push('/dashboard');
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="flex flex-col gap-3 justify-between  mx-auto max-w-4xl mt-5"
		>
			<input
				onChange={(e) => setNewName(e.target.value)}
				value={newName}
				className="border border-slate-500 px-8 py-2"
				type="text"
				placeholder="Kurum Adı"
			/>

			<textarea
				onChange={(e) => setNewAbout(e.target.value)}
				value={newAbout}
				rows={10}
				className="border border-slate-500 px-8 py-2"
				type="text"
				placeholder="Kurum Hakkında"
			/>
			<textarea
				onChange={(e) => setNewVision(e.target.value)}
				value={newVision}
				rows={10}
				className="border border-slate-500 px-8 py-2"
				type="text"
				placeholder="Kurum Vizyon"
			/>
			<textarea
				onChange={(e) => setNewMission(e.target.value)}
				value={newMission}
				rows={10}
				className="border border-slate-500 px-8 py-2"
				type="text"
				placeholder="Kurum Misyon"
			/>

			<button className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
				Güncelle
			</button>
		</form>
	);
}
