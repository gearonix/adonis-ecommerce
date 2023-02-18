import {ComponentMeta, ComponentStory} from '@storybook/react'
import NotFound from './NotFound'

export default {
  title: 'entities/NotFound/NotFound',
  component: NotFound,
  argTypes: {},
} as ComponentMeta<typeof NotFound>

const Template: ComponentStory<typeof NotFound> = (args) => <NotFound />

export const Default = Template.bind({})
Default.args = {

}
