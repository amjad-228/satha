import { generateMetaData} from '../metadata';
import Head from "next/head";
import {SatahatJeddahMain} from '@/components/sathat-jeddah-main';



export default function SathatJeddahAbhorAljanubia() {
  const name = "ابحر الجنوبية";
  const id = "Abhor-Aljanubia";
  const url = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59296.59798385614!2d39.16446695062287!3d21.74007673191585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c162ed7f713ff5%3A0xac0df21d94e1cf6d!2z2KPYqNit2LEg2KfZhNis2YbZiNio2YrYqdiMINis2K_YqSDYp9mE2LPYudmI2K_Zitip!5e0!3m2!1sar!2s!4v1739679590761!5m2!1sar!2s"
  
  const metaData = generateMetaData(name, id,"23732", "21.724399", "39.122199");
  return (
    <>
    <Head>
      <title>{metaData.title}</title>
      <meta name="description" content={metaData.description} />
      <meta property="og:title" content={metaData.openGraph.title} />
      <meta property="og:description" content={metaData.openGraph.description} />
      <meta property="og:image" content={metaData.openGraph.images[0].url} />
      <meta property="og:image:width" content={metaData.openGraph.images[0].width.toString()} />
      <meta property="og:image:height" content={metaData.openGraph.images[0].height.toString()} />
      <meta property="og:image:alt" content={metaData.openGraph.images[0].alt} />
      <meta property="og:type" content={metaData.openGraph.type} />
      <meta property="og:locale" content={metaData.openGraph.locale} />
      <meta property="og:site_name" content={metaData.openGraph.site_name} />
      <meta property="og:url" content={metaData.openGraph.url} />
      <meta property="og:locale" content={metaData.openGraph.locale} />
      <meta property="twitter:card" content={metaData.twitter.cardType} />
      <meta property="twitter:site" content={metaData.twitter.site} />
      <meta property="twitter:handle" content={metaData.twitter.handle} />
      <link rel="canonical" href={metaData.canonical} />
      {/* ✅ Schema.org JSON-LD */}
      <script type="application/ld+json">
          {JSON.stringify(metaData.schema)}
      </script>

    </Head>
      <div>
      {SatahatJeddahMain(name, url)}
      </div>
    </>
  );
}