import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';

export default function GenesisUploadCoursesDocs({ currentStep, handleGoToNextPage, handleGoToPreviousPage }) {
	return (
		<div className="documentation-page" data-page='courses'>
			<div className="documentation-step-page">
				<h2>Upload Courses from Genesis</h2>
				{currentStep === 1 &&
					<>
					<p className='documentation-container-text-heading'>Step {currentStep}: <span>Log in to Genesis</span></p>
					<img className="documentation-image" src={require(`../images/genesis/logon_to_genesis.png`)}  alt='log on to genesis'/>
					</>
				}
				{currentStep === 2 &&
					<>
					<p className='documentation-container-text-heading'>Step {currentStep}: <span>Select this year&rsquo;s data</span></p>
					<p>Before you start, you want to make sure you&rsquo;re pulling data from the year you want. To do this simply change the dropdown menu in the top left corner to pick the most recent school year.</p>
					<img className="documentation-image" src={require(`../images/genesis/download_courses/select_year.png`)} alt='select year' />
					</>
				}
				{currentStep === 3 &&
					<>
					<p className='documentation-container-text-heading'>Step {currentStep}: <span>Click "Scheduling" tab</span></p>
					<p>Click on the "Scheduling" tab on the top bar.</p>
					<img className="documentation-image" src={require(`../images/genesis/download_courses/click_scheduling.png`)}  alt='click scheduling tab'/>
					</>
				}
				{currentStep === 4 &&
					<>
					<p className='documentation-container-text-heading'>Step {currentStep}: <span>Click "Curriculum" tab</span></p>
					<p>Click on the "Curriculum" tab right underneath the "Scheduling" tab.</p>
					<img className="documentation-image" src={require(`../images/genesis/download_courses/click_curriculum_before.png`)}  alt='click curriculum before'/>
					<p>You should see the following screen:</p>
					<img className="documentation-image" src={require(`../images/genesis/download_courses/click_curriculum_after.png`)}  alt='click curriculum after'/>
					</>
				}
				{currentStep === 5 &&
					<>
					<p className='documentation-container-text-heading'>Step {currentStep}: <span>Click "Search" button</span></p>
					<p>Without typing in any search terms, click on the "Search" button.</p>
					<img className="documentation-image" src={require(`../images/genesis/download_courses/click_search_before.png`)} alt='click search before'/>
					<p>This should pull up all the courses from the most recent year. It should look something like:</p>
					<img className="documentation-image" src={require(`../images/genesis/download_courses/click_search_after.png`)} alt='click search after'/>
					</>
				}
				{currentStep === 6 &&
					<>
					<p className='documentation-container-text-heading'>Step {currentStep}: <span>Click the Excel icon in the top right</span></p>
					<p>Once the course list has been loaded, you should see a new Excel icon show up in the top right corner of your screen. <strong>Click on the Excel icon</strong>.</p>
					<img className="documentation-image" src={require(`../images/genesis/download_courses/click_excel_before.png`)}  alt='click excel before'/>
					<p>This should prompt you to save an Excel version of the course list. Save it to your computer in whatever folder you want.</p>
					</>
				}
				{currentStep === 7 &&
					<>
					<p className='documentation-container-text-heading'>Step {currentStep}: <span>Check column headings</span></p>
					<p>Open the downloaded Excel file. <span className='red-text'>The order of the columns is NOT important</span>, but make sure you have the following pieces of data in your Excel file:</p>
					<table style={{width:'100%', margin:'30px 0px 30px 0px'}}>
						<tbody>
							<tr style={{backgroundColor:'#2c3e50',color:'#fff'}}>
								<td style={{width:'7%'}}>A</td>
								<td style={{width:'3%'}}>B</td>
								<td style={{width:'7%'}}>C</td>
								<td style={{width:'7%'}}>D</td>
								<td style={{width:'3%'}}>E</td>
								<td style={{width:'3%'}}>F</td>
								<td style={{width:'3%'}}>G</td>
								<td style={{width:'3%'}}>H</td>
								<td style={{width:'3%'}}>I</td>
								<td style={{width:'3%'}}>J</td>
								<td style={{width:'3%'}}>K</td>
								<td style={{width:'7%'}}>L</td>
								<td style={{width:'7%'}}>M</td>
								<td style={{width:'3%'}}>N</td>
								<td style={{width:'3%'}}>O</td>
								<td style={{width:'3%'}}>P</td>
								<td style={{width:'7%'}}>Q</td>
							</tr>
							<tr style={{fontSize:'12px'}}>
								<td style={{border:'1px solid #efefef'}}>Code</td>
								<td style={{border:'1px solid #efefef'}}>--</td>
								<td style={{border:'1px solid #efefef'}}>Description</td>
								<td style={{border:'1px solid #efefef'}}>Credits</td>
								<td style={{border:'1px solid #efefef'}}>--</td>
								<td style={{border:'1px solid #efefef'}}>--</td>
								<td style={{border:'1px solid #efefef'}}>--</td>
								<td style={{border:'1px solid #efefef'}}>--</td>
								<td style={{border:'1px solid #efefef'}}>--</td>
								<td style={{border:'1px solid #efefef'}}>--</td>
								<td style={{border:'1px solid #efefef'}}>--</td>
								<td style={{border:'1px solid #efefef'}}>Type</td>
								<td style={{border:'1px solid #efefef'}}>Department</td>
								<td style={{border:'1px solid #efefef'}}>--</td>
								<td style={{border:'1px solid #efefef'}}>--</td>
								<td style={{border:'1px solid #efefef'}}>--</td>
								<td style={{border:'1px solid #efefef'}}>Course Length</td>
							</tr>
						</tbody>
					</table>
					<p><span style={{color:'#c0392b'}}>Any columns labeled as "--" are not important, but you can keep them in the file.</span> If the order of the columns is not exactly as they are above, cut and paste entire columns in Excel to rearrange the columns.</p>
					</>
				}
				{currentStep === 8 && 
					<>
					<p className='documentation-container-text-heading'>Step {currentStep}: <span>Upload Excel file into Edario</span></p>
					<p>Once you&rsquo;ve made sure all the columns are there, upload this file into Edario. You can do this by either dragging the file in, or by clicking on the upload icon and navigating to your saved Excel file.</p>
					<img className="documentation-image" src={require(`../images/genesis/download_courses/upload_into_edario.png`)}  alt='upload into edario'/>
					</>
				}
				{currentStep === 9 &&
					<div className='center-text'>
						<FontAwesomeIcon icon={faThumbsUp} style={{fontSize:'60px'}}/>
						<h1 style={{color:'#2980b9'}}>That&rsquo;s it!</h1> 
						<p>You&rsquo;ve successfully added your data to Edario!</p>
					</div>
				}
				<div className='documentation-step-btn-container'>
					{currentStep !== 1 && <div className="btn gray-btn" onClick={handleGoToPreviousPage}>Previous Step</div>}
					{currentStep !== 9 && <div className="btn green-btn" onClick={handleGoToNextPage}>Next Step</div>}
				</div>
			</div>
		</div>
	);
}