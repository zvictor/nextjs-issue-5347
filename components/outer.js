import React from 'react'
import dynamic from 'next/dynamic'

const Inner = dynamic(import('../components/inner'))

export default () => (
  <>
    <div style={{color: 'red'}}>
      Outer Component (RED)
    </div>
    <Inner />
    <div style={{color: 'orange'}}>Inner's Sibling (ORANGE)</div>
  </>
)