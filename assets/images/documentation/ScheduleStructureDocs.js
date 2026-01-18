import React, { useState } from 'react';
import { Link } from "react-router-dom";

import schedule_type from './images/schedule_type.png';

import lunch_structure_choose_options from './videos/lunch_structure_choose_options.webm';
import lunch_structure_change_times from './videos/lunch_structure_change_times.webm';
import lunch_structure_final_product from './images/lunch_structure_final_product.png';

import schedule_structure_choose_options_daily from './videos/schedule_structure_choose_options_daily.webm';
import schedule_structure_drag_daily from './videos/schedule_structure_drag_daily.webm';
import schedule_structure_change_schedule_period_name_daily from './videos/schedule_structure_change_schedule_period_name_daily.webm';
import schedule_structure_change_times_daily from './videos/schedule_structure_change_times_daily.webm';
import schedule_structure_final_product_daily from './images/schedule_structure_final_product_daily.png';

import schedule_structure_choose_options_block from './videos/schedule_structure_choose_options_block.webm';
import schedule_structure_drag_block from './videos/schedule_structure_drag_block.webm';
import schedule_structure_change_schedule_period_name_block from './videos/schedule_structure_change_schedule_period_name_block.webm';
import schedule_structure_change_times_block from './videos/schedule_structure_change_times_block.webm';
import schedule_structure_drop_block from './videos/schedule_structure_drop_block.webm';
import schedule_structure_change_course_period_name_block from './videos/schedule_structure_change_course_period_name_block.webm';
import schedule_structure_final_product_block from './images/schedule_structure_final_product_block.png';

export default function ScheduleStructureDocs({ topic, setTopic, schoolType }) {
	const [scheduleType, setScheduleType] = useState(null);
	const [currentStep, setCurrentStep] = useState(1);
	
	const topics = [{type:'schedule_type', name: 'Choosing Schedule Type'}, {type:'lunch_structure', name: 'Lunch Structure'}, {type:'schedule_structure', name: 'Schedule Structure'}];
	const schedule_types = ['daily', 'block'];
	
	const chooseTopic = (new_topic) => {
		setCurrentStep(1);
		setTopic(new_topic);
	}
	
	const chooseScheduleType = (schedule_type) => {
		setCurrentStep(1);
		setScheduleType(schedule_type);
	}
	
	return (
		<div className='documentation-page'>
			<div className='step-main-heading'>Schedule Structure</div>
			<p style={{margin:'30px 0px 10px 0px'}}>Which step do you need help with?</p>
			<div className='choose-topic'>
				{topics.map((topic_option, i) => (
					<Link className={`choose-topic-btn ${topic_option.type === topic ? 'choose-topic-btn-selected' : ''}`} to={`/app/${schoolType}/documentation/schedule_structure/${topic_option.type}`} onClick={() => chooseTopic(topic_option.type)} key={i}>{topic_option.name}</Link>	
				))}
			</div>
			{topic === 'schedule_type' &&
				<div className='documentation-container'>
					<h2>Choosing Schedule Type</h2>
					<img className='documentation-screen-image' src={schedule_type} alt='schedule type'/>
					<p className='documentation-container-text-heading' style={{marginTop:'30px'}}>Definitions:</p>
					<p><strong className='turquoise-text'>Daily Schedule</strong>: A daily schedule is one where courses do not change every day. If students take the same exact courses every single day of the week, that would be considered a daily schedule.</p>
					<p><strong className='turquoise-text'>Block Schedule</strong>: A block schedule is one where courses move or rotate depending on the day of the week.</p>
					<p className='documentation-container-text-heading'>What should I do if my schedule is unique?</p>
					<p>If you have a unique schedule please choose the <span className='turquoise-text'>Block Schedule</span> option. Unfortunately you may not be able to use Edario to auto-generate your schedule (since we won&rsquo;t know your exact schedule structure), but the Block Schedule option should give you enough flexibility to place sections manually.</p>
				</div>
			}
			{topic === 'lunch_structure' &&
				<div className='documentation-container'>
					<h2>Lunch Structure</h2>
					{currentStep === 1 &&
						<div>
							<p className='documentation-container-text-heading'>Step {currentStep}: <span>Choose Number of Lunches</span></p>
							<p>First click on the number of lunches that you have during your day.</p>
							<p>If you have 3 or 4 lunches, you will be asked how many courses a student takes during your <strong>"lunch block"</strong>.</p> 
							<p><strong className='purple-text'>Example</strong>: If the first lunch in your schedule starts at 10:30am and the last lunch ends at 1:30pm, then 10:30am-1:30pm is your <strong>"lunch block"</strong>. If during that time a student has his/her lunch plus 2 academic courses, then the answer to this question is <strong>2 courses</strong>.</p>
							<video  autoPlay={true} loop={true} muted style={{width:'100%'}} name="Lunch Structure Set Up" src={lunch_structure_choose_options}></video>
						</div>
					}
					{currentStep === 2 &&
						<div>
							<p className='documentation-container-text-heading'>Step  {currentStep}: <span>Set Lunch Times</span></p>
						<p>Carefully fill in the start and end times for each of your lunches. Make sure these are correct because they will be used to create your overall bell schedule!</p>
						<video  autoPlay={true} loop={true} muted style={{width:'100%'}} name="Lunch Structure Set Up" src={lunch_structure_change_times}></video>
						</div>
					}
					{currentStep === 3 &&
						<div>
							<p><strong>Final Product: <span className='turquoise-text'>What it Should Look Like</span></strong></p>
							<p>That&rsquo;s it! Your final product should look something like this:</p>
							<img className='documentation-screen-image' src={lunch_structure_final_product} alt='lunch structure final product'/>
						</div>
					}
					<div className='documentation-step-btn-container'>
						{currentStep !== 1 && <div className="btn gray-btn" onClick={() => setCurrentStep(currentStep - 1)}>Previous Step</div>}
						{currentStep !== 3 && <div className="btn green-btn" onClick={() => setCurrentStep(currentStep + 1)}>Next Step</div>}
					</div>
				</div>
			}
			{topic === 'schedule_structure' &&
				<div className='documentation-container'>
					<h2>Schedule Structure</h2>
					<p>Which schedule type do you have?</p>
					<div className='choose-topic'>
						{schedule_types.map((schedule_type, index) => (
							<div className={`choose-topic-btn capitalize ${schedule_type === scheduleType ? 'choose-topic-btn-selected' : ''}`} key={index} onClick={() => chooseScheduleType(schedule_type)}>{schedule_type}</div>
						))}
					</div>
					{scheduleType === 'daily' &&
						<>
						<h2 className='documentation-container-text-heading turquoise-text'><strong>For Daily Schedules</strong></h2>
						{currentStep === 1 &&
							<div>
								<p className='documentation-container-text-heading' style={{marginTop:'30px'}}>Step {currentStep}: <span>Choose Number of Academic Periods</span></p>
								<p>Since daily schedules are the same every day, all you need to do is choose the number of academic courses a student can take in a single day. Once you select, the screen should scroll down to show an editable bell schedule.</p>
								<video  autoPlay={true} loop={true} muted style={{width:'100%'}} name="Choose schedule structure options" src={schedule_structure_choose_options_daily}></video>
							</div>
						}
						{currentStep === 2 &&
							<div>
								<p><strong>Step {currentStep}: <span>Arrange Periods</span></strong></p>
								<p>Drag the periods of the editable schedule, until you have the right number of periods before and after the lunch block. Don&rsquo;t worry if the period names are off, you can edit those later!</p>
								<video  autoPlay={true} loop={true} muted style={{width:'100%'}} name="Arrange schedule periods" src={schedule_structure_drag_daily}></video>
							</div>
						}
						{currentStep === 3 &&
							<div>
								<p><strong>Step {currentStep} (optional): <span>Rename Periods</span></strong></p>
								<p>Change the period names to whatever you want!</p>
								<video  autoPlay={true} loop={true} muted style={{width:'100%'}} name="Change schedule period names" src={schedule_structure_change_schedule_period_name_daily}></video>
							</div>
						}
						{currentStep === 4 &&
							<div>
								<p><strong>Step {currentStep}: <span>Add Period Times</span></strong></p>
								<p>Set the start and end time of every period.</p>
								<p>During the lunch block, make sure you are setting start and end times based on <strong>class times</strong> and not lunch times.</p>
								<p><strong className='purple-text'>Example</strong>: At this example school, students can either have:</p> 
								<ul>
									<li>
										<div>Lunch A from 10:57am-11:27am</div>
										<div>2 classes after lunch in Periods 4B and 5C</div>
									</li>
									OR
									<li>
										<div>1 class before lunch in Period 4A</div>
										<div>Lunch B from 11:46am-12:16pm</div>
										<div>1 class after lunch in Period 5C</div>
									</li>
									OR
									<li>
										<div>2 classes before lunch in Periods 4A and 5B</div>
										<div>Lunch C from 12:35pm-1:05pm</div>
									</li>
								</ul>
								<p>Notice all periods during the lunch block are set up for Periods 4A, 4B, 5B, and 5C because these are the periods where students have courses (and NOT their lunches)!</p>
								<video  autoPlay={true} loop={true} muted style={{width:'100%'}} name="Change schedule period names" src={schedule_structure_change_times_daily}></video>
							</div>
						}
						{currentStep === 5 &&
							<div>
								<p><strong>Final Product: <span>What it Should Look Like</span></strong></p>
								<p>That&rsquo;s it! Your final product should look something like this:</p>
								<img className='documentation-screen-image' src={schedule_structure_final_product_daily} alt='daily schedule schedule structure final'/>
							</div>
						}
						<div className='documentation-step-btn-container'>
							{currentStep !== 1 && <div className="btn gray-btn" onClick={() => setCurrentStep(currentStep - 1)}>Previous Step</div>}
							{currentStep !== 5 && <div className="btn green-btn" onClick={() => setCurrentStep(currentStep + 1)}>Next Step</div>}
						</div>
						</>
					}
					{scheduleType === 'block' &&
						<>
						<h2 className='documentation-container-text-heading turquoise-text'><strong>For Block Schedules</strong></h2>
						{currentStep === 1 &&
							<div>
								<p><strong>Step {currentStep}: <span>Choose Number of Days In Rotation & Number of Academic Periods</span></strong></p>
								<p>Since block schedules rotate, we will need to know how many days are in your rotation.</p>
								<p>You will then need to choose the number of academic courses a student can take in a single day. Once you select both, the screen should scroll down to show an editable bell schedule.</p>
								<video  autoPlay={true} loop={true} muted style={{width:'100%'}} name="Choose schedule structure options" src={schedule_structure_choose_options_block}></video>
							</div>
						}
						{currentStep === 2 &&
							<div>
								<p><strong>Step {currentStep}: <span>Arrange Periods</span></strong></p>
								<p>Drag the periods of the editable schedule, until you have the right number of periods before and after the lunch block. Don&rsquo;t worry if the period names are off, you can edit those later!</p>
								<video  autoPlay={true} loop={true} muted style={{width:'100%'}} name="Arrange schedule periods" src={schedule_structure_drag_block}></video>
							</div>
						}
						{currentStep === 3 &&
							<div>
								<p><strong>Step {currentStep} (optional): <span>Rename Periods</span></strong></p>
								<p>Change the period names to whatever you want!</p>
								<video  autoPlay={true} loop={true} muted style={{width:'100%'}} name="Change schedule period names" src={schedule_structure_change_schedule_period_name_block}></video>
							</div>
						}
						{currentStep === 4 &&
							<div>
								<p><strong>Step {currentStep}: <span>Add Period Times</span></strong></p>
								<p>Set the start and end time of every period.</p>
								<p>During the lunch block, make sure you are setting start and end times based on <strong>class times</strong> and not lunch times.</p>
								<p><strong className='purple-text'>Example</strong>: At this example school, students can either have:</p> 
								<ul>
									<li>Lunch A from 10:30am-10:55am and then class from 11am-11:50am</li>OR <li>a class first from 10:30am-11:20am and then Lunch B from 11:25am-11:50am</li> 
								</ul>
								<p>In the editable schedule Lunch Class 1 would be set from 10:30am-11:20am (because this is when the first class runs) and Lunch Class 2 would be set from 11am-11:50am (because this is the second class that runs).</p>
								<video  autoPlay={true} loop={true} muted style={{width:'100%'}} name="Change schedule period names" src={schedule_structure_change_times_block}></video>
							</div>
						}
						{currentStep === 5 &&
							<div>
								<p><strong>Step {currentStep}: <span>Set Up Rotating Courses</span></strong></p>
								<p>Drag the courses on the right and drop them into the bell schedule to mimic how courses rotate in your schedule.</p>
								<video  autoPlay={true} loop={true} muted style={{width:'100%'}} name="Drag in course periods" src={schedule_structure_drop_block}></video>
							</div>
						}
						{currentStep === 6 &&
							<div>
								<p><strong>Step {currentStep} (optional): <span className='turquoise-text'>Rename Rotating Courses</span></strong></p>
								<p>Change the courses names to whatever you want!</p>
								<video  autoPlay={true} loop={true} muted style={{width:'100%'}} name="Change course period names" src={schedule_structure_change_course_period_name_block}></video>
							</div>
						}
						{currentStep === 7 &&
							<div>
								<p><strong>Final Product: <span>What it Should Look Like</span></strong></p>
								<p>That&rsquo;s it! Your final product should look something like this:</p>
								<img className='documentation-screen-image' src={schedule_structure_final_product_block} alt='block schedule schedule structure final'/>
							</div>
						}
						<div className='documentation-step-btn-container'>
							{currentStep !== 1 && <div className="btn gray-btn" onClick={() => setCurrentStep(currentStep - 1)}>Previous Step</div>}
							{currentStep !== 7 && <div className="btn green-btn" onClick={() => setCurrentStep(currentStep + 1)}>Next Step</div>}
						</div>
						</>
					}
					
				</div>
			}
		</div>
	);
}