import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';

export default function GenesisUploadPreviousSectionsDocs({ currentStep, handleGoToNextPage, handleGoToPreviousPage }) {
	return (
		<div className="documentation-page" data-page='courses'>
			<div className="documentation-step-page">
				<h2>Upload Previous Sections from Genesis</h2>
				{currentStep === 1 &&
					<>
					<p className='documentation-container-text-heading'>Step {currentStep}: <span>Log in to Genesis</span></p>
					<img className="documentation-image" src={require(`../images/genesis/logon_to_genesis.png`)}  alt='log on to genesis'/>
					</>
				}
				{currentStep === 2 &&
					<>
					<p className='documentation-container-text-heading'>Step {currentStep}: <span>Select last year&rsquo;s data</span></p>
					<p>Before you start, you want to make sure you're pulling from last year's data. To do this simply change the dropdown menu in the top left corner to show last year&rsquo;s school year.</p>
					<img className="documentation-image" src={require(`../images/genesis/download_previous_sections/select_year.png`)} alt='select year' />
					</>
				}
				{currentStep === 3 &&
					<>
					<p className='documentation-container-text-heading'>Step {currentStep}: <span>Click "Scheduling" tab</span></p>
					<p>Click on the "Scheduling" tab on the top bar.</p>
					<img className="documentation-image" src={require(`../images/genesis/download_previous_sections/click_scheduling.png`)}  alt='click scheduling tab'/>
					</>
				}
				{currentStep === 4 &&
					<>
					<p className='documentation-container-text-heading'>Step {currentStep}: <span>Click "Sections" tab</span></p>
					<p>Click on the "Sections" tab right underneath the "Scheduling" tab.</p>
					<img className="documentation-image" src={require(`../images/genesis/download_previous_sections/click_sections_before.png`)}  alt='click sections before'/>
					<p>You should see the following Search screen:</p>
					<img className="documentation-image" src={require(`../images/genesis/download_previous_sections/click_sections_after.png`)}  alt='click sections after'/>
					</>
				}
				{currentStep === 5 &&
					<>
					<p className='documentation-container-text-heading'>Step {currentStep}: <span>Click "Search" button</span></p>
					<p>Without typing in any search terms, click on the "Search" button.</p>
					<img className="documentation-image" src={require(`../images/genesis/download_previous_sections/click_search_before.png`)} alt='click search before'/>
					<p>This should pull up all the sections from last year&rsquo;s schedule. It should look something like:</p>
					<img className="documentation-image" src={require(`../images/genesis/download_previous_sections/click_search_after.png`)} alt='click search after'/>
					</>
				}
				{currentStep === 6 &&
					<>
					<p className='documentation-container-text-heading'>Step {currentStep}: <span>Click the Excel icon in the top right</span></p>
					<p>Once all of last year&rsquo;s previous sections have been loaded, you should see a new Excel icon show up in the top right corner of your screen. <strong>Click on the Excel icon</strong>.</p>
					<img className="documentation-image" src={require(`../images/genesis/download_previous_sections/click_excel_before.png`)}  alt='click excel before'/>
					<p>This should prompt you to save an Excel version of last year&rsquo;s sections. Save it to your computer in whatever folder you want.</p>
					</>
				}
				{currentStep === 7 &&
					<>
					<p className='documentation-container-text-heading'>Step {currentStep}: <span>Check column headings</span></p>
					<p>Open the downloaded Excel file. <span className='red-text'>The order of the columns is NOT important</span>, but make sure you have the following pieces of data in your Excel file:</p>
					<table style={{width:'100%', margin:'30px 0px 30px 0px'}}>
						<tbody>
							<tr className='dark-blue'>
								<td style={{width:'7%'}}>A</td>
								<td style={{width:'7%'}}>B</td>
								<td style={{width:'7%'}}>C</td>
								<td style={{width:'3%'}}>D</td>
								<td style={{width:'3%'}}>E</td>
								<td style={{width:'3%'}}>F</td>
								<td style={{width:'7%'}}>G</td>
								<td style={{width:'3%'}}>H</td>
								<td style={{width:'3%'}}>I</td>
								<td style={{width:'7%'}}>J</td>
								<td style={{width:'3%'}}>K</td>
								<td style={{width:'7%'}}>L</td>
								<td style={{width:'3%'}}>M</td>
								<td style={{width:'7%'}}>N</td>
							</tr>
							<tr style={{fontSize:'12px'}}>
								<td style={{border:'1px solid #efefef'}}>Semester</td>
								<td style={{border:'1px solid #efefef'}}>Course</td>
								<td style={{border:'1px solid #efefef'}}>Course Description</td>
								<td style={{border:'1px solid #efefef'}}>--</td>
								<td style={{border:'1px solid #efefef'}}>--</td>
								<td style={{border:'1px solid #efefef'}}>--</td>
								<td style={{border:'1px solid #efefef'}}>Rooms</td>
								<td style={{border:'1px solid #efefef'}}>--</td>
								<td style={{border:'1px solid #efefef'}}>--</td>
								<td style={{border:'1px solid #efefef'}}>Teachers</td>
								<td style={{border:'1px solid #efefef'}}>--</td>
								<td style={{border:'1px solid #efefef'}}>Credits</td>
								<td style={{border:'1px solid #efefef'}}>--</td>
								<td style={{border:'1px solid #efefef'}}>Beginning Seats</td>
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
					<img className="documentation-image" src={require(`../images/genesis/download_previous_sections/upload_into_edario.png`)}  alt='upload into edario'/>
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