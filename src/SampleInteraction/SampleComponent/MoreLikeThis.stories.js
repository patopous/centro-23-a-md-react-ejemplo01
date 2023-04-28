import React from 'react';

import MoreLikeThis from './MoreLikeThis';

export default {
  title: 'SampleInteraction/MoreLikeThis',
  component: MoreLikeThis,
  argTypes: {
  },
};

const Template = (args) => <MoreLikeThis {...args} />;

export const Default = Template.bind({});
Default.args = {};



