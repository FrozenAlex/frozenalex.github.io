import * as React from "react"
import styles from "./layout.module.scss"

import Header from "../components/Header"
import Snow from "@/components/Snow"

/**
 * Wrapper for addition of persistent components to the page
 */
const PageWrapper = ({ children }: { children: React.ReactNode }) => {
	return (
		<div>
      <Header />
			{children}

			{/*Persistent elements  */}
			<Snow />
		</div>
	)
}

export default PageWrapper
