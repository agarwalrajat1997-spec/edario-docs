import React, { useState } from 'react';
import { Link } from "react-router-dom";


import ShowAllData from './sis_upload_instructions/show_all_data';

import AllSisUploadCoursesDocs from './sis_upload_instructions/all_sis_upload_courses';
import AllSisUploadPreviousSectionsDocs from './sis_upload_instructions/all_sis_upload_previous_sections';
import AllSisUploadStudentsDocs from './sis_upload_instructions/all_sis_upload_students';
import AllSisUploadStudentRequestsDocs from './sis_upload_instructions/all_sis_upload_student_requests';

import GenesisUploadCoursesDocs from './sis_upload_instructions/genesis_upload_courses';
import GenesisUploadPreviousSectionsDocs from './sis_upload_instructions/genesis_upload_previous_sections';
import GenesisUploadStudentsDocs from './sis_upload_instructions/genesis_upload_students';
import GenesisUploadStudentRequestsDocs from './sis_upload_instructions/genesis_upload_student_requests';

export default function UploadDataDocs({ topic, setTopic, sis, setSis, schoolType }) {
	const [allOrSpecific, setAllOrSpecific] = useState(null);
	const [currentStep, setCurrentStep] = useState(1);
	
	const topics = [
		{type:'upload_courses', name: 'Uploading Course Data'}, 
		{type:'upload_previous_sections', name: 'Uploading Previous Sections'}, 
		{type:'upload_students', name: 'Uploading Student Data'}, 
		{type:'upload_student_requests', name: 'Uploading Student Requests'}
	];
	
	const sis_list = [
		{sis:'genesis', name: 'Genesis', phone:'732.521.2002', email:null}, 
		{sis:'realtime', name: 'Realtime', phone:'732.678.5142', email:' support@realitinc.com'}, 
		{sis:'powerschool', name: 'Powerschool', phone:'866.434.6276', email:null}, 
		{sis:'gradelink', name: 'Gradelink', phone:'800.742.3083', email:null}, 
		{sis:'skyward', name: 'Skyward', phone:'800.236.0001', email:null}, 
		{sis:'infinite_campus', name: 'Infinite Campus', phone:null, email:null}
	];
	
	const changeTopicType = (topic_type) => {
		if(topic_type === 'show_all_data') setAllOrSpecific(null);
		
		setTopic(topic_type);
		setCurrentStep(1);
	}
	
	const changeSIS = (new_sis) => {
		setSis(new_sis);
		setTopic(null);
		setAllOrSpecific(null);
		setCurrentStep(1);
	}
	
	const changeAllOrSpecific = () => {
		setTopic(null);
		setAllOrSpecific('specific');
		setCurrentStep(1);
	}
	
	const goToNextPage = () => {
		const next_page = currentStep + 1;
		setCurrentStep(next_page);
	}
	
	const goToPreviousPage = () => {
		const previous_page = Math.max(currentStep - 1, 1);
		setCurrentStep(previous_page);
	}
	
	return (
		<div className='documentation-page'>
			<div className='step-main-heading'>Upload Data</div>
			<p style={{margin:'30px 0px 10px 0px'}}>What system do you currently use?</p>
			<div className='choose-topic'>
				{sis_list.map((sis_option, i) => (
					<Link className={`sis-type-btn ${sis_option.sis === sis ? 'sis-type-btn-selected' : ''}`} to={`/app/${schoolType}/documentation/upload_data/null/${sis_option.sis}`} onClick={() => changeSIS(sis_option.sis)} key={i}>{sis_option.name}</Link>	
				))}
			</div>
			{sis &&
				<>
				<p style={{margin:'30px 0px 10px 0px'}}>What would you like to see?</p>
				<div className='choose-topic'>
					<Link className={`choose-topic-btn ${topic === 'show_all_data' ? 'choose-topic-btn-selected' : ''}`} to={`/app/${schoolType}/documentation/upload_data/show_all_data/${sis}`} onClick={() => changeTopicType('show_all_data')}>List of all data you will need</Link>
					<Link className={`choose-topic-btn ${allOrSpecific === 'specific' ? 'choose-topic-btn-selected' : ''}`} to={`/app/${schoolType}/documentation/upload_data/null/${sis}`} onClick={() => changeAllOrSpecific('specific')}>How to upload specific data</Link>	
				</div>
				</>
			}
			{allOrSpecific === 'specific' &&
				<>
				<p style={{margin:'30px 0px 10px 0px'}}>Which one would you like help with?</p>
				<div className='choose-topic'>
					{topics.map((topic_option, i) => (
						<Link className={`choose-topic-btn ${topic_option.type === topic ? 'choose-topic-btn-selected' : ''}`} to={`/app/${schoolType}/documentation/upload_data/${topic_option.type}/${sis}`} onClick={() => changeTopicType(topic_option.type)} key={i}>{topic_option.name}</Link>	
					))}
				</div>
				</>
			}
			{topic === 'show_all_data' ?
				(
					<ShowAllData sisList={sis_list} sis={sis} />
				) : (sis === 'genesis') ?
				(
					<>
					{topic === 'upload_courses' &&
						<GenesisUploadCoursesDocs currentStep={currentStep} handleGoToNextPage={goToNextPage} handleGoToPreviousPage={goToPreviousPage}/>
					}
					{topic === 'upload_previous_sections' &&
						<GenesisUploadPreviousSectionsDocs currentStep={currentStep} handleGoToNextPage={goToNextPage} handleGoToPreviousPage={goToPreviousPage}/>
					}
					{topic === 'upload_students' &&
						<GenesisUploadStudentsDocs currentStep={currentStep} handleGoToNextPage={goToNextPage} handleGoToPreviousPage={goToPreviousPage}/>
					}
					{topic === 'upload_student_requests' &&
						<GenesisUploadStudentRequestsDocs currentStep={currentStep} handleGoToNextPage={goToNextPage} handleGoToPreviousPage={goToPreviousPage}/>
					}
					</>
				) : (sis) ?
				(
					<>
					{topic === 'upload_courses' &&
						<AllSisUploadCoursesDocs sisList={sis_list} sis={sis} currentStep={currentStep} handleGoToNextPage={goToNextPage} handleGoToPreviousPage={goToPreviousPage}/>
					}
					{topic === 'upload_previous_sections' &&
						<AllSisUploadPreviousSectionsDocs  sisList={sis_list} sis={sis} currentStep={currentStep} handleGoToNextPage={goToNextPage} handleGoToPreviousPage={goToPreviousPage}/>
					}
					{topic === 'upload_students' &&
						<AllSisUploadStudentsDocs sisList={sis_list} sis={sis} currentStep={currentStep} handleGoToNextPage={goToNextPage} handleGoToPreviousPage={goToPreviousPage}/>
					}
					{topic === 'upload_student_requests' &&
						<AllSisUploadStudentRequestsDocs  sisList={sis_list} sis={sis} currentStep={currentStep} handleGoToNextPage={goToNextPage} handleGoToPreviousPage={goToPreviousPage}/>
					}
					</>
				) : (null)
				
			}
		</div>
	);
}