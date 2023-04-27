import React from 'react';

import Cart from './Cart';

export default {
  title: 'Components/Cart',
  component: Cart,
  argTypes: {
  },
};

const Template = (args) => <Cart {...args} />;

export const Default = Template.bind({});
Default.args = {
  quantity: 999,
  cost: 999.99
};
