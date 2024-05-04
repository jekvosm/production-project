import { Link } from 'react-router-dom'

import { useTheme } from './providers/ThemeProvider'

import './styles/index.scss'

import { classNames } from 'helpers/classNames/classNames'
import { AppRouter } from './providers/router'

const App = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Change Theme</button>
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О сайте</Link>
      <AppRouter />
    </div>
  )
}
export default App
