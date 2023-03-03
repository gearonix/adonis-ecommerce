import { Story as StoryType } from '@storybook/react'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'

const mockStore = configureStore({
  reducer: {

  }
})

export const ReduxDecorator = (Story: StoryType) => {
  return <Provider store={mockStore}>
    <Story/>
  </Provider>
}
