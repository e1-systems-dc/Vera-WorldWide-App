import React from "react";

function IconBase({ children, size = 20, className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export function ArrowLeft(props) {
  return (
    <IconBase {...props}>
      <path d="M19 12H5" />
      <path d="m12 19-7-7 7-7" />
    </IconBase>
  );
}

export function Bot(props) {
  return (
    <IconBase {...props}>
      <rect x="4" y="7" width="16" height="12" rx="3" />
      <path d="M12 3v4" />
      <path d="M9 12h.01" />
      <path d="M15 12h.01" />
      <path d="M9 16h6" />
    </IconBase>
  );
}

export function Languages(props) {
  return (
    <IconBase {...props}>
      <path d="M4 5h8" />
      <path d="M8 5c0 6-3 9-3 9" />
      <path d="M6 9c1.5 2 3.5 3 6 3" />
      <path d="M14 15h6" />
      <path d="m17 5 4 14" />
      <path d="m13 19 4-14" />
    </IconBase>
  );
}

export function LayoutDashboard(props) {
  return (
    <IconBase {...props}>
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="5" rx="1.5" />
      <rect x="14" y="12" width="7" height="9" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
    </IconBase>
  );
}

export function Loader2(props) {
  return (
    <IconBase {...props}>
      <path d="M21 12a9 9 0 1 1-6.2-8.56" />
    </IconBase>
  );
}

export function RefreshCcw(props) {
  return (
    <IconBase {...props}>
      <path d="M3 2v6h6" />
      <path d="M21 12a9 9 0 0 0-15.55-6.36L3 8" />
      <path d="M21 22v-6h-6" />
      <path d="M3 12a9 9 0 0 0 15.55 6.36L21 16" />
    </IconBase>
  );
}

export function Send(props) {
  return (
    <IconBase {...props}>
      <path d="M22 2 11 13" />
      <path d="m22 2-7 20-4-9-9-4Z" />
    </IconBase>
  );
}

export function User(props) {
  return (
    <IconBase {...props}>
      <path d="M20 21a8 8 0 0 0-16 0" />
      <circle cx="12" cy="8" r="4" />
    </IconBase>
  );
}

export function Search(props) {
  return (
    <IconBase {...props}>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </IconBase>
  );
}

export function Star(props) {
  return (
    <IconBase {...props}>
      <path d="m12 3 2.8 5.68L21 9.6l-4.5 4.39L17.56 21 12 18.1 6.44 21 7.5 14 3 9.6l6.2-.92Z" />
    </IconBase>
  );
}

export function Vote(props) {
  return (
    <IconBase {...props}>
      <path d="M9 12 7 21" />
      <path d="M15 12 17 21" />
      <path d="M5 8h14" />
      <path d="M7 8V5a5 5 0 0 1 10 0v3" />
      <path d="M12 12v4" />
    </IconBase>
  );
}

export function LifeBuoy(props) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="3" />
      <path d="m9.17 9.17-3.76-3.76" />
      <path d="m14.83 9.17 3.76-3.76" />
      <path d="m14.83 14.83 3.76 3.76" />
      <path d="m9.17 14.83-3.76 3.76" />
    </IconBase>
  );
}

export function MessageCircle(props) {
  return (
    <IconBase {...props}>
      <path d="M7 18.5A8.38 8.38 0 0 1 3 11.5 8.5 8.5 0 0 1 11.5 3h1A8.5 8.5 0 0 1 21 11.5 8.5 8.5 0 0 1 12.5 20h-1L7 21z" />
    </IconBase>
  );
}

export function X(props) {
  return (
    <IconBase {...props}>
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </IconBase>
  );
}
