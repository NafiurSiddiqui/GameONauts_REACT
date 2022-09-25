import { Link } from 'react-router-dom';
import Button from '../Elements/Btn';

function Nav() {
	return (
		<nav>
			<img src={require("../../assets/Logo.png")} alt="Logo" />

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

			<form role="search" className="nav-search-container">
				<input
					type="search"
					id="mySearch"
					name="q"
					aria-label="Search through site content"
				/>
                
			</form>

			<Button>Log in</Button>
		</nav>
	);
}
export default Nav;
