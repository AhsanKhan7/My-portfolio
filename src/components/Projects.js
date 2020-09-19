import React from 'react'
import AOS from 'aos'
import project0 from '../../public/images/project0.png'
import project1 from '../../public/images/project1.png'
import project2 from '../../public/images/project2.png'
import project3 from '../../public/images/project3.png'
import project4 from '../../public/images/project4.png'



const Projects = () => {
    AOS.init({
        duration: 1200,
      })

    return (
        <div className='projects'>
            <div className='project__logo'>
                <h1>Some of my <span data-aos="fade-left">feature</span> projects</h1>
            </div>
            
            <div className='images'>
                    <div className="container">
                             <img src={project0} />
                        <div className="overlay overlayleft">
                            <div className="text">
                                <h2>Expensify App</h2>
                                <h5>for expences entry</h5>
                                <div className='text-links'>
                                    <h5><a href="#">Visit site</a></h5>
                                    <h5><a href="#">View code</a></h5>
                                </div>
                                
                            </div>
                        </div>
                    </div>

                    <div className="container">
                             <img src={project1} />
                        <div className="overlay overlayleft ">
                            <div className="text">
                                <h2>Amazon clone</h2>
                                <h5>for my best practices in Ecommerce site</h5>
                                <div className='text-links'>
                                    <h5><a href="#">Visit site</a></h5>
                                    <h5><a href="#">View code</a></h5>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                             <img src={project2} />
                        <div className="overlay overlaytop">
                            <div className="text">
                                <h2>Indecision App</h2>
                                <h5>a new type of todo that suggests you what to do first</h5>
                                <div className='text-links'>
                                    <h5><a href="#">Visit site</a></h5>
                                    <h5><a href="#">View code</a></h5>
                                </div>
                            </div>
                        </div>
                    </div>

                
                    <div className="container">
                             <img src={project3} />
                        <div className="overlay overlaytop">
                            <div className="text">
                                <h2>Abdullah Enterprises</h2>
                                <h5>for printing press with animations</h5>
                                <div className='text-links'>
                                    <h5><a href="#">Visit site</a></h5>
                                    <h5><a href="#">View code</a></h5>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                             <img src={project4} />
                        <div className="overlay overlayleft">
                            <div className="text">
                                <h2>AI cat and dog classifier</h2>
                                <h5>for make my best practices in openCV</h5>
                                <div className='text-links'>
                                    <h5><a href="#">View code</a></h5>
                                </div>
                            </div>
                        </div>
                    </div>

            
            </div>     
            <div className='project__logo'>
                <h1>You can get more on my <span style={{ fontWeight: '1000'}}>Github</span></h1>
            </div>       
        </div>
    )
}


export default Projects