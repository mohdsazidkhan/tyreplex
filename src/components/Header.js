import React, { useState } from 'react'
import './Header.css';
import { CiUser } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";
import { AiOutlineMenu } from 'react-icons/ai';
function Header() {
    const [isOpen, setIscOpen] = useState(false);
    return (
        <header>
            <div className='container'>
                <div className='d-flex justify-content-between align-items-center'>
                    <div className='logo'><img src="/logo.png" alt='logo' /></div>
                    <span className='toggleBtn' onClick={()=>setIscOpen(!isOpen)}><AiOutlineMenu/></span>
                    <ul className={`${isOpen ? "isOpen" : ''}`}>
                        <li>
                            <a href='/' className='text-uppercase font-weight-normal text-decoration-none'>Care Tyre <MdKeyboardArrowDown />
                                <ul className='subMenu justify-content-end'>
                                    <li>
                                        <a href='/' className='text-decoration-none'>MRF Tyres
                                        </a>
                                    </li>
                                    <li>
                                        <a href='/' className='text-decoration-none'>CEAT Tyres</a>
                                    </li>
                                    <li>
                                        <a href='/' className='text-decoration-none'>Goodyear Tyres</a>
                                    </li>
                                    <li>
                                        <a href='/' className='text-decoration-none'>Apollo Tyres</a>
                                    </li>
                                </ul>
                            </a>
                        </li>
                        <li>
                            <a href='/' className='text-uppercase font-weight-normal text-decoration-none'>Bike Tyre <MdKeyboardArrowDown />
                                <ul className='subMenu justify-content-end'>
                                    <li>
                                        <a href='/' className='text-decoration-none'>MRF Tyres
                                        </a>
                                    </li>
                                    <li>
                                        <a href='/' className='text-decoration-none'>CEAT Tyres</a>
                                    </li>
                                    <li>
                                        <a href='/' className='text-decoration-none'>Goodyear Tyres</a>
                                    </li>
                                    <li>
                                        <a href='/' className='text-decoration-none'>Apollo Tyres</a>
                                    </li>
                                </ul>
                            </a>

                        </li>
                        <li>
                            <a href='/' className='text-uppercase font-weight-normal text-decoration-none'>Tyre Pressure

                            </a>

                        </li>
                        <li>
                            <a href='/' className='text-uppercase font-weight-normal text-decoration-none'>Commericial Tyre 

                            </a>

                        </li>
                        <li>
                            <a href='/' className='text-uppercase font-weight-normal text-decoration-none'>Accessories <MdKeyboardArrowDown />
                                <ul className='subMenu justify-content-end'>
                                    <li>
                                        <a href='/' className='text-decoration-none'>Batteries
                                        </a>
                                    </li>
                                    <li>
                                        <a href='/' className='text-decoration-none'> Alloys Wheels </a>
                                    </li>

                                </ul>
                            </a>

                        </li>
                        <li>
                            <a href='/' className='text-uppercase font-weight-normal text-decoration-none'>More <MdKeyboardArrowDown />
                                <ul className='subMenu justify-content-end'>
                                    <li><a className='text-decoration-none' href="/" title="CashBack Offer">CashBack Offer</a></li>
                                    <li><a className='text-decoration-none' href="/" title="Find Tyre Dealers">Find Tyre Dealers</a></li>
                                    <li><a className='text-decoration-none' href="/" title="Compare tyres">Compare Tyres</a></li>
                                    <li><a className='text-decoration-none' href="/" title="Are you a Tyre Dealer">Are you a Tyre Dealer</a></li>
                                    <li><a className='text-decoration-none' href="/" title="Wheel balancing">Wheel balancing</a></li>
                                    <li><a className='text-decoration-none' href="/" title="Wheel Alignment">Wheel Alignment</a></li>
                                </ul>
                            </a>

                        </li>
                        <li>
                            <a href='/' className='signinBtn text-uppercase font-weight-normal text-decoration-none'><CiUser /> Sign In</a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header
