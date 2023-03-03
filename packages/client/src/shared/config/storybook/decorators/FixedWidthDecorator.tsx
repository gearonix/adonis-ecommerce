import { Story as StoryType } from '@storybook/react'


// eslint-disable-next-line react/display-name
export const FixedWidthDecorator = (width = 200) => (Story: StoryType) => {
  return <div style={{ width: width + 'px' }}>
    <Story/>
  </div>
}
