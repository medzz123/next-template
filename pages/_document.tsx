import React, { Fragment } from "react";
import NextDocument, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import { getCssString } from "@theme/config";
import { GA_TRACKING_ID } from "@lib/gtag";

export default class Document extends NextDocument<{ isProduction: boolean }> {
  static async getInitialProps(ctx: DocumentContext) {
    try {
      const initialProps = await NextDocument.getInitialProps(ctx);

      const isProduction = process.env.NODE_ENV === "production";

      return {
        ...initialProps,
        isProduction,
        styles: (
          <>
            {initialProps.styles}
            <style
              id="stitches"
              dangerouslySetInnerHTML={{ __html: getCssString() }}
            />
          </>
        ),
      };
    } finally {
    }
  }

  render() {
    const { isProduction } = this.props;

    return (
      <Html lang="en">
        <Head>
          {isProduction && (
            <Fragment>
              <link rel="icon" href="/favicon.ico" />
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', '${GA_TRACKING_ID}', {
                      page_path: window.location.pathname,
                    });
                  `,
                }}
              />
            </Fragment>
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
