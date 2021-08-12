type TextHeadingProps = {
  text: string;
};

export default function TextHeading({ text }: TextHeadingProps) {
  return (
    <div className="font-bold text-4xl py-2 text-yellow-500">
      <h1>{text}</h1>
    </div>
  );
}
