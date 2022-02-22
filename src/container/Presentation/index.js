import React from 'react';

function Presentation() {
	return (
		<section className='section-white medium-padding'>
			{/*begin container*/}
			<div className='container'>
				{/*begin row*/}
				<div className='row'>
					{/*begin col-md-6*/}
					<div className='col-md-6 margin-top-30 margin-bottom-30'>
						<iframe
							src='http://player.vimeo.com/video/69988283?title=0&byline=0&portrait=0'
							height={312}
							width={555}
						/>
					</div>
					{/*end col-sm-6*/}
					{/*begin col-md-6*/}
					<div className='col-md-6 margin-top-35 margin-bottom-30'>
						<h3 className='medium-title'>Watch the video presentation.</h3>
						<p>
							Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
							aut fugit, sed quia magni dolores eos qui ratione sequi nesciunt.
							Neque porro quisquam est, qui ipsum quiaim netsum. Consequuntur
							sequimagni.
						</p>
						<p>
							Consequuntur magni netsum es qui ratione sequi nesciunt. Neque
							vetim quisquat, quia voluptas quistri ipsum quiaim magni eti
							ratione.
						</p>
						<a href='#' className='btn btn-lg btn-blue small margin-top-10'>
							Discover More
						</a>
					</div>
					{/*end col-sm-6*/}
				</div>
				{/*end row*/}
			</div>
			{/*end container*/}
		</section>
	);
}

export default Presentation;
