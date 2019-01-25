import React from 'react'
import dynamic from 'next/dynamic'

const Component = dynamic(import('../components/outer'))
// const Component = dynamic(import('../components/inner'))

export default () => {
  // const Component = dynamic(import('../components/outer'))
  // const Component = dynamic(import('../components/inner'))

  return (
    <>
      <Component />
      <div style={{color: 'green'}}>Outer's Sibling (GREEN)</div>
    </>
  )
}
