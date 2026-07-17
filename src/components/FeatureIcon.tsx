export type FeatureIconName =
  | "shield"
  | "hotel"
  | "guide"
  | "price"
  | "plane"
  | "support"
  | "bus"
  | "camera"
  | "food"
  | "pin";

export default function FeatureIcon({
  name,
  className = "h-9 w-9",
}: {
  name: FeatureIconName;
  className?: string;
}) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  switch (name) {
    case "shield":
      return (
        <svg {...common}>
          <path d="M12 3l7 3v5c0 4.4-3 7.7-7 9-4-1.3-7-4.6-7-9V6l7-3z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
    case "hotel":
      return (
        <svg {...common}>
          <path d="M3 21h18" />
          <path d="M5 21V6l7-3 7 3v15" />
          <path d="M9 9h.01M12 9h.01M15 9h.01M9 13h.01M12 13h.01M15 13h.01" />
          <path d="M10 21v-4h4v4" />
        </svg>
      );
    case "guide":
      return (
        <svg {...common}>
          <path d="M4 5a2 2 0 0 1 2-2h6v16H6a2 2 0 0 0-2 2V5z" />
          <path d="M20 5a2 2 0 0 0-2-2h-6v16h6a2 2 0 0 1 2 2V5z" />
          <path d="M12 7v8" />
        </svg>
      );
    case "price":
      return (
        <svg {...common}>
          <path d="M3 7a2 2 0 0 1 2-2h7l9 9-7 7-9-9V7z" />
          <circle cx="8" cy="10" r="1.4" />
        </svg>
      );
    case "plane":
      return (
        <svg {...common}>
          <path d="M10.5 13.5L3 12l-1 2 5 3 1 4 2-1 1.5-7.5L20 9a2 2 0 0 0-2.8-2.8L10.5 13.5z" />
        </svg>
      );
    case "support":
      return (
        <svg {...common}>
          <path d="M4 12a8 8 0 1 1 16 0v5a3 3 0 0 1-3 3h-2" />
          <rect x="3" y="12" width="4" height="6" rx="1.5" />
          <rect x="17" y="12" width="4" height="6" rx="1.5" />
        </svg>
      );
    case "bus":
      return (
        <svg {...common}>
          <rect x="3" y="4" width="18" height="13" rx="2" />
          <path d="M3 11h18" />
          <path d="M7 17v2M17 17v2" />
          <circle cx="7.5" cy="14" r="0.6" />
          <circle cx="16.5" cy="14" r="0.6" />
        </svg>
      );
    case "camera":
      return (
        <svg {...common}>
          <path d="M4 8h3l1.5-2h7L17 8h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
          <circle cx="12" cy="13" r="3.2" />
        </svg>
      );
    case "food":
      return (
        <svg {...common}>
          <path d="M6 3v7a2 2 0 0 0 2 2v9M6 3v4M9 3v4M8 7V3" />
          <path d="M16 3c-1.5 0-2.5 2-2.5 5s1 4 2.5 4v9" />
        </svg>
      );
    case "pin":
      return (
        <svg {...common}>
          <path d="M12 21s7-6.4 7-11a7 7 0 1 0-14 0c0 4.6 7 11 7 11z" />
          <circle cx="12" cy="10" r="2.5" />
        </svg>
      );
  }
}
