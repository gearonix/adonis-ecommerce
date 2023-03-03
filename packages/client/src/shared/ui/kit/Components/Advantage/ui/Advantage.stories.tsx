import { ComponentMeta, ComponentStory } from '@storybook/react'
import Advantage from './Advantage'

export default {
  title: 'shared/kit/Components/Advantage',
  component: Advantage,
  argTypes: {}
} as ComponentMeta<typeof Advantage>

const Template: ComponentStory<typeof Advantage> = (args) => <Advantage {...args} />

export const Default = Template.bind({})
Default.args = {

}
