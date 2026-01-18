import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';

export default function AllSisUploadStudentsDocs({ sisList, sis, currentStep, handleGoToNextPage, handleGoToPreviousPage }) {
	const sis_info = sisList.find(sis_option => sis_option.sis === sis);
	const sis_name =sis_info.name;
	const sis_email = sis_info.email;
	const sis_phone = sis_info.phone;
	
	return (
		<div className="documentation-page" data-page='courses'>
			<div className="documentation-step-page">
				<h2>Upload Student Requests from {sis_name}</h2>
				{currentStep === 1 &&
					<>
					<p className='documentation-container-text-heading'>Step {currentStep}: <span>Contact {sis_name} Support</span></p>
					<div className='documentation-contact-support-container'>
						<img src={require(`../../../../images/${sis}_logo.jpg`)} alt='sis logo'/>
						<div>
							<h4>Email</h4>
							{sis_email ? 
								(
									<div>{sis_email}</div>	
								):
								(
									<div>Sorry, we could not find an email for {sis_name}</div>
								)
							}
							<h4>Phone</h4>
							{sis_phone ? 
								(
									<div>{sis_phone}</div>	
								):
								(
									<div>Sorry, we could not find a phone number for {sis_name}</div>
								)
							}
						</div>
					</div>
					<p>Contact your rep at {sis_name} and tell them you need an Excel file with your student data for next year (this should include incoming students from the grades below).</p> 
					<p><span className='red-text'>The order of the columns is NOT important.</span>, but the Excel file should include:</p>
					<ul>
						<li>Student ID</li>
						<li>Next Year Grade Level</li>
						<li>Last Name</li>
						<li>First Name</li>
						<li>Gender</li>
						<li>Has Active IEP</li>
					</ul>
					</>
				}
				{currentStep === 2 && 
					<>
					<p className='documentation-container-text-heading'>Step {currentStep}: <span>Upload Excel file into Edario</span></p>
					<p>Once you&rsquo;ve made sure all the columns are there, upload this file into Edario. You can do this by either dragging the file in, or by clicking on the upload icon and navigating to your saved Excel file.</p>
					<img className="documentation-image" src={require(`../images/genesis/download_courses/upload_into_edario.png`)}  alt='upload into edario'/>
					</>
				}
				{currentStep === 3 &&
					<div className='center-text'>
						<FontAwesomeIcon icon={faThumbsUp} style={{fontSize:'60px'}}/>
						<h1 style={{color:'#2980b9'}}>That&rsquo;s it!</h1> 
						<p>You&rsquo;ve successfully added your data to Edario!</p>
					</div>
				}
				<div className='documentation-step-btn-container'>
					{currentStep !== 1 && <div className="btn gray-btn" onClick={handleGoToPreviousPage}>Previous Step</div>}
					{currentStep !== 3 && <div className="btn green-btn" onClick={handleGoToNextPage}>Next Step</div>}
				</div>
			</div>
		</div>
	);
}