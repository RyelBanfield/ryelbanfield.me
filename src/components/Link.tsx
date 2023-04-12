type LinkProps = {
  to: string;
  text: string;
};

const Link = ({ to, text }: LinkProps) => {
  return (
    <a
      href={to}
      target="_blank"
      rel="noopener noreferrer"
      className="text-red-500 hover:text-red-600"
    >
      {text}
    </a>
  );
};

export default Link;
