import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import assign_departments_add_new_department from './videos/assign_departments_add_new_department.webm';
import assign_departments_edit_department_name from './videos/assign_departments_edit_department_name.webm';
import assign_departments_delete_department from './videos/assign_departments_delete_department.webm';

import assigning_department_supervisors from './videos/assigning_department_supervisors.webm';
import assign_departments_dropdown from './videos/assign_departments_dropdown.webm';
import assign_departments_click_add_new_supervisor from './videos/assign_departments_click_add_new_supervisor.webm';
import create_new_user from './videos/create_new_user.webm';
import assign_departments_click_back_and_assign from './videos/assign_departments_click_back_and_assign.webm';
import assign_departments_final_product from './videos/assign_departments_final_product.webm';

export default function AssignResourcesDocs({ setTopic, userInfo, schoolType }) {
	const [supervisorsTopic, setSupervisorsTopic] = useState('default');
	const [editDepartmentTopic, setEditDepartmentTopic] = useState(null);
	const [currentStep, setCurrentStep] = useState(1);

	const chooseSupervisorTopic = (new_topic) => {
		setCurrentStep(1);
		setEditDepartmentTopic(null);
		
		if(supervisorsTopic === new_topic)
		{
			setSupervisorsTopic('default');
		}
		else
		{
			setSupervisorsTopic(new_topic);
		}
	}
	
	if(userInfo && userInfo.role_id !== '1' && userInfo.role_id !== '2' && userInfo.role_id !== '5') setTopic('assign_department_resources');
	
	return (
		<div className='documentation-page'>
			<div className='step-main-heading'>Assign Department Supervisors</div>
			<div className='documentation-container'>
				<h2>Assigning Department Supervisors</h2>
				<div className='documentation-goal-container'>
					<FontAwesomeIcon className='yellow-text' icon={faStar}/>
					<div>
						<div><strong>Your goal in this step is to</strong>:</div>
						<ol style={{margin:'10px 0px 0px 0px'}}>
							<li>check that you have all the correct departments at your school</li>
							<li>assign a supervisor to each department who will have access to help with all subsequent steps of the scheduling process.</li>
						</ol>
					</div>
				</div>
				<p style={{margin:'0px 0px 10px 0px'}}>Learn how to:</p>
				<div className='choose-topic' style={{margin:'0px 0px 10px 0px'}}>
					<div className={`choose-topic-btn ${supervisorsTopic === 'edit_departments' ? 'choose-topic-btn-selected' : ''}`} onClick={() => chooseSupervisorTopic('edit_departments')}>Set Up Departments</div>
					<div className={`choose-topic-btn ${supervisorsTopic === 'create_users' ? 'choose-topic-btn-selected' : ''}`} onClick={() => chooseSupervisorTopic('create_users')}>Create New Users</div>
				</div>
				{supervisorsTopic === 'edit_departments' &&
					<>
					<p style={{margin:'20px 0px 10px 0px'}}>Would you like to:</p>
					<div className='choose-topic'>
						<div className={`choose-topic-btn ${editDepartmentTopic === 'add_department' ? 'choose-topic-btn-selected' : ''}`} onClick={() => setEditDepartmentTopic('add_department')}>Add a Department</div>
						<div className={`choose-topic-btn ${editDepartmentTopic === 'edit_department_name' ? 'choose-topic-btn-selected' : ''}`} onClick={() => setEditDepartmentTopic('edit_department_name')}>Edit a Department Name</div>
						<div className={`choose-topic-btn ${editDepartmentTopic === 'assign_supervisor' ? 'choose-topic-btn-selected' : ''}`} onClick={() => setEditDepartmentTopic('assign_supervisor')}>Assign a Supervisor</div>
						<div className={`choose-topic-btn ${editDepartmentTopic === 'delete_department' ? 'choose-topic-btn-selected' : ''}`} onClick={() => setEditDepartmentTopic('delete_department')}>Delete a Department</div>
					</div>
					{editDepartmentTopic === 'add_department' &&
						<>
						<h2 className='documentation-container-text-heading turquoise-text'>Add a New Department</h2>
						<p>To add a new department just scroll down to the bottom of your department list, and click on <span className='blue-text'>Add New Department</span>. You will just need to provide a department name and then click the check to confirm.</p>
						<video autoPlay={true} loop={true} muted style={{width:'100%'}} name="Assign Department - add department" src={assign_departments_add_new_department}></video>
						</>
					}
					{editDepartmentTopic === 'edit_department_name' &&
						<>
						<h2 className='documentation-container-text-heading turquoise-text'>Edit a Department Name</h2>
						<p>To edit a department name click on the edit button next to the department name and this should open a box to change the name. Click the check mark to save any changes.</p>
						<video autoPlay={true} loop={true} muted style={{width:'100%'}} name="Assign Department - edit department name" src={assign_departments_edit_department_name}></video>
						</>
					}
					{editDepartmentTopic === 'assign_supervisor' &&
						<>
						<h2 className='documentation-container-text-heading turquoise-text'>Assign a Supervisor</h2>
						<p>To assign a supervisor to a department, just click Assign a Department Supervisor, and choose the user you&rsquo;d like to be responsible for the department. <strong>You can always select yourself if you do not want anyone else managing a department</strong>.</p>
						<video autoPlay={true} loop={true} muted style={{width:'100%'}} name="Assign Department Supervisors" src={assigning_department_supervisors}></video>
						<p><strong className='red-text'>Important</strong>: Department supversiors ONLY have access to their OWN departments. They will not have control over any other department data.</p>
						<p><strong className='red-text'>Also Important</strong>: The master scheduler (aka admin) can override any decisions made by department supervisors, and will always have final say on the schedule.</p>
						</>
					}
					{editDepartmentTopic === 'delete_department' &&
						<>
						<h2 className='documentation-container-text-heading turquoise-text'>Delete a Department</h2>
						<p>To delete a department, click the circle with the x in the top right corner of the department box. You will be warned that deleting a department will remove it from all teachers, courses, and classrooms.</p>
						<p>If you are sure about this change, click the red Okay and your department should be removed.</p>
						<video autoPlay={true} loop={true} muted style={{width:'100%'}} name="Assign Department - delete department" src={assign_departments_delete_department}></video>
						</>	
					}
					</>
					
				}
				{supervisorsTopic === 'create_users' &&
					<>
					<h2 className='documentation-container-text-heading turquoise-text'>Create New Users</h2>
					{currentStep === 1 &&
						<div>
							<p className='documentation-container-text-heading'>Step {currentStep}: <span>Click "Assign New Supervisor" (in any departmen)</span></p>
							<p>To create a new supervisor, just click <span className='blue-text'>Assign New Supervisor</span> under any of your current departments. This should open a dropdown menu.</p>
							<video autoPlay={true} loop={true} muted style={{width:'100%'}} name="Assign Department - open dropdown" src={assign_departments_dropdown}></video>
						</div>
					}
					{currentStep === 2 &&
						<div>
							<p className='documentation-container-text-heading'>Step {currentStep}: <span>Click "Add New Supervisor"</span></p>
							<p>Now click on the <span className='blue-text'>Add New Supervisor</span> option. This should take you to the User Accounts settings page.</p>
							<video autoPlay={true} loop={true} muted style={{width:'100%'}} name="Assign Department - add new supervisor" src={assign_departments_click_add_new_supervisor}></video>
						</div>
					}
					{currentStep === 3 &&
						<div>
							<p className='documentation-container-text-heading'>Step {currentStep}: <span>Add a New Supervisor</span></p>
							<p>Add a new user under the Supervisors heading. It will ask you for some general background info (first and last name) as well as the user&rsquo;s email.</p>
							<video autoPlay={true} loop={true} muted style={{width:'100%'}} name="Create new user" src={create_new_user}></video>
						</div>
					}
					{currentStep === 4 &&
						<div>
							<p className='documentation-container-text-heading'>Step {currentStep}: <span>Click "Back to Previous Screen"</span></p>
							<p>Click the link to go back to the previous screen. Now when you open up the dropdown, the new user you created should show up in the list!</p>
							<video autoPlay={true} loop={true} muted style={{width:'100%'}} name="Assign Department - click back and assign" src={assign_departments_click_back_and_assign}></video>
						</div>
					}
					{currentStep === 5 &&
						<div>
							<p className='documentation-container-text-heading'>Step {currentStep}: <span>Add a Supervisor to Each Department</span></p>
							<p>Add a supervisor to every department! You can add yourself as the department supervisor if you do not want to assign it to anyone else.</p>
							<video autoPlay={true} loop={true} muted style={{width:'100%'}} name="Assign Department - final product" src={assign_departments_final_product}></video>
						</div>
					}
					<div className='documentation-step-btn-container'>
						{currentStep !== 1 && <div className="btn gray-btn" onClick={() => setCurrentStep(currentStep - 1)}>Previous Step</div>}
						{currentStep !== 5 && <div className="btn green-btn" onClick={() => setCurrentStep(currentStep + 1)}>Next Step</div>}
					</div>
					</>
				}
			</div>
		</div>
	);
}