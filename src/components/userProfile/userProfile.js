import BgSvg from "./BgSvg";

function UserProfile(){


 return (
 <div className="userProfile-sideBar">
    <span className="userProfile-sideBar__userName" >userName</span>
    
    <ul className="userProfile-navBar">
      <li className="userProfile-navBar__link" >
         <span className="userProfile-navbar__link-lt-icon" > &lt; </span>
         
      </li>
    </ul>
    <BgSvg/>

 </div>
)
};
 export default UserProfile; 