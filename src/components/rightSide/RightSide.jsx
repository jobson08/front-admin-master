import React from 'react'
import Updates from '../../components/updates/Updates'
import CustomerReview from '../../components/customerReview/CustomerReview'
import './rightSide.css'


const RightSide = () => {
  return (
    <div className='RightSide'>
        <div>
            <h3>Updates</h3>
            <Updates/>
        </div>
        <div>
            <h3>customer Review</h3>
            <CustomerReview/>
        </div>
    </div>
  )
}

export default RightSide