import React, { FC } from 'react'
import s from './style.module.scss'
import { SearchInput } from 'shared/ui/material'
import { UserRoles } from 'app/config/globals'
import { Checkbox } from '@mui/material'
import { createFieldValues } from 'shared/lib/helpers'

interface UsersHeaderProps{
  form: any,
  reg: ReturnType<typeof createFieldValues>
}


const UsersHeader : FC<UsersHeaderProps> = ({ form, reg }) => {
  const onCheckBoxChange = (e: unknown, value: boolean) => {
    form.setValue('role', value ? UserRoles.SALESMAN : null)
  }

  return <article className={s.header}>
    <div className={s.search}>
      <SearchInput values={reg('search')}/>
    </div>
    <div className={s.controls_buttons}>
      <div>
        <Checkbox onChange={onCheckBoxChange} title={'In stock'} value={true}/>
        <span>Only Salesman</span>
      </div>
    </div>
  </article>
}


export default UsersHeader
