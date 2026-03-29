import { type ReactNode } from 'react'

type TextVariant =
  | 'xxsmall'
  | 'xxsmall-highlight'
  | 'xsmall'
  | 'xsmall-highlight'
  | 'small'
  | 'small-highlight'
  | 'medium'
  | 'medium-highlight'
  | 'body-large'
  | 'body-large-highlight'
  | 'heading-sm'
  | 'heading-sm-highlight'
  | 'heading-md'
  | 'heading-md-highlight'
  | 'heading-lg'
  | 'heading-lg-highlight'
  | 'heading-xl'
  | 'heading-xl-highlight'

interface TextProps {
  variant: TextVariant
  className?: string
  children?: ReactNode
  tag: 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  text?: ReactNode
}

const variantStyles: Record<TextVariant, string> = {
  'xxsmall': 'text-xs font-normal',
  'xxsmall-highlight': 'text-xs font-semibold',
  'xsmall': 'text-sm font-normal',
  'xsmall-highlight': 'text-sm font-bold',
  'small': 'text-base font-normal',
  'small-highlight': 'text-base font-semibold',
  'medium': 'text-xl font-normal',
  'medium-highlight': 'text-xl font-semibold',
  'body-large': 'text-2xl font-normal',
  'body-large-highlight': 'text-2xl font-semibold',
  'heading-sm': 'text-3xl font-medium',
  'heading-sm-highlight': 'text-3xl font-semibold',
  'heading-md': 'text-4xl font-medium',
  'heading-md-highlight': 'text-4xl font-semibold',
  'heading-lg': 'text-5xl font-semibold',
  'heading-lg-highlight': 'text-5xl font-bold',
  'heading-xl': 'text-6xl font-semibold',
  'heading-xl-highlight': 'text-6xl font-bold',
}

export function Text({
  variant,
  className = '',
  children,
  tag: Tag,
  text,
}: TextProps) {
  const variantClass = variantStyles[variant]
  const hasCustomColor = /\btext-(?!text-default\b)\S+/.test(className)
  const colorClass = hasCustomColor ? '' : 'text-text-default'
  const combinedClassName = `${variantClass} ${colorClass} ${className}`.trim()

  return <Tag className={combinedClassName}>{text ?? children}</Tag>
}

export default Text
