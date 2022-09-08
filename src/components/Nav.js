import { Link } from 'react-router-dom';
import Button from './Btn';

function Nav(){
 return (
 <nav>
    <img src="../assets/Logo.png" alt="Logo" />

    <ul>
        <li>
           <Link to={'./Pages/Home.js'}> Home </Link> 
        </li>
        <li>
        <Link to={'./Pages/Explore.js'}> Explore</Link> 
        </li>
        <li>
        <Link to={'./Pages/On-sale.js'}> On-Sale</Link> 
        </li>
        <li>
        <Link to={'./Pages/Store.js'}> Store </Link> 
        </li>
    </ul>

    <div className="nav-userBtns">
        {/* wishlist */}
        {/* cart */}
    </div>

    <Button>
        Log in
    </Button>
 </nav>
)
};
 export default Nav; 