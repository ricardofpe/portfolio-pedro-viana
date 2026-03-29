import { type ReactNode } from 'react'
import { useIsMobile } from '../../hooks/useIsMobile'

type ButtonVariant =
  | 'primary'
  | 'primary-small'
  | 'primary-xsmall'
  | 'outline'
  | 'outline-small'
  | 'outline-xsmall'
  | 'ghost'
  | 'ghost-small'
  | 'behance'
  | 'behance-small'
  | 'behance-xsmall'
  | 'curriculum'
  | 'curriculum-small'
  | 'github'
  | 'github-small'
  | 'github-xsmall'

interface ButtonProps {
  variant: ButtonVariant
  children: ReactNode
  className?: string
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
  wide?: boolean
  disabled?: boolean
  keepSize?: boolean
}

const variantStyles: Record<ButtonVariant, string> = {
  'primary': 'cursor-pointer rounded-[20px] text-xl font-medium bg-purple text-white px-[10px] py-[15px] transition-colors duration-200 hover:bg-[#5100BC]',
  'primary-small': 'cursor-pointer rounded-[20px] text-base font-medium bg-purple text-white px-[10px] py-[15px] transition-colors duration-200 hover:bg-[#5100BC]',
  'primary-xsmall': 'cursor-pointer rounded-[20px] text-sm font-medium bg-purple text-white px-[10px] py-[15px] transition-colors duration-200 hover:bg-[#5100BC]',
  'outline': 'cursor-pointer rounded-[20px] text-xl font-medium border border-white bg-transparent text-white px-[10px] py-[15px] transition-colors duration-200 hover:bg-purple hover:border-purple',
  'outline-small': 'cursor-pointer rounded-[20px] text-base font-medium border border-white bg-transparent text-white px-[10px] py-[15px] transition-colors duration-200 hover:bg-purple hover:border-purple',
  'outline-xsmall': 'cursor-pointer rounded-[20px] text-sm font-medium border border-white bg-transparent text-white px-[10px] py-[15px] transition-colors duration-200 hover:bg-purple hover:border-purple',
  'ghost': 'cursor-pointer text-xl font-medium text-white underline underline-offset-4 transition-opacity duration-200 hover:opacity-70',
  'ghost-small': 'cursor-pointer text-base font-medium text-white underline underline-offset-4 transition-opacity duration-200 hover:opacity-70',
  'curriculum': 'cursor-pointer rounded-[20px] text-base font-medium border border-white bg-transparent text-white px-[10px] py-[15px] transition-all duration-200 hover:bg-white hover:text-[#0B0B0B] hover:border-white',
  'curriculum-small': 'cursor-pointer rounded-[20px] text-sm font-medium border border-white bg-transparent text-white px-[10px] py-[15px] transition-all duration-200 hover:bg-white hover:text-[#0B0B0B] hover:border-white',
  'github': 'cursor-pointer rounded-[20px] text-xl font-medium bg-[#171515] text-white px-[10px] py-[15px] transition-colors duration-200 hover:bg-[#3A3A3A]',
  'github-small': 'cursor-pointer rounded-[20px] text-base font-medium bg-[#171515] text-white px-[10px] py-[15px] transition-colors duration-200 hover:bg-[#3A3A3A]',
  'github-xsmall': 'cursor-pointer rounded-[20px] text-sm font-medium bg-[#171515] text-white px-[10px] py-[15px] transition-colors duration-200 hover:bg-[#3A3A3A]',
  'behance': 'cursor-pointer rounded-[20px] text-xl font-medium bg-blue text-white px-[10px] py-[15px] transition-colors duration-200 hover:bg-[#0036EE]',
  'behance-small': 'cursor-pointer rounded-[20px] text-base font-medium bg-blue text-white px-[10px] py-[15px] transition-colors duration-200 hover:bg-[#0036EE]',
  'behance-xsmall': 'cursor-pointer rounded-[20px] text-sm font-medium bg-blue text-white px-[10px] py-[15px] transition-colors duration-200 hover:bg-[#0036EE]',
}

export function Button({
  variant,
  children,
  className = '',
  type = 'button',
  onClick,
  wide = false,
  disabled = false,
  keepSize = false,
}: ButtonProps) {
  const isMobile = useIsMobile()
  const isXMobile = useIsMobile(500)

  let effectiveVariant = variant

  if (!keepSize) {
    if (variant === 'primary' && isXMobile) effectiveVariant = 'primary-xsmall'
    else if (variant === 'primary' && isMobile) effectiveVariant = 'primary-small'
    else if (variant === 'outline' && isXMobile) effectiveVariant = 'outline-xsmall'
    else if (variant === 'outline' && isMobile) effectiveVariant = 'outline-small'
    else if (variant === 'behance' && isXMobile) effectiveVariant = 'behance-xsmall'
    else if (variant === 'behance' && isMobile) effectiveVariant = 'behance-small'
    else if (variant === 'curriculum' && isMobile) effectiveVariant = 'curriculum-small'
    else if (variant === 'github' && isXMobile) effectiveVariant = 'github-xsmall'
    else if (variant === 'github' && isMobile) effectiveVariant = 'github-small'
  }

  const variantClass = variantStyles[effectiveVariant]
  const widthClass = wide ? 'w-full' : ''
  const combinedClassName = `${variantClass} ${widthClass} ${className}`.trim()

  return (
    <button
      type={type}
      className={combinedClassName}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
