import React from 'react';

function Pricing() {
	return (
		<section className='section-white' id='pricing'>
			{/*begin container*/}
			<div className='container'>
				{/*begin row*/}
				<div className='row margin-bottom-50'>
					{/*begin col-md-12*/}
					<div className='col-md-12 text-center'>
						<h2 className='section-title'>Choose Your Pricing Plan</h2>
						<div className='separator_wrapper'>
							<i className='icon icon-star-two red' />
						</div>
						<p className='section-subtitle'>
							There are many variations of passages of Lorem Ipsum available,
							but the majority
							<br />
							have suffered alteration, by injected humour, or new randomised
							words.
						</p>
					</div>
					{/*end col-md-12*/}
				</div>
				{/*end row*/}
				{/*begin row*/}
				<div className='row'>
					{/*begin col-sm-4 */}
					<div className='col-sm-4'>
						{/*begin pricing-box */}
						<div className='pricing-box'>
							{/*begin pricing-top */}
							<div className='pricing-top'>
								<h3>Starter</h3>
								<p className='price'>
									<span className='currency white'>$</span>{' '}
									<span className='number white'>99</span>{' '}
									<span className='month white'>p/month</span>
								</p>
							</div>
							{/*end pricing-top */}
							{/*begin pricing-bottom */}
							<div className='pricing-bottom'>
								<ul>
									<li>1 GB of space</li>
									<li>200 messages</li>
									<li>unlimited updates</li>
									<li>1 user acounts</li>
									<li>2 databases</li>
								</ul>
								<a href className='btn btn-md btn-block btn-pricing-blue'>
									REGISTER TODAY
								</a>
							</div>
							{/*end pricing-bottom */}
						</div>
						{/*end pricing-box */}
					</div>
					{/*end col-sm-4 */}
					{/*begin col-sm-4 */}
					<div className='col-sm-4'>
						{/*begin pricing-box */}
						<div className='pricing-box'>
							{/*begin pricing-top */}
							<div className='pricing-top'>
								<h3>Advanced</h3>
								<p className='price'>
									<span className='currency white'>$</span>{' '}
									<span className='number white'>199</span>{' '}
									<span className='month white'>p/month</span>
								</p>
							</div>
							{/*end pricing-top */}
							{/*begin pricing-bottom */}
							<div className='pricing-bottom'>
								<ul>
									<li>1 GB of space</li>
									<li>200 messages</li>
									<li>unlimited updates</li>
									<li>1 user acounts</li>
									<li>2 databases</li>
								</ul>
								<a href className='btn btn-md btn-block btn-pricing-featured'>
									REGISTER TODAY
								</a>
							</div>
							{/*end pricing-bottom */}
						</div>
						{/*end pricing-box */}
					</div>
					{/*end col-sm-4 */}
					{/*begin col-sm-4 */}
					<div className='col-sm-4'>
						{/*begin pricing-box */}
						<div className='pricing-box'>
							{/*begin pricing-top */}
							<div className='pricing-top'>
								<h3>Intermediate</h3>
								<p className='price'>
									<span className='currency white'>$</span>{' '}
									<span className='number white'>299</span>{' '}
									<span className='month white'>p/month</span>
								</p>
							</div>
							{/*end pricing-top */}
							{/*begin pricing-bottom */}
							<div className='pricing-bottom'>
								<ul>
									<li>1 GB of space</li>
									<li>200 messages</li>
									<li>unlimited updates</li>
									<li>1 user acounts</li>
									<li>2 databases</li>
								</ul>
								<a href className='btn btn-md btn-block btn-pricing-blue'>
									REGISTER TODAY
								</a>
							</div>
							{/*end pricing-bottom */}
						</div>
						{/*end pricing-box */}
					</div>
					{/*end col-sm-4 */}
				</div>
				{/*end row*/}
				{/*begin row*/}
				<div className='row'>
					{/*begin col-md-12*/}
					<div className='col-md-12 text-center'>
						<p>
							*With more than <span className='bold'>25078 clients</span>, we
							aim to offer premium{' '}
							<span className='bold'>marketing solutions</span> for your
							business.
						</p>
					</div>
					{/*end col-md-12*/}
				</div>
				{/*end row*/}
			</div>
			{/*end container*/}
		</section>
	);
}

export default Pricing;
