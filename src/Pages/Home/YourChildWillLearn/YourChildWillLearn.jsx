import React from 'react'
import img1 from '../.././../assets/images/download.png'
import img2 from '../.././../assets/images/structure.png'
import img3 from '../.././../assets/images/creative.png'
import img4 from '../.././../assets/images/sequencing.png'
import img5 from '../.././../assets/images/algorithmic.png'
import style from './YourChildWillLearn.module.scss'

const YourChildWillLearn = () => {
    const learnitem = [
        { img: img1, content: 'Logics' },
        { img: img2, content: 'Structure' },
        { img: img3, content: 'Creative Thinking' },
        { img: img4, content: 'Sequencing' },
        { img: img5, content: 'Algorithmic Thinking' },
    ]
    return (
        <div className={style.learnSection}>
            <div className={`container ${style.learnContent}`}>
                <h5 className={style.title}>Your child will learn</h5>
                <hr />
                <p className={style.content}>The Memory power that good questions drive good answers. Whether it's a query about the world around us or a challenge.</p>
                <div className={style.learnItem}>
                    {
                        learnitem.map((item) => {
                            return <div>
                                <div className={style.imgSection}>
                                    <img src={item.img} alt={item.img} />
                                </div>
                                <p className={style.itemtitle}>{item.content}</p>
                            </div>
                        })
                    }

                </div>
            </div>
        </div>
    )
}

export default YourChildWillLearn