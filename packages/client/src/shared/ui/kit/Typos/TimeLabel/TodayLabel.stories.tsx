import { ComponentMeta, ComponentStory } from '@storybook/react'
import { TimeLabel } from './TodayLabel'

export default {
  title: 'shared/kit/Typos/TodayLabel',
  component: TimeLabel,
  argTypes: {}
} as ComponentMeta<typeof TimeLabel>

const Template: ComponentStory<typeof TimeLabel> = (args) => <TimeLabel {...args} />

export const Default = Template.bind({})
Default.args = {

}
