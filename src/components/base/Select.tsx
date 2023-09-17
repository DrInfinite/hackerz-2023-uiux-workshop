import { SelectProps } from '@/hackerz/types';

function Select({ children, ...props }: SelectProps) {
	return (
		<select
			className="block w-full mt-1 rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
			{...props}>
			{children}
		</select>
	);
}

export default Select;
