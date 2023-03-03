import { SignupChoice } from 'entities/Auth'
import Head from 'next/head'
import { WithSpring } from 'shared/lib/components'


const SignUp = () => {
  return <WithSpring>
    <Head>
      <title>Adonis - Sign up</title>
    </Head>
    <SignupChoice/>

  </WithSpring>
}

export default SignUp
