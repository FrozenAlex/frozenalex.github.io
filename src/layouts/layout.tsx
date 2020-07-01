import * as React from "react"

import Header from "../components/header"

const Layout = ({
  shrink,
  location,
  title,
  children,
}: {
  shrink?: boolean
  location: string
  title: string
  children?: React.ReactNode
}) => {
  return (
    <div className="app">
      <Header></Header>
      <main className={`${shrink ? "container mx-auto px-1 md:px-4  " : ""}`}>{children}</main>
      <footer style={{ textAlign: "center", padding: "20px" }}>
        © {new Date().getFullYear()}, <span className="text-accent">FrozenAlex</span>, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
