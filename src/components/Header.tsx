import * as React from "react"
import { Link } from "gatsby"
import styles from "./Header.module.scss"

import { FaTwitter, FaGithub } from "react-icons/fa"
import ThemeSwitch from "./ThemeSwitcher"

class Header extends React.Component<{}, { open: boolean }> {
	constructor(props: any) {
		super(props)
		this.state = {
			open: false,
		}
	}

	toggleNavBar() {
		this.setState({ open: !this.state.open })
	}

	render() {
		let headerLinks = {
			right: [
				{
					name: "Blog",
					to: "/blog/",
					partiallyActive: true,
				},
				{
					name: "About",
					to: "/about/",
				},
				{
					name: "Contact",
					to: "/contact/",
				},
				{
					name: "Shared",
					to: "https://cloud.alexx.ml/s/LA55ZXR2oR9adsn",
				},
				{
					name: "Private",
					to: "https://cloud.alexx.ml/s/5tMTwfk7cnAwSy9",
				},
				// Shows only in development
				...(process.env.GATSBY_ENV === "development"
					? [
							{
								name: "UI Kit",
								to: "/ui/",
							},
					  ]
					: []),
			],
			left: [],
		}

		// Creates a list of links
		const linkList = headerLinks.right.map((link) => {
			const internal = /^\/(?!\/)/.test(link.to)
			if (internal) {
				return (
					<Link
						key={link.to}
						to={link.to}
						className={styles.link}
						activeClassName={styles.activeLink}
						// style={"block mt-4 lg:inline-block md:mt-0 mr-4"}
						partiallyActive={link.partiallyActive}
					>
						{link.name}
					</Link>
				)
			} else {
				return (
					<a key={link.to} href={link.to} className={styles.link} target="__blank">
						{link.name}
					</a>
				)
			}
		})

		return (
			<header className={styles.header}>
				<nav className={styles.navbar + " container"}>
					<div
						style={{ display: "flex", alignItems: "center", flexShrink: 0, marginRight: "1.5rem" }}
					>
						<ThemeSwitch></ThemeSwitch>
						<Link className={styles.logo} to="/">
							FrozenAlex
						</Link>
					</div>

					<div
						style={{
							alignContent: "right",
						}}
						className={styles.alwaysVisible}
					>
						{linkList[1]}
					</div>

					<div className={styles.menuButton}>
						<button
							className="flex items-center px-3 py-1 select-none outline-none focus:outline-none"
							onClick={this.toggleNavBar.bind(this)}
						>
							<svg
								className="fill-current h-5 w-5"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<title>Menu</title>
								<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
							</svg>
						</button>
					</div>
					<div className={`${styles.linksContainer} ${this.state.open ? "" : styles.hidden}`}>
						<div className={styles.links}>{linkList}</div>
						<div className={styles.socialLinks}>
							<a href="https://twitter.com/FrosteeAlex" target="__blank">
								<FaTwitter size={24} />
							</a>
							<a href="https://github.com/FrozenAlex" target="__blank">
								<FaGithub size={24} />
							</a>
						</div>
					</div>
				</nav>
			</header>
		)
	}
}
export default Header
