import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Button = ({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  fullWidth = false,
  icon,
  iconPosition = 'right',
  disabled = false,
  type = 'button',
  ...props
}) => {
  // Base styles
  const baseStyles = `
    inline-flex items-center justify-center font-medium rounded-md transition-all
    duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2
    ${fullWidth ? 'w-full' : ''}
  `;

  // Size styles
  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  // Variant styles
  const variantStyles = {
    primary: `bg-primary-500 hover:bg-primary-600 text-white 
              focus:ring-primary-500 shadow-md hover:shadow-lg`,
    secondary: `bg-secondary-500 hover:bg-secondary-600 text-white 
                focus:ring-secondary-500 shadow-md hover:shadow-lg`,
    outline: `bg-transparent border-2 border-primary-500 text-primary-500 
              hover:bg-primary-50 focus:ring-primary-500`,
    light: `bg-white text-neutral-800 hover:bg-neutral-100 
            focus:ring-neutral-300 shadow-md hover:shadow-lg`,
    dark: `bg-neutral-800 text-white hover:bg-neutral-900 
           focus:ring-neutral-800 shadow-md hover:shadow-lg`,
    link: `bg-transparent text-primary-500 hover:text-primary-700 
           hover:underline p-0 focus:ring-0 shadow-none`,
  };

  // Disabled styles
  const disabledStyles = disabled
    ? 'opacity-50 cursor-not-allowed'
    : 'transform hover:-translate-y-1';

  // Combine all styles
  const buttonStyles = `
    ${baseStyles}
    ${sizeStyles[size]}
    ${variantStyles[variant]}
    ${disabledStyles}
    ${className}
  `;

  // Icon rendering
  const renderIcon = () => {
    if (!icon) return null;
    return React.cloneElement(icon, {
      className: `${iconPosition === 'left' ? 'mr-2' : 'ml-2'} w-5 h-5`,
    });
  };

  // Content with icon
  const content = (
    <>
      {icon && iconPosition === 'left' && renderIcon()}
      {children}
      {icon && iconPosition === 'right' && renderIcon()}
    </>
  );

  // Render as Link if 'to' prop is provided
  if (to) {
    return (
      <motion.div
        whileHover={{ scale: disabled ? 1 : 1.02 }}
        whileTap={{ scale: disabled ? 1 : 0.98 }}
      >
        <Link to={to} className={buttonStyles} {...props}>
          {content}
        </Link>
      </motion.div>
    );
  }

  // Render as anchor if 'href' prop is provided
  if (href) {
    return (
      <motion.div
        whileHover={{ scale: disabled ? 1 : 1.02 }}
        whileTap={{ scale: disabled ? 1 : 0.98 }}
      >
        <a href={href} className={buttonStyles} {...props}>
          {content}
        </a>
      </motion.div>
    );
  }

  // Render as button by default
  return (
    <motion.button
      type={type}
      className={buttonStyles}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      {...props}
    >
      {content}
    </motion.button>
  );
};

export default Button;