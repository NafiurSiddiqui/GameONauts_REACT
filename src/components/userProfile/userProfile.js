import BgSvg from '../svgs/Bg-Svg';
import CartIcon from '../svgs/Cart-Svg';
import NotificationIcon from '../svgs/Notification-Svg';
import WishListIcon from '../svgs/Wishlist-SVG';

function UserProfile() {
	return (
		<div className="userProfile-sideBar">
			<span className="userProfile-sideBar__userName">userName</span>

			<ul className="userProfile-navBar">
				<li className="userProfile-navBar__link">
					<span className="userProfile-navbar__link-lt-icon"> &lt; </span>

					<span className="userProfile-navbar__link-lt-icon"> My Profile </span>
				</li>
				<li className="userProfile-navBar__link">
					<span className="userProfile-navbar__link-lt-icon"> &lt; </span>

					<span className="userProfile-navbar__link-lt-icon">
						{' '}
						Transactions{' '}
					</span>
				</li>
				<li className="userProfile-navBar__link">
					<span className="userProfile-navbar__link-lt-icon"> &lt; </span>

					<span className="userProfile-navbar__link-lt-icon">
						{' '}
						Account Settings{' '}
					</span>
				</li>
				<li className="userProfile-navBar__link">
					<span className="userProfile-navbar__link-lt-icon"> &lt; </span>

					<span className="userProfile-navbar__link-lt-icon"> Set Status</span>
				</li>
			</ul>

			<div className="userProfile-notifications">
				<NotificationIcon />
				<CartIcon />
				<WishListIcon />
			</div>
			<BgSvg />
		</div>
	);
}
export default UserProfile;
