import React from 'react';
import JobSearchForm from './JobSearchForm'
import Job from './Job'
import { connect } from 'react-redux';
import { fetchActivity } from '../actions';



const JobList = (props) => {
    console.log(!props.jobs)
    return (
        <div>
             {!props.isLoading && props.jobs === null && <p>Please enter your primary skill, location and click 'Search' button to search for jobs</p>}
            <JobSearchForm fetchActivity = {props.fetchActivity}/>
            <div>
            { props.jobs && props.jobs.length > 0 &&
                <div className='job-list'>
                {props.jobs.map(job => {
                    return <Job key={job.id} job={job}/>
                })}
                </div>
              
            }
            { props.jobs && props.jobs.length === 0 && <p>your search didn't return any result. Please modify the criteria and search again</p>}
            
            
            </div>
            
           
            
            

            

        </div>
    )
       
        
}
const mapPropsToState = (state) => {
  return {
    isLoading:state.isLoading,
    error: state.error,
    jobs: state.jobs
  }
}
export default connect(mapPropsToState,
        { fetchActivity} )(JobList)