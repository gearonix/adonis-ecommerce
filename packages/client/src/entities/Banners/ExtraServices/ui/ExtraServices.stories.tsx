import {ComponentMeta, ComponentStory} from '@storybook/react'
import ExtraServices from './ExtraServices'

export default {
  title: 'entities/Banners/ExtraServices',
  component: ExtraServices,
  argTypes: {},
} as ComponentMeta<typeof ExtraServices>

const Template: ComponentStory<typeof ExtraServices> = (args) => <ExtraServices {...args} />

export const Default = Template.bind({})
Default.args = {

}
