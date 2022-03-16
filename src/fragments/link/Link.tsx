type LinkProps = {
  href: string;
  text: string;
};

const Link = ({ href, text }: LinkProps) => {
  return (
    <a
      href={href}
      aria-label={text}
      className="text-secondary uppercase text-xl font-bold p-4 border-t-2 border-gray-400 flex items-center mb-8 text-center"
    >
      {text}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="ml-1 h-3 w-3"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="3"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
      </svg>
    </a>
  );
};

export default Link;
