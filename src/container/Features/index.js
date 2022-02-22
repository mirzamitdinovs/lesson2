import React from 'react';

function Features() {
	return (
		<section id='features'>
			{/*begin section-white*/}
			<div className='section-white small-padding-bottom'>
				{/*begin container*/}
				<div className='container'>
					{/*begin row*/}
					<div className='row margin-bottom-30'>
						{/*begin col-md-12*/}
						<div className='col-md-12 text-center'>
							<h2 className='section-title'>Amazing Features</h2>
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
						{/*begin col-sm-4*/}
						<div className='col-sm-4 features-item'>
							<div className='icon-wrapper'>
								<i className='icon icon-settings-streamline-2 features-icon' />
							</div>
							<h3>Fully Customizable</h3>
							<p>
								Curabitur quam etsum lacus etsumis nulat iaculis ets vitae etsum
								nisle varius sed feugiat ligula aliquam ets vitae dictis netsum.
							</p>
						</div>
						{/*end col-sm-4*/}
						{/*begin col-sm-4*/}
						<div className='col-sm-4 features-item'>
							<div className='icon-wrapper'>
								<i className='icon icon-streamline-umbrella-weather features-icon' />
							</div>
							<h3>Responsive Design</h3>
							<p>
								Curabitur quam etsum lacus etsumis nulat iaculis ets vitae etsum
								nisle varius sed feugiat ligula aliquam ets vitae dictis netsum.
							</p>
						</div>
						{/*end col-sm-4*/}
						{/*begin col-sm-4*/}
						<div className='col-sm-4 features-item'>
							<div className='icon-wrapper'>
								<i className='icon icon-speech-streamline-talk-user features-icon' />
							</div>
							<h3>SEO Ready Code</h3>
							<p>
								Curabitur quam etsum lacus etsumis nulat iaculis ets vitae etsum
								nisle varius sed feugiat ligula aliquam ets vitae dictis netsum.
							</p>
						</div>
						{/*end col-sm-4*/}
					</div>
					{/*end row*/}
				</div>
				{/*end container*/}
			</div>
			{/*end section-white*/}
		</section>
	);
}

export default Features;
