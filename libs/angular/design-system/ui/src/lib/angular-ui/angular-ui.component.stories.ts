import type { Meta, StoryObj } from '@storybook/angular';
import { AngularUiComponent } from './angular-ui.component';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<AngularUiComponent> = {
  component: AngularUiComponent,
  title: 'AngularUiComponent',
};
export default meta;
type Story = StoryObj<AngularUiComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/angular-ui works!/gi)).toBeTruthy();
  },
};
