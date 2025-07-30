import { componentWrapperDecorator, Meta, StoryObj } from '@storybook/angular';
import { AngularUiComponent } from '@meetjs/angular-ui';

const meta: Meta<AngularUiComponent> = {
  component: AngularUiComponent,
  title: 'AngularUiComponent',
  decorators: [componentWrapperDecorator((story) => `
        <div
          style="
            width: 70vw;
            height: 60vh;
            margin: 3em;
            padding: 2em;
            border-radius: 8px;
            background-color: #f8f9fa;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            border: 1px solid #ddd;
          "
        >
          ${story}
        </div>`)],
  argTypes: {
    menuItems: { control: 'object' },
  },
};
export default meta;
type Story = StoryObj<AngularUiComponent>;

export const BasicStory: Story = {
  args: {},
};

/**
 *
 * User events	Description
 *
 * clear	Selects the text inside inputs, or textareas and deletes it
 * userEvent.clear(await within(canvasElement).getByRole('myinput'));
 *
 * click	Clicks the element, calling a click() function
 * userEvent.click(await within(canvasElement).getByText('mycheckbox'));
 *
 * dblClick	Clicks the element twice
 * userEvent.dblClick(await within(canvasElement).getByText('mycheckbox'));
 *
 * deselectOptions	Removes the selection from a specific option of a select element
 * userEvent.deselectOptions(await within(canvasElement).getByRole('listbox'),'1');
 *
 * hover	Hovers an element
 * userEvent.hover(await within(canvasElement).getByTestId('example-test'));
 *
 * keyboard	Simulates the keyboard events
 * userEvent.keyboard(‘foo’);
 *
 * selectOptions	Selects the specified option, or options of a select element
 * userEvent.selectOptions(await within(canvasElement).getByRole('listbox'),['1','2']);
 *
 * type	Writes text inside inputs, or textareas
 * userEvent.type(await within(canvasElement).getByRole('my-input'),'Some text');
 *
 * unhover	Unhovers out of element
 * userEvent.unhover(await within(canvasElement).getByLabelText(/Example/i));
 */
