import { DivProps as BlockProps } from '@/hackerz/types';

function Block({ children }: BlockProps) {
	return <div className="block mt-2">{children}</div>;
}

export default Block;
