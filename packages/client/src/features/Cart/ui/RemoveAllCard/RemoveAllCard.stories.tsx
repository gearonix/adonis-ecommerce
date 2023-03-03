import { ComponentMeta, ComponentStory } from '@storybook/react'
import RemoveAllCard from './RemoveAllCard'

export default {
  title: 'features/Cart/RemoveAllCard',
  component: RemoveAllCard,
  argTypes: {}
} as ComponentMeta<typeof RemoveAllCard>

const Template: ComponentStory<typeof RemoveAllCard> = (args) => <RemoveAllCard {...args} />

export const Default = Template.bind({})

Default.args = {

}
