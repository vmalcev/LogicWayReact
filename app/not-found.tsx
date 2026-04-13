import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="text-center space-y-4">
        <h1 className="text-6xl font-bold text-[#f6de34]">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800">
          Pagina non trovata
        </h2>
        <p className="text-gray-600">
          La pagina che stai cercando non esiste o è stata spostata.
        </p>
        <Link href="/">
          <Button className="bg-[#f6de34] hover:bg-yellow-400 text-black mt-4">
            Torna alla Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
