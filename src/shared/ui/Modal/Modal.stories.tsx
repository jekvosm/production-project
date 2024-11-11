import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'

import { Modal } from './Modal'

export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = args => <Modal {...args} />

export const Primary = Template.bind({})
Primary.args = {
  className: 'app light',
  isOpen: true,
  children:
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit quam, molestiae porro voluptas consequuntur quis ipsa inventore similique harum distinctio!',
}

export const Dark = Template.bind({})
Dark.args = {
  isOpen: true,
  children:
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit quam, molestiae porro voluptas consequuntur quis ipsa inventore similique harum distinctio!',
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
