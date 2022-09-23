import BgSvg from "../svgs/Bg-Svg";

function UserProfile(){


 return (
 <div className="userProfile-sideBar">
    <span className="userProfile-sideBar__userName" >userName</span>
    
    <ul className="userProfile-navBar">
      <li className="userProfile-navBar__link" >
         <span className="userProfile-navbar__link-lt-icon" > &lt; </span>

         <span className="userProfile-navbar__link-lt-icon" > My Profile </span>
         
      </li>
      <li className="userProfile-navBar__link" >
         <span className="userProfile-navbar__link-lt-icon" > &lt; </span>

         <span className="userProfile-navbar__link-lt-icon" > Transactions </span>
         
      </li>
      <li className="userProfile-navBar__link" >
         <span className="userProfile-navbar__link-lt-icon" > &lt; </span>

         <span className="userProfile-navbar__link-lt-icon" > Account Settings </span>
         
      </li>
      <li className="userProfile-navBar__link" >
         <span className="userProfile-navbar__link-lt-icon" > &lt; </span>

         <span className="userProfile-navbar__link-lt-icon" > Set Status</span>
         
      </li>
    </ul>
    <BgSvg/>

 </div>
)
};
 export default UserProfile; 