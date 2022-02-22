import React from 'react';

function Banner() {
	const data = [
		{
			id: 1,
			icon: 'icon icon-design-pencil-rule-streamline',
			title:
				'Tendis tempor ante acu ipsum finibus, et atimus etims urna netsumiteda qui ratione lorem nets et sequi tempor.',
		},
		{
			id: 2,
			icon: 'icon icon-arrow-streamline-target',
			title:
				'Neque tempor ante acu ipsum nis finibus, atime quiamis ets netsumiteda qui tempor magni ets ipsum finibus.',
		},
		{
			id: 3,
			icon: 'icon icon-speech-streamline-talk-user',
			title: `Etiam tempor ante acu ipsum net finibus, atimus veilite nis netsumitedas qui tempor ratione estimat ipsum.`,
		},
	];
	return (
		<section id='home_wrapper' className='home-wrapper'>
			{/*begin gradient_overlay */}
			<div className='gradient_overlay' />
			{/*end gradient_overlay */}
			{/*begin container*/}
			<div className='container home-wrappe-inside'>
				{/*begin row*/}
				<div className='row margin-bottom-30'>
					{/*begin col-md-6*/}
					<div className='col-md-6 padding-top-20'>
						<h1 className='home-title wow fadeIn' data-wow-delay='0.25s'>
							Ready To Promote Your New
							<br />
							Business With BeSmart?
						</h1>
						<ul className='features-list-hero'>
							{data.map((item) => {
								return (
									<li className='wow fadeIn' data-wow-delay='0.5s'>
										<i className={item.icon} />
										{item.title}
									</li>
								);
							})}
						</ul>
					</div>
					{/*end col-md-6*/}
				</div>
				{/*end row*/}
			</div>
			{/*end container*/}
		</section>
	);
}

export default Banner;
