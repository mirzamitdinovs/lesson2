import React from 'react';

function FeaturesBlue() {
	return (
		<section className='section-blue no-padding-bottom'>
			{/*begin container*/}
			<div className='container'>
				{/*begin row*/}
				<div className='row'>
					{/*begin col-md-6*/}
					<div className='col-md-6 margin-top-10 margin-bottom-30'>
						<h3 className='medium-title white'>
							Design &amp; style should always work toward making you feel good.
						</h3>
						<p className='white'>
							Nemo enim ipsam voluptatem quia voluptas sit aspernatur netsum
							lorem fugit, sed quia magni dolores eos qui ratione sequi
							nesciunt. Neque et poris ratione sequi enim ipsam voluptatem quia
							volupti tempor ante netsum quia magni.
						</p>
						<ul className='features-list-dark'>
							<li className='white'>
								<i className='icon icon-check-mark white' /> Netsum est, qui
								ipsum quiaim netsum sequi net tempor.
							</li>
							<li className='white'>
								<i className='icon icon-check-mark white' /> Etiam tempor ante
								acu ipsum finibus, atimus urnas.
							</li>
							<li className='white'>
								<i className='icon icon-check-mark white' /> Atimus urnas
								netsudat, qui ipsum quiaim netsum.
							</li>
							<li className='white'>
								<i className='icon icon-check-mark white' /> Etiam tempor ante
								acum ipsum et finibus.
							</li>
						</ul>
						<a href='#' className='btn btn-lg btn-white small'>
							Discover More
						</a>
					</div>
					{/*end col-sm-6*/}
					{/*begin col-md-6*/}
					<div className='col-md-6'>
						<img src='images/imac.png' className='width-100' alt='imac' />
					</div>
					{/*end col-sm-6*/}
				</div>
				{/*end row*/}
			</div>
			{/*end container*/}
		</section>
	);
}

export default FeaturesBlue;
