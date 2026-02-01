import { Broker } from "@/lib/types/broker";

type Props = {
  brokers: Broker[];
  fields: { key: keyof Broker; label: string }[];
};

export default function BrokerTable({ brokers, fields }: Props) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border text-sm">
        <thead>
          <tr>
            <th className="border p-2 text-left">Broker</th>
            {fields.map(field => (
              <th key={field.key as string} className="border p-2 text-left">
                {field.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {brokers.map(broker => (
            <tr key={broker.slug}>
              <td className="border p-2 font-medium">
                {broker.name}
              </td>
              {fields.map(field => (
                <td key={field.key as string} className="border p-2">
                  {(broker[field.key] as any)?.toString()}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
