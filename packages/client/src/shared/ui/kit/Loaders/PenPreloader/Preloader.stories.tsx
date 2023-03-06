import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Preloader } from './Preloader'

export default {
  title: 'shared/ui/Components/PenPreloader',
  component: Preloader,
  argTypes: {}
} as ComponentMeta<typeof Preloader>

const Template: ComponentStory<typeof Preloader> = (args) => <Preloader {...args} />

export const Default = Template.bind({})


