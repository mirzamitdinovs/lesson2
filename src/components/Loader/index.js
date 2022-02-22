import React from 'react';

function Loader() {
	return (
		<div id='loader'>
			<div className='sk-three-bounce'>
				<div className='sk-child sk-bounce1' />
				<div className='sk-child sk-bounce2' />
				<div className='sk-child sk-bounce3' />
			</div>
		</div>
	);
}

export default Loader;
