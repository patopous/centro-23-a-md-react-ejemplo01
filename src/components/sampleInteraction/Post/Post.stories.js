import React from 'react';

import Post from './Post';

export default {
  title: 'SampleInteraction/Post',
  component: Post,
  argTypes: {
  },
};

const Template = (args) => <Post {...args} />;

export const Default = Template.bind({});
Default.args = {};