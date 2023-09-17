import { FormElementProps } from '@/hackerz/types';
import { Input, Label, Span } from './base';

function FormElement({ label, type, placeholder }: FormElementProps) {
	return (
		<Label>
			<Span>{label}</Span>
			<Input
				type={type}
				placeholder={placeholder}
			/>
		</Label>
	);
}

export default FormElement;
