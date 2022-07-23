import Nav from "./nav";

function Header(props) {

	return (
		<div>
			<h1> Jordan Pletzer</h1>
			<Nav setActive = {props.setActive}/>
		</div>
	);
}
export default Header;