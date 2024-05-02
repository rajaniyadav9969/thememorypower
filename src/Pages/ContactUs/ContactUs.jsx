import React from 'react'
import contactus from "./ContactUs.module.scss"
const ContactUs = () => {
    return (
        <div className={contactus.contactUsSection}>
            <div className={contactus.contactheader}>
                <div className={contactus.content}>
                    <h3 className={contactus.heading}>Our teams are here to help</h3>
                    <p className={contactus.bugreport}>Questions, bug reports, feedback — we’re here for it all.</p>
                </div>
            </div>
        </div>
    )
}

export default ContactUs