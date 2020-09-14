import React from 'react'
import creative1 from '../../public/images/creative1.jpg'
import { Parallax } from 'react-parallax'

const FrontPage = () => {

    return (
        <div className='frontpage'>
            <div className='frontpage__media'>
            
            <Parallax className='paral' bgImage={creative1} strength={700}>
                
                <div className='frontpage__text'>
                   <div className='name_text'>
                        <h2>I'm</h2> 
                            <h1 data-aos="fade-down" >
                                <span>A</span>
                                <span>h</span>
                                <span>s</span>
                                <span>a</span>
                                <span>n</span>
                            </h1>
                   </div>

                     <div data-aos="fade" className='animate__line'>
                        And I'm specialized in Front-end-web-development <span>React-Apps and AI Engineering</span>
                     </div>
                     
                </div>
            </Parallax>
                
             </div>
        </div>
    )
}

export default FrontPage