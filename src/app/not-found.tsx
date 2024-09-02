import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex w-fll h-screen justify-center items-center flex-col">
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <br />
      <Link href="/" className="text-rose-400 underline">
        Return Home
      </Link>
    </div>
  );
}
