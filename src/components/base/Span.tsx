import { SpanProps } from '@/hackerz/types';

function Span({ children, className, ...props }: SpanProps) {
	return (
		<span
			className={className || 'text-gray-700'}
			{...props}>
			{children}
		</span>
	);
}

export default Span;
