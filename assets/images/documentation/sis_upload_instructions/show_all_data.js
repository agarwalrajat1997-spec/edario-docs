import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileExcel } from '@fortawesome/free-regular-svg-icons';

export default function ShowAllData({ sisList, sis}) {
	const sis_info = sisList.find(sis_option => sis_option.sis === sis);
	const sis_name =sis_info.name;
	const sis_email = sis_info.email;
	const sis_phone = sis_info.phone;
	
	return (
		<div className="documentation-page" data-page='courses'>
			<div className="documentation-step-page">
				<h2>All Data Needed from {sis_name}</h2>
				<div className='documentation-contact-support-container'>
					<img src={require(`../../../../images/${sis}_logo.jpg`)} alt='sis logo' />
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
				<p>Contact your rep at {sis_name} and tell them you need the following Excel files (<span className='red-text'>The order of the columns in these files is NOT important.</span>):</p> 
				<div id='show-all-data-container'>
					<div className='show-all-data-file-container'>
						<div className='show-all-data-heading'>
							<FontAwesomeIcon icon={faFileExcel} className='green-text show-all-data-file-icon'/>
							<strong>Course Data</strong>
						</div>
						<ul>
							<li>Course Code</li>
							<li>Course Name</li>
							<li>Credits</li>
							<li>Department</li>
							<li>Elective/Non-elective</li>
							<li>Course Length (Full Year, Semester, Quarter)</li>
						</ul>
					</div>
					<div className='show-all-data-file-container'>
						<div className='show-all-data-heading'>
							<FontAwesomeIcon icon={faFileExcel} className='green-text show-all-data-file-icon'/>
							<strong>Last Year&rsquo;s Sections</strong>
						</div>
						<ul>
							<li>Semester</li>
							<li>Course</li>
							<li>Course Name</li>
							<li>Room(s)</li>
							<li>Teacher(s)</li>
							<li>Credits</li>
							<li>Beginning Seats</li>
						</ul>
					</div>
					<div className='show-all-data-file-container'>
						<div className='show-all-data-heading'>
							<FontAwesomeIcon icon={faFileExcel} className='green-text show-all-data-file-icon'/>
							<strong>Student Data</strong>
						</div>
						<ul>
							<li>Student ID</li>
							<li>Next Year Grade Level</li>
							<li>Last Name</li>
							<li>First Name</li>
							<li>Gender</li>
							<li>Has Active IEP</li>
						</ul>
					</div>
					<div className='show-all-data-file-container'>
						<div className='show-all-data-heading'>
							<FontAwesomeIcon icon={faFileExcel} className='green-text show-all-data-file-icon'/>
							<strong>Student Requests</strong>
						</div>
						<ul>
							<li>Student ID</li>
							<li>School Code</li>
							<li>Course Code</li>
							<li>Course Name</li>
							<li>Alternate Course Code (only if students select alternate courses for their electives)</li>
							<li>Next Grade Level</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}