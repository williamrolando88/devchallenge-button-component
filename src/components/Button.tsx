import React from 'react';

interface ButtonProps {
  color?: 'primary' | 'secondary' | 'danger' | 'default';
  size?: 'sm' | 'md' | 'lg';
  disableShadow?: true;
  variant?: 'outline' | 'text';
}

const Button = ({ color, size, disableShadow, variant }: ButtonProps) => {
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

  const defineShadow = () => {
    switch (disableShadow) {
      case true:
        return;
      default:
        return 'shadow';
    }
  };

  const defineVariant = () => {
    switch (variant) {
      case 'outline':
        return 'outline no-shadow';
      case 'text':
        return 'text no-shadow';
      default:
        return;
    }
  };

  const buttonClasses = () => {
    return [defineColor(), defineSize(), defineShadow(), defineVariant()].join(
      ' '
    );
  };
  return <button className={buttonClasses()}>Button</button>;
};

export default Button;
