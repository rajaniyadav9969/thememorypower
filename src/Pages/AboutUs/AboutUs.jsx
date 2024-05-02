import React, { useState } from 'react';
import { FaAndroid, FaFacebookSquare, FaRegClock, FaTwitter } from 'react-icons/fa';
import { IoBag } from "react-icons/io5";
import { IoIosArrowForward, IoMdCheckmark, IoMdNotifications } from 'react-icons/io';
import { NavLink } from 'react-router-dom';
import aboutUsGirl2 from "../../assets/images/Anu-hover.png";
import aboutUsBoy2 from "../../assets/images/Scott-hover.png";
import aboutUsBoy from "../../assets/images/aboutUsBoy.png";
import aboutUsGirl from "../../assets/images/aboutUsGirl.png";
import qualityimg from '../../assets/images/quality-bg.png';
import style from "./AboutUs.module.scss";
import GetInTouch from './GetInTouch/GetInTouch';
import ModalPopup from './ModalPoup/ModalPopup';
const itemcontent = [
    {
        img: aboutUsGirl,
        hoverimg: aboutUsGirl2,
        name: 'Sophia Patel',
        desg: 'CO-FOUNDER & CO-CEO',
        content: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec ultrices odio, in faucibus quam. Mauris accumsan ex et hendrerit dictum. Morbi nisi nulla, porta eu volutpat eget, iaculis sed augue. Aliquam ultrices neque diam, eu aliquet diam efficitur at.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec ultrices odio, in faucibus quam. Mauris accumsan ex et hendrerit dictum. Morbi nisi nulla, porta eu volutpat eget, iaculis sed augue. Aliquamultrices neque diam, eu aliquet diam efficitur at. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec ultrices odio, in faucibus quam. Mauris accumsan ex et hendrerit dictum. Morbi nisi nulla, porta eu volutpat eget, iaculis sed augue. Aliquam ultrices neque diam, eu aliquet diam efficitur at.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec ultrices odio, in faucibus quam. Mauris accumsan ex et hendrerit dictum. Morbi nisi nulla, porta eu volutpat eget, iaculis sed augue. Aliquamultrices neque diam, eu aliquet diam efficitur at."
        ],
    },
    {
        img: aboutUsBoy,
        hoverimg: aboutUsBoy2,
        name: 'Benjamin Harrison',
        desg: 'Chairman',
        content: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec ultrices odio, in faucibus quam. Mauris accumsan ex et hendrerit dictum. Morbi nisi nulla, porta eu volutpat eget, iaculis sed augue. Aliquam ultrices neque diam, eu aliquet diam efficitur at.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec ultrices odio, in faucibus quam. Mauris accumsan ex et hendrerit dictum. Morbi nisi nulla, porta eu volutpat eget, iaculis sed augue. Aliquamultrices neque diam, eu aliquet diam efficitur at. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec ultrices odio, in faucibus quam. Mauris accumsan ex et hendrerit dictum. Morbi nisi nulla, porta eu volutpat eget, iaculis sed augue. Aliquam ultrices neque diam, eu aliquet diam efficitur at.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec ultrices odio, in faucibus quam. Mauris accumsan ex et hendrerit dictum. Morbi nisi nulla, porta eu volutpat eget, iaculis sed augue. Aliquamultrices neque diam, eu aliquet diam efficitur at."
        ],
    },
]

const providentquasi = [
    { icon: <IoBag />, title: "Corporis voluptates sit", content: 'Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip' },
    { icon: <FaRegClock />, title: "Ullamco laboris nisi", content: 'Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip' },
    { icon: <IoMdNotifications />, title: "Labore consequatur", content: 'Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip' },
    { icon: <FaAndroid />, title: "Beatae veritatis", content: 'Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip' },
]

const UserComponent = ({ user }) => {
    console.log(user)
    return !user ? null : <div className={`row ${style.userSection}`}>
        <div className="col-md-4">
            <img src={user.img} alt="" />
            <p className={style.desgtext}>{user.desg}</p>
            <div>
                <NavLink target='_blank' to="https://twitter.com/?lang=en"><FaTwitter /></NavLink>
                <NavLink target='_blank' to="https://www.facebook.com/"><FaFacebookSquare /></NavLink>
            </div>
        </div>
        <div className={`col-md-8 `}>
            <div className={style.userContent}>
                {user.content.map(item => <p>{item}</p>)}
            </div>

        </div>
    </div>
}

const AboutUs = () => {
    const [activeUser, setActiveUser] = useState(null)


    return (
        <div className={style.aboutUsSection}>
            <div className={style.aboutus}>
                <div className="container">
                    <div className={`row ${style.primarysection}`}>
                        <div className={`col-md-6 ${style.contentwrapper}`}>
                            <h4 className={style.header}>Meet our Founders</h4>
                            <p className={style.description}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae congue quam. Nullam in aliquam urna. Cras scelerisque ultrices laoreet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae congue quam. Nullam in aliquam urna. Cras scelerisque ultrices laoreet.
                            </p>
                            <NavLink target="_blank" to='https://memorypowerbackenddashboard.rabs.support/register'>
                                Find your people, your answers, your path to growth
                            </NavLink>
                        </div>
                        <div className={`col-md-6 ${style.imageWrapper}`}>
                            <div>
                                {
                                    itemcontent.map((item, i) => {
                                        return <div onClick={() => setActiveUser(i)} key={item.name} className={style.imageAndContentWrapper} >
                                            <img className={style.img} src={item.img} alt={item.img} />
                                            <img className={style.hoverimg} src={item.hoverimg} alt={item.hoverimg} />
                                            <div>
                                                <h6>{item.name}</h6>
                                                <p>{item.desg}</p>
                                            </div>
                                        </div>
                                    })
                                }
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className='container'>
                <div className={`row ${style.comfortLearningSection}`}>
                    <div className="col-md-6">
                        <img src={qualityimg} alt="qualityimg" />
                    </div>
                    <div className="col-md-6">
                        <h4>We Provide You a Comfortable Learning Experience</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed iaculis elit. Ut eu purus vitae turpis commodo dictum at.</p>
                        <div className={style.providelist}>
                            <p><span className={style.icon}><IoMdCheckmark /></span>You work in a comfortable seat</p>
                            <p><span className={style.icon}><IoMdCheckmark /></span>In-Depth Explanation</p>
                            <p><span className={style.icon}><IoMdCheckmark /></span>Motivation and Accountability</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.voluptatemSection}>
                <div className='container'>
                    <div className={`row ${style.primarysection}`}>
                        <div className={`col-md-5 ${style.voluptatemcontent}`}>
                            <h4>Voluptatem dignissimos provident quasi</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae congue quam. Nullam in aliquam urna. Cras scelerisque ultrices laoreet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae congue quam. Nullam in aliquam urna. Cras scelerisque ultrices laoreet.</p>
                            <button>
                                ABOUT US <span><IoIosArrowForward /></span>
                            </button>
                        </div>
                        <div className="col-md-7">
                            <div className={style.items}>
                                {providentquasi.map(item => {
                                    return <div>
                                        <div>
                                            <span className={style.icon}>{item.icon}</span>
                                        </div>
                                        <h4>{item.title}</h4>
                                        <p>{item.content}</p>
                                    </div>
                                })}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <GetInTouch />
            <ModalPopup
                size={"xl"}
                title={" "}
                flag={activeUser !== null}
                close={() => setActiveUser(null)}
                component={<UserComponent user={itemcontent[activeUser]} />}
            />
        </div>
    )
}

export default AboutUs