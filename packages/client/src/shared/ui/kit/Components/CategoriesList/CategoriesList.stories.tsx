import {ComponentMeta, ComponentStory} from '@storybook/react'
import {CategoriesList} from './CategoriesList'

export default {
  title: 'shared/kit/Components/CategoriesList',
  component: CategoriesList,
  argTypes: {},
} as ComponentMeta<typeof CategoriesList>

const Template: ComponentStory<typeof CategoriesList> = (args) => <CategoriesList {...args} />

export const Default = Template.bind({})
