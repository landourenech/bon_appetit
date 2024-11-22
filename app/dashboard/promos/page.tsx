import Search from '@/app/ui/search'
import { CreatePromo } from '@/app/ui/promos/buttons';
// import { Suspense } from 'react'
// import Table from '@/app/ui/promos/table'
// import { PromosTableSkeleton } from '@/app/ui/skeletons';




export default async function Page(props:{
  searchParams?: Promise<{
    query?:string;
    page?: string;
  }>
}) {
  const searchParams = await props.searchParams;
  const query =searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  // const totalPages =await searchParams fetchPromosPages (query)

  return (
    <main>
      <h1 >
       Promotions
      </h1>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search invoices..." />
        <CreatePromo />
      </div>
      {/* <Suspense key={query + currentPage} fallback={<PromosTableSkeleton />}>
        <Table query={query} currentPage={currentPage} />
      </Suspense>  */}
    </main>
  );
}