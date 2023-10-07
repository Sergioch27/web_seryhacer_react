import logo from'../../assets/logotype.png'
import './NavTopBar.css'
import IconFont from '../IconFont/IconFont'
import Quantity from '../quantity/quantity'
import { faCartShopping, faRightToBracket, faUserPen } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons'
import React from 'react'
const NavTopBar = () => {
    return (
        <nav>
            <div className="header_top">
      <div className="header_top_section_1">
        <ul className="info_contact">
          <li>
          <IconFont className='iconStyle header_button' label='INSTAGRAM' icon={faInstagram}/>
          </li>
          <li>
          <IconFont className='iconStyle header_button' label='YOUTUBE' icon={faYoutube} />
          </li>
          <li>
          <IconFont icon={faFacebook} className='iconStyle header_button' label='FACEBOOK'  />
          </li>
        </ul>
      </div>
      <div className="logo_top_section">
        <a href="./index"><img src={logo} alt="logo_seryhacer" /></a>
      </div>
      <div className="header_top_section_3">
        <ul>
          <li>
          <IconFont icon={faRightToBracket} className='iconStyle header_button' label="ENTRAR"/>
          </li>
          <li id="register">
          <IconFont icon={faUserPen} className='iconStyle header_button' label="REGISTRASE"/>
          </li>
          <li id="cart" >
            <Quantity className="qantity" quantityNum="0"/>
            <IconFont icon={faCartShopping} className='iconStyle header_button' />
          </li>
          <li id="logout" className="hide">
          <IconFont icon={faRightToBracket} className='iconStyle header_button' label="CERRAR SESSION"/>
          </li>
        </ul>
      </div>
    </div>
        </nav>
    );
}
export default NavTopBar