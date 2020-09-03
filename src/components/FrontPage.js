import React from 'react'
import frontPic from '../../public/images/frontPic.jpg'

const FrontPage = () => {
    
    return (
        <div className='frontpage'>
            <div className='frontpage__media'>
                <img  src={frontPic} />
                

                <div className='frontpage__text'>
                     <span style={{ marginLeft: '110px' }}>I'am</span> <span style={{ marginLeft: '20px'}}>Ahsan</span>
                     <div className='animate__line'>
                        And Im developing <span></span>
                     </div>
                </div>
        
             </div>
        </div>
    )
}

export default FrontPage