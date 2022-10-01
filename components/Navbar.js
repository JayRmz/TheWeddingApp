import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();

  return (
    <div className="max-w-6xl mx-auto px-4 py-5 md:py-10">
      <div className="flex md:flex-row justify-between items-center">
        <div className="flex flex-col">
          <Link href="/">Les Chaparrines</Link>
        </div>
        <div className="space-x-8 hidden md:block">
          <Link href="/invitados">
            <a
              className={`text-base ${
                router.asPath === "/invitados"
                  ? "font-bold text-stone-50 underline"
                  : "font-normal text-pink-txt"
              }`}
            >
              Invitados
            </a>
          </Link>
          <Link href="/mesa">
            <a
              className={`text-base ${
                router.asPath === "/mesa"
                  ? "font-bold text-stone-50 underline"
                  : "font-normal text-pink-txt"
              }`}
            >
              Mesa de Regalos
            </a>
          </Link>

          <Link href="/salon">
            <a
              className={`text-base ${
                router.asPath === "/salon"
                  ? "font-bold text-stone-50 underline"
                  : "font-normal text-pink-txt"
              }`}
            >
              Salón
            </a>
          </Link>

          <Link href="/hospedaje">
            <a
              className={`text-base ${
                router.asPath === "/hospedaje"
                  ? "font-bold text-stone-50 underline"
                  : "font-normal text-pink-txt"
              }`}
            >
              Hospedaje
            </a>
          </Link>
        </div>
      </div>
      <div className="space-x-8 block md:hidden mt-4">
        <Link href="/invitados">
          <a className="text-base font-normal text-pink-complement">
            Invitados
          </a>
        </Link>
        <Link href="/mesa">
          <a className="text-base font-normal text-pink-complement">
            Mesa de Regalos
          </a>
        </Link>
        <Link href="/salon">
          <a className="text-base font-normal text-pink-complement">Salón</a>
        </Link>
        <Link href="/hospedaje">
          <a className="text-base font-normal text-pink-complement">
            Hospedaje
          </a>
        </Link>
      </div>
    </div>
  );
}
