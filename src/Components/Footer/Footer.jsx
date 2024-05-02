import React from 'react'
import MemoryPower from '../MemoryPower/MemoryPower'
import logo from '../../assets/logo/logo.png'
import { NavLink } from 'react-router-dom'
import { FaFacebookSquare, FaHome } from 'react-icons/fa'
import { FaArrowUpRightFromSquare, FaInstagram, FaTwitter } from 'react-icons/fa6'
import { IoMdLink } from "react-icons/io";
import { BsFillPatchCheckFill, BsStars } from 'react-icons/bs'
import { GiMedal } from "react-icons/gi";
import { GrGallery } from "react-icons/gr";

import style from './Footer.module.scss'
import { RiGraduationCapFill } from 'react-icons/ri'
import { MdCall } from 'react-icons/md'



const Footer = () => {
    const LinksItem = [
        {
            icon: <IoMdLink />, class: "borderlink", content: "Important Links",
            link1: 'home', link2: 'meet-founder',
            linktitle: "Home", linktitle2: 'About Us', linktitle3: "Meet Founder", linktitle4: 'Our Certificates', linktitle5: 'Courses', linktitle6: 'Gallary', linktitle7: 'contact Us',
            icon1: <FaHome />, icon2: <BsFillPatchCheckFill />, icon3: <BsStars />, icon4: <GiMedal />, icon5: <RiGraduationCapFill />, icon6: <GrGallery />, icon7: <MdCall />,
        },
        {
            icon: <IoMdLink />, class: 'borderlink', content: "More Links",
            linktitle: "Careers", linktitle2: 'Teacher Login', linktitle3: "Student Login", linktitle4: 'Register Now', linktitle5: 'Tearm & Conditions', linktitle6: 'Primary Policy',
            icon1: <FaArrowUpRightFromSquare />, icon2: <FaArrowUpRightFromSquare />, icon3: <FaArrowUpRightFromSquare />, icon4: <FaArrowUpRightFromSquare />, icon5: <FaArrowUpRightFromSquare />, icon6: <FaArrowUpRightFromSquare />,
        },
        {
            icon: "", content: "",
            linktitle: "Help Desk", link2: '/', linktitle2: 'Complaint Redressal', linktitle4: 'Help Desk', linktitle3: "Apply For Teacher Role",
            icon1: <FaArrowUpRightFromSquare />, icon2: <FaArrowUpRightFromSquare />, icon3: <FaArrowUpRightFromSquare />, icon4: <FaArrowUpRightFromSquare />,
        }
    ]
    return (
        <div className={style.footerSection}>
            <MemoryPower />
            <div className="container">

                <div className="row ">
                    <div className={`col-md-5 ${style.footercontent}`}>
                        <div>
                            <img src={logo} alt="" />
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            </p>
                            <NavLink to="" className={style.readmore}>
                                Read more..
                            </NavLink>
                            <div>
                                <NavLink target='_blank' to="https://www.facebook.com/" className={style.socialMedia}>
                                    <FaFacebookSquare />
                                </NavLink>
                                <NavLink target='_blank' to='https://www.instagram.com/' className={style.socialMedia}>
                                    <FaInstagram />
                                </NavLink>
                                <NavLink target='_blank' to="https://twitter.com/?lang=en" className={style.socialMedia}>
                                    <FaTwitter />
                                </NavLink>
                            </div>
                        </div>

                    </div>
                    <div className={`col-md-7 ${style.footerlinks}`}>
                        <div className="row">
                            {LinksItem.map((item, i) => {
                                return <div className="col-md-4">
                                    <p>
                                        <span >{item.icon}</span>{item.content}
                                    </p>
                                    <div className={`${style[item.class]}`}></div>
                                    <div className={style.linkitem}>
                                        <NavLink to={item.link1}> <span>{item.icon1}</span>{item.linktitle}</NavLink>
                                        <NavLink to={item.link1}><span>{item.icon2}</span>{item.linktitle2}</NavLink>
                                        <NavLink to={item.link2}><span>{item.icon3}</span>{item.linktitle3}</NavLink>
                                        {item.linktitle4 ? <NavLink to={item.link1}><span>{item.icon4}</span>{item.linktitle4}</NavLink> : ''}
                                        {item.linktitle5 ? <NavLink to={item.link1}><span>{item.icon5}</span>{item.linktitle5}</NavLink> : ''}
                                        {item.linktitle6 ? <NavLink to={item.link1}><span>{item.icon6}</span>{item.linktitle6}</NavLink> : ''}
                                        {item.linktitle7 ? <NavLink to={item.link1}><span>{item.icon7}</span>{item.linktitle7}</NavLink> : ''}
                                    </div>
                                </div>
                            })}


                        </div>
                    </div>
                </div>
            </div>
            <div className={style.copywrite}>
                <span>Copyright © Memorypower 2024.</span>
            </div>
        </div >
    )
}

export default Footer