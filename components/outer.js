import React from 'react'
import dynamic from 'next/dynamic'
import styled from '@emotion/styled'

const Div = styled.div`
  width: 400px;
  margin: auto;
`

const Inner = dynamic(import('../components/inner'))

export default () => <Div>Outer Component <hr /><Inner /></Div>