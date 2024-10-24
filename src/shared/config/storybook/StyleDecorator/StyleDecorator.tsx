import { Story } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import 'app/styles/index.scss'
import { classNames } from 'shared/lib/classNames/classNames'

export const StyleDecorator = (story: () => Story) => story()
