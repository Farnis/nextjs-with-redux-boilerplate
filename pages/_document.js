import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheets } from "@material-ui/styles";
import theme from "../src/styles/theme";

class _Document extends Document {
  render() {
    return (
      <Html lang="fa" dir="rtl">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          />

          {/* PWA primary color */}
          <meta name="theme-color" content={theme.palette.primary.main} />

          {/* <link rel="apple-touch-icon" sizes="57x57" href="/static/img/favicons/apple-icon-57x57.png"/>
          <link rel="apple-touch-icon" sizes="60x60" href="/static/img/favicons/apple-icon-60x60.png"/>
          <link rel="apple-touch-icon" sizes="72x72" href="/static/img/favicons/apple-icon-72x72.png"/>
          <link rel="apple-touch-icon" sizes="76x76" href="/static/img/favicons/apple-icon-76x76.png"/>
          <link rel="apple-touch-icon" sizes="114x114" href="/static/img/favicons/apple-icon-114x114.png"/>
          <link rel="apple-touch-icon" sizes="120x120" href="/static/img/favicons/apple-icon-120x120.png"/>
          <link rel="apple-touch-icon" sizes="144x144" href="/static/img/favicons/apple-icon-144x144.png"/>
          <link rel="apple-touch-icon" sizes="152x152" href="/static/img/favicons/apple-icon-152x152.png"/>
          <link rel="apple-touch-icon" sizes="180x180" href="/static/img/favicons/apple-icon-180x180.png"/>
          <link rel="icon" type="image/png" sizes="192x192" href="/static/img/favicons/android-icon-192x192.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/static/img/favicons/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="96x96" href="/static/img/favicons/favicon-96x96.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/static/img/favicons/favicon-16x16.png"/> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

_Document.getInitialProps = async ctx => {
  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: App => props => sheets.collect(<App {...props} />)
    });

  const initialProps = await Document.getInitialProps(ctx);

  // Check if in production
  const isProduction = process.env.NODE_ENV === "production";

  return {
    ...initialProps,
    isProduction,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [
      <React.Fragment key="styles">
        {initialProps.styles}
        {sheets.getStyleElement()}
      </React.Fragment>
    ]
  };
};

export default _Document;
