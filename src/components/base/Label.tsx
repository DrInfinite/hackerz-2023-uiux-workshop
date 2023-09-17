import { LabelProps } from '@/hackerz/types';

function Label({
	children,
	className,
	htmlFor,
	...props
}: LabelProps) {
	return (
		<label
			htmlFor={htmlFor}
			className={className || 'block'}
			{...props}>
			{children}
		</label>
	);
}

export default Label;
