import {ComponentMeta, ComponentStory} from '@storybook/react'
import SignupChoice from './SignupChoice'

export default {
  title: 'entities/Auth/SignupChoice',
  component: SignupChoice,
  argTypes: {},
} as ComponentMeta<typeof SignupChoice>

const Template: ComponentStory<typeof SignupChoice> = (args) => <SignupChoice {...args} />

export const Default = Template.bind({})
Default.args = {

}
