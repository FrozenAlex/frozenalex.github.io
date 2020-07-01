import * as React from "react"
import { Link } from "gatsby"

import { FaTwitter, FaGithub } from "react-icons/fa"
import ThemeSwitch from "./ThemeSwitcher"

class Header extends React.Component<{}, { open: boolean }> {
  constructor(props: any) {
    super(props)
    this.state = {
      open: false,
    }
  }

  render() {
    return (
      <header className="header" style={
        {
          borderBottom: "var(--accent) solid"
        }
      }>
        
        <nav className="navbar container mx-auto px-4">
          {/* Logo */}
          
          
            <div className="flex items-center flex-shrink-0 mr-6">
            <ThemeSwitch ></ThemeSwitch>
              {/* <svg
                className="fill-current h-8 w-8 mr-2"
                width="54"
                height="54"
                viewBox="0 0 54 54"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
              </svg> */}
              <Link to="/"><span className=" ml-3 font-semibold text-xl tracking-tight">FrozenAlex</span></Link>
            </div>
         
          <div className="block md:hidden">
            <button
              className="flex items-center px-3 py-1 select-none outline-none "
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
          <div
            className={`w-full block flex-grow md:flex md:items-center md:w-auto ${
              this.state.open ? "" : "hidden"
            }`}
          >
            <div className="text-md justify-center md:justify-start items-center md:flex-grow flex">
              <Link
                className="block mt-4 lg:inline-block md:mt-0 mr-4"
                activeClassName="active"
                partiallyActive={true}
                to="/blog/"
              >
                Blog
              </Link>
              <Link
                className="block mt-4 lg:inline-block md:mt-0 mr-4"
                activeClassName="active"
                to="/about/"
              >
                About
              </Link>
              <Link
                className="block mt-4 lg:inline-block md:mt-0 mr-4"
                activeClassName="active"
                to="/contact/"
              >
                Contact
              </Link>
              <a
                className="block mt-4 lg:inline-block md:mt-0 mr-4"
                href="https://cloud.alexx.ml/s/LA55ZXR2oR9adsn"
                target="__blank"
              >
                Files
              </a>
              <a
                className="block mt-4 lg:inline-block md:mt-0 text-teal-400 mr-4"
                href="https://cloud.alexx.ml/s/m3PeT5YwqecfoMX"
                target="__blank"
              >
                Private
              </a>
            </div>
            <div className="text-md lg:flex-shrink flex justify-center md:justify-start">
              <a
                className="transition-colors duration-300 block mt-4 lg:inline-block md:mt-0 hover:text-blue-500 mr-4"
                href="https://twitter.com/FrosteeAlex"
                target="__blank"
              >
                <FaTwitter size={24} />
              </a>
              <a
                className="transition-colors duration-300 block mt-4 lg:inline-block md:mt-0 hover:text-black mr-4"
                href="https://github.com/FrozenAlex"
                target="__blank"
              >
                <FaGithub size={24} />
              </a>
            </div>
          </div>
        </nav>
      </header>
    )
  }
  toggleNavBar() {
    this.setState({ open: !this.state.open })
  }
}
export default Header
