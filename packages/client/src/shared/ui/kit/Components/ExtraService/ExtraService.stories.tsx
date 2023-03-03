import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ExtraService } from './ExtraService'

export default {
  title: 'shared/kit/Components/ExtraService',
  component: ExtraService,
  argTypes: {}
} as ComponentMeta<typeof ExtraService>

const Template: ComponentStory<typeof ExtraService> = (args) => <ExtraService {...args} />


export const Default = Template.bind({})

