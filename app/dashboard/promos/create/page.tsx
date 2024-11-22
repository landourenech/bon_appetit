import Form from '@/app/ui/promos/create-form';
import Breadcrumbs from '@/app/ui/promos/breadcrumbs';
 
export default async function Page() {
//   const customers = await fetchCustomers();
 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Promos', href: '/dashboard/Promos' },
          {
            label: 'Create ',
            href: '/dashboard/promos/create',
            active: true,
          },
        ]}
      />
      <Form />
    </main>
  );
}