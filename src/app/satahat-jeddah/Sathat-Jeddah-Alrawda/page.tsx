import { generateMetaData} from '../metadata';
import Head from "next/head";
import {SatahatJeddahMain} from '@/components/satahat-jeddah-main';



export default function SathatJeddahAlrawda() {
  const name = "الروضة";
  const id = "Alrawda";
  const url = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29684.35417793708!2d39.17870838283951!3d21.564667946212843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3d00b3e506019%3A0x80d237f2a226fae2!2z2KfZhNix2YjYttip2Iwg2KzYr9ipINin2YTYs9i52YjYr9mK2Kk!5e0!3m2!1sar!2s!4v1739681745883!5m2!1sar!2s"
  
  const metaData = generateMetaData(name, id,"23433", "21.559756", "39.153643");
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