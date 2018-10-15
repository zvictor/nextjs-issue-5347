import React from 'react'
import dynamic from 'next/dynamic'

const Outer = dynamic(import('../components/outer'))

export default () => <Outer />
