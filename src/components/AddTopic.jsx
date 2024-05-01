'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Vina_Sans } from 'next/font/google';

export default function AddTopic() {
	const [name, setName] = useState('');
	const [about, setAbout] = useState('');
	const [vision, setVision] = useState('');
	const [mission, setMission] = useState('');

	const router = useRouter();

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!name || !about) {
			alert('Kurum Adı ve hakkımızda kısımları zorunludur.');
			return;
		}

		try {
			const res = await fetch('http://localhost:3000/api/topics', {
				method: 'POST',
				headers: {
					'Content-type': 'application/json',
				},
				body: JSON.stringify({ name, about, vision, mission }),
			});

			if (res.ok) {
				setName('');
				setAbout('');

				setVision('');

				setMission('');
				router.push('/');
			} else {
				throw new Error('Bir hata oluştu..');
			}
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
				onChange={(e) => setName(e.target.value)}
				value={name}
				className="border border-slate-500 px-8 py-2"
				type="text"
				placeholder="Kurum Adı"
			/>

			<textarea
				onChange={(e) => setAbout(e.target.value)}
				value={about}
				className="border border-slate-500 px-8 py-2"
				type="text"
				rows={10}
				placeholder="Kurum Hakkında"
			/>
			<textarea
				onChange={(e) => setVision(e.target.value)}
				value={vision}
				rows={10}
				className="border border-slate-500 px-8 py-2"
				type="text"
				placeholder="Kurum Vizyonu"
			/>
			<textarea
				onChange={(e) => setMission(e.target.value)}
				value={mission}
				rows={10}
				className="border border-slate-500 px-8 py-2"
				type="text"
				placeholder="Kurum Misyonu"
			/>

			<button
				type="submit"
				className="bg-green-600 font-bold text-white py-3 px-6 w-fit"
			>
				Gönder
			</button>
		</form>
	);
}
