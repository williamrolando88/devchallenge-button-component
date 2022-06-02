import React from 'react';

interface ButtonProps {
  color?: string;
  size?: string;
}

const Button = ({ color, size }: ButtonProps) => {
  const defineColor = () => {
    switch (color) {
      case 'primary':
        return 'color-primary';
      case 'secondary':
        return 'color-secondary';
      case 'danger':
        return 'color-danger';
      default:
        return 'color-default';
    }
  };

  const defineSize = () => {
    switch (size) {
      case 'sm':
        return 'sm';
      case 'md':
        return 'md';
      case 'lg':
        return 'lg';
      default:
        return 'md';
    }
  };

  const buttonClasses = () => {
    return [defineColor(), defineSize()].join(' ');
  };
  return <button className={buttonClasses()}>Button</button>;
};

export default Button;
