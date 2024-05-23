import React, { useState } from 'react';
import './App.css';

function App() {
	const [playerCount, setPlayerCount] = useState(1);

	return (
		<div className='App'>
			<h1>Catan Record</h1>

			<div className='log_game'>
				{Array.from({ length: playerCount }).map((_, index) => (
					<div
						className='player_input'
						key={index}
					>
						{/* Add input fields or content here */}
						<label>Player {index + 1}</label>
						<input
							type='text'
							placeholder='Player Name'
						/>
						<input
							type='text'
							placeholder='Player Color'
						/>
						<input
							type='number'
							placeholder='Settlements'
						/>
						<input
							type='number'
							placeholder='Cities'
						/>
						<label htmlFor='hasLongestRoad'>Longest Road?</label>
						<input
							type='checkbox'
							name='hasLongestRoad'
						/>
						<label htmlFor='hasLargestArmy'>Largest Army?</label>
						<input
							type='checkbox'
							name='hasLargestArmy'
						/>
					</div>
				))}
			</div>
		</div>
	);
}

export default App;
