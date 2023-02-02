import Link from 'next/link'
import {FC} from "react";
import {useRouter} from "next/router";
import {Paths} from "shared/types/globals";
import {logoutUser} from 'widgets/Login/store/thunks';
import {useDispatch} from 'shared/types/redux';

const DevNavRouting: FC = () => {
    const router = useRouter()
    const dispatch = useDispatch()

    const logout = async () => {
        dispatch(logoutUser())
        router.push(Paths.LOGIN)
    }

    return <div style={{position: 'fixed', left: 0, bottom: 0, cursor: 'pointer', zIndex: 1000}}>
        <Link href={'/'}>
            <button>main</button>
        </Link>
        <Link href={'/search'}>
            <button>search</button>
        </Link>
        <Link href={'/search/1'}>
            <button>item</button>
        </Link>
        <Link href={'/cart'}>
            <button>cart</button>
        </Link>
        <Link href={'/login'}>
            <button>login</button>
        </Link>
        <Link href={'/signup'}>
            <button>signup</button>
        </Link>
        <Link href={'/signup/customer'}>
            <button>customer</button>
        </Link>
        <Link href={'/signup/salesman'}>
            <button>salesman</button>
        </Link>
        <Link href={'/messenger'}>
            <button>messenger</button>
        </Link>
        <Link href={'/saved'}>
            <button>saved</button>
        </Link>
        <Link href={'/profile'}>
            <button>profile</button>
        </Link>
        <Link href={'/about'}>
            <button>about</button>
        </Link>
        <Link href={'/not_found'}>
            <button>not_found</button>
        </Link>
        <button onClick={logout}>logout</button>
    </div>
}

export default DevNavRouting
