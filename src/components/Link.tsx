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
      className="text-slate-600 hover:text-slate-300"
    >
      {text}
    </a>
  );
};

export default Link;
