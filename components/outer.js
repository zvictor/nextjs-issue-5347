import React from 'react'
import dynamic from 'next/dynamic'

const Inner = dynamic(import('../components/inner'))

export default () => <div>Outer Component <hr /><Inner /></div>