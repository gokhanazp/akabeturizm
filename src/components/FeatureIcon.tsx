export type FeatureIconName = "shield" | "hotel" | "guide" | "price" | "plane" | "support";

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
  }
}
