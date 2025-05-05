const Loading = () => {
	return (
		<div className='bg-gradient-to-r w-full from-blue-400 via-white-500 to-red-500 text-white p-6 rounded-lg shadow-lg backdrop-blur-sm bg-opacity-80 flex flex-col items-center justify-center min-h-[200px]'>
			<div className='w-12 h-12 border-4 border-white rounded-full border-t-transparent animate-spin mb-4'></div>
			<div className='text-xl font-bold'>Loading proposals...</div>
		</div>
	);
};

export default Loading;
