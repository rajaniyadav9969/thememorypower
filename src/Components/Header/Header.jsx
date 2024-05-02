import React from 'react'
import { Button, Container, Form, Nav, NavDropdown, Navbar, Offcanvas } from 'react-bootstrap'
import logo from '../../assets/logo/logo.png'
import favicon from '../../assets/logo/favicon.png'
import { FaFacebookSquare, FaHome, FaInstagram, FaRegCalendarCheck, FaTwitter } from 'react-icons/fa'
import { BsFillPatchCheckFill, BsStars } from 'react-icons/bs'
import { Link, NavLink } from 'react-router-dom'
import { MdAccountTree, MdCall } from 'react-icons/md'
import { RiGraduationCapFill } from 'react-icons/ri'
import style from './Header.module.scss'

const Header = () => {
    const menuItem = [
        { title: "Home", icon: <FaHome />, link: 'home' },
        {
            title: "About Us", icon: <BsStars />, options: [
                { title: "Meet Founder", icon: <BsFillPatchCheckFill />, link: 'meet-founder' },
                { title: "Our Certificates", icon: <BsFillPatchCheckFill />, link: 'home' },
            ]
        },
        {
            title: "Courses", icon: <RiGraduationCapFill />, options: [
                { title: "Meet Founder", icon: <RiGraduationCapFill />, link: 'home' },
                { title: "Comprehensive Memory", icon: <RiGraduationCapFill />, link: 'home' },
                { title: "Panoramic Memory", icon: <RiGraduationCapFill />, link: 'home' },
            ]
        },
        { title: "contact Us", icon: <MdCall />, link: '/', },
        { title: "Join Class", icon: <MdAccountTree />, link: 'https://memorypowerbackenddashboard.rabs.support/register', className: 'button' },
        { title: "Book A Free Trial", icon: <FaRegCalendarCheck />, link: 'https://memorypowerbackenddashboard.rabs.support/register', className: 'button' },
        { title: "", icon: <FaFacebookSquare />, link: 'https://www.facebook.com/', className: 'socialMedia' },
        { title: "", icon: <FaInstagram />, link: 'https://www.instagram.com/', className: 'socialMedia' },
        { title: "", icon: <FaTwitter />, link: 'https://twitter.com/?lang=en', className: 'socialMedia' },


    ]
    return (
        <div className={style.headerSection}>
            <Navbar
                expand="lg"
                collapseOnSelect
                className="bg-body-tertiary ">
                <Container fluid>
                    <Navbar.Brand className={style.imglogo}>
                        <NavLink to="/">
                            <img src={logo} alt="logo" className={style.imglogo} />
                        </NavLink>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" className={style.expandBtn} />
                    <Navbar.Offcanvas
                        id="offcanvasNavbar-expand-lg"
                        aria-labelledby="offcanvasNavbarLabel-expand-lg"
                        placement="start"
                        className={style.offcanvasNavbar}
                    >
                        <Offcanvas.Header >
                            <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
                                <img src={favicon} alt="favicon" className={style.favicon} />
                                <NavLink to="/"> </NavLink>
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body className={style.bodySection}>
                            <Nav className="justify-content-end  pe-3">
                                {menuItem.map(item => {
                                    return item.link ?
                                        <NavLink className={`${style[item.className]}`} target={["button", "socialMedia"].includes(item.className) && '_blank'} to={`${item.link}`} ><span>{item.icon}</span>{item.title}</NavLink>
                                        : (
                                            <NavDropdown
                                                title={<><span>{item.icon}</span>{item.title}</>}
                                                id="offcanvasNavbarDropdown-expand-lg"
                                                className={style.dropDown}
                                            >
                                                {item.options?.map((opt, i) => {
                                                    return <>
                                                        <NavDropdown.Item as={Link} className={style.subMenu} to={`/${opt.link}`}><span>{opt.icon}</span>{opt.title}</NavDropdown.Item>
                                                        {console.log(`${opt.link}`)}
                                                        {item.options.length != i + 1 && <NavDropdown.Divider className='m-0' />}
                                                    </>
                                                })}

                                            </NavDropdown>
                                        )
                                })}
                            </Nav>

                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header