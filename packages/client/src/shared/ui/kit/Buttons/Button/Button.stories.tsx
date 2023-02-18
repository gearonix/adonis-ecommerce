import {ComponentMeta, ComponentStory} from '@storybook/react'
import {Button} from './Button'

export default {
  title: 'shared/kit/Buttons/Button',
  component: Button,
  argTypes: {},
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const PrimaryButton = Template.bind({})
PrimaryButton.args = {
  w: 200,
  h: 40,
  children: 'Button text',
}

export const RedButton = Template.bind({})
RedButton.args = {
  w: 200,
  h: 40,
  children: 'Button text',
  color: 'red',
}


export const GreenButton = Template.bind({})
GreenButton.args = {
  w: 200,
  h: 40,
  children: 'Button text',
  color: 'green',
}


export const OrangeButton = Template.bind({})
OrangeButton.args = {
  w: 200,
  h: 40,
  children: 'Button text',
  color: 'orange',
}

export const OutlinedButton = Template.bind({})
OutlinedButton.args = {
  w: 200,
  h: 40,
  children: 'Button text',
  color: 'outlined',
}

export const BlueBorderedButton = Template.bind({})
BlueBorderedButton.args = {
  w: 200,
  h: 40,
  children: 'Button text',
  color: 'blueBordered',
}

export const RedColored = Template.bind({})
RedColored.args = {
  w: 200,
  h: 40,
  children: 'Button text',
  color: 'redColored',
}


export const GreyBordered = Template.bind({})
GreyBordered.args = {
  w: 200,
  h: 40,
  children: 'Button text',
  color: 'greyBordered',
}

