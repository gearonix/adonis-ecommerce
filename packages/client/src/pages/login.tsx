import Head from 'next/head'
import { LoginForm } from 'widgets/Login'
import { FC } from 'react'
import { WithSpring } from 'shared/lib/components'

const Login: FC = () => {
  return <WithSpring>
    <Head>
      <title>Adonis - Login</title>
    </Head>
    <LoginForm/>
  </WithSpring>
}

export default Login
