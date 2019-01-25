import React from 'react'
import { ReactiveBase } from '@appbaseio/reactivesearch'

export default () => (
  <ReactiveBase
    app="appname"
    credentials="a:b"
  >
    <div style={{color: 'blue'}}>Inner Component (BLUE)</div>
  </ReactiveBase>
)