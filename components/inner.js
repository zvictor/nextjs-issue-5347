import React from 'react'
import { ThemeProvider } from 'emotion-theming';

export default () => (
  <ThemeProvider theme={{}}>
    <div style={{color: 'blue'}}>Inner Component (BLUE)</div>
  </ThemeProvider>
)