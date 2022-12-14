import React from 'react';
import { Box } from '@mui/material';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Feed, VideoDetail, ChannelDetail, SearchFeed } from './components';

function App() {
	return (
		<Router>
			<Box>
				<Navbar />
				<Routes>
					<Route exact path="/" element={<Feed />} />
					<Route path="/video/:id" element={<VideoDetail />} />
					<Route path="/channel/:id" element={<ChannelDetail />} />
					<Route path="/search/:searchTerm" element={<SearchFeed />} />
				</Routes>
			</Box>
		</Router>
	)
}
export default App;