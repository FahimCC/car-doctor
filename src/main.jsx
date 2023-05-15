import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './index.css';
import router from './routes/routes.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
	<div className='font-merriweather container'>
		<React.StrictMode>
			<RouterProvider router={router} />
		</React.StrictMode>
	</div>
);
