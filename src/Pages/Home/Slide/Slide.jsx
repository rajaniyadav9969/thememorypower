// App.js

import React, { useState } from 'react';
import Carousel from './Carousel';
import styles from './slide.module.scss';



const tabData = {
    "Overview": [
        "“THE MEMORY POWER” is an EdTech startup company that equips students with the skillset and mindset required to be the future of the companies worldwide. We connect a deep understanding of education with the power of the “21st CENTURY LIFE SKILLS” to make your child ready to face this competitive and challenging world.",
        "The universe is a subject created in the minds of humans addressed by the facts and theories since centuries. To think about it in detail requires the strength of knowledge and experience which are used to lead an intellectual life."
    ],
    "Our Vision": [
        "To help your child enhance the understanding of life based on the core concept of the most powerful tool in the world - “THE MEMORY POWER”.",
        "“Memory Power” is an art of practicing the life skills that will provide your children with the important tools for the development of brain, such as deep thinking, making new friends, decision making and taking actions in situations where their parents or teachers are not around to help."
    ]
};

const Slide = () => {
    const [activeTab, setActiveTab] = useState('Overview');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className={styles.container}>
            <div className="row">
                <div className="col-md-5">
                    <Carousel />
                </div>
                <div className="col-md-7">
                    <div className={styles.tabs}>
                        {Object.keys(tabData).map((tab, index) => (
                            <button
                                key={index}
                                className={`${styles.tab} ${activeTab === tab ? styles.active : ''}`}
                                onClick={() => handleTabClick(tab)}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                    <div className={styles.tabContent}>
                        {tabData[activeTab].map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                        {/* <TabContent content={} /> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slide;
