type Props = {
  faq: { question: string; answer: string }[];
};

export default function FAQBlock({ faq }: Props) {
  if (!faq.length) return null;

  return (
    <section className="mt-12">
      <h2 className="text-2xl font-semibold mb-4">FAQ</h2>
      <div className="space-y-4">
        {faq.map(item => (
          <div key={item.question}>
            <h3 className="font-medium">{item.question}</h3>
            <p className="text-slate-700 mt-1">{item.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
