import { generateMetaData} from '../metadata';
import Head from "next/head";
import {SatahatJeddahMain} from '@/components/satahat-jeddah-main';



export default function SathatJeddahAlazizia() {
  const name = "العزيزية";
  const id = "Alazizia";
  const url = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29686.74349224947!2d39.215009982861865!3d21.552995899976093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3d1b606de3cc3%3A0x58b21a47960b7430!2z2KfZhNi52LLZitiy2YrYqdiMINis2K_YqSDYp9mE2LPYudmI2K_Zitip!5e0!3m2!1sar!2s!4v1739680300489!5m2!1sar!2s"
  
  const metaData = generateMetaData(name, id,"23338", "21.552037", "39.194796");
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