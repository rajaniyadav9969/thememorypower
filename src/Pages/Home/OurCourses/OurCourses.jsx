import React from 'react';
import img1 from '../../../assets/images/MaskGroup1.png'
import img2 from '../../../assets/images/MaskGroup2.png'
import img3 from '../../../assets/images/MaskGroup3.png'
import viewimg from '../../../assets/images/view-details.png'
import { FaCalendarDays } from "react-icons/fa6";
import { NavLink } from 'react-bootstrap';
import memorying from '../../../assets/images/memorypower.png'
import { Link } from 'react-router-dom';
import { SiYoutubemusic } from "react-icons/si";
import style from './OurCourses.module.scss'

const item = [
    {
        img: img1,
        title: 'Fundamental of memory',
        content1: 'Curriculum Includes',
        content2: 'Sequence, Fundamentals Coding Blocks, Loops',
        fee: '₹ 9,599/-',
        view: 'view Details',
        vimg: viewimg,
        trial: 'Book Free Trail',
        tiocn: <FaCalendarDays />,
        class: '8 Classes'
    },
    {
        img: img2,
        title: 'comprehensive memory',
        content1: 'Curriculum Includes',
        content2: 'Sequence, Fundamentals Coding Blocks, Loops',
        fee: '₹ 49,999/-',
        view: 'view Details',
        vimg: viewimg,
        trial: 'Book Free Trail',
        tiocn: <FaCalendarDays />,
        class: '50 Classes'
    },
    {
        img: img3,
        title: 'Panaromic memory',
        content1: 'Curriculum Includes',
        content2: 'Sequence, Fundamentals Coding Blocks, Loops',
        view: 'view Details',
        vimg: viewimg,
        trial: 'Book Free Trail',
        tiocn: <FaCalendarDays />,
        fee: '₹ 1,35,999/-',
        class: '100 Classes'
    },


]
const OurCourses = () => {
    return (
        <div className={style.ourCoursesSection}>
            <div className={style.ourCoursesContent}>
                <div className="container">
                    <h1 className={style.title}>Our Courses</h1>
                    <div className="row">
                        {item.map((item) => {
                            return <div className={`col-md-4  ${style.ourCoursesItem}`}>
                                <div className={style.classContent}>
                                    <span>{item.class}</span>
                                </div>
                                <div className={style.coursesItem}>
                                    <img className={style.cardimg} src={item.img} alt={item.img} />
                                    <div className={style.content}>
                                        <h5>{item.title}</h5>
                                        <p className={style.contnet1}>{item.content1}</p>
                                        <p className={style.content2}>{item.content2}</p>
                                        <p className={style.fees}>{item.fee}</p>
                                        <button>
                                            {item.view}
                                            <img src={item.vimg} alt={item.vimg} />
                                        </button>
                                        <button>
                                            <NavLink as={Link} target='blank' to="https://memorypowerbackenddashboard.rabs.support/register">
                                                <span>{item.tiocn}</span>  {item.trial}
                                            </NavLink>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            </div>
            <div className={style.memorypowerManagTeam}>
                <div className="container">
                    <div className={`row ${style.memory}`}>
                        <div className="col-md-5">
                            <img src={memorying} alt="" />
                            <p className={style.title}>Memory Power Management Team</p>
                        </div>
                        <div className={`col-md-7 ${style.memorypowerContent}`}>
                            <p>Top 1% teachers selected by an industry-leading 4-step teacher assessment process by top 1% of early childhood experts.</p>
                            <p className='mb-5'>Memory power follows a rigorous 4-step Selection Process for confirming teacher candidates so your childern are taught by the top early childhood experts.</p>
                            <button><span><SiYoutubemusic /></span>Live Comments</button> <br />
                            <button>
                                <NavLink as={Link} target='blank' to="https://memorypowerbackenddashboard.rabs.support/register">
                                    <span><FaCalendarDays /></span> Book A Free Trial
                                </NavLink>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurCourses