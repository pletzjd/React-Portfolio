import Nav from "./nav";

function Header(props) {

	return (

		<header id="Site-Header">
			<h1>Jordan Pletzer</h1>
			<Nav setActive={props.setActive} />
		</header>

	);
}
export default Header;