"use client";

import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="text-center space-y-4">
        <h2 className="text-2xl font-bold text-gray-800">
          Si è verificato un errore
        </h2>
        <p className="text-gray-600">
          Ci scusiamo per l&apos;inconveniente. Riprova.
        </p>
        <Button
          onClick={reset}
          className="bg-[#f6de34] hover:bg-yellow-400 text-black"
        >
          Riprova
        </Button>
      </div>
    </div>
  );
}
