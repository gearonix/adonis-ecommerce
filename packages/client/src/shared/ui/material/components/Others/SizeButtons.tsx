import { FC } from 'react'
import { Button, ButtonGroup } from '@mui/material'
import { BsGridFill, GiHamburgerMenu } from 'shared/ui/icons'
import { ProductsView } from 'widgets/Products/types'

interface Props{
  onClick: (view: ProductsView) => void
}

export const SizeButtons: FC<Props> = ({ onClick }) => {
  return <ButtonGroup
    disableElevation
    variant="contained"
    aria-label="Disabled elevation buttons"
    color={'inherit'} sx={{ color: 'black' }}>
    <Button color={'inherit'} size={'large'}
      onClick={() => onClick(ProductsView.TRANSFORMED)}>
      <BsGridFill/>
    </Button>
    <Button color={'inherit'} size={'large'}
      onClick={() => onClick(ProductsView.NORMAL)}>
      <GiHamburgerMenu/>
    </Button>
  </ButtonGroup>
}
