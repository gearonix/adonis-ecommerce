import { ComponentMeta, ComponentStory } from '@storybook/react'
import SearchMessages from './SearchMessages'

export default {
  title: 'features/Messenger/SearchMessages',
  component: SearchMessages,
  argTypes: {}
} as ComponentMeta<typeof SearchMessages>

const Template: ComponentStory<typeof SearchMessages> = (args) => <SearchMessages {...args} />

export const Default = Template.bind({})
Default.args = {

}
