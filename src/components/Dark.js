import React from 'react'
// import { gsap } from './'

const Dark = () => {
    gsap.registerPlugin(ScrollTrigger);

    // const images = gsap.utils.toArray('img');
    // const loader = document.querySelector('.loader--text');
    const updateProgress = (instance) => 
      loader.textContent = `${Math.round(instance.progressedCount * 100 / images.length)}%`;
    
    const showDemo = () => {
      document.body.style.overflow = 'auto';
      document.scrollingElement.scrollTo(0, 0);
      gsap.to(document.querySelector('.loader'), { autoAlpha: 0 });
      
      gsap.utils.toArray('section').forEach((section, index) => {
        const w = section.querySelector('.wrapper');
        const [x, xEnd] = (index % 2) ? ['100%', (w.scrollWidth - section.offsetWidth) * -1] : [w.scrollWidth * -1, 0];
        gsap.fromTo(w, {  x  }, {
          x: xEnd,
          scrollTrigger: { 
            trigger: section, 
            scrub: 0.5 
          }
        });
      });
    }
    
    imagesLoaded(images).on('progress', updateProgress).on('always', showDemo);
    return (
        <div class='loader df aic jcc'>
            
            <div class='demo-wrapper'>
            <section class='demo-text'>
                <div class='wrapper text'>
                ABCDEFGHIJKLMNOPQRSTUVWXYZ
                </div>
            </section>
            
            <section class='demo-text'>
                <div class='wrapper text'>
                ABCDEFGHIJKLMNOPQRSTUVWXYZ
                </div>
            </section>
            </div>
        </div>

    )
}

export default Dark
