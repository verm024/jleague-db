import { TableHead, TableData } from '@/components/atoms';
import { DataItemProps } from '@/components/atoms/TableData';
import { HeadItemProps } from '@/components/atoms/TableHead';

interface RowProps {
  data: DataItemProps[];
  key: number | string;
}

interface TableProps {
  heads: HeadItemProps[];
  rows: RowProps[];
  maxHeight?: number;
}

export default function Table({ heads, rows, maxHeight }: TableProps) {
  return (
    <table style={{ maxHeight }} className="overflow-y-auto block">
      <thead>
        <tr>
          {heads.map((head, index) => (
            <TableHead
              key={index}
              roundedTopLeft={index === 0}
              roundedTopRight={index === heads.length - 1}
            >
              {head.children}
            </TableHead>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr key={row.key || index}>
            {row.data.map((d, dindex) => (
              <TableData key={`row-${row.key || index}-data-${dindex}`}>
                {d.children}
              </TableData>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
