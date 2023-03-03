import { Story as StoryType } from '@storybook/react'
import { GoogleOAuthProvider } from '@react-oauth/google'


export const GoogleOAuthDecorator = (Story: StoryType) => {
  return <GoogleOAuthProvider clientId={process.env.GOOGLE_CLIENT_ID as string}>
    <Story/>
  </GoogleOAuthProvider>
}
