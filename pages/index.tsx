import { useEffect, useState } from 'react';
import Meta from '@utils/Meta';
import DeleteMe from '@components/DeleteMe';
// Delete this if runtime JavaScript is needed:
export const config = {
  unstable_runtimeJS: false,
};

export default function Home() {
  

  return (
    <>
      <Meta /><DeleteMe />
     
      
    </>
  );
}
