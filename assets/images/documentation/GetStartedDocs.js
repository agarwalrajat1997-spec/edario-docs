import React from 'react';

import get_started_img from '../../../images/search_docs.jpg';

export default function GetStartedDocs() {
	
	return (
		<div className='documentation-page'>
			<div className='page-main-heading'>Getting Started</div>
			<p>Edario is the simpler way to schedule. Get started by searching through our documentation for answers.</p>
			<div id='getting-started-image-container'>
				<img id='getting-started-image' src={get_started_img} alt='Search Docs'/>
			</div>
			<p>If you still can&rsquo;t find what you&rsquo;re looking for, feel free to contact our award-winning support team at contact@edario.com.</p>
		</div>
	);
}