import React, { ReactElement } from 'react';
import cheerio from "cheerio";
import axios from "axios"
import { useRouter } from 'next/router';


interface Props {
  title?: string;
  lastScraped?: string;
 
}

export default function Home({title,lastScraped}: Props): ReactElement  {
 const router = useRouter();
 console.log(title)

 const refreshData = () => {
   router.replace(router.asPath);
  
 };

 React.useEffect(() => {
  const interval = setInterval(() => {
    refreshData();
  }, 9000);
  return () => clearInterval(interval);

}, []);

  return (
    <>
     <h1>Status: {title} 😞</h1>
     <h1>Last scraped: {lastScraped} (every 9 seconds)</h1>
     <h3>Wanna get notified? well make a function for ya</h3>
    </>
  );
}

export async function getServerSideProps(pageContext:any) {
  const pageNumber = pageContext.query.slug;
  const { data } = await axios.get(
    `https://www.eventbrite.it/e/${pageNumber}`
  );
  const $ = cheerio.load(data);
  const title = $(".listing-panel-info__sm-text-center").html();
  const lastScraped = new Date().toISOString();
  return {
    props: { title, lastScraped }
   
  };
}
