import { DivProps as BlockProps } from '@/hackerz/types/containers';

function Block({ children }: BlockProps) {
	return <div className="block mt-2">{children}</div>;
}

export default Block;
