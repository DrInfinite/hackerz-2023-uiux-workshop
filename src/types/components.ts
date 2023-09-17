import { HTMLInputTypeAttribute, ReactNode } from 'react';

export interface FormElementProps {
	label: ReactNode;
	type?: HTMLInputTypeAttribute;
	placeholder?: string;
}
