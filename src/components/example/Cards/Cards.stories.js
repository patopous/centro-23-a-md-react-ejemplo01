import React from 'react';

import Cards from './Cards';

export default {
  title: 'Components/Cards',
  component: Cards,
  argTypes: {
  },
};

const Template = (args) => <Cards {...args} />;

export const Default = Template.bind({});
Default.args = {
    cards: [
        {
            image: "http://placehold.it/300/FF0000",
            text: "Card One"
        },
        {
            image: "http://placehold.it/300/00FF00",
            text: "Card Two"
        },
        {
            image: "http://placehold.it/300/0000FF",
            text: "Card Three"
        },
    ]
};

export const OneCard = Template.bind({});
OneCard.args = {
    cards: [
        {
            image: "http://placehold.it/300/FF0000",
            text: "Card One"
        }
    ]
};

export const Empty = Template.bind({});
Empty.args = {
    cards: []
};

export const NoArray = Template.bind({});
NoArray.args = {
    cards: null
};