import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import logo from '../images/riel-logo.png'

const HeaderWrapper = styled.div`
  background: grey;
  margin-bottom: 50px;
`

const Header = () => (
  <HeaderWrapper>
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          <img src={logo} alt="" />
        </Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  </HeaderWrapper>
)

export default Header
