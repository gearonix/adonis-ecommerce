import 'app/css/globals.scss'
import { Story as StoryType } from '@storybook/react'
import { ThemeProvider } from 'app/providers'
import 'shared/config/i18n'
import { Theme } from 'shared/config/consts/themes'
import cn from 'classnames'

export const ThemeDecorator = (theme = Theme.LIGHT) => (Story: StoryType) => {
  return <ThemeProvider defaultTheme={theme}>
    <div className={cn('layout', theme)}>
      <Story/>
    </div>
  </ThemeProvider>
}
