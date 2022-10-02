import Button from '../../Elements/Btn';
import BgSvg from '../../svgs/userProfile-nav/Bg-Svg';
import CartIcon from '../../svgs/userProfile-nav/Cart-Svg';
import CoinSvg from '../../svgs/userProfile-nav/Coin-Svg';
import NotificationIcon from '../../svgs/userProfile-nav/Notification-Svg';
import WishListIcon from '../../svgs/userProfile-nav/Wishlist-SVG';

function UserNav() {
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

					<span className="userProfile-navbar__link-lt-icon">Transactions</span>
				</li>
				<li className="userProfile-navBar__link">
					<span className="userProfile-navbar__link-lt-icon"> &lt; </span>

					<span className="userProfile-navbar__link-lt-icon">
						Account Settings
					</span>
				</li>
				
			</ul>

			<div className="userProfile-notifications">
				<NotificationIcon />
				<CartIcon />
				<WishListIcon />
			</div>

			<div className="userProfile-navBar_coin-holder">
				<span className="userProfile-navBar_coin-holder__lt-symbol">&lt;</span>
				
				<div className="userProfile-navBar_coin-holder__balance-container" >
				<CoinSvg className="userProfile-navBar_coin-holder__balance-container__coinSvg"  />
				<span className="userProfile-navBar_coin-holder__balance-container__digit">
					Balance
				</span>
				</div>

				
			</div>
			<BgSvg />

			<Button>Log Out</Button>
		</div>
	);
}
export default UserNav;
