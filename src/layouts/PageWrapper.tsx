import * as React from "react"
import styles from "./layout.module.scss"

import Header from "../components/Header"

/**
 * Wrapper for addition of persistent components to the page
 */
const PageWrapper = ({ children }: { children: React.ReactNode }) => {
	return (
		<div>
      
			{children}

			{/*Persistent elements  */}

		</div>
	)
}

export default PageWrapper
