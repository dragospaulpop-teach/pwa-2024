import { Link } from "@tanstack/react-router";

export default function TopMenu() {
  return (
    <div className="gap-4 hidden md:flex">
      <Link to="/">Home</Link>
      <Link to="/labs">Labs</Link>
      <Link to="/news">News</Link>
      <Link to="/resources">Resources</Link>
    </div>
  );
}
