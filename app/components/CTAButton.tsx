type Props = {
  href: string;
  text: string;
};

export default function CTAButton({ href, text }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="nofollow sponsored noopener"
      className="inline-block rounded-md bg-slate-900 px-6 py-3 text-white font-medium hover:bg-slate-800 transition"
    >
      {text}
    </a>
  );
}
