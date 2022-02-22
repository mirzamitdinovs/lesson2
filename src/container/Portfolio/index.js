import React from 'react';

function Portfolio() {
	return (
		<section className='section-white portfolio-padding' id='portfolio'>
			{/*begin container*/}
			<div className='container'>
				{/*begin row*/}
				<div className='row margin-bottom-50'>
					{/*begin col-md-12*/}
					<div className='col-md-12 text-center'>
						<h2 className='section-title'>Our Latest Work</h2>
						<div className='separator_wrapper'>
							<i className='icon icon-star-two blue' />
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
					<div className='col-sm-4 wow fadeIn' data-wow-delay='0.15s'>
						{/*begin popup-gallery*/}
						<div className='popup-gallery first-gallery portfolio-pic'>
							<a className='popup2' href='http://placehold.it/800x550'>
								<img
									src='http://placehold.it/800x550'
									className='width-100'
									alt='pic'
								/>
								<span className='eye-wrapper'>
									<i
										className='icon icon-cursor-move eye-icon'
										style={{ fontSize: '38px' }}
									/>
								</span>
							</a>
						</div>
						{/*end popup-gallery*/}
					</div>
					{/*end col-sm-4*/}
					{/*begin col-sm-4*/}
					<div className='col-sm-4 wow fadeIn' data-wow-delay='0.30s'>
						{/*begin popup-gallery*/}
						<div className='popup-gallery first-gallery portfolio-pic'>
							<a className='popup2' href='http://placehold.it/800x550'>
								<img
									src='http://placehold.it/800x550'
									className='width-100'
									alt='pic'
								/>
								<span className='eye-wrapper'>
									<i
										className='icon icon-cursor-move eye-icon'
										style={{ fontSize: '38px' }}
									/>
								</span>
							</a>
						</div>
						{/*end popup-gallery*/}
					</div>
					{/*end col-sm-4*/}
					{/*begin col-sm-4*/}
					<div className='col-sm-4 wow fadeIn' data-wow-delay='0.45s'>
						{/*begin popup-gallery*/}
						<div className='popup-gallery first-gallery portfolio-pic'>
							<a className='popup2' href='http://placehold.it/800x550'>
								<img
									src='http://placehold.it/800x550'
									className='width-100'
									alt='pic'
								/>
								<span className='eye-wrapper'>
									<i
										className='icon icon-cursor-move eye-icon'
										style={{ fontSize: '38px' }}
									/>
								</span>
							</a>
						</div>
						{/*end popup-gallery*/}
					</div>
					{/*end col-sm-4*/}
				</div>
				{/*end row*/}
				{/*begin row*/}
				<div className='row'>
					{/*begin col-sm-4*/}
					<div className='col-sm-4 wow fadeIn' data-wow-delay='0.60s'>
						{/*begin popup-gallery*/}
						<div className='popup-gallery first-gallery portfolio-pic'>
							<a className='popup2' href='http://placehold.it/800x550'>
								<img
									src='http://placehold.it/800x550'
									className='width-100'
									alt='pic'
								/>
								<span className='eye-wrapper'>
									<i
										className='icon icon-cursor-move eye-icon'
										style={{ fontSize: '38px' }}
									/>
								</span>
							</a>
						</div>
						{/*end popup-gallery*/}
					</div>
					{/*end col-sm-4*/}
					{/*begin col-sm-4*/}
					<div className='col-sm-4 wow fadeIn' data-wow-delay='0.75s'>
						{/*begin popup-gallery*/}
						<div className='popup-gallery first-gallery portfolio-pic'>
							<a className='popup2' href='http://placehold.it/800x550'>
								<img
									src='http://placehold.it/800x550'
									className='width-100'
									alt='pic'
								/>
								<span className='eye-wrapper'>
									<i
										className='icon icon-cursor-move eye-icon'
										style={{ fontSize: '38px' }}
									/>
								</span>
							</a>
						</div>
						{/*end popup-gallery*/}
					</div>
					{/*end col-sm-4*/}
					{/*begin col-sm-4*/}
					<div className='col-sm-4 wow fadeIn' data-wow-delay='1s'>
						{/*begin popup-gallery*/}
						<div className='popup-gallery first-gallery portfolio-pic'>
							<a className='popup2' href='http://placehold.it/800x550'>
								<img
									src='http://placehold.it/800x550'
									className='width-100'
									alt='pic'
								/>
								<span className='eye-wrapper'>
									<i
										className='icon icon-cursor-move eye-icon'
										style={{ fontSize: '38px' }}
									/>
								</span>
							</a>
						</div>
						{/*end popup-gallery*/}
					</div>
					{/*end col-sm-4*/}
				</div>
				{/*end row*/}
			</div>
			{/*end container*/}
		</section>
	);
}

export default Portfolio;
