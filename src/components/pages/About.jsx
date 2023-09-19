import React from 'react'
import mypic from '../../assets/IMG_9874.JPG'
import mypic2 from '../../assets/IMG_9385.JPG'
import mypic3 from '../../assets/IMG_9572.JPG'
import mypic4 from '../../assets/IMG_9470.JPG'
import mypic5 from '../../assets/IMG_9416.JPG'

const About = () => {
  return (
    <>
      <div id='about' className='relative bg-white overflow-hidden mt-16'>
        <div className='max-w-7xl mx-auto'>
          <div className='relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32'>
            <svg
              className='hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2'
              fill='currentColor'
              viewBox='0 0 100 100'
              preserveAspectRatio='none'
              aria-hidden='true'
            >
              <polygon points='50,0 100,0 50,100 0,100'></polygon>
            </svg>

            <div className='pt-1'></div>

            <main className='mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28'>
              <div className='sm:text-center lg:text-left'>
                <h2 className='my-6 text-2xl tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-4xl'>
                  About me
                </h2>

                <p className='mt-3 text-justify'>
                  With a solid background in computer science and hands-on
                  experience in various programming languages and technologies,
                  I'm driven by a curiosity to continuously learn and stay at
                  the forefront of technology trends.
                </p>

                <p className='mt-3 text-justify'>
                  My journey in software development has led me to work on a
                  diverse range <br/> of projects, from developing scalable web
                  applications to crafting intuitive <br/> user interfaces. I thrive
                  in collaborative environments, where I can contribute <br/>my
                  skills in problem-solving, algorithm design, and system
                  architecture.
                </p>

                <p className='mt-3 text-justify'>
                  When I'm not coding, you can find me exploring the latest tech<br/>
                  advancements,  contributing to open-source projects, or <br/>
                  indulging in a good sci-fi book. <br/><br/>I believe that every line of
                  code has the potential to make a positive impact,<br/> and I'm
                  dedicated to making that potential a reality.
                </p>

                <p className='mt-3 text-justify'>
                  Let's connect and collaborate on exciting projects that
                  challenge the status quo and push technological boundaries.
                  <br/>Feel free to reach out to me at davinderpandey5@gmail.com.
                </p>
              </div>
            </main>
          </div>
        </div>
        <div className='lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2'>
          <img
            className='h-56 w-full object-cover object-top sm:h-72 md:h-96 lg:w-full lg:h-full'
            src={mypic2}
            alt=''
          />
        </div>
      </div>
    </>
    // <div className="about-page">
    //   <h1>About Me</h1>
    //   <p>Hello! I'm [Your Name], a passionate software engineer with a knack for creating elegant and efficient solutions to complex problems.</p>

    //   <p>With a solid background in computer science and hands-on experience in various programming languages and technologies, I'm driven by a curiosity to continuously learn and stay at the forefront of technology trends.</p>

    //   <p>My journey in software development has led me to work on a diverse range of projects, from developing scalable web applications to crafting intuitive user interfaces. I thrive in collaborative environments, where I can contribute my skills in problem-solving, algorithm design, and system architecture.</p>

    //   <p>When I'm not coding, you can find me exploring the latest tech advancements, contributing to open-source projects, or indulging in a good sci-fi book. I believe that every line of code has the potential to make a positive impact, and I'm dedicated to making that potential a reality.</p>

    //   <p>Let's connect and collaborate on exciting projects that challenge the status quo and push technological boundaries. Feel free to reach out to me at [your email address] or connect with me on [your preferred social media platforms].</p>
    // </div>
  )
}

export default About
