import React from 'react'
import styled from "styled-components"
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './GlobalStyles'
import { darkTheme, lightTheme } from './Themes'
import Toggler from './Toggler'
import { useDarkMode } from './useDarkMode'

const Navigation = styled.ul`
	display:flex;
	flex-flow: row wrap;
	justify-content: flex-end;
	list-style: none;
	margin: 0;
	`;
const ListItem = styled.li`

	`;
const Link = styled.a`
	text-decoration: none;
	display: block;
	padding: 1em;
	font-weight: bold;
	color: ${props => props.color};
	${ListItem}:hover &{
		color:#1565c0;
	}
`;

function Navbar() {
	const [theme, themeToggler, mountedComponent] = useDarkMode()
	const themeMode = theme === 'light' ? lightTheme : darkTheme

	if (!mountedComponent) return <div />
	return (
		<ThemeProvider theme={themeMode}>
			<>
				<GlobalStyles />
				<div>
					<Navigation>
						<ListItem><Link href="#" color={themeMode?.text}>.who()</Link></ListItem>
						<ListItem><Link href="#" color={themeMode?.text}>.work()</Link></ListItem>
						<ListItem><Link href="#" color={themeMode?.text}>.projects()</Link></ListItem>
						<ListItem><Link href="#" color={themeMode?.text}>.contact()</Link></ListItem>
						<li><Toggler theme={theme} toggleTheme={themeToggler} /></li>
					</Navigation>
				</div>
			</>
		</ThemeProvider>
	);
}

// Navbar.propTypes = {
//     theme: string.isRequired,
//     toggleTheme: func.isRequired,
// }

export default Navbar