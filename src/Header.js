import logo from "./images/voltorb.png";
import "./Header.css";

function Header() {
	return (
		<header>
			<img src={logo} alt="Voltorb logo" className="logo" />
			<h1>Voltorb Flip</h1>
		</header>
	);
}

export default Header;
