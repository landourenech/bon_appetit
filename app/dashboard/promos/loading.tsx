import {PromosTableSkeleton} from '@/app/ui/skeletons'


export default async function Page() {

  return (
    <main>
      <h1 >
       promos
      </h1>
      
      <PromosTableSkeleton />
    </main>
  );
}