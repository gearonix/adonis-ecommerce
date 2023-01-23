import s from './signup_choice.module.scss';
import {AiOutlineApi, AiOutlineHome, GiTopHat} from 'icons'
import Link from "next/link";

const SignupChoice = () => {
    return <div className={s.signup_main}>
        <div className={s.wrapper}>
            <div className={s.home}>
                <Link href={'/'}>
                    <AiOutlineHome/>
                </Link>

            </div>
            <h1 className={s.title}>Who are you?</h1>
            <div className={s.choice_container}>
                <Link href={'/signup/customer'}>
                    <div className={s.choice_block}>
                        <AiOutlineApi/>
                    </div>
                </Link>
                <Link href={'/signup/salesman'}>
                    <div className={s.choice_block}>
                        <GiTopHat/>
                    </div>
                </Link>
                <Link href={'/signup/customer'}>
                    <button className="outlined_button">Customer</button>
                </Link>
                <Link href={'/signup/salesman'}>
                    <button className="primary_button">Salesman</button>
                </Link>
            </div>
            <p>Already have an account? <Link className={'hover_link'} href={'/login'}>Log in</Link></p>
        </div>
    </div>
}

export default SignupChoice
