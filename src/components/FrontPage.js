import React from 'react'
import creative1 from '../../public/images/creative1.jpg'
import { Parallax } from 'react-parallax'


const FrontPage = () => {
    
    return (
        <div className='frontpage'>
            <div className='frontpage__media'>
            
            <Parallax bgImage={creative1} strength={700}>
                {/* <div className='para'>
                    <h5>parallel</h5>
                </div> */}
                <div className='frontpage__text'>
                   <div className='name_text'>
                        <h2>I'm</h2> <h1>
                            <span className='a'>A</span>
                            <span className='h'>h</span>
                            <span className='s'>s</span>
                            <span className='e'>a</span>
                            <span className='n'>n</span>
                        </h1>
                   </div>
                     <div className='animate__line'>
                        And I'm specialized in Front-end-web-development <span>React-Apps and AI engineering</span>
                     </div>
                </div>
            </Parallax>
                



            
                {/* <div className='frontpage__text'>
                   <div className='ll'>
                        I'am <h1>
                            <span className='a'>A</span>
                            <span className='h'>h</span>
                            <span className='s'>s</span>
                            <span className='e'>a</span>
                            <span className='n'>n</span>
                        </h1>
                   </div>
                     <div className='animate__line'>
                        And Im developing <span></span>
                     </div>
                </div> */}
        
                

             </div>
        </div>
    )
}

export default FrontPage