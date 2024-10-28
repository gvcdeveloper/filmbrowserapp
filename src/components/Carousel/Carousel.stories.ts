import type { Meta, StoryObj } from '@storybook/react';
import { sliderItemsMock } from '../../__mocks__/sliderItemsMock';
import Carousel from './Carousel';

const meta = {
  title: 'Components/Carousel',
  component: Carousel,
  parameters: {},
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    carouselTitle: 'Horror movies',
    handleOnClick: () => {},
    items: sliderItemsMock,
  },
};
