import { Link } from 'react-router-dom';

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
            on-sale
        </li>
        <li>
            store
        </li>
    </ul>

    <div className="nav-UI">
        {/* wishlist */}
        {/* cart */}
    </div>

    
 </nav>
)
};
 export default Nav; 