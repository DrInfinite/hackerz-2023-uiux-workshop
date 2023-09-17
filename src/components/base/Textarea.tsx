import { TextareaProps } from '@/hackerz/types';

function Textarea({ rows, ...props }: TextareaProps) {
	return (
		<textarea
			className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
			rows={rows}
			{...props}></textarea>
	);
}

export default Textarea;
