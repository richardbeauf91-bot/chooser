type Props = {
  href: string;
  text: string;
  variant?: "primary" | "secondary";
};

export default function CTAButton({ href, text, variant = "primary" }: Props) {
  const baseStyles = "inline-flex items-center justify-center w-full px-6 py-3.5 text-base font-semibold rounded-lg transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]";
  
  const variantStyles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg",
    secondary: "bg-slate-100 text-slate-900 hover:bg-slate-200 border-2 border-slate-300"
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="nofollow sponsored noopener"
      className={`${baseStyles} ${variantStyles[variant]}`}
    >
      {text}
      <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
      </svg>
    </a>
  );
}