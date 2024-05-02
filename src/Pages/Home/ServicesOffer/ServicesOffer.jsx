import React from 'react'
import img1 from '../../../assets/images/offer-card-1.png'
import img2 from '../../../assets/images/offer-card-2.png'
import img3 from '../../../assets/images/offer-card-3.png'
import img4 from '../../../assets/images/offer-card-4.png'
import img5 from '../../../assets/images/offer-card-5.png'
import style from './ServicesOffer.module.scss';
import { NavLink } from 'react-router-dom'

const ServicesOffer = () => {
    const offeritem = [
        { img: img1, title: 'Online Teaching', content: "With online learning programs, parents can teach their kids anytime and anywhere.", btntext: 'Book Free Trail Class' },
        { img: img2, title: 'Live Classes', content: "Although live class ideas are already prevalent and established education business.", btntext: 'Book Free Trail Class' },
        { img: img3, title: 'Trained Teachers', content: "Teaching is a passion and experts want to share their expertise outside of the institutional sphere.", btntext: 'Book Free Trail Class' },
        { img: img4, title: 'Visual Concepts', content: "Learning by watching videos is better than reading long pages and bulky books", btntext: 'Book Free Trail Class' },
        { img: img5, title: 'Gamified Course', content: "Gamification immerses the students into the subject matter.", btntext: 'Book Free Trail Class' },
        { img: img2, title: 'Trained Teachers', content: "Teaching is a passion and experts want to share their expertise outside of the institutional sphere.", btntext: 'Book Free Trail Class' },
    ]
    return (
        <div className={style.servicesSecrion}>
            <div className='container'>
                <h3 className={style.title}>Services we offer ?</h3>
                <div className={`row ${style.serviceItems}`}>
                    {offeritem.map((item) => {
                        return <div className={`col-md-4 ${style.servideOfferitem}`}>
                            <img src={item.img} alt="" />
                            <div>
                                <h5>{item.title}</h5>
                                <p>{item.content}</p>
                                <button className='bookFreebtn'>
                                    <NavLink to="https://memorypowerbackenddashboard.rabs.support/register">{item.btntext}</NavLink>
                                </button>
                            </div>
                        </div>
                    })}

                </div>
            </div>
        </div>
    )
}

export default ServicesOffer