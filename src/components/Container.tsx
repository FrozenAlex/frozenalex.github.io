import styled from "styled-components"

/**
 * Container component
 */
export const Container = styled.div`
	width: 100%;
	margin: 0 auto;
	@media (min-width: 640px) {
		max-width: 640px;
	}
	@media (min-width: 768px) {
		max-width: 768px;
	}
	@media (min-width: 1024px) {
		max-width: 1024px;
	}
	@media (min-width: 1280px) {
		max-width: 1280px;
	}
`
