import { ComponentMeta, ComponentStory } from '@storybook/react'
import { BlueLinkHeader } from './BlueLinkHeader'

export default {
  title: 'shared/ui/Links/BlueLinkHeader',
  component: BlueLinkHeader,
  argTypes: {}
} as ComponentMeta<typeof BlueLinkHeader>

const Template: ComponentStory<typeof BlueLinkHeader> = (args) => <BlueLinkHeader {...args} />

export const Default = Template.bind({})
Default.args = {
  label: 'write'
}
