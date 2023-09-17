import { ButtonProps } from '@/hackerz/types';

function Button({ type, children, ...props }: ButtonProps) {
	return (
		<button
			type={type}
			className="p-4 bg-gray-100 rounded hover:bg-gray-200 focus:ring focus:ring-gray-300"
			{...props}>
			{children}
		</button>
	);
}

export default Button;