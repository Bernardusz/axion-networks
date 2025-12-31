type paragraphProps = {
    title: string;
    text: string;
    className?: string;
	variant? : "h3" | "h4"
};

const TitleParagraph = ({ title, text, className, variant }: paragraphProps) => {
    return (
        <div className={`flex flex-col justify-items-start gap-4 ${className}`}>
			{variant === "h3" ? 
	            <h3 className="text-left">{title}</h3> : <h4 className="text-left">{title}</h4>
			}
            <p>{text}</p>
        </div>
    );
};

export default TitleParagraph;
