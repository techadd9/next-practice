import React from "react";
import Link from "next/link";
import navStyles from "../styles/Nav.module.css";

const Nav = () => {
	return (
		<nav className={navStyles.nav}>
			<ul>
				<li>
					<Link href="/">
						<a>home</a>
					</Link>
				</li>
				<li>
					<Link href="/photos">
						<a>photos</a>
					</Link>
				</li>
				<li>
					<a href="/">home2</a>
				</li>
				<li>
					<a href="/photos">photos2</a>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
