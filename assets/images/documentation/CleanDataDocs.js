import React, { useState } from 'react';
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import clean_duplicates from './videos/clean_duplicates.webm';

import clean_data_teacher_availability from './videos/clean_data_teacher_availability.webm';
import clean_data_course_availability from './videos/clean_data_course_availability.webm';
import clean_data_course_caps from './videos/clean_data_course_caps.webm';
import clean_data_course_options from './videos/clean_data_course_options.webm';
import clean_data_other_course_options from './videos/clean_data_other_course_options.webm';
import clean_data_course_teachers from './videos/clean_data_course_teachers.webm';
import clean_data_classroom_details from './videos/clean_data_classroom_details.webm';
import clean_data_course_classrooms from './videos/clean_data_course_classrooms.webm';
import clean_data_teacher_classrooms from './videos/clean_data_teacher_classrooms.webm';

export default function CleanDataDocs({ topic, setTopic, userInfo, schoolType }) {
	const [cleanDataScreen, setCleanDataScreen] = useState(null);
	
	const topics = [{type:'clean_duplicates', name: 'Cleaning Duplicates'}, {type:'clean_department_data', name: 'Cleaning Department Data'}];
	const clean_data_screens = [
		{value: 'teacher_availability', display: 'Teacher Availability', color:'red'},
		{value: 'course_availability', display: 'Course Availability', color:'orange'},
		{value: 'course_caps', display: 'Course Caps', color:'yellow'},
		{value: 'course_options', display: 'Course Options', color:'bright-yellow'},
		{value: 'other_course_options', display: 'Other Course Options', color:'green'},
		{value: 'course_teachers', display: 'Course Teachers', color:'bright-green'},
		{value: 'classroom_details', display: 'Classroom Details', color:'turquoise'},
		{value: 'course_classrooms', display: 'Course Classrooms', color:'blue'},
		{value: 'teacher_classrooms', display: 'Teacher Classrooms', color:'purple'},
	]
	
	const chooseTopic = (new_topic) => {
		setCleanDataScreen(null);
		setTopic(new_topic);
	}
	
	if(userInfo && userInfo.role_id !== '1' && userInfo.role_id !== '2' && userInfo.role_id !== '5') setTopic('clean_department_data');
	
	return (
		<div className='documentation-page'>
			<div className='step-main-heading'>Cleaning Data</div>
			{(userInfo.role_id === '1' || userInfo.role_id === '2' || userInfo.role_id === '5') &&
				<>
				<p style={{margin:'30px 0px 10px 0px'}}>Which step do you need help with?</p>
				<div className='choose-topic'>
					{topics.map((topic_option, i) => (
						<Link className={`choose-topic-btn ${topic_option.type === topic ? 'choose-topic-btn-selected' : ''}`} to={`/app/${schoolType}/documentation/clean_data/${topic_option.type}`} onClick={() => chooseTopic(topic_option.type)} key={i}>{topic_option.name}</Link>	
					))}
				</div>
				</>
			}
			{topic === 'clean_duplicates' &&
				<div className='documentation-container'>
					<h2>Cleaning Duplicates</h2>
					<div className='documentation-goal-container'>
						<FontAwesomeIcon className='yellow-text' icon={faStar}/>
						<div>Your goal in this step is to review any potential duplicate data to ensure we are not including teachers, courses, or classrooms twice!</div>
					</div>
					<p>To get past this step, you need to review ALL duplicates and either mark them as okay by pressing <img style={{height:'30px', verticalAlign:'middle'}} src={require('../../../images/this_is_okay_btn.png')} alt='this is okay button'/> or by deleting any duplicate data.</p>
					<p>Once you clear all duplicates, the Save & Continue button should automatically show up at the bottom of your screen!</p>
					<video autoPlay={true} loop={true} muted style={{width:'100%'}} name="Clean Duplicates" src={clean_duplicates}></video>
				</div>
			}
			{topic === 'clean_department_data' &&
				<div className='documentation-container'>
					<h2>Cleaning Department Data</h2>
					<div className='documentation-goal-container'>
						<FontAwesomeIcon className='yellow-text' icon={faStar}/>
						<div>
							<p>Your goal in this step is to set all the constraints, restrictions, and rules that will go into creating your schedule.</p>
							<p><strong>Since this will determine how accurately your schedule prints out, cleaning department data is one of the most important steps in the scheduling process, so please take your time and do this carefully.</strong></p>
						</div>
					</div>
					{!cleanDataScreen &&
						<>
						<p style={{margin:'0px 0px 10px 0px'}}>Which screen do you need help with?</p>
						{clean_data_screens.map((screen_option, i) => (
							<div className='documentation-clean-data-screen-container' key={i} onClick={() => setCleanDataScreen(screen_option.value)}>
								<div className={`documentation-clean-data-screen-label ${screen_option.color}`}></div>
								<div>{screen_option.display}</div>
								<FontAwesomeIcon className='dark-blue-text' icon={faChevronRight}/>
							</div>
						))}
						</>
					}
					{cleanDataScreen &&
						<div className='blue-link medium-text' onClick={() => setCleanDataScreen(null)}><FontAwesomeIcon icon={faChevronLeft} style={{margin:'0px 10px 0px 0px'}}/>Back to All Screens</div>
					}
					{cleanDataScreen === 'teacher_availability' &&
						<>
						<h2 className='turquoise-text'>Teacher Availability</h2>
						<div>On this screen you can set any restrictions on teacher availability. By default teachers are available every period, but if you know that a certain teacher cannot teach in a certain period, unselect it here.</div>
						<div className='documentation-clean-data-example-container'>
							<div><strong className='purple-text'>Example of why you might use this</strong></div>
							<div>Let&rsquo;s say you have a teacher Robert Branz who coaches soccer and needs to have last period free to account for travel time for games. You could unselect last period here so Robert Branz will not get scheduled there.</div>
						</div>
						<video autoPlay={true} loop={true} muted style={{width:'100%'}} name="Teacher Availability" src={clean_data_teacher_availability}></video>
						</>
					}
					{cleanDataScreen === 'course_availability' &&
						<>
						<h2 className='turquoise-text'>Course Availability</h2>
						<div>On this screen you can set any restrictions on course availability. By default courses can be taught during every period, but if you know that a certain course cannot run in a certain period, unselect it here.</div>
						<div className='documentation-clean-data-example-container'>
							<div><strong className='purple-text'>Example of why you might use this</strong></div>
							<div>Let&rsquo;s say you know that you want Concert Band to only run during first period. On this screen you can unselect all periods EXCEPT period 1 to ensure that Concert Band can only get scheduled there.</div>
						</div>
						<video autoPlay={true} loop={true} muted style={{width:'100%'}} name="Course Availability" src={clean_data_course_availability}></video>
						</>
					}
					{cleanDataScreen === 'course_caps' &&
						<>
						<h2 className='turquoise-text'>Course Caps</h2>
						<div>On this screen you can set any capacity contraints on a course. Restrict the max number of sections of a course that can be taught, as well as the max number of students that can be in a section of this course.</div>
						<div className='documentation-clean-data-example-container'>
							<div><strong className='purple-text'>Example of why you might use this</strong></div>
							<div>Let&rsquo;s say that Machine Woodworking is a really popular course and usually gets about 160 student requests, but you know that the teacher can only really run 2 sections of it, and the Woodshop can only hold 10 students safely. On this screen you can set the max number of sections to 2, and the max capacity for the course to 10.</div>
						</div>
						<video autoPlay={true} loop={true} muted style={{width:'100%'}} name="Clean Duplicates" src={clean_data_course_caps}></video>
						</>
					}
					{cleanDataScreen === 'course_options' &&
						<>
						<h2 className='turquoise-text'>Course Options</h2>
						<div>On this screen you can set the duration of a course (Full year vs Semester vs Quarter) and whether the course is an Elective or Non-Elective course.</div>
						<div className='documentation-clean-data-example-container'>
							<div><strong className='purple-text'>Example of why you might use this</strong></div>
							<div>Let&rsquo;s say AP Macro only runs for a semester (it could be either semester 1 or semester 2) and is an elective that students can opt into (not a mandatory class). On this screen you can set it&rsquo;s duration to "S-Semester" (you wouldn&rsquo;t want to set S1 or S2, since that restricts it to only one semester and AP Macro is allowed to be scheduled in either) and set it as an "Elective" course.</div>
						</div>
						<video autoPlay={true} loop={true} muted style={{width:'100%'}} name="Course Options" src={clean_data_course_options}></video>
						</>
					}
					{cleanDataScreen === 'other_course_options' &&
						<>
						<h2 className='turquoise-text'>Other Course Options</h2>
						<div>On this screen you can set special options for certain courses. For most courses these options will not be necessary, but we&rsquo;ve seen enough schools need these constraints that we created a screen for it!</div>
						<div className='documentation-clean-data-example-container'>
							<div><strong>Definitions:</strong></div>
							<div style={{marginTop:'15px'}}><strong className='turquoise-text'>Allow ICR Students</strong>: This option is for any course that has "inclusion" students (inclusion classes are ones that have a mix of general ed and special ed students). If you already have separate course codes for your inclusion courses DO NOT add this to the general ed course, only add it to the inclusion course.</div>
							<div style={{marginTop:'15px'}}><strong className='turquoise-text'>Needs Lab</strong>: This option is for any course that needs an extra lab period one day a week.</div>
							<div style={{marginTop:'15px'}}><strong className='turquoise-text'>Swappable for Lab</strong>: If at your school students skip courses during the week to go to lab instead, this option is for any course a student is allowed to skip for lab.</div>
							<div style={{marginTop:'15px'}}><strong className='turquoise-text'>Not In Schedule</strong>: This option is for any course that is not physically in the schedule. This can include any courses taken online or outside of the school.</div>
						</div>
						<div className='documentation-clean-data-example-container'>
							<div><strong className='purple-text'>Example of why you might use this</strong></div>
							<div>Let&rsquo;s say that usually students skip Physical Education to go to their lab, but this year you want to allow them to skip Business Dynamics as well. You also have some internships that are held at the local community college, and don&rsquo;t want to include them in the schedule. On this screen you can set Business Dynamics to be "Swappable for Lab" and set your internships, like Co-Op Internships, as "Not In Schedule".</div>
						</div>
						<video autoPlay={true} loop={true} muted style={{width:'100%'}} name="Other Course Options" src={clean_data_other_course_options}></video>
						</>
					}
					{cleanDataScreen === 'course_teachers' &&
						<>
						<h2 className='turquoise-text'>Course Teachers</h2>
						<div>On this screen you can set which teachers can teach the courses in your department.</div>
						<div className='documentation-clean-data-example-container'>
							<div><strong className='purple-text'>Example of why you might use this</strong></div>
							<div>Let&rsquo;s say Jonathan Pitt teaches AP Macro, but this year we want Robert Branz to teach it <strong>if Mr. Pitt is not available</strong>. On this screen you can set Jonathan Pitt as the "Primary" teacher and Robert Branz as the "Back Up" teacher.</div>
						</div>
						<video autoPlay={true} loop={true} muted style={{width:'100%'}} name="Course Teachers" src={clean_data_course_teachers}></video>
						</>
					}
					{cleanDataScreen === 'classroom_details' &&
						<>
						<h2 className='turquoise-text'>Classroom Details</h2>
						<div>On this screen you can set the type of classrooms that are in your department (e.g. Computer Labs, Physic Labs, Wood Shop, etc.) as well as if this classroom allows for multiple sections at a time.</div>
						<p><span className='red-text'>NOTE</span>: Setting a classroom type is OPTIONAL. Setting it is useful though, since it can make searching for classrooms much easier (especially during editing).</p>
						<div className='documentation-clean-data-example-container'>
							<div><strong className='purple-text'>Example of why you might use this</strong></div>
							<div>Let&rsquo;s say that during a single period, there are multiple sections of Phys Ed going on in the gym, but the gym can hold up to 200 people max. In Edario, classrooms are only allowed to hold one section by default, so on this screen you would want to make sure that the the gym (which at this school is Room 571) is allowed to hold multiple sections at a time and that it can have a max capacity of 200.</div>
						</div>
						<video autoPlay={true} loop={true} muted style={{width:'100%'}} name="Classroom Details" src={clean_data_classroom_details}></video>
						</>
					}
					{cleanDataScreen === 'course_classrooms' &&
						<>
						<h2 className='turquoise-text'>Course Classrooms</h2>
						<div>On this screen you can set whether certain courses NEED to be in specific classrooms.</div>
						<div className='documentation-clean-data-example-container'>
							<div><strong className='purple-text'>Example of why you might use this</strong></div>
							<div>Let&rsquo;s say you have an AP Biology class that can only be in certain lab rooms. On this screen you can add the lab rooms (in this example, Rooms 716 and 717) that AP Bio is allowed to be in, and it will only get scheduled in those classrooms.</div>
						</div>
						<video autoPlay={true} loop={true} muted style={{width:'100%'}} name="Course Classrooms" src={clean_data_course_classrooms}></video>
						</>
					}
					{cleanDataScreen === 'teacher_classrooms' &&
						<>
						<h2 className='turquoise-text'>Teacher Classrooms</h2>
						<div>On this screen you can set any classroom preferences for teachers.</div>
						<p><span className='red-text'>NOTE</span>: This is only a preference. We will try to put teachers in this classroom first, but will place teachers in other classrooms if their preferred classroom is not available.</p>
						<div className='documentation-clean-data-example-container'>
							<div><strong className='purple-text'>Example of why you might use this</strong></div>
							<div>Let&rsquo;s say Kirsten Ayala has been teaching at your school for 20 years and has always taught in Room 855. You can set that as her preferred classroom here.</div>
						</div>
						<video autoPlay={true} loop={true} muted style={{width:'100%'}} name="Teacher Classrooms" src={clean_data_teacher_classrooms}></video>
						</>
					}
				</div>
			}
		</div>
	);
}