import {
	ButtonHTMLAttributes,
	DetailedHTMLProps,
	FormHTMLAttributes,
	HTMLAttributes,
	InputHTMLAttributes,
	LabelHTMLAttributes,
	SelectHTMLAttributes,
	TextareaHTMLAttributes,
} from 'react';

export interface ButtonProps
	extends ButtonHTMLAttributes<HTMLButtonElement> {}

export interface FormProps
	extends FormHTMLAttributes<HTMLFormElement> {}

export interface InputProps
	extends InputHTMLAttributes<HTMLInputElement> {}

export interface LabelProps
	extends LabelHTMLAttributes<HTMLLabelElement> {}

export interface SelectProps
	extends SelectHTMLAttributes<HTMLSelectElement> {}

export interface SpanProps
	extends DetailedHTMLProps<
		HTMLAttributes<HTMLSpanElement>,
		HTMLSpanElement
	> {}

export interface TextareaProps
	extends TextareaHTMLAttributes<HTMLTextAreaElement> {}
