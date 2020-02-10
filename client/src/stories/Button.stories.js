import React from 'react';
import { action } from '@storybook/addon-actions';

import Button from '../components/Button';

export default {
  title: 'Button',
  component: Button,
};

export const Default = () => <Button onClick={action('clicked')}>Hello Button</Button>;

export const Link = () => <Button type="link">Hello Button</Button>;
