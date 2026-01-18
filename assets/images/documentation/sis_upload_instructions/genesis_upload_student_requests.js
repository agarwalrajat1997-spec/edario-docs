import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';

export default function GenesisUploadStudentRequestsDocs({ currentStep, handleGoToNextPage, handleGoToPreviousPage }) {
	return (
		<div className="documentation-page" data-page='courses'>
			<div className="documentation-step-page">
				<h2>Upload Student Requests from Genesis</h2>
				{currentStep === 1 &&
					<>
					<p className='documentation-container-text-heading'>Step {currentStep}: <span>Log in to Genesis</span></p>
					<img className="documentation-image" src={require(`../images/genesis/logon_to_genesis.png`)}  alt='log on to genesis'/>
					</>
				}
				{currentStep === 2 &&
					<>
					<p className='documentation-container-text-heading'>Step {currentStep}: <span>Choose the correct year</span></p>
					<p>Before you start, make sure you&rsquo;re pulling student requests for the year you&rsquo;re trying to schedule. Do this by changing the dropdown menu in the top left corner.</p>
					<img className="documentation-image" src={require(`../images/genesis/download_student_requests/change_current_school_year.png`)} alt='select year' />
					</>
				}
				{currentStep === 3 &&
					<>
					<p className='documentation-container-text-heading'>Step {currentStep}: <span>>Click "Next Year Scheduling" tab</span></p>
					<p>Click on the "Next Year Scheduling" tab on the top bar.</p>
					<img className="documentation-image" src={require(`../images/genesis/download_student_requests/click_next_year_scheduling.png`)}  alt='click scheduling tab'/>
					</>
				}
				{currentStep === 4 &&
					<>
					<p className='documentation-container-text-heading'>Step {currentStep}: <span>Click "Reports" tab</span></p>
					<p>Click on the "Reports" tab right underneath the "Next Year Scheduling" tab, all the way to the right.</p>
					<img className="documentation-image" src={require(`../images/genesis/download_student_requests/click_reports_before.png`)}  alt='click reports before'/>
					<p>You should see the following screen:</p>
					<img className="documentation-image" src={require(`../images/genesis/download_student_requests/click_reports_after.png`)}  alt='click reports after'/>
					</>
				}
				{currentStep === 5 &&
					<>
					<p className='documentation-container-text-heading'>Step {currentStep}: <span>Click "Add Report Writer Report"</span></p>
					<p>Click on the "Add Report Writer Report" button. We are going to start to create our own report for student requests.</p>
					<img className="documentation-image" src={require(`../images/genesis/download_student_requests/click_add_report_writer_report_before.png`)} alt='click add report writer before'/>
					<p>You should see the following screen:</p>
					<img className="documentation-image" src={require(`../images/genesis/download_student_requests/click_add_report_writer_report_after.png`)} alt='click add report writer after'/>
					</>
				}
				{currentStep === 6 &&
					<>
					<p className='documentation-container-text-heading'>Step {currentStep}: <span>Name your report, and click "Add Report Writer Report"</span></p>
					<p>Put in whatever name you want for your report, and click "Add Report Writer Report".</p>
					<img className="documentation-image" src={require(`../images/genesis/download_student_requests/add_name_and_click_add_report_writer_report_before.png`)}  alt='add name after'/>
					<p>This should pull up all the report templates:</p>
					<img className="documentation-image" src={require(`../images/genesis/download_student_requests/add_name_and_click_add_report_writer_report_after.png`)} alt='add name after'/>
					</>
				}
				{currentStep === 7 &&
					<>
					<p className='documentation-container-text-heading'>Step {currentStep}: <span>Change the dropdown to the "Scheduling" option</span></p>
					<p>Click on the dropdown and select "Scheduling" to show all the report templates associated with scheduling.</p>
					<img className="documentation-image" src={require(`../images/genesis/download_student_requests/switch_to_scheduling_dropdown_before.png`)}  alt='switch to scheduling dropdown before'/>
					<p>This should pull up all the scheduling report templates:</p>
					<img className="documentation-image" src={require(`../images/genesis/download_student_requests/switch_to_scheduling_dropdown_after.png`)} alt='switch to scheduling dropdown after'/>
					</>
				}
				{currentStep === 8 &&
					<>
					<p className='documentation-container-text-heading'>Step {currentStep}: <span>Scroll down and click "StudentRequest"</span></p>
					<p>Scroll down the list of default reports and click on the one that says "StudentRequest".</p>
					<img className="documentation-image" src={require(`../images/genesis/download_student_requests/scroll_down_click_student_requests_before.png`)}  alt='scroll down and click student requests before'/>
					<p>This should bring up the report editor:</p>
					<img className="documentation-image" src={require(`../images/genesis/download_student_requests/scroll_down_click_student_requests_after.png`)} alt='scroll down and click student requests after'/>
					</>
				}
				{currentStep === 9 &&
					<>
					<p className='documentation-container-text-heading'>Step {currentStep}: <span>Add a new column to the report</span></p>
					<p>Click the dropdown under "Add new column from StudentRequest".</p>
					<img className="documentation-image" src={require(`../images/genesis/download_student_requests/click_add_new_column_dropdown.png`)}  alt='click add new column dropdown'/>
					<p>Select "courseDescription" from the list.</p>
					<img className="documentation-image" src={require(`../images/genesis/download_student_requests/select_dropdown_option.png`)} alt='select courseDescription'/>
					<p>Then click "Add" to add the new column to the report.</p>
					<img className="documentation-image" src={require(`../images/genesis/download_student_requests/click_add_new_column.png`)} alt='click add new column'/>
					</>
				}
				{currentStep === 10 &&
					<>
					<p className='documentation-container-text-heading'>Step {currentStep}: <span>Repeat the previous step to add other important columns</span></p>
					<p>Add the following columns to your report just like you did in the previous step:</p>
					<ul style={{width:'170px', margin:'auto'}}>
						<li>alternateCourseCode</li>
						<li>nextGradeLevel</li>
					</ul>
					<p>The final set up should look like this:</p>
					<img className="documentation-image" src={require(`../images/genesis/download_student_requests/final_setup_for_report.png`)} alt='final setup for report'/>
					</>
				}
				{currentStep === 11 &&
					<>
					<p className='documentation-container-text-heading'>Step {currentStep}: <span>Click "Save Field Changes"</span></p>
					<p>Just in case you ever want to run this report again, click "Save Field Changes" to save the columns you just added.</p>
					<img className="documentation-image" src={require(`../images/genesis/download_student_requests/click_save_fields.png`)} alt='click save fields'/>
					</>
				}
				{currentStep === 12 &&
					<>
					<p className='documentation-container-text-heading'>Step {currentStep}: <span>Click "Run this report" link</span></p>
					<p>To create this report click the "Run this report" link at the top.</p>
					<img className="documentation-image" src={require(`../images/genesis/download_student_requests/click_run_this_report_before.png`)} alt='click run report before'/>
					<p>You should see this screen:</p>
					<img className="documentation-image" src={require(`../images/genesis/download_student_requests/click_run_this_report_after.png`)} alt='click run report after'/>
					</>
				}
				{currentStep === 13 &&
					<>
					<p className='documentation-container-text-heading'>Step {currentStep}: <span>Change the output format</span></p>
					<p>To make the report print out as an Excel file, and not a PDF, change the output format to XLSX.</p>
					<img className="documentation-image" src={require(`../images/genesis/download_student_requests/change_output_format.png`)} alt='change output format'/>
					</>
				}
				{currentStep === 14 &&
					<>
					<p className='documentation-container-text-heading'>Step {currentStep}: <span>Click "Schedule Report" to create the Excel file</span></p>
					<p>You can now finally create the report by clicking "Schedule Report".</p>
					<img className="documentation-image" src={require(`../images/genesis/download_student_requests/click_schedule_report_before.png`)} alt='click schedule report before'/>
					<p>You should see a loading screen as the report gets generated:</p>
					<img className="documentation-image" src={require(`../images/genesis/download_student_requests/click_schedule_report_during.png`)} alt='click schedule report during'/>
					<p>Once the report is finished generating you should see this screen:</p>
					<img className="documentation-image" src={require(`../images/genesis/download_student_requests/click_schedule_report_after.png`)} alt='click schedule report after'/>
					</>
				}
				{currentStep === 15 &&
					<>
					<p className='documentation-container-text-heading'>Step {currentStep}: <span>Click "Download XLSX Report"</span></p>
					<p>Once the report is created you can click the "Download XLSX Report" button.</p>
					<img className="documentation-image" src={require(`../images/genesis/download_student_requests/click_download_xlsx_report.png`)} alt='click download xlsx report'/>
					<p>This should prompt you to save an Excel version of the student requests. Save it to your computer in whatever folder you want.</p>
					</>
				}
				{currentStep === 16 &&
					<>
					<p className='documentation-container-text-heading'>Step {currentStep}: <span>Check column headings</span></p>
					<p>Open the downloaded Excel file. <span className='red-text'>The order of the columns is NOT important</span>, but make sure you have the following pieces of data in your Excel file:</p>
					<table style={{width:'100%', margin:'30px 0px 30px 0px'}}>
						<tbody>
							<tr className='dark-blue'>
								<td style={{width:'7%'}}>A</td>
								<td style={{width:'7%'}}>B</td>
								<td style={{width:'7%'}}>C</td>
								<td style={{width:'7%'}}>D</td>
								<td style={{width:'7%'}}>E</td>
								<td style={{width:'7%'}}>F</td>
								<td style={{width:'7%'}}>G</td>
								<td style={{width:'7%'}}>H</td>
							</tr>
							<tr style={{fontSize:'12px'}}>
								<td style={{border:'1px solid #efefef'}}>--</td>
								<td style={{border:'1px solid #efefef'}}>Student ID</td>
								<td style={{border:'1px solid #efefef'}}>School Code</td>
								<td style={{border:'1px solid #efefef'}}>Course Code</td>
								<td style={{border:'1px solid #efefef'}}>--</td>
								<td style={{border:'1px solid #efefef'}}>CourseDescription</td>
								<td style={{border:'1px solid #efefef'}}>AlternateCourseCode</td>
								<td style={{border:'1px solid #efefef'}}>Next Grade Level</td>
							</tr>
						</tbody>
					</table>
					<p><span style={{color:'#c0392b'}}>Any columns labeled as "--" are not important, but you can keep them in the file.</span> If the order of the columns is not exactly as they are above, cut and paste entire columns in Excel to rearrange the columns.</p>
					</>
				}
				{currentStep === 17 &&
					<>
					<p className='documentation-container-text-heading'>Step {currentStep}: <span>Upload Excel file into Edario</span></p>
					<p>Once you&rsquo;ve made sure all the columns are there, upload this file into Edario. You can do this by either dragging the file in, or by clicking on the upload icon and navigating to your saved Excel file.</p>
					<img className="documentation-image" src={require(`../images/genesis/download_student_requests/upload_to_edario.png`)}  alt='upload into edario'/>
					</>
				}
				{currentStep === 18 &&
					<div className='center-text'>
						<FontAwesomeIcon icon={faThumbsUp} style={{fontSize:'60px'}}/>
						<h1 style={{color:'#2980b9'}}>That&rsquo;s it!</h1> 
						<p>You&rsquo;ve successfully added your data to Edario!</p>
					</div>
				}
				<div className='documentation-step-btn-container'>
					{currentStep !== 1 && <div className="btn gray-btn" onClick={handleGoToPreviousPage}>Previous Step</div>}
					{currentStep !== 18 && <div className="btn green-btn" onClick={handleGoToNextPage}>Next Step</div>}
				</div>
			</div>
		</div>
	);
}