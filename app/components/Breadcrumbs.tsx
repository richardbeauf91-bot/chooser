type Crumb = {
  name: string;
  href: string;
};

type Props = {
  items: Crumb[];
};

export default function Breadcrumbs({ items }: Props) {
  return (
    <nav className="text-sm mb-6">
      <ol className="flex flex-wrap gap-1 text-slate-600">
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center gap-1">
            {index > 0 && <span>/</span>}
            <a href={item.href} className="underline">
              {item.name}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
