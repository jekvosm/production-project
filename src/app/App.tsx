import { Suspense, useEffect, useState } from 'react'

import { AppRouter } from './providers/router'
import { useTheme } from './providers/ThemeProvider'

import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'

import { classNames } from 'shared/lib/classNames/classNames'

const App = () => {
  const { theme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback=''>
        <Navbar />
        <div className='content-page'>
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  )
}
export default App
