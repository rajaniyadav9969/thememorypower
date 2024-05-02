import React from 'react'
import img from '../../../assets/images/graph.png'
import style from './PrepareOurKIds.module.scss'

const PrepareOurKIds = () => {
    return (
        <div className={style.ourKidsSection}>
            <div className="container">
                <div className="row ">
                    <div className="col-md-4">
                        <img src={img} alt="img" />
                    </div>
                    <div className="col-md-8">
                        <p className={style.title}>How do we prepare our kids for the better future ?</p>
                        <div>
                            <p>Here is a better way to build the mindsets of our kids to lead businesses of the future. This course has been carefully designed to enrich students with the skills needed for them to thrive as creative thinkers, great leaders, public speakers and leading life like “Entrepreneurs”.</p>
                            <p>Each module of the course contains fun & engaging assignments that help our students learn the subject matter better through practical implementation. This also helps schools and parents assess improvement and see tangible results of the student’s learning.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default PrepareOurKIds