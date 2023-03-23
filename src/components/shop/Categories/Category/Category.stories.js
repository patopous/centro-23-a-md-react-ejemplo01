import React from 'react';

import Category from './Category';

export default {
  title: 'Components/Category',
  component: Category,
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Category {...args} />;

export const Default = Template.bind({});
Default.args = {
    name: "Lorem ipsum"
};

export const Chosen = Template.bind({});
Chosen.args = {
    name: "Lorem ipsum",
    chosen: true
};
