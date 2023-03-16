import React from 'react';

import Card from './Card';

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
    image: "http://placehold.it/300",
    text: "Lorem ipsum"
};

export const NoImage = Template.bind({});
NoImage.args = {
    text: "Lorem ipsum"
}

export const NoText = Template.bind({});
NoText.args = {
    image: "http://placehold.it/300",
}

export const Empty = Template.bind({});
// Empty.args = {}