import React from 'react'
import { FaCalendarDays } from 'react-icons/fa6'
import style from './MemoryPower.module.scss'
import { NavLink } from 'react-router-dom'

const MemoryPower = () => {
    return (
        <div className={style.memoryPower}>
            <div className="container">
                <p>Memory Power is the top coding learning platform for young minds:</p>
                <button> <NavLink target='blank' to="https://memorypowerbackenddashboard.rabs.support/register"><span><FaCalendarDays /></span>Book A Free Trail</NavLink></button>
            </div>

        </div>
    )
}

export default MemoryPower