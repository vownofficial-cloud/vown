import Link from "next/link";
export default function NotFound() {
  return (
    <div className="shell page-intro">
      <span className="eyebrow">404 / Page not found</span>
      <h1>
        This page
        <br />
        is not here.
      </h1>
      <p>Try the homepage, or get in touch if you need a hand.</p>
      <Link className="action" href="/">
        Back to home ↗
      </Link>
    </div>
  );
}
