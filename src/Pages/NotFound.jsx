import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black px-6 text-center text-white">
      <div className="space-y-4">
        <h3 className="text-sm font-semibold tracking-wider text-neutral-400 uppercase">
          404 Error
        </h3>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Page Not Found
        </h1>
        <p className="max-w-md mx-auto text-base text-neutral-400">
          Sorry, we couldn’t find the page you’re looking for. It might have
          been moved or deleted.
        </p>
      </div>

      <div className="mt-10">
        <Link
          to="/"
          className="rounded bg-white px-5 py-2.5 text-sm font-semibold text-black transition-colors hover:bg-neutral-200"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
}
