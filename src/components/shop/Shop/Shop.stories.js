import React from 'react';

import Shop from './Shop';

import categories from "../../../../test/data/categories.json"
import products from "../../../../test/data/products.json"



export default {
  title: 'Components/Shop',
  component: Shop,
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Shop {...args} />;

export const Default = Template.bind({});
Default.args = {
  categories,
  products
};

export const Empty = Template.bind({});
Empty.args = {
  categories: [],
  products: []
};

export const EmptyCategories = Template.bind({});
EmptyCategories.args = {
  categories: [],
  products
};

export const EmptyProducts = Template.bind({});
EmptyProducts.args = {
  categories,
  products: []
};
