import React from 'react'
import './AskQuestion.css';
function AskQuestion() {

return (
<div className='container'>
   <div className='askQuestion'>
      <div className='d-flex flex-column'>
      <h5>Have a question about Tyres?</h5>
      <p>Get an answer in 24 hours from our experts.</p>
      </div>
      <div className='d-flex'>
         <input type='text' value={""} placeholder='Ask or search your question'/>
         <button className='askBtn'>Submit</button>
      </div>
   </div>
</div>
)
}
export default AskQuestion