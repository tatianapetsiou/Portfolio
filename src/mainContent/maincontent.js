import React from "react"
import Typewriter from "../hooks/ExternalScripts"
import image from '../images/profil-image.jpg'
import { FaFacebookF } from "react-icons/fa"
import { FaLinkedinIn } from "react-icons/fa"
import { HiMail } from "react-icons/hi"
import cv from "../cv/webCv.pdf"




function Main() {





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
                                <a target="_blank" href={cv} className=" btn px-btn btn-white-btn btn-white">Download CV</a>
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
                                        <img src={image} width="624" height="624"></img>
                                    </div>
                                    <div className="social-nav">
                                        <a target="_blank" href="https://www.facebook.com/tatiana.petsiou"><FaFacebookF /></a>
                                        <a target="_blank" href="https://www.linkedin.com/in/%CF%84%CE%B1%CF%84%CE%B9%CE%AC%CE%BD%CE%B1-%CF%80%CE%AD%CF%84%CF%83%CE%B9%CE%BF%CF%85-723756148"><FaLinkedinIn /></a>
                                        <a href="mailto:tatiana1190292@hotmail.com"><HiMail /></a>
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
                        <div className="row">
                            <div class="col-6 col-sm-4">
                                <h5 className="since">2014-2015</h5>
                            </div>
                            <div class="col-6 col-sm-4">
                                <p>1)Ραδιοφωνική παραγωγός-εκφωνήτρια
                                    στον Ρ/Σ JUSTRADIO του ΑΤΕΙ Δυτικής Μακεδονίας.
                                    2)Λογιστικό και Φοροτεχνικό γραφείο
                                    (Κωνσταντάγκα Ελένη) με έδρα την Κοζάνη (Βοηθός λογιστή)    
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="experience-box">
                        <div className="row">
                            <div class="col-6 col-sm-4">
                                <h5 className="since">2016-2017</h5>
                            </div>
                            <div class="col-6 col-sm-4">
                                <p>1) Αρχισυντάκτρια σε ειδησεογραφικό portal.
                                    Διαδικτυακή υποστήριξη στο chanialive.net
                                    Καταχωρήσεις ξενοδοχείων στο bookinghotels.gr (Wordpress)
                                    <br></br>
                                    2)Πωλήτρια στο αρτοζαχαροπλαστείο (Zoomserie-Bakery) Κατάστημα Κοζάνης.
                                    </p>        
                            </div>
                        </div>
                    </div>
                    <div className="experience-box">
                        <div className="row">
                            <div class="col-6 col-sm-4">
                                <h5 className="since">2017-2018</h5>
                            </div>
                            <div class="col-6 col-sm-4">
                                <p> Βοηθός λογιστή στην εταιρία Ermia Hotels & Resorts. (Θεσσαλονίκη)</p>
                            </div>
                        </div>
                    </div>
                    <div className="experience-box">
                        <div className="row">
                            <div class="col-6 col-sm-4">
                                <h5 className="since">2018-2022</h5>
                            </div>
                            <div class="col-6 col-sm-4">
                                <p>Εξυπηρέτηση πελατών και υπεύθυνη καταστημάτων εστίασης.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>


        </>

    )
}
export default Main