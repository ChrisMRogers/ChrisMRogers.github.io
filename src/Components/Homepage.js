import React from 'react'
import '../Styles/Homepage.css'
import styled from 'styled-components'

const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-direction: column;
`

function Homepage() {
    return (

        <Div>
            <h1 style={{ fontSize: '10em', marginBottom: '0em', marginTop: '0em' }}>Chris Rogers</h1>
            <img src="Work-in-progress.png" alt="Work in Progress" width='50%' height='50%' />
        </Div>

    )
}

export default Homepage