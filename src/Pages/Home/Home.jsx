import { Switch } from 'antd';
import React, { useEffect, useState } from 'react';
import { v4 as uuid } from "uuid";
import img from '../../assets/images/aboutCompany.png';
import img2 from '../../assets/images/aboutCompany2.png';
import img3 from '../../assets/images/aboutCompany3.png';
import brainImg from "../../assets/images/view-details.png";
import style from './Home.module.scss';
import OurCourses from './OurCourses/OurCourses';
import PrepareOurKIds from './PrepareOurKIds/PrepareOurKIds';
import ServicesOffer from './ServicesOffer/ServicesOffer';
import Slide from './Slide/Slide';
import YourChildWillLearn from './YourChildWillLearn/YourChildWillLearn';
import { FaCalendarDays } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';

const Home = () => {
    const onChange = (checked) => {
        console.log(`switch to ${checked}`);
    };


    const [brainImages, setBrainImages] = useState([]);

    // console.log(brainImages)

    useEffect(() => {
        const generateBrainImages = () => {
            const numBrains = Math.floor(Math.random() * 10) + 1;
            const newBrainImages = Array.from({ length: numBrains }, () => {
                const exceedThreshold = Math.random() < 0.4;

                const data = {
                    id: uuid(),
                    delay: Math.floor(Math.random() * 10) + 5,
                    rotation: Math.floor(Math.random() * 180),
                    xAxis: exceedThreshold ? Math.random() * 25 + 70 : Math.random() * 70,
                    width: Math.floor(Math.random() * 100) + 1
                };
                return data
            });
            setBrainImages(newBrainImages);
        };
        generateBrainImages()

        const interval = setInterval(generateBrainImages, 20000);

        return () => clearInterval(interval);
    }, []);
    return (
        <div className={style.homeSection}>
            <div className={`row ${style.homeContent}`}>
                {/* Brain images */}
                <div className={style.brainImage}>

                    {brainImages.map((brain, index) => (
                        <img
                            key={brain.id}
                            src={brainImg}
                            alt="brain"
                            style={{
                                // rotate: `${brain.rotation}deg`,
                                left: `${brain.xAxis}%`,
                                animationDelay: `${brain.delay}s`,
                                width: `${brain.width}px`
                            }}
                        />
                    ))}
                </div>
                <div>

                    <div className={`col-md-6 ${style.content}`}>
                        <h3>Online Education Courses</h3>
                        <p>''For Everyone''</p>
                        <div>
                            <p>Book your free class now</p>
                            <p>For Kids <Switch defaultChecked onChange={onChange} /> For Adults(+18)</p>
                            <small>Select your child's grade/class in school</small>
                            <div className={style.cards}>
                                {new Array(12).fill().map((e, i) => (
                                    <div>
                                        <p>Class</p><p>{i + 1}</p>
                                    </div>
                                ))}
                            </div>
                            <button className='bookFreebtn'>
                                <NavLink target='blank' to="https://memorypowerbackenddashboard.rabs.support/register">
                                    <span><FaCalendarDays /></span>Shedule a FREE Class
                                </NavLink>
                            </button>
                        </div>
                    </div>

                    <div className={`col-md-6 ${style.images}`} >
                        <img src={img3} alt="img3" />
                        <img src={img2} alt="img2" />
                        <img src={img} alt="img" />
                    </div>
                </div>

            </div>
            <Slide />
            <ServicesOffer />
            <PrepareOurKIds />
            <YourChildWillLearn />
            <div>
                <OurCourses />
            </div>
        </div>
    )
}

export default Home