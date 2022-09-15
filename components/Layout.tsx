import Head from 'next/head'
import Footer from "./Footer"


interface Props extends React.PropsWithChildren {
    
}

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <>
            <Head>
                <title>Groupe Bikoula Complexe</title>
                <meta name="description" content="Groupe Bikoula Complexe" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css"/>
                {/* <link rel="icon" href="/favicon.ico" /> */}
            </Head>
            {children}
            <Footer />
        </>
    )
}

export default Layout