import React from 'react'
import './Footer.css';
import { BsInstagram } from 'react-icons/bs'
import { MdFacebook } from 'react-icons/md'

function Footer() {
  return (
    <footer>
        <div className='container'>
            <div className='row'>
                <div className='col-xl-3 col-lg-3 col-md-6 col-sm-12'>
                <div className='footerLogo'><img src="/logo.png" alt='logo' /></div>
                    <ul class="socialIcons">
                        <li>
                        <a href='https://www.facebook.com/tyreplex' title="Facebook">
                            <MdFacebook />
                        </a>
                        </li>
                        <li>
                        <a href='https://www.instagram.com/ontyreplex' title="Instagram">
                        <BsInstagram />
                        </a>
                        </li>
                    </ul>
                </div>
                <div className='col-xl-3 col-lg-3 col-md-6 col-sm-12'>
                    <ul class="footerMenu">
                        <li>
                            <a href='/' title="Who We Are">Who We Are</a>
                        </li>
                        <li>
                            <a href='/' title="Are you a Tyre Dealer?">Are you a Tyre Dealer?</a>
                        </li>
                    </ul>
                </div>
                <div className='col-xl-3 col-lg-3 col-md-6 col-sm-12'>
                    <ul class="footerMenu">
                        <li>
                            <a href='/' title="Privacy Policy">Privacy Policy</a>
                        </li>
                        <li>
                            <a href='/' title="Terms of use">Terms of use</a>
                        </li>
                    </ul>
                </div>
                <div className='col-xl-3 col-lg-3 col-md-6 col-sm-12'>
                    <ul class="footerMenu">
                        <li>
                            <a href='/' title="Contact Us">Contact Us</a>
                        </li>
                        <li>
                            <a href='/' title="Career">Career</a>
                        </li>
                        <li>
                            <a href='/' title="Shipping & Return Policy">Shipping & Return Policy</a>
                        </li>
                        
                    </ul>
                </div>
            </div>
            <p class="copyright">©2024 TyrePlex Technologies &amp; Commerce Pvt. Ltd. All Rights Reserved.</p>
        </div>
    </footer>
  )
}

export default Footer
