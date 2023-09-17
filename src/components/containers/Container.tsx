import { DivProps as ContainerProps } from '@/hackerz/types/containers';

function Container({ children }: ContainerProps) {
	return (
		<div className="container antialiased text-gray-900 px-6">
			{children}
		</div>
	);
}

export default Container;
