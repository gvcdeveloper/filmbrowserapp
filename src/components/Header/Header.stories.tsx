import type { Meta, StoryObj } from '@storybook/react';
import logoDark from '../../assets/images/logo/logo-dark.svg';
import Header from './Header';

const meta = {
  title: 'Components/Header',
  component: Header,
  parameters: {},
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    imgLogo: logoDark,
    width: '80px',
  },
};
