import Head from 'next/head'
import Footer from "./Footer"


interface Props extends React.PropsWithChildren {

}

const Layout: React.FC<Props> = ({ children }) => {
    const title = "Groupe Bikoula Complexe"
    const desc = "Nous sommes le lien entre l'Afrique et l'Occident pour toutes les entreprises désireuses de s'implanter sur le continent africain. Nous vous garantissons la mise en relation et la meilleure approche avec les acteurs économiques privés et publics. Vous bénéficiez d'un carnet d'adresse fiable pour la réussite de vos projets. Nous vous accompagnons dans la recherche des financières, des potentiels investisseurs et groupes d'investissement à obtenir des financements auprès des instituts financiers. Nous sommes notamment spécialistes de l'Afrique dans l'accompagnement et le conseil du secteur public et privé et des porteurs de projets."
    const lang = "fr"
    const favIcon = "/favicon.ico"

    return (
        <>
            <Head>
                <title>{title}</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css" />
                <link rel="icon" href={favIcon} />
                <link rel="icon" href={favIcon} />
                <meta name="description" content={desc} />
                <meta name="robots" content="max-image-preview:large" />
                <link rel="canonical" href="https://www.bikoulacomplexe.com/" />
                <meta property="og:locale" content={lang} />
                <meta property="og:site_name" content={title} />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={desc} />
                <meta property="og:url" content="https://bikoulacomplexe.com/" />
                <meta property="og:image" content={favIcon} />
                <meta property="og:image:secure_url" content={favIcon} />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={desc} />
                <meta name="twitter:image" content={favIcon} />
            </Head>
            {children}
            <Footer />
        </>
    )
}

export default Layout