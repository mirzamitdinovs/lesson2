import React from 'react';

function Info() {
	return (
		<div className='fun-facts-wrapper'>
			{/*begin image-overlay */}
			<div className='image-overlay' />
			{/*end image-overlay */}
			{/*begin container*/}
			<div className='container fun-facts-inside'>
				{/*begin row*/}
				<div className='row'>
					{/*begin fun-facts-box */}
					<div
						className='fun-facts-box text-center wow fadeIn'
						data-wow-delay='0.15s'
					>
						<i className='icon icon-design-pencil-rule-streamline' />
						<p className='fun-facts-title'>
							<span className='facts-numbers'>1050+</span>
							<br />
							Projects Completed
						</p>
					</div>
					{/*end fun-facts-box */}
					{/*begin fun-facts-box */}
					<div
						className='fun-facts-box text-center wow fadeIn'
						data-wow-delay='0.3s'
					>
						<i className='icon icon-streamline-umbrella-weather' />
						<p className='fun-facts-title'>
							<span className='facts-numbers'>217k</span>
							<br />
							Happy Clients
						</p>
					</div>
					{/*end fun-facts-box */}
					{/*begin fun-facts-box */}
					<div
						className='fun-facts-box text-center wow fadeIn'
						data-wow-delay='0.45s'
					>
						<i className='icon icon-crown-king-streamline' />
						<p className='fun-facts-title'>
							<span className='facts-numbers'>1210</span>
							<br />
							Design Awards
						</p>
					</div>
					{/*end fun-facts-box */}
					{/*begin fun-facts-box */}
					<div
						className='fun-facts-box text-center wow fadeIn'
						data-wow-delay='0.6s'
					>
						<i className='icon icon-cocktail-mojito-streamline' />
						<p className='fun-facts-title'>
							<span className='facts-numbers'>2137</span>
							<br />
							Cups Of Coffee
						</p>
					</div>
					{/*end fun-facts-box */}
					{/*begin fun-facts-box */}
					<div
						className='fun-facts-box text-center wow fadeIn'
						data-wow-delay='0.75s'
					>
						<i className='icon icon-speech-streamline-talk-user' />
						<p className='fun-facts-title'>
							<span className='facts-numbers'>24/7</span>
							<br />
							Fast Support
						</p>
					</div>
					{/*end fun-facts-box */}
				</div>
				{/*end row*/}
			</div>
			{/*end container*/}
		</div>
	);
}

export default Info;
