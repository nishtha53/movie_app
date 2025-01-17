import './App.css';
import Movies from './Components/Movies';
import Search from './Components/Search';

function App() {
	return (
		<div className='flex flex-col gap-32 items-center text-2xl font-bold bg-gray-100 py-24 px-56'>
			<Search />
			<Movies />
		</div>
	);
}

export default App;
