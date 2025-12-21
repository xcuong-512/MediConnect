import './Navbar.css'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function NavBar() {
    const navigate = useNavigate();
    return (
        <>
            <div className='main-header'>

                <div className='main-logo'>
                    {/* <img src="./img/doctor.jpg" alt="drug-logo" className='img-logo' /> */}
                    <h3>MediConnect</h3>
                </div>

                <div className='main-nav'>
                    <ul>
                        <li ><Link className='menu-item' to="/">Home</Link></li>
                        <li><a className='menu-item' href="/">Services</a></li>
                        <li className='menu-item'><a href="/">Price List</a></li>
                        <li className='menu-item'><a href="/">About Us</a></li>
                        <li className='menu-item'><a href="/">News</a></li>
                        <li className='menu-item'><Link to="/contact">Contact</Link></li>


                    </ul>
                </div>

                <div className='main-button'>
                    <button onClick={() => navigate('/signin')} className='btn'>SignIn</button>
                    <button onClick={() => navigate('/signup')} className='btn'>SignUp</button>
                </div>
            </div>



        </>
    )
}
export default NavBar;