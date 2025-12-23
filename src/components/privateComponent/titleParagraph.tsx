type paragraphProps = {
    title: string;
    text: string;
};

const TitleParagraph = ({ title, text }: paragraphProps) => {
    return (
        <div className="flex max-w-4/5 flex-col justify-items-start gap-4">
            <h3 className="text-left">{title}</h3>
            <p>{text}</p>
        </div>
    );
};

export default TitleParagraph;
