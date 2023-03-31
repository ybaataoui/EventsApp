import Header from "./Header";
import { FaHome, FaSearch, FaExclamation } from 'react-icons/fa';
const NavBar = () => {

    return (
        <div className="sideNav">
            <Header />
            <ul>
                <li><FaHome size="2rem"/>&nbsp; &nbsp;DashBoard</li>
                <li><FaSearch size="2rem"/>&nbsp; &nbsp;Search</li>
                <li><FaExclamation size="2rem"/>&nbsp; &nbsp;About</li>
            </ul>
        </div>
    )
}

export default NavBar;