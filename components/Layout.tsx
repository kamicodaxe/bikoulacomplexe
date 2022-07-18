import Head from 'next/head'
import Footer from "./Footer"


interface Props extends React.PropsWithChildren {
}

const Layout: React.FC<Props> = ({ children }) => {

    return (
        <div>
            <Head>
                <title>Groupe Bikoula Complexe</title>
                <meta name="description" content="Groupe Bikoula Complexe" />
                {/* <link rel="icon" href="/favicon.ico" /> */}
            </Head>

            <body>
                <main>
                    { children }
                </main>
            </body>

            <Footer />
        </div>
    )
}

export default Layout