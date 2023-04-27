import React from 'react';

import SampleComponent from './SampleComponent';

export default {
  title: 'SampleInteraction/SampleComponent',
  component: SampleComponent,
  argTypes: {
  },
};

const Template = (args) => <SampleComponent {...args} />;

export const Default = Template.bind({});
Default.args = {};