import { Link } from 'react-router';

const variantStyles = {
  primary:
    'bg-blue-500 cursor-pointer text-white border-2 border-transparent hover:bg-blue-600 disabled:bg-blue-300 disabled:cursor-not-allowed',
  secondary:
    'bg-white cursor-pointer text-green-600 border-2 border-blue-600 hover:bg-blue-50 disabled:bg-gray-200 disabled:cursor-not-allowed',
  tertiary:
    'bg-none cursor-pointer text-white border-2 border-white hover:bg-green-50 hover:text-blue-600 disabled:bg-gray-200 disabled:cursor-not-allowed',
  success:
    'bg-green-500 cursor-pointer text-white hover:bg-green-600 disabled:bg-green-300 disabled:cursor-not-allowed',
  error:
    'bg-red-500 cursor-pointer text-white hover:bg-red-600 disabled:bg-red-300 disabled:cursor-not-allowed',
  dark: 'bg-gray-800 cursor-pointer text-white hover:bg-gray-900 disabled:bg-gray-500 disabled:cursor-not-allowed',
};

const sizeStyles = {
  sm: 'text-sm py-1 px-4',
  md: 'text-base py-2 px-6',
  lg: 'text-lg py-4 px-8',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'sm',
  isLoading = false,
  disabled = false,
  leftIcon,
  rightIcon,
  onClick,
  className = '',
  enableBounceEffect = false,
  spinnerColor = '#fff',
  spinnerSize = 20,
  href,
}) {
  const bounceClass = enableBounceEffect
    ? 'active:scale-95 transition-transform'
    : '';

  const baseClasses = `
    relative inline-flex items-center justify-center gap-2 rounded-sm font-medium
    ${variantStyles[variant]} ${sizeStyles[size]} ${bounceClass} ${className}
  `;

  const content = (
    <>
      {isLoading && (
        <div className='absolute inset-0 flex items-center justify-center'>
          <svg
            width={spinnerSize}
            height={spinnerSize}
            viewBox='0 0 24 24'
            className='animate-spin'
          >
            <path
              fill={spinnerColor}
              d='M12 21a9 9 0 1 1 6.18-15.55a.75.75 0 0 1 0 1.06a.74.74 0 0 1-1.06 0A7.51 7.51 0 1 0 19.5 12a.75.75 0 0 1 1.5 0a9 9 0 0 1-9 9Z'
            />
          </svg>
        </div>
      )}
      <span
        className={`flex items-center gap-2 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
      >
        {leftIcon && <span className='flex items-center'>{leftIcon}</span>}
        {children}
        {rightIcon && <span className='flex items-center'>{rightIcon}</span>}
      </span>
    </>
  );

  if (href) {
    return (
      <Link
        to={href}
        className={baseClasses}
        aria-disabled={isLoading || disabled}
        onClick={(e) => {
          if (isLoading || disabled) e.preventDefault();
        }}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      disabled={isLoading || disabled}
      className={baseClasses}
    >
      {content}
    </button>
  );
}
