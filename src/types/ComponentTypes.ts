import { HTMLInputTypeAttribute, ReactNode } from 'react';

export type FormElementProps = {
	label: ReactNode;
	type?: HTMLInputTypeAttribute;
	placeholder?: string;
};
