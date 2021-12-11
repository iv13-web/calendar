import {AppRouter} from './router/AppRouter'
import {Navbar} from './components/Navbar'
import {Layout} from 'antd'
import {useEffect} from 'react'
import {useActions} from './hooks/useActions'
import {User} from './models/User'

export const App = () => {
  const {setUser, setIsAuth} = useActions()

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      const user = JSON.parse(localStorage.getItem('auth') || '')
      setUser(user as User)
      setIsAuth(true)
    }
  }, []);


  return (
    <Layout>
      <Navbar/>
      <Layout.Content>
        <AppRouter/>
      </Layout.Content>
    </Layout>
  )
}
