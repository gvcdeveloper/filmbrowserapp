import type { Meta, StoryObj } from '@storybook/react'

import HelloWorld from './HelloWorld'

const meta = {
  title: 'Components/HelloWorld',
  component: HelloWorld,
  parameters: {},
} satisfies Meta<typeof HelloWorld>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    primary: true,
    label: 'HelloWorld',
  },
}
