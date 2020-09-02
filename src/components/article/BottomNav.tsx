import * as React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import { FaArrowLeft, FaArrowRight } from "react-icons/fa"

const BottomNavigationContainer = styled.nav`
	max-width: 48em;
	padding: 0 10px;
`

const BottomNavigation = styled.ul`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	list-style: none;
`

const BottomNavigationElement = styled.li`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 1em;
	& a {
		display: flex;
		justify-content: space-between;
		align-items: center;
		& svg {
			transform: translateX(0);
			transition: transform 0.5s;
		}
		&:hover {
			color: var(--accent-color) !important;
			& svg {
				&.left {
					transform: translateX(-5px);
				}
				&.right {
					transform: translateX(5px);
				}
			}
		}
		& > span {
			margin: 0 10px;
		}
	}
`

/**
 * Bottom article navigation
 */
export default function BottomNav({ next, previous }: { next: any; previous: any }) {
	return (
		<BottomNavigationContainer className="max-w-3xl mx-auto px-4 italic border-top ">
			<BottomNavigation
				style={{
					display: `flex`,
					flexWrap: `wrap`,
					justifyContent: `space-between`,
					listStyle: `none`,
					padding: 0,
				}}
			>
				<BottomNavigationElement>
					{previous && (
						<Link to={previous.fields.slug} rel="prev">
							<FaArrowLeft className="left" />
							<span>{previous.frontmatter.title}</span>
						</Link>
					)}
				</BottomNavigationElement>
				<BottomNavigationElement>
					{next && (
						<Link to={next.fields.slug} rel="next">
							<span>{next.frontmatter.title}</span>
							<FaArrowRight className="right" />
						</Link>
					)}
				</BottomNavigationElement>
			</BottomNavigation>
		</BottomNavigationContainer>
	)
}
