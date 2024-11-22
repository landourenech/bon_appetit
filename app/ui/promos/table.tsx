import Image from 'next/image';
import { UpdatePromos, DeletePromos } from '@/app/ui/promos/buttons';
import PromoStatus from '@/app/ui/promos/status';
import { formatDateToLocal, formatCurrency } from '@/app/lib/utils';
import { fetchFilteredPromos } from '@/app/lib/data';

export default async function PromosTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const promos = await fetchFilteredPromos(query, currentPage);

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden border-2 border-yellow-200">
            {promos?.map((promo) => (
              <div
                key={promo.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <Image
                        src={promo.image_url}
                        className="mr-2 rounded-full"
                        width={28}
                        height={28}
                        alt={`${promo.name}'s profile picture`}
                      />
                      <p>{promo.name}</p>
                    </div>
                    <p className="text-sm text-gray-500">{promo.email}</p>
                  </div>
                  <PromoStatus status={promo.status} />
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p className="text-xl font-medium">
                      {formatCurrency(promo.amount)}
                    </p>
                    <p>{formatDateToLocal(promo.date)}</p>
                  </div>
                  <div className="flex justify-end gap-2">
                    <UpdatePromos id={promo.id} />
                    <DeletePromos id={promo.id} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Promotions
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Année
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Amount
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Date
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Status
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {promos?.map((promo) => (
                <tr
                  key={promo.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <Image
                        src={promo.image_url}
                        className="rounded-full"
                        width={28}
                        height={28}
                        alt={`${promo.name}'s profile picture`}
                      />
                      <p>{promo.name}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {promo.email}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {formatCurrency(promo.amount)}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {formatDateToLocal(promo.date)}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    <PromoStatus status={promo.status} />
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <UpdatePromos id={promo.id} />
                      <DeletePromos id={promo.id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
