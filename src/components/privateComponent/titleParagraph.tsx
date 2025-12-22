type paragraphProps = {
	title: string,
	text: string,
}

const TitleParagraph = ({title, text}: paragraphProps) => {
	return (
		<div className="flex flex-col gap-4 justify-items-start max-w-4/5">
			<h3 className="text-left">{ title }</h3>
			<p>{ text }</p>
		</div>
	);
};

export default TitleParagraph;