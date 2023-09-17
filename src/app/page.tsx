import {
	Button,
	Checkbox,
	Form,
	Label,
	Select,
	Span,
	Textarea,
} from '@/hackerz/components/base';

import { Block, Container } from '@/hackerz/components/containers';

import { FormElement } from '@/hackerz/components';

export default function Home() {
	return (
		<Container>
			<div className="max-w-xl mx-auto py-12 divide-y md:max-w-4xl">
				<div className="py-12">
					<h2>UI/UX Form Example</h2>
					<div className="mt-8 max-w-md">
						<Form>
							<FormElement
								label="Full Name"
								type="text"
								placeholder="Full Name"
							/>
							<FormElement
								label="Email Address"
								type="email"
								placeholder="demo@example.com"
							/>
							<FormElement
								label="When is your event?"
								type="date"
							/>
							<Label>
								<Span>What type of event is this?</Span>
								<Select>
									<option>Corporate Event</option>
									<option>Wedding</option>
									<option>Birthday</option>
									<option>Other</option>
								</Select>
							</Label>
							<Label>
								<Span>Additional Details</Span>
								<Textarea rows={3} />
							</Label>
							<Block>
								<Label className="inline-flex items-center gap-2">
									<Checkbox />
									<Span>Email me news and special offers</Span>
								</Label>
							</Block>
							<Button type="submit">Submit</Button>
						</Form>
					</div>
				</div>
			</div>
		</Container>
	);
}
