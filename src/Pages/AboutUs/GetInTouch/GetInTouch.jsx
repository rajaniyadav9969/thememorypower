import React from 'react'
import ball1 from '../../../assets/images/ball1.png'
import ball2 from '../../../assets/images/ball2.png'
import style from "./GetInTouch.module.scss"
import { NavLink } from 'react-router-dom'

function GetInTouch() {
    return (
        <div className={style.container}>
            <div className={`container ${style.wrapper}`}>
                <img src={ball1} />
                <img src={ball2} />

                <div>
                    <div className={style.avatars}>
                        {["R", "T", "+3"].map(e => <div>{e}</div>)}
                    </div>
                    <h4>Still have questions?</h4>
                    <p>Cannot find the snwer you are looking for? Please chat  with our friendly term.</p>
                    <button >GET IN TOUCH</button>
                </div>
                <div className='message' >
                    <h4>From our team</h4>
                    <h4>Success is the sum of small efforts, repeated day in and day out</h4>
                    <div className={style.logo}>R</div>
                    <h4>Tim Cook</h4>
                    <p>Web Developer, Untitled</p>
                </div>
                <div className='message'>
                    <div className={style.bottom} >
                        <div>
                            <h4>Join 10000+ Students</h4>
                            <p>Stay in the loop with everything you need to know.</p>
                        </div>
                        <div>
                            <input placeholder='Enter your email'></input>
                            <p>We care about your data in our</p>
                            <NavLink to="https://memorypower.rabsconnect.in/meet-founder">Privacy policy</NavLink>
                        </div>
                        <div>
                            <button >SUBSCRIBE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GetInTouch