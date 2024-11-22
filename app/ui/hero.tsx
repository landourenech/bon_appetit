import { Header } from "@/app/ui/header";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export function Hero() {
  return (
    <>
      <main>
        <Header />
        <div className="grid grid-cols-2 max-md:grid-cols-1 justify-center items-center">
          <div className="flex flex-col py-5 gap-5">
            <h1 className="text-red-600">Bon appétit</h1>
            <p>
              Les meilleures recettes du monde faciles à faire avec notre
              communauté
            </p>
            <Link
              href="/singin"
              className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
            >
              <span>Inscription</span> <ArrowRightIcon className="w-5 md:w-6" />
            </Link>
          </div>
          <div className="hidden lg:block">
            <h1>Image</h1>
          </div>
        </div>
      </main>
    </>
  );
}
