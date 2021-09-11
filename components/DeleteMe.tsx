
import { useRouter } from 'next/router';

export default function DeleteMe() {
  const router = useRouter();
  return (
    <main id="delete-me-wrapper">
      <section id="hero">
        <h1>Event Sold Out!? </h1>
        <p>Here is your last chance</p>
        <button
        onClick={() =>
          router.push(`/events/romhack2021-tickets-151680104275`)
        }
   
   
      >
        Search
      </button>
      </section>
      
        {/* FOOTER */}
        <footer>
          <p>© 2021 Steve Frenzel</p>
        </footer>
      </main>
    
  );
}
