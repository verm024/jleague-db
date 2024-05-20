import clsx from 'clsx';

interface SpacerProps {
  size?: number;
  horizontal?: boolean;
}

export default function Spacer({ size = 16, horizontal = false }: SpacerProps) {
  return (
    <div
      className={clsx(horizontal ? 'inline-block' : '')}
      style={{ width: size, height: size }}
    ></div>
  );
}
