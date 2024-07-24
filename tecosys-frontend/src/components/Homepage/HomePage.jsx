import React from 'react';
import '../css files/main.css'
import tecosys1 from '../../images/comment.svg';
import tecosys2 from '../../images/repost.svg';


import tecosys from '../../images/logo-light.png'
import hero from '../../images/hero-homepage.png'

import scroll from '../../images/scroll.png'
import multilingual from '../../images/icons8-multilingual-48.png'
import imageNvid from '../../images/icons8-image&vid-50.png'
import debugging from '../../images/icons8-debugging-50.png'
import userenvironment from '../../images/icons8-user-friendly-64.png'
import airesearching from '../../images/icons8-ai-researching-48.png'

import arrowup from '../../images/up-arrow-.png'
import monitoring from '../../images/icons8-monitoring-48.png'
import opd from '../../images/icons8-enhanced-64.png'
import reminders from '../../images/icons8-horizontal-line-48.png'
import healthtech from '../../images/icons8-terra-tech-48.png'
import cloudsolutions from '../../images/icons8-cloud-development-48.png'
import topsecurity from '../../images/icons8-safety-care-48.png'
import paperless from '../../images/icons8-paperless-64.png'
import compliance from '../../images/icons8-compliance-40.png'
import feedback from '../../images/icons8-feedback-hub-64.png'

import attendance from '../../images/icons8-attendance-40.png'
import grading from '../../images/icons8-report-card-50.png'
import learning from '../../images/icons8-learning-100.png'
import insights from '../../images/icons8-customer-insights-manager-94.png'
import classrooms from '../../images/icons8-video-conference-64.png'


import HLEE from '../../images/communicated effectivey.webp'
import clouddev from '../..//images/icons8-cloud-development-48.png'
import optimalanswers from '../../images/consistently delivering optimal amswers.webp'

const HomePage = () => {
  return (

    <div className="home-page">

      <header className="header">
        <div className="logo">
          <img src = {tecosys} />
          <h6>Tecosys</h6>
          </div>
        <nav className="nav">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#others">Others</a>
            {/* <select></select> */}
            </li>
          </ul>
        </nav>
        <div className="header-buttons">
          <button>Login</button>
          <button>Sign Up Free</button>
        </div>
      </header>

       
       <div className="first-section section" >
        <div className="content">
          <h1 className='firstheading'> Explore the Next Generation AI Models with Tecosys </h1>
          <p>Tecosys is the hub of the next generation of AI models.
             We are building the next generation of AI models utilizing neuromorphic computing, 
             quantum machine learning, transformers, diffusion, and GAN technologies. Let's 
             explore our services and read the whitepaper.</p>
          
          <div className='homepage-button'>
          <button>Follow Us</button>
          <button>Read Whitepaper</button>
          <button>Start Chatting for Free</button>
          </div>
        </div>

        <div className='hero'><img src = {hero}/></div>
      </div>


      <div className="second-section section">
        <div className="features">

          <h2>Unparalleled Features for Enhanced Interaction</h2>
          <p>Discover how our advanced AI technologies are revolutionizing communication and efficiency.</p>

          <div className="features-list">

            <div className="feature">
              <img src={multilingual}/>
              <h4>Multilingual Model Support</h4>
              <p>Our AI chatbots excel in multilingual communication, effortlessly
                 interacting in various languages to ensure global inclusivity.</p>
            </div>

            <div className="feature">
              <img src={imageNvid}/>
              <h4>Image & Video Generation</h4>
              <p>Transforming text into stunning visuals, our AI chatbots generate high-quality images and 
                videos, bringing your ideas to life.</p>
            </div>

            <div className="feature">
              <img src={debugging}/>
              <h4>Code Generation & Debugging</h4>
              <p>Effortlessly generate and debug code with our AI, streamlining 
                development processes and enhancing productivity.</p>
            </div>

            <div className="feature">
            <img src={userenvironment}/>
            <h4>User-Friendly Environment</h4>
              <p>Enjoy seamless interactions with our intuitive, user-friendly environment designed for maximum productivity and ease of use.</p>
            </div>

            <div className="feature">
            <img src={airesearching}/>
            <h4>AI Engineer, AI Doctor, AI Researcher</h4>
              <p>Pioneering AI solutions, enhancing healthcare with intelligent diagnostics,
                 and driving groundbreaking research for innovative discoveries.</p>
            </div>

            </div>
         
          </div>
        </div>

        <div  className='third-section cards'>
        <div className="features hospital">
        <h2>Discover Our AI-Powered Hospital Management System</h2>
        <p>Unleash the power of AI to transform healthcare management 
          and enhance patient care.</p>
        <div className="hospital-cards cards">
          <div className="card card-one">
            <img src={arrowup}/>
            <h4> AI Doctor</h4>
            <p>Unleash the power of AI to transform healthcare management and enhance patient care.</p>
            {/* <img src={scroll} className='scroll'/> */}
          </div>
          <div className="card card-one">
            <img src={monitoring}/>
            <h4> AI Monitoring</h4>
            <p>Unleash the power of AI to transform healthcare management and enhance patient care.</p>
          </div>
          <div className="card card-one">
            <img src={opd}/>
            <h4> Enhanced OPD</h4>
            <p>Unleash the power of AI to transform healthcare management and enhance patient care.</p>
          </div>
          <div className="card card-one">
            <img src={reminders}/>
            <h4> Does Reminders</h4>
            <p>Unleash the power of AI to transform healthcare management and enhance patient care.</p>
            </div>
          <div className="card card-one">
            <img src={healthtech}/>
            <h4> Health Tech</h4>
            <p>Unleash the power of AI to transform healthcare management and enhance patient care.</p>
            </div>
          <div className="card card-one">
            <img src={cloudsolutions}/>
            <h4> Cloud solutions</h4>
            <p>Unleash the power of AI to transform healthcare management and enhance patient care.</p>
            </div>
            <div className="card card-one">
            <img src={topsecurity}/>
            <h4> Top Security</h4>
            <p>Unleash the power of AI to transform healthcare management and enhance patient care.</p>
            </div>
            <div className="card card-one">
            <img src={paperless}/>
            <h4> Paperless</h4>
            <p>Unleash the power of AI to transform healthcare management and enhance patient care.</p>
            </div>
            <div className="card card-one">
            <img src={compliance}/>
            <h4> Compliance</h4>
            <p>Unleash the power of AI to transform healthcare management and enhance patient care.</p>
            </div>
            <div className="card card-one">
            <img src={feedback}/>
            <h4>Patient Feedback</h4>
            <p>Unleash the power of AI to transform healthcare management and enhance patient care.</p>
            </div>
        </div>
      </div>
        </div>


        <div  className='fourth-section cards'>
        <div className="features education">
        <h2>Discover Our AI-Based Education Management System</h2>
        <p>Transform the educational landscape with our advanced AI solutions, enhancing 
          learning experiences and administrative efficiency.</p>
        <div className="education-cards cards">
          <div className="card card-two">
            <img src={monitoring}/>
            <h4> AI Tutoring</h4>
            <p>Personalized AI-driven tutoring to support students in their learning journey.</p>
          </div>
          <div className="card card-two">
            <img src={attendance}/>
            <h4> Smart Attendance</h4>
            <p>Automated attendance tracking for accurate and efficient student management.</p>
          </div>
          <div className="card card-two">
            <img src={grading}/>
            <h4> AI Grading</h4>
            <p>Efficient and unbiased AI-based grading to streamline evaluation processes.</p>
          </div>
          <div className="card card-two">
            <img src={learning}/>
            <h4>Interactive Learning</h4>
            <p>Engage students with interactive AI-powered learning tools.</p>
            </div>
            <div className="card card-two">
            <img src={insights}/>
            <h4> Data Insights</h4>
            <p>Leverage AI to gain valuable insights from educational data for better decision-making.</p>
            </div>
          <div className="card card-two">
            <img src={classrooms}/>
            <h4> Virtual Classrooms</h4>
            <p>AI-enhanced virtual classrooms for seamless and effective online education.</p>
            </div>
            <div className="card card-two">
            <img src={topsecurity}/>
            <h4> AI-Powered Security</h4>
            <p>Advanced security features powered by AI to ensure a safe learning environment.</p>
            </div>
            <div className="card card-two">
            <img src={feedback}/>
            <h4> Feedback Analysis</h4>
            <p>AI-driven analysis of student feedback to continuously improve the educational experience.</p>
            </div>
        </div>
      </div>
        </div>
        

        <div  className='fifth-section cards'>
        <div className="features event">
        <h2>Discover Our AI-Based Event Management System</h2>
        <p>Elevate your events with our cutting-edge AI solutions, ensuring 
          seamless planning and execution.</p>
        <div className="event-cards cards">
          <div className="card card-three">
            <img src={tecosys1}/>
            <h4> AI Planning</h4>
            <p>Smart event planning to streamline processes and optimize resources.</p>
          </div>
          <div className="card card-three">
            <img src={tecosys1}/>
            <h4> AI Marketing</h4>
            <p>Targeted AI-driven marketing strategies to boost event visibility.</p>
          </div>
          <div className="card card-three">
            <img src={tecosys1}/>
            <h4> Real-Time Analysis</h4>
            <p>Gain insights with real-time analytics to enhance event performance.</p>
          </div>
          <div className="card card-three">
            <img src={tecosys1}/>
            <h4> Smart Registration</h4>
            <p>Simplified registration processes with AI-powered tools.</p>
            </div>
          <div className="card card-three">
            <img src={tecosys1}/>
            <h4> Automated Scheduling</h4>
            <p>AI-driven scheduling for flawless event coordination.</p>
            </div>
          <div className="card card-three">
            <img src={tecosys1}/>
            <h4> Enhanced Engagement</h4>
            <p>Boost attendee engagement with AI-interactive features.</p>
            </div>
            <div className="card card-three">
            <img src={tecosys1}/>
            <h4> Security</h4>
            <p>Ensure event security with advanced AI monitoring.</p>
            </div>
            <div className="card card-three">
            <img src={tecosys1}/>
            <h4> Feedback Analysis</h4>
            <p>Collect and analyze feedback to continuously improve future events.</p>
            </div>
        </div>
      </div>
        </div>

      
    <div className="sixth-section chips-head">
      <h2>Our Promises</h2>
      <p>Discover how our AI-driven solutions revolutionize healthcare management with unmatched efficiency and quality.</p>      
  </div>

    <div className='sixth-section chips'>
      <div className="chips promises">
          <img src={HLEE} alt="" />
          <div className="chip">
            <h3>Human-Like Emotional Expression</h3>
            <p>Our AI chatbots excel at natural language understanding and generating human-like responses, enhancing interaction quality. Adapting your conversational style to our chatbot can significantly improve engagement.</p>
            <ul>
              <li>Communicate in natural language as you would with a person</li>
              <li>Initiate conversations with polite greetings</li>
              <li>Freely use emotions and expressions to enhance dialogue</li>
            </ul>
          </div>
      </div>

      <div className="chips answers">
      <img src={optimalanswers} alt="" />
      <div className="chip">
        <h3>Consistently Delivering Optimal Answers</h3>
        <p>Our AI chatbots are meticulously designed to provide precise and relevant answers, utilizing advanced algorithms and extensive training data to ensure high-quality responses.</p>
      </div>
      {/* <button>Try It Now</button> */}
    </div>
    </div>


  <div className="seventh-section segments">
    <h2>Our Visionary Development Goals</h2>
    <div className="goals segment">
      <div className="segment">
        <h4>Neuromorphic Computing</h4>
        <p>Harnessing the power of neuromorphic computing...</p>
      </div>
      <div className="segment ">
        <h4>Parallel Processing</h4>
        <p>Our neuromorphic systems excel in parallel processing...</p>
      </div>
      <div className="segment">
        <h4>Cost Optimization</h4>
        <p>Tecosys is committed to cost efficiency...</p>
      </div>
      <div className="segment">
        <h4>Scalability</h4>
        <p>Our systems are designed with scalability in mind...</p>
      </div>
      <div className="segment">
        <h4>Integrated Efficiency</h4>
        <p>Our cutting-edge solutions integrate memory...</p>
      </div>
      <div className="segment">
        <h4>Precision Optimization</h4>
        <p>Tecosys leverages state-of-the-art algorithms...</p>
      </div>
    </div>
  </div>

        


    </div>
  );
};

export default HomePage;
