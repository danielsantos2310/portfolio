import './index.scss';
import {Link, NavLink} from 'react-router-dom';
import LogoS from '../../assets/images/logo-s.png';
import LogoSubtitle from '../../assets/images/logo_sub.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser,faHome, faMoneyBill, faFile} from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub, faInstagram, faLinkedin, faResearchgate} from '@fortawesome/free-brands-svg-icons';


const Sidebar =()=>(
<div className='nav-bar'>   
    <Link className='logo' to='/'>
    <img src={LogoS} alt='logo'/>
    <img className="sub-logo" src={LogoSubtitle} alt='SDaniel'/>
    </Link>
    <nav>
        <NavLink exact='true' activeclassname="active" to="/">
            <FontAwesomeIcon icon={faHome} color="#4d4d4d"/>
        </NavLink>
        <NavLink exact='true' activeclassname="active" className="about-link" to="/about">
            <FontAwesomeIcon icon={faUser} color="#4d4d4d"/>
        </NavLink>
        <NavLink exact='true' activeclassname="active" to="/contact">
            <FontAwesomeIcon icon={faEnvelope} className="contact-link" color="#4d4d4d"/>
        </NavLink>
        <NavLink exact='true' activeclassname="active" to="/cv">
            <FontAwesomeIcon icon={faFile} className="cv-link" color="#4d4d4d"/>
        </NavLink>
        <NavLink exact='true' activeclassname="active" to="/expense">
            <FontAwesomeIcon icon={faMoneyBill} className="expense-tracker-link" color="#4d4d4d"/>
        </NavLink>
    </nav>
    <ul>
        <li>
            <a target="_blank"
             rel='noreferrer'
              href=''>
                <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
                </a>
        </li>
        <li>
            <a target="_blank"
             rel='noreferrer'
              href=''>
                <FontAwesomeIcon icon={faInstagram} color="#4d4d4e"/>
                </a>
        </li>
        <li>
            <a target="_blank"
             rel='noreferrer'
              href=''>
                <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
                </a>
        </li>
        <li>
            <a target="_blank"
             rel='noreferrer'
              href=''>
                <FontAwesomeIcon icon={faFacebook} color="#4d4d4e"/>
                </a>
        </li>
        <li>
            <a target="_blank"
             rel='noreferrer'
              href=''>
                <FontAwesomeIcon icon={faResearchgate} color="#4d4d4e"/>
                </a>
        </li>
    </ul>
</div>
)
export default Sidebar;
