import React from 'react';

import Product from './Product';

export default {
  title: 'Components/Product',
  component: Product,
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Product {...args} />;

export const Default = Template.bind({});
Default.args = {
    image: "http://placehold.it/300",
    name: "Lorem ipsum"
};
