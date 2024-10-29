import type { Meta, StoryObj } from '@storybook/react';

import Card from './Card';

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {},
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Venom',
    imgUrl: 'https://image.tmdb.org/t/p/w500/3V4kLQg0kSqPLctI5ziYWabAZYF.jpg',
  },
};
