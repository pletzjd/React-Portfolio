import Nav from "./nav";

function Header(props) {

	return (

		<header>
			<h1>Jordan Pletzer</h1>
			<Nav setActive={props.setActive} />
		</header>

	);
}
export default Header;