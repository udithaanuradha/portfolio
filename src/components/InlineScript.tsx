// A <script dangerouslySetInnerHTML> rendered directly in JSX makes React
// log "Encountered a script tag while rendering React component" — it only
// runs from the static server HTML, so React warns that re-rendering it on
// the client is a no-op. The fix (from this Next.js version's own
// "preventing flash before hydration" guide): give it a real script type on
// the server and an inert one on the client, and suppress the resulting
// (harmless) hydration mismatch on that one attribute.
export function InlineScript({ html }: { html: string }) {
  return (
    <script
      type={typeof window === "undefined" ? "text/javascript" : "text/plain"}
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
