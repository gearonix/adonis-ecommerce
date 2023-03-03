import { ComponentMeta, ComponentStory } from '@storybook/react'
import RemoveFromCard from './RemoveFromCard'

export default {
  title: 'features/Cart/RemoveFromCard',
  component: RemoveFromCard,
  argTypes: {}
} as ComponentMeta<typeof RemoveFromCard>

const Template: ComponentStory<typeof RemoveFromCard> = (args) => <RemoveFromCard {...args} />

export const Default = Template.bind({})
Default.args = {

}
