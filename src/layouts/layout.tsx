import * as React from "react"

import Header from "../components/header"

const Layout = ({
  shrink,
  location,
  title,
  children,
  className
}: {
  shrink?: boolean
  location: string
  title: string
  children?: React.ReactNode,
  className?: string
}) => {
  return (
    <div className="app mt-20"
    style={
      {
        marginTop: "65px"
      }
    }>
      <Header></Header>
      <main className={(className?className:"") + `${shrink ? " container mx-auto max-w-3xl  " : ""}`}>{children}</main>
      <footer className="text-center my-8 mx-auto max-w-3xl">
        © {new Date().getFullYear()}, <span className="text-accent">FrozenAlex</span>, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
