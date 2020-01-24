import React from 'react';



const Job = (props)=> {
    return (
        <div className='job'>
            <h4>{props.job.title}</h4>
            <p>Location: {props.job.location}</p>
            <p>Company: {props.job.company}</p>
            <p>Company: {props.job.company_url}</p>
        </div>
    )
}

export default Job;