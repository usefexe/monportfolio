import { forwardRef } from 'react';

const IconBase = forwardRef(({ children, size = 22, stroke = 'currentColor', fill = 'none', strokeWidth = '2.8', className, ...rest }, ref) => (
  <svg
    ref={ref}
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={fill}
    stroke={stroke}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
    {...rest}
  >
    {children}
  </svg>
));

IconBase.displayName = 'IconBase';

export const ReactIcon = props => (
  <IconBase stroke="#61DAFB" {...props}>
    <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(30 12 12)" />
    <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(90 12 12)" />
    <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(150 12 12)" />
    <circle cx="12" cy="12" r="1.8" fill="#61DAFB" />
  </IconBase>
);

export const NextjsIcon = props => (
  <IconBase stroke="var(--textTitle)" {...props}>
    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z" />
    <path d="M9 16V8l7.5 8M15 8v5.5" />
  </IconBase>
);

export const LaravelIcon = props => (
  <IconBase stroke="#FF2D20" {...props}>
    <path d="m12 3 8 4.5v9L12 21 4 16.5v-9L12 3Z" />
    <path d="M12 3v18M12 12l8-4.5M12 12 4 7.5" />
  </IconBase>
);

export const NodejsIcon = props => (
  <IconBase stroke="#68A063" {...props}>
    <path d="M12 2.5 20 7v10l-8 4.5L4 17V7l8-4.5Z" />
    <path d="M12 2.5v12.5" />
    <path d="M12 10.5c3-2 5.5-2 6.5 0s0 4-3 5.5-3.5 1-3.5 1" />
    <path d="M12 10.5c-3-2-5.5-2-6.5 0s0 4 3 5.5 3.5 1 3.5 1" />
  </IconBase>
);

export const ExpressIcon = props => (
  <IconBase stroke="var(--textTitle)" {...props}>
    <path d="M4 8h10M4 12h7M4 16h10" />
    <path d="m15 8 5 8M20 8l-5 8" />
  </IconBase>
);

export const MongodbIcon = props => (
  <IconBase stroke="#13AA52" {...props}>
    <path d="M12 2c2.5 3.5 5 7.5 4.5 12-0.5 3.5-2.5 6.5-4.5 8-2-1.5-4-4.5-4.5-8C7 9.5 9.5 5.5 12 2Z" />
    <path d="M12 2v20" />
  </IconBase>
);

export const MysqlIcon = props => (
  <IconBase stroke="#00758F" {...props}>
    <ellipse cx="12" cy="5" rx="8" ry="3" />
    <path d="M4 5v5c0 1.66 3.58 3 8 3s8-1.34 8-3V5" />
    <path d="M4 10v5c0 1.66 3.58 3 8 3s8-1.34 8-3v-5" />
    <path d="M4 15v4c0 1.66 3.58 3 8 3s8-1.34 8-3v-4" />
  </IconBase>
);

export const PostgresqlIcon = props => (
  <IconBase stroke="#336791" {...props}>
    <path d="M16 12c1.5-2.5 1.5-6.5-2.5-7.5s-8.5.5-8.5 7.5c0 4.5 2 6.5 5 6.5h3" />
    <path d="M10 20c0-2.5 2-3.5 4.5-2.5s1 4-1.5 4h-3" />
    <circle cx="9" cy="9" r="1.5" fill="#336791" />
  </IconBase>
);

export const GitIcon = props => (
  <IconBase stroke="#F05032" {...props}>
    <circle cx="18" cy="18" r="3" fill="#F05032" />
    <circle cx="6" cy="6" r="3" fill="#F05032" />
    <circle cx="6" cy="18" r="3" fill="#F05032" />
    <path d="M18 15V9a4 4 0 0 0-4-4H9" />
    <path d="M6 9v6" />
  </IconBase>
);

export const DockerIcon = props => (
  <IconBase stroke="#2496ED" {...props}>
    <path d="M2 16h20M2 16c2 1 5 1 7-1 3-3 4-9 13-9 0 4-1 9-8 10H2Z" />
    <path d="M4 12V8h3v4M8 12V8h3v4M12 12V8h3v4" />
  </IconBase>
);
