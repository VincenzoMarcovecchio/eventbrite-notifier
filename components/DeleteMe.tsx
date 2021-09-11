import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function DeleteMe() {
  const router = useRouter();
  return (
    <main id="delete-me-wrapper">
      <section id="hero">
        <h1>Event Sold Out!? </h1>
        <p>Here is your last chance</p>
        <a
        onClick={() =>
          router.push(`/events/romhack2021-tickets-151680104275`).then(() => window.scrollTo(0, 0))
        }
   
   
      >
        Search
      </a>
      </section>
      
        {/* FOOTER */}
        <footer>
          <p>© 2021 Steve Frenzel</p>
        </footer>
      </main>
    
  );
}
