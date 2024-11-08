// Button.tsx
import React, { ReactNode } from 'react';

type ButtonProps = {
  onClick: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'danger' | 'outline';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  children: ReactNode; // Add children prop to allow passing content inside the button
};

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  size = "medium",
  disabled = false,
}) => {
  const baseStyles = "rounded font-semibold focus:outline-none transition duration-300";
  
  const variantStyles: { [key in NonNullable<ButtonProps['variant']>]: string } = {
    primary: "bg-[#0D6EFD] text-white hover:bg-blue-600",
    secondary: "bg-white text-blue-500 hover:bg-gray-200",
    danger: "bg-red-500 text-white hover:bg-red-600",
    outline: "border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white",
  };

  const sizeStyles: { [key in NonNullable<ButtonProps['size']>]: string } = {
    small: "px-2 py-1 text-sm",
    medium: "px-4 py-1 text-base",
    large: "px-12 py-1 text-lg",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant ?? 'primary']} ${sizeStyles[size]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {children}
    </button>
  );
};

export default Button;
