import { FC } from 'react'
import { FiMessageCircle } from 'react-icons/fi'
import { Nullable } from 'shared/types/common'
import { routes } from 'shared/config/consts/routes'
import Link from 'next/link'

interface Props{
  className?: string,
  targetId: Nullable<number>
}


export const WriteToUser : FC<Props> = ({ className, targetId }) => {
  return <Link href={{
    pathname: routes.MESSENGER,
    query: { targetId }
  }}>
    <div className={className}>
      <button className="outlined_button"><FiMessageCircle /> Write message</button>
    </div>
  </Link>
}

