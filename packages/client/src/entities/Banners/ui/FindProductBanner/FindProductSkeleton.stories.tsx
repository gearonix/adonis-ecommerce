import { ComponentMeta, ComponentStory } from '@storybook/react'
import FindProductSkeleton from './FindProductSkeleton'

export default {
  title: 'entities/Banners/FindProductSkeleton',
  component: FindProductSkeleton,
  argTypes: {}
} as ComponentMeta<typeof FindProductSkeleton>

const Template: ComponentStory<typeof FindProductSkeleton> = (args) => <FindProductSkeleton {...args} />

export const Default = Template.bind({})
Default.args = {
  Form: <div></div>
}
