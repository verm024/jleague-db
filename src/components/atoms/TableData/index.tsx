import React from 'react';

export interface DataItemProps {
  children: React.ReactNode;
}

export default function TableData({ children }: DataItemProps) {
  return <td className="text-sm text-left p-2">{children}</td>;
}
