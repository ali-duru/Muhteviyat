import React from 'react';

function ListCreate() {
	return (
		<div className="flex flex-col justify-center align-middle items-center w-1/2">
			<form className="w-1/2 sm:w-full">
				<div className="mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
					<div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
						<label className="sr-only">List</label>
						<textarea
							id="list"
							rows={15}
							className="w-full px-0 text-m text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-transparent focus:outline-none focus:ring-gray-50 dark:text-white dark:placeholder-gray-400"
							placeholder="İçerikleri virgüllerle yazınız..."
							required
						></textarea>
					</div>
					<div className="flex items-center px-3 py-2 border-t justify-end  dark:border-gray-600">
						<button
							type="submit"
							className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-2 focus:ring-blue-200 dark:focus:transparent hover:bg-blue-800"
						>
							Liste Oluştur
						</button>
					</div>
				</div>
			</form>
			<div className="flex flex-col justify-center items-center">
				<p className="italic mb-10 text-white font-light text-sm sm:text-[11px] sm:text-center">
					İçerikleri kontrol ettikten sonra oranları girmek için bir
					sonraki sayfaya geçiniz
				</p>
			</div>
		</div>
	);
}

export default ListCreate;
