import { generateMetaData} from '../metadata';
import Head from "next/head";
import {SatahatJeddahMain} from '@/components/sathat-jeddah-main';



export default function SathatJeddahAlfadyla() {
  const name = "الفضيلة";
  const id = "Alfadyla";
  const url = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29736.75597829477!2d39.299348233329276!3d21.30728207886203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3b4563ad1642b%3A0x46acb12d807f0568!2z2KfZhNmB2LbZitmE2KnYjCDYrNiv2Kkg2KfZhNiz2LnZiNiv2YrYqQ!5e0!3m2!1sar!2s!4v1739680672458!5m2!1sar!2s"
  
  const metaData = generateMetaData(name, id,"22631", "21.304617", "39.271571");
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