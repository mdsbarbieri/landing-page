import Head from 'next/head';

interface IMetaTagsProps {
  title: string;
  description: string;
}

export const MetaTags = ({ title, description }: IMetaTagsProps) => {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="language" content="pt-BR" />
      <meta name="url" content="https://images.elo7.com.br/assets/v3/share-facebook-elo7.png" />

      <meta name="og:title" content={title} />
      <meta name="og:url" content="https://images.elo7.com.br/assets/v3/share-facebook-elo7.png" />
      <meta name="og:image" content="https://images.elo7.com.br/assets/v3/share-facebook-elo7.png" />
      <meta name="og:site_name" content={title} />
      <meta name="og:description" content={description} />
      <meta name="og:type" content="website" />

      <meta name="application-name" content={title} />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content={title} />
      <meta name="description" content={description} />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="msapplication-TileColor" content="#2B5797" />
      <meta name="msapplication-tap-highlight" content="no" />
      <meta name="theme-color" content="#000000" />

      <link rel="apple-touch-icon" href="https://images.elo7.com.br/assets/new/favicon-180-2.png" />
      <meta name="msapplication-TileColor" content="#fdb933" />
      <meta name="msapplication-TileImage" content="//images.elo7.com.br/assets/new/favicon-144.png" />

      <link rel="icon" href="https://images.elo7.com.br/assets/new/favicon-16.png" sizes="16x16" />
      <link rel="icon" href="https://images.elo7.com.br/assets/new/favicon-32.png" sizes="32x32" />
      <link rel="icon" href="https://images.elo7.com.br/assets/new/favicon-48.png" sizes="48x48" />
      <link rel="icon" href="https://images.elo7.com.br/assets/new/favicon-64.png" sizes="64x64" />
      <link rel="icon" href="https://images.elo7.com.br/assets/new/favicon-96.png" sizes="96x96" />
      <link rel="icon" href="https://images.elo7.com.br/assets/new/favicon-128.png" sizes="128x128" />
      <link rel="icon" href="https://images.elo7.com.br/assets/new/favicon-160.png" sizes="160x160" />
      <link rel="icon" href="https://images.elo7.com.br/assets/new/favicon-192.png" sizes="192x192" />

      <link rel="manifest" href="/manifest.json" />
      <link rel="shortcut icon" href="/favicon.ico" />

      <meta name="twitter:image" content="https://images.elo7.com.br/assets/v3/share-facebook-elo7.png" />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:title" content={title} />
    </Head>
  );
};
