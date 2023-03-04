import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ContainerTitle } from './ContainerTitle'

export default {
  title: 'shared/ui/Typos/ContainerTitle',
  component: ContainerTitle,
  argTypes: {}
} as ComponentMeta<typeof ContainerTitle>

const Template: ComponentStory<typeof ContainerTitle> = (args) => <ContainerTitle {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Title'
}
