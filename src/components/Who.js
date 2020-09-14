 import React from 'react'
import AOS from 'aos'


function Who() {
    AOS.init({
        duration: 1200,
      })
    return (
        <div className='who'>
            <div className='who__media'>
        
                <h5 data-aos="fade-up">
                
                        As you see above that's I'm working on web development, AI models, and react-web App.
                         here I define you briefly.  I started programming since 2 years back in this journey
                        I learned a lot from different technologies, but my favorite expertise is in <strong>React.js, HTML,
                        SCSS, Bootstrap, Gatsby, Javascript, Advance Python, TensorFlow, Keras</strong>, and much more.
                         with these technologies you can see my some <strong>Projects</strong> given below...
                
                </h5>
        
                    <h2>who<span style={{ marginLeft:'10px', fontWeight: '100'}}>Iam</span></h2>
            
                </div>
            
        </div>
    )
}

export default Who