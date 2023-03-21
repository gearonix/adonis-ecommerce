import { FC } from 'react'
import { useDispatch } from 'shared/types/redux'
import { logoutUser } from 'widgets/Login/store/thunks'


const Logout : FC = () => {
  const dispatch = useDispatch()

  const onClick = () => {
    dispatch(logoutUser())
  }

  return <button className={'primary_button'} onClick={onClick}>Sign out</button>
}


export default Logout
