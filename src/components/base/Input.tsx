import { InputProps } from '@/hackerz/types';

export function Input({ type, placeholder, ...props }: InputProps) {
	return (
		<input
			type={type}
			className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
			placeholder={placeholder}
			{...props}
		/>
	);
}

export function Checkbox() {
	return (
		<input
			type="checkbox"
			className="rounded bg-gray-200 border-transparent focus:border-transparent focus:bg-gray-200 text-gray-700 focus:ring-1 focus:ring-offset-2 focus:ring-gray-500"
		/>
	);
}

export default Input;
