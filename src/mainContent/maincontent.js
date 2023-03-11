import React, { useEffect, useState } from "react"
import Typewriter from "../hooks/ExternalScripts"
import image from '../images/profil-image.jpg'
import { FaFacebookF } from "react-icons/fa"
import { FaLinkedinIn } from "react-icons/fa"
import { HiMail } from "react-icons/hi"
import cv from "../cv/webCv.pdf"
import { motion } from "framer-motion"
import { Grid } from 'mauerwerk'
import data from "./data"
import Media from 'react-media';
import{BiMap} from "react-icons/bi"
import { HiOutlineMailOpen } from "react-icons/hi"
import {BsPhoneVibrate} from "react-icons/bs"
import Home from "../Map.js"









function Main() {

    const [bar1, SetBar1] = useState(0)
    const [bar2, SetBar2] = useState(0)
    const [bar3, SetBar3] = useState(0)
    const [bar4, SetBar4] = useState(0)
    const [bar5, SetBar5] = useState(0)
    const [bar6, SetBar6] = useState(0)
    


    useEffect(() => {

        const id = setInterval(() => {
            SetBar1(90)
            SetBar2(85)
            SetBar3(80)
            SetBar4(80)
            SetBar5(65)
            SetBar6(50)
        }, 5000)

        return () => {
            clearInterval(id)
        }
    },

        [])



    return (
        <> <section className="maincontent" id="maincontent">
            <div className="headerTop d-flex">
                <div className="info">
                    <a href="tel:+306982446982">+306982446982</a>
                    <a href="mailto:tatiana190292@hotmail.com">tatiana190292@hotmail.com</a>
                </div>
            </div>
            <div className="container">
                <div className="row full-screen align-items-center">
                    <div className="col-lg-5 typeboxCol">
                        <div className="typebox">
                            <h6>Hello, My name is</h6>
                            <h1>PETSIOU TATIANA</h1>
                            <h1 id="text" className="job"><Typewriter text="Web Developer!" /></h1>
                            <div>

                            </div>
                            <p>I am passionate web developer,based in Thessaloniki,Greece.I have practiced the following skills: HTML, CSS, JS, REACT, BOOTSTRAP, JQUERY, ANGULAR. </p>
                            <div className="mt-4 aos-init aos-animate">
                                <a rel="noreferrer" target="_blank" href={cv} className=" btn px-btn btn-white-btn btn-white">Download CV</a>
                            </div>
                        </div>


                    </div>
                    <div className="profil-image">

                    </div>
                </div>
            </div>

        </section>


            <section className="bio" id="bio">
                <div className="container">
                    <div className="row">
                        <div className="col-6 col-md-4 left-col-main">
                            <div className="about-me">
                                <div className="my-self">
                                    <div className="image-self">
                                        <img alt=" " src={image} width="624" height="624"></img>
                                    </div>
                                    <div className="social-nav">
                                        <a rel="noreferrer" target="_blank" href="https://www.facebook.com/tatiana.petsiou"><FaFacebookF /></a>
                                        <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/%CF%84%CE%B1%CF%84%CE%B9%CE%AC%CE%BD%CE%B1-%CF%80%CE%AD%CF%84%CF%83%CE%B9%CE%BF%CF%85-723756148"><FaLinkedinIn /></a>
                                        <a rel="noreferrer" href="mailto:tatiana1190292@hotmail.com"><HiMail /></a>
                                    </div>
                                </div>
                                <div className="about-me-info">
                                    <p>Web Developer</p>
                                    <h3> Petsiou Tatiana</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-7 main-bio-txt">
                            <div className="bio-text">
                                <h3>Biography</h3>
                                <p>I am a highly motivated and enthusiastic individual with a passion for web development. With one year of experience. I have developed a strong understanding of (html,css,js,react,angular,vue). I am a quick learner with excellent problem-solving skills, and I thrive in fast-paced, dynamic environments.

                                    In addition to my technical expertise, I am a strong communicator and collaborator, able to work effectively with diverse teams and stakeholders. I am committed to continuous learning and professional development, and I enjoy staying up-to-date with the latest trends and technologies in my field.</p>
                            </div>
                            <div className="info-list">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <ul>
                                            <li><label>Name:</label> <span>Petsiou Tatiana</span></li>
                                            <li><label>Birthday:</label> <span>19/02/1992</span></li>
                                            <li><label>Adress:</label> <span>Kosth Palama 11,Thessaloniki</span></li>
                                        </ul>
                                    </div>
                                    <div className="col-sm-6">
                                        <ul>
                                            <li><label>Phone:</label> <span>(+30)6982446982</span></li>
                                            <li><label>Email:</label> <span>tatiana190292@hotmail.com</span></li>
                                            <li><label>Age:</label> <span>31</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
                <div className="seperator"></div>
            </section>


            <section className="experience" id="experience">
                <div className="container">
                    <div className="title-experience">
                        <h3>Work Experience!</h3>
                    </div>
                    <div className="experience-box">
                        <div className="roe">
                            <div className="row">
                                <div class="col-6 col-sm-4 exp-box">
                                    <h5 className="since">2014-2015</h5>
                                </div>
                                <div class="col-6 col-md-8 col-sm-4  text-p-work">
                                    <p>1)Ραδιοφωνική παραγωγός-εκφωνήτρια
                                        στον Ρ/Σ JUSTRADIO του ΑΤΕΙ Δυτικής Μακεδονίας.<br></br>
                                        2)Λογιστικό και Φοροτεχνικό γραφείο
                                        (Κωνσταντάγκα Ελένη) με έδρα την Κοζάνη (Βοηθός λογιστή)
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="experience-box">
                        <div className="roe1">
                            <div className="row">
                                <div class="col-6 col-sm-4">
                                    <h5 className="since">2016-2017</h5>
                                </div>
                                <div class="col-6 col-md-8 col-sm-4 text-p-work">
                                    <p>1) Αρχισυντάκτρια σε ειδησεογραφικό portal.
                                        Διαδικτυακή υποστήριξη στο chanialive.net <br></br>
                                        Καταχωρήσεις ξενοδοχείων στο bookinghotels.gr (Wordpress)
                                        <br></br>
                                        2)Πωλήτρια στο αρτοζαχαροπλαστείο (Zoomserie-Bakery) Κατάστημα Κοζάνης.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="experience-box">
                        <div className="roe2">
                            <div className="row">
                                <div class="col-6 col-sm-4">
                                    <h5 className="since">2017-2018</h5>
                                </div>
                                <div class="col-6 col-md-8 col-sm-4 text-p-work">
                                    <p> Βοηθός λογιστή στην εταιρία Ermia Hotels & Resorts. (Θεσσαλονίκη)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="experience-box">
                        <div className="roe3">
                            <div className="row">
                                <div class="col-6 col-sm-4">
                                    <h5 className="since">2018-2022</h5>
                                </div>
                                <div class="col-6 col-md-8 col-sm-4 text-p-work">
                                    <p>Εξυπηρέτηση πελατών και υπεύθυνη καταστημάτων εστίασης.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="seperator"></div>

            </section>

            <section className="resume" id="resume" >
                <div className="container">
                    <div className="title-education">
                        <h3>Education & Skills</h3>
                    </div>
                    <div className="resume-box">
                        <div className="row">
                            <div className="col-lg-4 m-15px educ-box">
                                <ul className="education-list">
                                    <li>
                                        <span>2015</span>
                                        <h5>ECDL</h5>
                                        <p>Πιστοποίηση γνώσεων Η/Υ</p>
                                    </li>
                                    <li>
                                        <span>2010-2016</span>
                                        <h5>ΛΟΓΙΣΤΙΚΗΣ & ΧΡΗΜΑΤΟΟΙΚΟΝΟΜΙΚΩΝ</h5>
                                        <p>UNIVERSITY OF WESTERN MAKEDONIA</p>
                                    </li>
                                    <li>
                                        <span>2022-2023</span>
                                        <h5> WEB DEVELOPMENT</h5>
                                        <p>
                                            National and Kapodistrian University of Athens (500 hours)

                                        </p>
                                    </li>
                                </ul>

                            </div>
                            <div className="col-lg-7 skills-main">
                                <div className="skills">
                                    <div className="main-progress">
                                        <h6>HTML</h6>
                                        <span className="counter">
                                            <span>90</span>
                                            %
                                        </span>
                                        <div className="skill-bar">
                                            <motion.div className="sk-bar-in"
                                                animate={{
                                                    width: `${bar1}%`
                                                }}
                                                transition={{
                                                    duration: 2
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="main-progress">
                                        <h6>CSS</h6>
                                        <span className="counter">
                                            <span>85</span>
                                            %
                                        </span>
                                        <div className="skill-bar">
                                            <motion.div className="sk-bar-in"
                                                animate={{
                                                    width: `${bar2}%`
                                                }}
                                                transition={{
                                                    duration: 2
                                                }} />
                                        </div>
                                    </div>
                                    <div className="main-progress">
                                        <h6>JAVASCRIPT</h6>
                                        <span className="counter">
                                            <span>80</span>
                                            %
                                        </span>
                                        <div className="skill-bar">
                                            <motion.div className="sk-bar-in"
                                                animate={{
                                                    width: `${bar3}%`
                                                }}
                                                transition={{
                                                    duration: 2
                                                }} />

                                        </div>

                                    </div>
                                    <div className="main-progress">
                                        <h6>REACT</h6>
                                        <span className="counter">
                                            <span>80</span>
                                            %
                                        </span>
                                        <div className="skill-bar">
                                            <motion.div className="sk-bar-in"
                                                animate={{
                                                    width: `${bar4}%`
                                                }}
                                                transition={{
                                                    duration: 2
                                                }} />

                                        </div>

                                    </div>
                                    <div className="main-progress">
                                        <h6>ANGULAR</h6>
                                        <span className="counter">
                                            <span>65</span>
                                            %
                                        </span>
                                        <div className="skill-bar">
                                            <motion.div className="sk-bar-in"
                                                animate={{
                                                    width: `${bar5}%`
                                                }}
                                                transition={{
                                                    duration: 2
                                                }} />

                                        </div>
                                    </div>
                                    <div className="main-progress">
                                        <h6>WORDPRESS</h6>
                                        <span className="counter">
                                            <span>50</span>
                                            %
                                        </span>
                                        <div className="skill-bar">
                                            <motion.div className="sk-bar-in"
                                                animate={{
                                                    width: `${bar6}%`
                                                }}
                                                transition={{
                                                    duration: 2
                                                }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="seperator"></div>
            </section>

            <section className="portfolio" id="portfolio">
                <div className="container">
                    <div className="title-education">
                        <h3>My Portfolio</h3>
                    </div>
                    <div className="masonry">
                        <Media query="(max-width:770px)">

                            {matches => {
                                return matches ? <Grid
                                    // Arbitrary data, should contain keys, possibly heights, etc.
                                    data={data}
                                    // Key accessor, instructs grid on how to fetch individual keys from the data set
                                    keys={d => d.name}
                                    // Can be a fixed value or an individual data accessor (for variable heights)
                                    // If you leave it undefined it will assume 100% container height
                                    heights={d => d.height}
                                    // Optional: number of columns (make it responsive yourself using react-measure/react-media)
                                    columns={1}
                                    // Optional: space between elements
                                    margin={15}
                                    // Optional: removes the possibility to scroll away from a maximized element
                                    lockScroll={true}
                                    // Optional: delay before minimizing an opened element
                                    closeDelay={500}
                                    // Optional: animates the grid in if true (default)
                                    transitionMount={true}>
                                    {(data, open, toggle) => (
                                        <div className="main-mas" style={{ backgroundImage: data.css, backgroundSize: "cover", backgroundRepeat: "no-repeat" }}

                                            onClick={toggle}>
                                            {data.title}
                                            {open && <div className="details">
                                                <div className="circle" style={{}}>
                                                    <h1>{data.name}</h1>
                                                    <h3>{data.description}</h3>
                                                    <img alt=" " src={data.image}></img>
                                                    <h1>Mobile version</h1>
                                                    <img alt=" " src={data.imageMob}></img>
                                                </div>
                                            </div>}
                                            <button className="btn-masonry" onClick={toggle}>{open ? 'Close' : 'Open'}</button>
                                        </div>
                                    )}
                                </Grid> : <Grid
                                    // Arbitrary data, should contain keys, possibly heights, etc.
                                    data={data}
                                    // Key accessor, instructs grid on how to fetch individual keys from the data set
                                    keys={d => d.name}
                                    // Can be a fixed value or an individual data accessor (for variable heights)
                                    // If you leave it undefined it will assume 100% container height
                                    heights={d => d.height}
                                    // Optional: number of columns (make it responsive yourself using react-measure/react-media)
                                    columns={2}
                                    // Optional: space between elements
                                    margin={15}
                                    // Optional: removes the possibility to scroll away from a maximized element
                                    lockScroll={true}
                                    // Optional: delay before minimizing an opened element
                                    closeDelay={500}
                                    // Optional: animates the grid in if true (default)
                                    transitionMount={true}>
                                    {(data, open, toggle) => (
                                        <div className="main-mas" style={{ backgroundImage: data.css, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center center",   }}

                                            onClick={toggle}>
                                            {data.title}
                                            {open && <div className="details">
                                                <div className="circle" style={{}}>
                                                    <h1>{data.name}</h1>
                                                    <h3>{data.description}</h3>
                                                    <img alt=" " src={data.image}></img>
                                                    <h1>Mobile version</h1>
                                                    <img alt=" " src={data.imageMob}></img>
                                                </div>
                                            </div>}
                                            <button className="btn-masonry" onClick={toggle}>{open ? 'Close' : 'Open'}</button>
                                        </div>
                                    )}
                                </Grid>
                            }}

                        </Media>

                    </div>
                </div>
                <div className="seperator"></div>
            </section>

            <section id="contact">
                <div className="container">
                <div className="title-education">
                        <h3>Contact</h3>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 m-15px">
                            <h4>Get in touch!</h4>
                            <p>Feel free to contact me.</p>
                            <hr></hr>
                            <ul className="contact-list">
                                <li className="pin"> <span><BiMap/></span>Kosti Palama 11, Filiro Thessaloniki</li>
                                <li className="maile"><span>< HiOutlineMailOpen/></span>tatiana190292@hotmail.com</li>
                                <li className="phone"><span><BsPhoneVibrate/></span>306982446982</li>
                                
                            </ul>
                        </div>
                        <div className="col-lg-7 ">
                            <Home />
                
                       
                        </div>
                    </div>
                </div>
            </section>
            

            <footer>
                <hr></hr>
                <div className="copyright">
                    <p> &copy;Copyright 2023 ,created & designed by Tatiana Petsiou </p>
                </div>
            </footer>



        </>

    )
}
export default Main