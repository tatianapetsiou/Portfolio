import React from "react"
import {FaHome} from "react-icons/fa"
import { FaUserAstronaut } from "react-icons/fa";
import{HiOutlineDocumentText} from "react-icons/hi"
import { FaBriefcase } from "react-icons/fa";
import { HiPhoneOutgoing } from "react-icons/hi";
import{GiMouthWatering}from "react-icons/gi"



function SidebarMenu(){
    return(
<div className="verticalMenu">
  
<div className="nav flex-column nav-pills " id="v-pills-tab" role="tablist" aria-orientation="vertical">
<div className="logo"><GiMouthWatering/></div>
<div className="menuOnly">
  <a className="nav-link  menu-left " id="v-pills-home-tab" data-toggle="pill" href="#maincontent" role="tab" aria-controls="v-pills-home" aria-selected="true"><FaHome/></a>
  <a className="nav-link  menu-left" id="v-pills-profile-tab" data-toggle="pill" href="#bio" role="tab" aria-controls="v-pills-profile" aria-selected="false"><FaUserAstronaut/></a>
  <a className="nav-link menu-left" id="v-pills-messages-tab" data-toggle="pill" href="#resume" role="tab" aria-controls="v-pills-messages" aria-selected="false"><HiOutlineDocumentText/></a>
  <a className="nav-link menu-left" id="v-pills-settings-tab" data-toggle="pill" href="#portfolio" role="tab" aria-controls="v-pills-settings" aria-selected="false"><FaBriefcase/></a>
  <a className="nav-link menu-left last" id="v-pills-settings-tab" data-toggle="pill" href="#contact" role="tab" aria-controls="v-pills-settings" aria-selected="false"><HiPhoneOutgoing/></a>
  </div>
</div>

</div>)
    

}
export default SidebarMenu;