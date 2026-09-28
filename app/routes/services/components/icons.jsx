import { forwardRef } from 'react';

/**
 * Minimal outline icon set for the Services page.
 * Drawn to match a lucide-style aesthetic: 24x24, rounded strokes, no fill.
 * Kept local to this route so it doesn't depend on the global icon sprite.
 */
const IconBase = forwardRef(({ children, size = 24, className, ...rest }, ref) => (
  <svg
    ref={ref}
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
    {...rest}
  >
    {children}
  </svg>
));

export const GlobeIcon = props => (
  <IconBase {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18" />
    <path d="M12 3c2.6 2.5 4 5.7 4 9s-1.4 6.5-4 9c-2.6-2.5-4-5.7-4-9s1.4-6.5 4-9Z" />
  </IconBase>
);

export const WorkflowIcon = props => (
  <IconBase {...props}>
    <rect x="3" y="3" width="6" height="6" rx="1" />
    <rect x="15" y="15" width="6" height="6" rx="1" />
    <path d="M9 6h4a3 3 0 0 1 3 3v6" />
    <path d="M6 9v3a3 3 0 0 0 3 3h1" />
  </IconBase>
);

export const LayersIcon = props => (
  <IconBase {...props}>
    <path d="M12 3 3 8l9 5 9-5-9-5Z" />
    <path d="m3 12 9 5 9-5" />
    <path d="m3 16 9 5 9-5" />
  </IconBase>
);

export const RocketIcon = props => (
  <IconBase {...props}>
    <path d="M12 3c2.8 1 5 3.6 5 7.5 0 2-1 4.3-2 5.5H9c-1-1.2-2-3.5-2-5.5C7 6.6 9.2 4 12 3Z" />
    <path d="M9.5 16 7 21l2.5-1.5L12 21l2.5-1.5L17 21l-2.5-5" />
    <circle cx="12" cy="10" r="1.5" />
  </IconBase>
);

export const LinkIcon = props => (
  <IconBase {...props}>
    <path d="M9.5 14.5 14.5 9.5" />
    <path d="M8 16.5 5.5 19a3 3 0 0 1-4.2-4.2L4 12" />
    <path d="M16 7.5 18.5 5a3 3 0 1 1 4.2 4.2L20 12" />
  </IconBase>
);

export const SettingsIcon = props => (
  <IconBase {...props}>
    <circle cx="12" cy="12" r="3" />
    <path d="M19 12a7 7 0 0 0-.1-1.2l2-1.4-1.7-3-2.3.7a7 7 0 0 0-2-1.2L14.5 3h-5l-.4 2.9a7 7 0 0 0-2 1.2l-2.3-.7-1.7 3 2 1.4a7 7 0 0 0 0 2.4l-2 1.4 1.7 3 2.3-.7a7 7 0 0 0 2 1.2l.4 2.9h5l.4-2.9a7 7 0 0 0 2-1.2l2.3.7 1.7-3-2-1.4c.07-.4.1-.8.1-1.2Z" />
  </IconBase>
);

export const PuzzleIcon = props => (
  <IconBase {...props}>
    <path d="M9 4h3.5a1.5 1.5 0 0 1 0 3H12v3h2.5a1.5 1.5 0 1 1 0 3H14v3.5a1.5 1.5 0 0 1-3 0V16H8a1.5 1.5 0 0 1 0-3h.5v-3H8a1.5 1.5 0 1 1 0-3H8V4h1Z" />
  </IconBase>
);

export const ZapIcon = props => (
  <IconBase {...props}>
    <path d="M13 3 5 13h5l-1 8 8-10h-5l1-8Z" />
  </IconBase>
);

export const ChatIcon = props => (
  <IconBase {...props}>
    <path d="M4 5h16v10H9l-4 4V5Z" />
    <path d="M8 9h8" />
    <path d="M8 12h5" />
  </IconBase>
);

export const TrendUpIcon = props => (
  <IconBase {...props}>
    <path d="M4 16 10 10l4 4 6-7" />
    <path d="M15 7h5v5" />
  </IconBase>
);

export const SearchIcon = props => (
  <IconBase {...props}>
    <circle cx="11" cy="11" r="6.5" />
    <path d="m20 20-3.6-3.6" />
  </IconBase>
);

export const ClipboardIcon = props => (
  <IconBase {...props}>
    <rect x="5" y="4" width="14" height="17" rx="1.5" />
    <path d="M9 4V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1" />
    <path d="M8.5 11h7" />
    <path d="M8.5 15h7" />
  </IconBase>
);

export const HammerIcon = props => (
  <IconBase {...props}>
    <path d="m14.5 6.5 3 3L21 6l-3-3-3.5 3.5Z" />
    <path d="m13 8-9 9 3 3 9-9" />
    <path d="m5 19-2 2" />
  </IconBase>
);

export const FlaskIcon = props => (
  <IconBase {...props}>
    <path d="M10 2v6.5L4.5 18a2 2 0 0 0 1.7 3h11.6a2 2 0 0 0 1.7-3L14 8.5V2" />
    <path d="M9 2h6" />
    <path d="M7.5 15h9" />
  </IconBase>
);

export const CloudUploadIcon = props => (
  <IconBase {...props}>
    <path d="M7 18a4.5 4.5 0 0 1-1-8.9A5.5 5.5 0 0 1 16.9 8 4 4 0 0 1 17 18H7Z" />
    <path d="M12 10v7" />
    <path d="m9 13 3-3 3 3" />
  </IconBase>
);

export const LifeBuoyIcon = props => (
  <IconBase {...props}>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="4" />
    <path d="m7.5 7.5 2.7 2.7" />
    <path d="m16.5 16.5-2.7-2.7" />
    <path d="m16.5 7.5-2.7 2.7" />
    <path d="m7.5 16.5 2.7-2.7" />
  </IconBase>
);

export const ChevronDownIcon = props => (
  <IconBase {...props}>
    <path d="m6 9 6 6 6-6" />
  </IconBase>
);

export const CheckIcon = props => (
  <IconBase {...props}>
    <path d="m5 12 5 5 9-10" />
  </IconBase>
);
