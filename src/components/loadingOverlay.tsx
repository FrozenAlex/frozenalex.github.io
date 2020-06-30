/**
 * Simple loading overlay component
 */
import * as React from "react"
import { FaSpinner } from "react-icons/fa"

const LoadingOverlay = ({
  isLoading,
  message,
  children,
}: {
  isLoading: boolean
  message?: string
  children?: React.ReactNode
}) => {
  return (
    <div className="loading-overlay" style={!isLoading ? { display: "none" } : {}}>
      <FaSpinner className="loading-spinner" size={35}></FaSpinner>
      <div className="loading-message">{message || ""}</div>
      {children}
    </div>
  )
}

export default LoadingOverlay
