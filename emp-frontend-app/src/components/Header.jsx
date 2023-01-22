import React from 'react';
import logo from "../Images/logo.png";
import { Link } from 'react-router-dom';
import formPage from "../Images/formPage.jpg";

const Header = () => {
    return (
        <div>
            <header className="container">
                <Link to="/">
                    <img className="logo" src={logo} alt="logo" />
                </Link>
                <div>
                    {/* <div> */}
                    <nav>
                        <Link to="/">HOME</Link>
                        <Link to="/EmployeeForm">EMPLOYEE FORM</Link>
                    </nav>
                    {/* </div> */}
                    <img className='formPage' src={formPage} alt="main" />
                </div>


            </header>
        </div>
    )
}

export default Header