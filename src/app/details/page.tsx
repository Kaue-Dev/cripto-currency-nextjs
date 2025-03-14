import Link from "next/link";
import { Home } from "lucide-react";

export default async function Details() {
  return (
    <div className="w-full max-w-7xl mx-auto py-8 px-4">
      <div className="mb-8 flex justify-between items-end gap-4">
        <div>
          <h1 className="text-4xl font-bold">Details</h1>
          <p>Select the cryptocurrency you want more information about.</p>
        </div>
        <Link href="/" className="bg-zinc-900 border border-zinc-800 p-3 text-zinc-400 rounded w-fit hover:bg-zinc-800">
          <Home size={24} />
        </Link>
      </div>
    </div>
  )
}
