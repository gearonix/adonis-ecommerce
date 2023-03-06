import { ComponentMeta, ComponentStory } from '@storybook/react'
import { PenPreloader } from './PenPreloader'

export default {
  title: 'shared/ui/Components/PenPreloader',
  component: PenPreloader,
  argTypes: {}
} as ComponentMeta<typeof PenPreloader>

const Template: ComponentStory<typeof PenPreloader> = (args) => <PenPreloader {...args} />

export const Default = Template.bind({})


