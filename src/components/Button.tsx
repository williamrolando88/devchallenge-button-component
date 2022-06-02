import React from 'react';

interface ButtonProps {
  color?: string;
}

const Button = ({ color }: ButtonProps) => {
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

  const buttonClasses = () => {
    return [defineColor()].join(' ');
  };
  return <button className={buttonClasses()}>Button</button>;
};

export default Button;
