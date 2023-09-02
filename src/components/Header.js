import {
    Navbar,
    Nav,
    NavItem
} from 'reactstrap';
import { NavLink } from 'react-router-dom';


const Header = () => {
    return (
        <Navbar dark color='primary' sticky='top' expand='md'>

            <Nav className='ms-auto' navbar>
                <NavItem>
                    <NavLink className='nav-link' to='/'>
                        <i className='fa fa-home fa-lg' /> Home
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className='nav-link' to='/about'>
                        <i className='fa fa-info fa-lg' /> About
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className='nav-link' to='/contact'>
                        <i className='fa fa-card fa-lg' /> Contact
                    </NavLink>
                </NavItem>
            </Nav>
        
        </Navbar >
    );
}

export default Header;
