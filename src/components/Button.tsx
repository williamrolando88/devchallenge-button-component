import React from 'react';

interface ButtonProps {
  children: string;
  color?: 'primary' | 'secondary' | 'danger' | 'default';
  size?: 'sm' | 'md' | 'lg';
  variant?: 'outline' | 'text';
  startIcon?: 'home' | 'search' | 'settings' | 'favorite' | 'refresh';
  endIcon?: 'home' | 'search' | 'settings' | 'favorite' | 'refresh';
  disableShadow?: true;
  disabled?: true;
}

const Button = ({
  color,
  size,
  disableShadow,
  variant,
  disabled,
  startIcon,
  endIcon,
  children,
}: ButtonProps) => {
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

  const defineDisabled = () => {
    if (variant === 'text' && disabled) return 'disabled-text';
    if (disabled) return 'disabled';
  };

  const buttonClasses = () => {
    if (disabled) return defineDisabled();

    return [defineColor(), defineSize(), defineShadow(), defineVariant()].join(
      ' '
    );
  };
  return (
    <button className={buttonClasses()}>
      {startIcon && (
        <span className="material-symbols-outlined">{startIcon}</span>
      )}
      <span>{children}</span>
      {endIcon && <span className="material-symbols-outlined">{endIcon}</span>}
    </button>
  );
};

export default Button;
