import { FormProps } from '@/hackerz/types/base';

function Form({ children, ...props }: FormProps) {
	return (
		<form
			className="grid grid-cols-1 gap-6"
			{...props}>
			{children}
		</form>
	);
}

export default Form;
