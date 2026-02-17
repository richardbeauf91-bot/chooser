import { Broker } from "@/lib/types/broker";

type Props = {
  brokers: Broker[];
  fields: { key: keyof Broker; label: string }[];
};

export default function BrokerTable({ brokers, fields }: Props) {
  return (
    <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
      <table className="w-full text-sm">
        <thead className="bg-slate-50 border-b border-slate-200">
          <tr>
            <th className="px-6 py-4 text-left font-semibold text-slate-900 sticky left-0 bg-slate-50 z-10">
              Broker
            </th>
            {fields.map(field => (
              <th 
                key={field.key as string} 
                className="px-6 py-4 text-left font-semibold text-slate-900 whitespace-nowrap"
              >
                {field.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-200 bg-white">
          {brokers.map((broker, index) => (
            <tr 
              key={broker.slug} 
              className="hover:bg-slate-50 transition-colors"
            >
              <td className="px-6 py-4 font-semibold text-slate-900 sticky left-0 bg-white group-hover:bg-slate-50 whitespace-nowrap">
                <div className="flex items-center gap-2">
                  {index < 3 && (
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-yellow-400 to-orange-400 text-white text-xs font-bold">
                      {index + 1}
                    </span>
                  )}
                  <a 
                    href={`/${broker.slug}`} 
                    className="hover:text-blue-600 transition-colors"
                  >
                    {broker.name}
                  </a>
                </div>
              </td>
              {fields.map(field => (
                <td 
                  key={field.key as string} 
                  className="px-6 py-4 text-slate-700"
                >
                  {renderFieldValue(broker[field.key])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function renderFieldValue(value: any): React.ReactNode {
  if (value === null || value === undefined) {
    return <span className="text-slate-400">—</span>;
  }
  
  if (typeof value === 'boolean') {
    return value ? (
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
        Yes
      </span>
    ) : (
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-800">
        No
      </span>
    );
  }
  
  if (Array.isArray(value)) {
    return value.join(', ');
  }
  
  if (typeof value === 'object') {
    return JSON.stringify(value);
  }
  
  return value.toString();
}