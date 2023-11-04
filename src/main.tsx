import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import theme from '../src/styles/theme.ts'
import { GlobalStyles } from './styles/global.ts'
import { Routes } from './routes/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>

      <GlobalStyles theme={theme}/>
      
      <Routes />
      
    </ThemeProvider>
  </React.StrictMode>,
)
