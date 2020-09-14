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
                <img src={project0} />
                <img src={project1} />
                <img src={project2} />
                <img src={project3} />
                <img src={project4} />
            </div>            
        </div>
    )
}


export default Projects
// function Projects() {
//     AOS.init({
//         duration: 1200,
//       })

//     return (
//         <div className='project'>

//             <div className='project__logo'>
//                 Some Of My <span>FEATURE</span> Projects
//             </div>

//                 <section data-aos="fade" className='card'>
//                     <img src={project0}/>

//                     <div>
//                         <h3>Expensify App</h3>
//                         <p>
//                             Say Hi to the new <strong>Expenses recorder</strong>.
//                             in this web-App you just have to simply log in with your Google account 
//                             for your specific account identification and then you can add, remove,
//                             makes revision of your all type of expenses <strong>Securely</strong>

//                         </p>
//                         <a href='#'>Visit site</a>
//                         <br/>
//                         <a href='#'>View Code</a>
//                     </div>

//                 </section>

//                 <section data-aos="fade-up" className='card'>
//                     <img src={project1}/>

//                     <div>
//                     <h3>Amazon site</h3>
//                         <p>
//                             I just made a clone of <strong>Amazon.com</strong> to enclose my self comfortable  
//                             in E-commerce web development. Because E-commerce is a brilliant way to make your business scale-up
//                             on digital world. by this project i skill up my experience in react.js, Firebase, Context-API, 
//                             and other tools which are included in this project
//                         </p>
//                         <a href='#'>Visit site</a>
//                         <br/>
//                         <a href='#'>View Code</a>
//                     </div>
                    
//                 </section>

//                 <section data-aos="fade-up" className='card'>
//                     <img src={project2}/>

//                     <div>
//                     <h3>Indecision App</h3>
//                         <p>
//                             Here is the Todo-App which can definitely blow your mind by there suggestion
//                             functionality so that's why this project name is <strong>Indecision App</strong>.
//                             In this app you just put your daily routines, work, what to do, and other things.
//                             and simply push the button <strong>what should i do</strong> then the app suggests you
//                             what to do first. 
//                         </p>
//                         <a href='#'>Visit App</a>
//                         <br/>
//                         <a href='#'>View Code</a>
//                     </div>
                    
//                 </section>

//                 <section data-aos="fade-right" className='card'>
//                     <img src={project3}/>

//                     <div>
//                     <h3>Abdullah Enterprises</h3>
//                         <p>
//                             I made this website for my local client for there printing press.
//                             In this site you see animations, product display, and other components 
//                             to make every part involving in the marketing of there products
//                         </p>
//                         <a href='#'>Visit site</a>
//                         <br/>
//                         <a href='#'>View Code</a>
//                     </div>
                    
//                 </section>

//                 <section data-aos="fade-up" className='card'>
//                     <img src={project4}/>

//                     <div>
//                          <h3>Cat and Dog classifier</h3>
//                         <p>
//                             As you know Artificial Intelligence is involved in our daily life with platform of
//                             social media, security-systems, suggestions in different videos, and much more.
//                             so I work on this technology and find my <strong>love</strong> in Computer vision.
//                             with this i made a classifier for dog and cat.    
//                         </p>
//                         <a href='#'>View Code</a>
//                     </div>
                    
//                 </section>

//         </div>
//     )
// }

// export default Projects
