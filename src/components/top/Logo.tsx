import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/logo.svg'

export function Logo() {
  return <Image src={logo} />
}

const Image = styled.img`
  max-width: 466px;
  width: 100%;
`
