import Link from 'next/link'
import {PlusIcon, PencilIcon, TrashIcon}  from '@heroicons/react/24/outline'
import { deletePromos } from '@/app/lib/actions'


export function CreatePromo() {
    return (
      <Link
        href="/dashboard/promos/create"
        className="flex h-10 items-center rounded-lg bg-[#E91F60] px-4 text-sm font-medium text-white transition-colors hover:bg-[#E91F30]focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
      >
        <span className="hidden md:block">Créer une promotion</span>{' '}
        <PlusIcon className="h-5 md:ml-4" />
      </Link>
    );
  }
  

export function UpdatePromos({ id }: { id: string }) {
  return (
    <Link
    href={`/dashboard/promos/${id}/edit`}
      className="rounded-md border p-2 hover:bg-gray-100"
    >
      <PencilIcon className="w-5" />
    </Link>
  );
}

export function DeletePromos({ id }: { id: string }) {
  const deletePromosWithId = deletePromos.bind(null, id);
   return (
    <>
      <form action={deletePromosWithId}>
       
 <button className="rounded-md border p-2 hover:bg-gray-100">
          <span className="sr-only">Supprimer</span>
          <TrashIcon className="w-5" />
        </button>
      </form>

    </>
  );
}
