import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta
                        name="description"
                    />
                    <link
                        rel="stylesheet"
                        href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.css"
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap"
                        rel="stylesheet"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
                <style global jsx>{`
                body {
                    font-family: 'Roboto', sans-serif;
                }
            `}</style>
            </Html>
        )
    }
}

