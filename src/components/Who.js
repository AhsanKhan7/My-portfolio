 import React from 'react'

 import ScrollAnimation from 'react-animate-on-scroll';

function Who() {
    return (
        <div className='who'>
            <div className='who__media'>
        
                <h5>
                   <ScrollAnimation animateIn="fadeIn" >
                        As you see above that's I'm working on web-development, AI models, and react-web App.
                         here I define you briefly.  I started programming since 2 years back in this journey
                        I learned a lot from different technologies, but my favorite expertise is in <strong style={{ fontWeight: '800'}} >React.js, HTML,
                        SCSS, Bootstrap, Gatsby, Javascript, Advance Python, TensorFlow, Keras,</strong> and much <strong>more</strong>.
                         with these technologies you can see my some Projects given below...
                    </ScrollAnimation>
                </h5>
        
                    <h2>who<span style={{ marginLeft:'10px', fontWeight: '100'}}>Iam</span></h2>
            
                </div>
            
        </div>
    )
}

export default Who