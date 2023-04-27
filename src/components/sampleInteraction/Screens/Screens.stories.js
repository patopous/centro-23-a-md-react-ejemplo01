import React from 'react';

import Screens from './Screens';

export default {
  title: 'SampleInteraction/Screens',
  component: Screens,
  argTypes: {
  },
};

const Template = (args) => <Screens {...args} />;

export const Default = Template.bind({});
Default.args = {};