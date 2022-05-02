import './index.scss';
import {Link} from 'react-router-dom';
import LogoS from '../../assets/images/logo-s.png';
import LogoSubtitle from '../../assets/images/logo_sub.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


const Sidebar =()=>(
<div className='nav-bar'>
    <Link className='logo' to='/'>
    <img src={LogoS} alt='logo'/>
    <img className="sub-logo" src={LogoSubtitle} alt='altslogoban'/>
    </Link>
    <nav>
        <NavLink exact='true' activeclassname="active" to="/">
            <FontAwesomeIcon icon={faHome} color="#4d4d4d"/>
        </NavLink>
        <NavLink exact='true' activeclassname="active" className="about-link" to="/about">
            <FontAwesomeIcon icon={faUser} color="#4d4d4d"/>
        </NavLink>
        <NavLink exact='true' activeclassname="active" to="/">
            <FontAwesomeIcon icon={faEnvelope} className="contact-link" color="#4d4d4d"/>
        </NavLink>
    </nav>
</div>
)
export default Sidebar;
