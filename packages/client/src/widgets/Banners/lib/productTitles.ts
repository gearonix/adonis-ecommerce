import { ProductTypesKeys } from 'shared/types/elements/productTypes'

interface ProductTitle {
    subtitle: string,
    title: string
}

export const ProductTypesTitles: Record<ProductTypesKeys, ProductTitle> = {
  'Electronics': {
    subtitle: 'Latest trending',
    title: 'Electronic items'
  },
  'Children products': {
    subtitle: 'Interesting and incredible',
    title: 'Children products'
  },
  'Clothes': {
    subtitle: 'Reliable and durable',
    title: 'Clothes'
  },
  'Food': {
    subtitle: 'Healthy and inexpensive',
    title: 'Food'
  },
  'Sports and recreation': {
    subtitle: 'Become the ultimate gym enjoyer',
    title: 'With our sport products!'
  },
  'Shoes': {
    subtitle: 'Convenient and compact',
    title: 'Shoes'
  }
}
