interface GridProps {
  /**
   * Color of the grid
   */
  color?: string;

  /**
   * Size of the grid in pixels
   */
  size?: number;

  /**
   * Content of the component
   */
  children?: React.ReactNode;

  className?: string;

  style?: React.CSSProperties;
}

export default function Grid({
  color = '#cacaca',
  size = 20,
  children,
  className,
  style = {},
}: GridProps) {
  return (
    <div
      style={{
        ...style,
        backgroundImage: `linear-gradient(${color} 1px, transparent 1px), linear-gradient(to right, ${color} 1px, transparent 1px)`,
        backgroundSize: `${size}px ${size}px`,
      }}
      className={className}
    >
      {children}
    </div>
  );
}
