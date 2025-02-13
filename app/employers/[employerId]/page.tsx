// type Props = NextPageProps<{ employerId: string }>;

export default async function ProductPage() {
  return <div>unknown employer</div>;

  // return (
  //   <div>
  //     <PageHeader
  //       withBackButton
  //       leftSlot={<EmployerBaseInfo employer={employer} />}
  //     />
  //     <PageContent>
  //       <Reviews employer={employer} />
  //     </PageContent>
  //   </div>
  // );
}

// export async function generateStaticParams() {
//   const products = await employerProvider.list();
//   const productIds = Object.keys(products);
//
//   return productIds.map((id) => ({
//     employerId: id,
//   }));
// }
