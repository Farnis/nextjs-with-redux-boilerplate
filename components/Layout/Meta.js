import React from 'react'
import Head from 'next/head'

export const Meta = (
  {
    title = 'تیکا',
    description = 'خرید اینترنتی بلیط هواپیما داخلی با ارزان ترین قیمت، رزرو بلیط پرواز داخلی چارتر و سیستمی در تیکا، مقایسه بلیط هواپیما از تمامی ایرلاین‌های داخلی'
  }
) => {
  return <Head>
    <meta charSet="utf-8"/>
    <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"/>
    <link rel="shortcut icon" type="image/x-icon" href="/static/favicon.ico"/>
    <title>{title}</title>
    <meta name="description" content={description}/>
  </Head>
};