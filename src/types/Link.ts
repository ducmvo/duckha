import { LinkProps as NextLinkProps } from 'next/link'

export type LinkProps = NextLinkProps & {
	children?: React.ReactNode
	onClick?: () => void
}
