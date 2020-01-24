import React, { useState } from 'react';




const JobSearchForm = (props) => {
    const [jobProperty, setJobProperty] = useState({skill:'',location:''})
    console.log(props)
    const handleChange=(e) => {
        e.preventDefault();
        setJobProperty({
            ...jobProperty, [e.target.name]: e.target.value
        })
    }
    return (
        <div className='search-form'>
           
           <input type='text'
                  name='skill'
                  value={jobProperty.skill}
                  onChange={handleChange}
                  placeholder='search jobs by skill' />
            
            <input type='text'
                  name='location'
                  value={jobProperty.location}
                  onChange={handleChange}
                  placeholder='near location' />

                  <button disabled={!jobProperty.skill || !jobProperty.location}onClick={() => props.fetchActivity(jobProperty.skill, jobProperty.location)}>Search</button>

                
        </div>
        )
}

export default JobSearchForm;