import React, { ReactElement } from 'react';

import Link from 'next/link'
export default function DeleteMe(): ReactElement  {
 
  return (
    <main id="delete-me-wrapper">
      <section id="hero">
        <h1>Event Sold Out!? </h1>
        <p>Here is your last chance</p>
        <Link href="/events/romhack2021-tickets-151680104275">
          <a>Search</a>
        </Link>
     
      </section>
      
        {/* FOOTER */}
        <footer>
          <p>© 2021 Vino Bino</p>
        </footer>
      </main>
    
  );
}
