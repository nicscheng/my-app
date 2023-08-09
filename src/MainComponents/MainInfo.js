import React, { useState, useRef, Fragment } from 'react';

import Button from 'react-bootstrap/esm/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavbarReact from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaAngleDoubleRight, FaAngleRight, FaArrowLeft, FaArrowRight, FaBootstrap, FaCircle, FaCrosshairs, FaCss3, FaDatabase, FaDotCircle, FaEnvelope, FaGithub, FaHandPointRight, FaHtml5, FaJava, FaJs, FaLongArrowAltRight, FaMapMarkerAlt, FaMapPin, FaNodeJs, FaPhoneAlt, FaPrescriptionBottleAlt, FaPython, FaReact, FaSmile, FaSmileBeam, FaSmileWink } from 'react-icons/fa';
import Carousel from 'react-bootstrap/Carousel';
import MyComponent from '../OtherComponents/MyCarousel';
import { BrowserRouter as Switch, Route, Link, Routes, Router } from 'react-router-dom';
import {ReactDOM} from 'react-dom'

import { Analytics } from '@vercel/analytics/react';


const LastPage = () => {
    return(
        <>
        <div className='last-con' id='my-email'>
            <div class="thought"><span style={{ fontWeight: 'bold' }}>thank you!</span></div>
            <img className='dog-img' src='../dog.svg' />
            <div className='last-text'>
                <a className='my-email ' href='mailto:cheng.nicole.work@gmail.com'> Send me an email here</a>
                <span>, I'm always up for a chat! <FaSmileBeam style={{color: "#000000",}} /></span>  
            </div>
        </div>
        </>
    )
}


const AboutMe = () => {
    const smoothScrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
          window.scrollTo({
            behavior: 'smooth',
            top: element.offsetTop - 50,
          });
        }
      };
    return(
        <>
        <div className='about-me' id='about-me'>
            <Navbar/>
            <div className='row about-con'>
                    <div className='col-sm-5 pic-con'>
                        <img className='about-pic' src='../profile_pic.jpg' />
                    </div>
                    <div className='col-sm-7 text-con'>
                        
                        <img className='fullstack mt-3' src='../fullstack.png' />
                        <div className='desc-about mt-3'>
                         <div className='three-desc' id='desc-style'>
                         Result-driven. Detail-oriented. Adaptable. Open-minded.
                        </div>
                        <div className='three-desc'>
                        A huge fan of video games, sitcoms, outdoor activities, and of course, programming.
                        </div>

                            Interested in the entire backend spectrum and learning new possibilities with interesting people. Databases are my kind of chef’s kiss.

                        </div>
    
                        <div className='mt-5'>
                            <Button onClick={() => smoothScrollToSection('skill-content')}  className='btn-skills'>
                                MY SKILLS
                                <span className='box-arrows'>
                                    <FaLongArrowAltRight/>
                                </span>
                            </Button>
                        </div>

                    </div>
                    
                </div>


            
        </div>

        
    </>
    )


    
}

const CarouselItem = ({ item, width }) => {
    return(
        
        <div className='item' style={{ width: width }}>     
        
        <div></div> 
   
            <img
                className="carousel-img"
                src={item.icon}
            />
            <div className='carousel-item-text'>
            <div className='carousel-item-title'>
                {item.title}
                </div> 
                <div className='carousel-item-role'>
                {item.role}
                </div> 
                <div className='carousel-item-desc'>
                {item.description}
                </div> 
                <div className='mt-5'>
                <a href={item.href}>
                    <Button className='btn-gtk' >
                        VIEW ON GITHUB
                    </Button>
                </a>
                </div>
                
                </div>     
                    
        </div>
    )
}
const MyWorks = () => {

    const [activeIndex, setActiveIndex] = useState(0);

    const items = [
        {
          title: "RITMO",
          role: "Backend Development",
          description:
            "RITMO aims to provide a safe and easy transaction within the music industry. With the use of Ethereum blockchain technology, RITMO eliminates the need for intermediaries.",
          icon: "../ethereum.svg",
          href: "https://github.com/amndaprz/THESIS-SMC-Music-rights.git"
        },
        {
          title: "Palette Lock",
          role: "Frontend and Backend Development",
          description:
            "Palette Lock is an offline gaming application developed in Android Studio using SQLite as the score database system. Palette Lock is a rhythm game that aims to improve your sense of harmony.",
          icon:"../mobile.svg",
          href: "https://github.com/nicscheng/palette-lock-mobdev.git"
        },
        {
          title: "Inventory System for Farina\’s Ilocos Empanada",
          role: "Backend Development",
          description:
            "With the development of this app using Agile method, FIE staff members are now able to administrate and manage their inventory systems. At the same time, clients are able to buy products directly from the website.  ",
          icon: "../inventory.svg",
          href: "https://github.com/nicscheng/cssweng-team5.git"
        },
      ];

      const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = 0;
          } else if (newIndex >= items.length) {
            newIndex = items.length - 1;
          }
      
          setActiveIndex(newIndex);
    } 
    return (
        <>
            <div className='bg-carousel' id='my-works' >
            <Navbar/>
                <div className='my-works' >
                    <img
                        className=" myworks-png"
                        src="../My Works.png"
                    />
                    <div className='mywork-desc'>"The best error message is the one that never shows up." - Thomas Fuchs</div>
                </div>
                <div className='carousel'>
                    <div className='inner' style={{transform: `translate(-${activeIndex * 100}%)`}}>
                    {items.map((item) => {
                    return <CarouselItem item={item} width={"100%"} />;
                    })}
                    </div>  

                    <div className='carousel-buttons'>
                        <button className='button-arrow' onClick={() => {
                            updateIndex(activeIndex - 1)
                        }} > 
                        <span class="material-symbols-outlined">
                        arrow_back_ios
                        </span>
                        </button>
                        <div className='indicators'>
                        {items.map((item, index) => {
                            return(
                                <button className='indicator-buttons'
                                onClick={() => {
                                    updateIndex(index);
                                  }}
                                  >
                                    <span class="material-symbols-outlined" className={`material-symbols-outlined ${
                                        index === activeIndex
                                        ? "indicator-symbol-active"
                                        : "indicator-symbol"
                                    }`}>
                                        radio_button_checked
                                    </span>
                                </button>
                            );
                        })}
                        
                        </div>
                        <button className='button-arrow' onClick={() => {
                            updateIndex(activeIndex + 1)
                        }} >
                        <span class="material-symbols-outlined">
                                arrow_forward_ios
                        </span>
                        </button>
                    </div>
                </div>
                
            </div>

        </>

    )
}
const SkillContent = () => {

    const smoothScrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
          window.scrollTo({
            behavior: 'smooth',
            top: element.offsetTop - 50,
          });
        }
      };

    return (
        <div className='skill-con' id='skill-content'>

            <div><div className='here-is'></div>
                <img className='skills-text' src='../skill.png' /></div>
            <div className='desc-skills mt-3'>
                Developing small to medium software applications, exploring new sides of backend solutions, innovating new technologies, and finding the missing semicolon! 
            </div>
            <div>
                <div className='row' >
                    <div className='col language-logo'>
                        <FaPython size={72} className=' mt-5' />
                        <div className='logo-name'>Python</div>
                    </div>
                    <div className='col language-logo'>
                        <FaHtml5 size={72} className=' mt-5' />
                        <div className='logo-name'>HTML5</div>
                    </div>
                    <div className='col language-logo'>
                        <FaCss3 size={72} className=' mt-5' />
                        <div className='logo-name'>CSS3</div>
                    </div>
                    <div className='col language-logo'>
                        <FaJava size={72} className='mt-5' />
                        <div className='logo-name'>Java</div>
                    </div>
                    <div className='col language-logo'>
                        <FaBootstrap size={72} className='mt-5' />
                        <div className='logo-name'>Bootstrap</div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col language-logo'>
                        <FaJs size={72} className='mt-5' />
                        <div className='logo-name'>JavaScript</div>
                    </div>
                    <div className='col language-logo'>
                        <FaNodeJs size={72} className=' mt-5' />
                        <div className='logo-name'>NodeJs</div>
                    </div>
                    <div className='col language-logo'>
                        <FaReact size={72} className='mt-5' />
                        <div className='logo-name'>ReactJs</div>
                    </div>
                    <div className='col language-logo'>
                        <FaDatabase size={72} className='mt-5' />
                        <div className='logo-name'>MySQL</div>

                    </div>
                </div>


            </div>

            <div className='mt-5'>
                <Button onClick={() => smoothScrollToSection('my-works')}  className='btn-works'>
                    MY WORKS
                    <span className='box-arrows'>
                        <FaLongArrowAltRight/>
                    </span>
                    
                </Button>
            </div>
        </div>

    )
}

const Navbar = () => {

    const smoothScrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
          window.scrollTo({
            behavior: 'smooth',
            top: element.offsetTop - 50,
          });
        }
      };

    return (
        <NavbarReact collapseOnSelect expand="lg" variant='light' className=" bg-navbar">
            <Container >
                <NavbarReact.Brand onClick={() => smoothScrollToSection('my-intro')} >
                    {/*<img className='my-logo' src='../my_logo.svg'/>*/}
                    <div><img className='nicole' src='../nicole.png' /></div>
                </NavbarReact.Brand>
                <NavbarReact.Toggle aria-controls="responsive-navbar-nav" />
                <NavbarReact.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav className='right-side' >
                        <Nav.Link  onClick={() => smoothScrollToSection('about-me')} className='navlink'  eventKey={1} >   
                        <span className='arrow'>
                        <FaAngleRight/>
                        </span>
                            me
                        </Nav.Link>
                        <Nav.Link onClick={() => smoothScrollToSection('skill-content')} eventKey={2} className='navlink'>
                        <span className='arrow'>
                            <FaAngleRight/>
                        </span>
                            skills
                            </Nav.Link>
                        <Nav.Link onClick={() => smoothScrollToSection('my-works')}  className='navlink'  eventKey={3} >
                        <span className='arrow'>
                            <FaAngleRight/>
                        </span>
                            portfolio
                        </Nav.Link>
                        <Nav.Link onClick={() => smoothScrollToSection('my-email')}  className='navlink'  eventKey={3} >
                        <span className='arrow'>
                            <FaAngleRight/>
                        </span>
                            email me
                        </Nav.Link>
                        
                        <Nav.Link className='navlink' eventKey={4} href="https://github.com/nicscheng">
                            <FaGithub/>
                        </Nav.Link>
                    </Nav>
                </NavbarReact.Collapse>
            </Container>
        </NavbarReact>
    );
};


const ContactInfo = () => {
    return (
        <div className='row bg-contact'>
            <div className='col'>
                <div className='contact-item'>
                    <FaEnvelope className='mx-3' /> cheng.nicole.work@gmail.com
                </div>
            </div>
            <div className='col'>
                <div className='contact-item'>
                    <FaPhoneAlt className='mx-3' /> (0908) 813 0146
                </div>
            </div>
            <div className='col'>
                <div className='contact-item'>
                    <FaMapPin className='mx-3' /> Manila, Philippines
                </div>
            </div>

        </div>
    );
}

const MyIntro = () => {
    const smoothScrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
          window.scrollTo({
            behavior: 'smooth',
            top: element.offsetTop - 50,
          });
        }
      };
    return(
        <div className='con' id='my-intro'>
            <Navbar/>
            <div className='row intro-con'>
                <div className='col-sm-5 logo-con'>
                    <img className='main-logo' src='../my_logo.svg' />
                </div>
                <div className='col-sm-7 text-con'>
                    <div className='mt-5'>Hello there, I'm</div>
                    <img className='main-nicole mt-3' src='../nicole cheng.png' />
                    <div className='desc-me mt-3'>
                    Building rich software applications, assessing the quality of each specification, and resolving backend problems for a seamless user experience.
                    </div>
                    <div className='mt-5'>
                        <Button onClick={() => smoothScrollToSection('about-me')}  className='btn-gtk'>
                            GET TO KNOW ME
                            <span className='box-arrows'>
                                <FaLongArrowAltRight/>
                            </span>
                        </Button>
                    </div>

                </div>
            </div>

            <ContactInfo />
        </div>
    )
    
}

const MainContent = () => {

    return (
        
            // <Switch>
            //     <Route exact path='/'>
            //         <MyIntro />
            //     </Route>

            //     <Route exact path='/about-me' >
            //         <AboutMe />
            //     </Route>
            //     <Route exact path='/skill-content'>
            //         <SkillContent />
            //     </Route>
            //     <Route exact path='/my-works'>
            //         <MyWorks />
            //     </Route>
            // </Switch>
            <>
            <MyIntro/>
            <AboutMe/>
            <SkillContent />
            <MyWorks />
            <LastPage/>  
            <Analytics />
            </>
              
        

    );
};



export default MainContent;