import SinginForm from "@/app/ui/singin-form";
import Image from "next/image";

export default function SinginPage() {
  return (
    <main className="relative flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100">
      <div className="absolute inset-0 md:hidden">
        <Image
          src="/imageconnexion.png"
          className="w-full "
          layout="fill"
          objectFit="cover"
          alt="image de connexion"
        />
      </div>
      <div className="hidden h-full md:flex md:w-1/2 justify-center items-centerhidden">
        <Image
          src="/imageconnexion.png"
          className="w-full "
          width={500}
          height={500}
          alt="image de connexion"
        />
      </div>
      <div className="relative  mx-auto flex w-full max-w-[400px] flex-col md:-mt-32">
        <SinginForm />
      </div>
    </main>
  );
}
