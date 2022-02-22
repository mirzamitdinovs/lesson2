import React from 'react';

function Testemonials() {
	return (
		<div className='section-testimonials'>
			{/*begin container*/}
			<div className='container testimonials-wrapper'>
				{/*begin row*/}
				<div className='row'>
					{/*begin col-sm-5 */}
					<div className='col-sm-5'>
						{/*begin testimonials-info*/}
						<div className='testimonials-info'>
							<img
								src='http://placehold.it/200x200'
								className='author-pic'
								alt='John Doe'
							/>
							<p className='author-name'>
								Alicia Stevenson
								<br />
								<span>Founder Freelancer</span>
							</p>
						</div>
						{/*end testimonials-info*/}
					</div>
					{/*end col-sm-5 */}
					{/*begin col-sm-7 */}
					<div className='col-sm-7'>
						<p className='testimonials-text'>
							"Your time is limited, so do not waste it living someone else's
							life. Don't be trapped by dogma - which is living with the results
							of other people's thinking."
						</p>
					</div>
					{/*end col-sm-7 */}
				</div>
				{/*end row*/}
			</div>
			{/*end container*/}
		</div>
	);
}

export default Testemonials;
