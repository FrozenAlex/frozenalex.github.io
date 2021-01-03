import Header from "@/components/Header"
import * as React from "react"
import styles from "./layout.module.scss"


const Layout = ({
	shrink,
	location,
	title,
	children,
	className,
}: {
	shrink?: boolean
	location: string
	title: string
	children?: React.ReactNode
	className?: string
}) => {
	return (
		<div className={styles.app}>
			<Header />
			<main
				className={
					(className ? className : "") + `${shrink ? " container mx-auto max-w-3xl  " : ""}`
				}
			>
				{children}
			</main>
		</div>
	)
}

export default Layout
