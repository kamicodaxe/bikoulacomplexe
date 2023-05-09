import type { GetStaticProps, NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Header from '../../components/Header'
import Layout from '../../components/Layout'
import NavBar from '../../components/NavBar'
// import { ARTICLES_QUERY, IData, request } from '../../lib/datocms'

interface Props {
    data: {
        allArticles: {
            id: string
            slug: string
            title: string
            coverImage: {
                url: string
                alt: string
            },
            author: string
            date: number
            _firstPublishedAt: number
            desc: string
        }[]
    }
}


const News: NextPage<Props> = ({ data }) => {
    const { locale } = useRouter()
    // const isFr = useMemo(() => (locale || '').toLowerCase().includes('fr'), [locale])
    const isFr = true
    const title = isFr ? "Actualité, Bikoula Complexe" : "News, Bikoula Complexe"
    const desc = isFr ? "Actualités Bikoula Complexe" : "All news from FENASSCO GAMES"

    return (
        <Layout title={title} desc={desc}>
            <NavBar active="contact" />
            <Header title="Blog" />
            <section className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                {
                    data.allArticles.map(
                        article => (
                            <Link key={article.id} href={`/blog/${article.slug}`} title={`/blog/${article.slug}`} >
                                <span className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:cursor-pointer hover:no-underline focus:no-underline lg:grid lg:grid-cols-12">
                                    <div className="w-full h-64 sm:h-96 lg:col-span-7">
                                        <Image src={article.coverImage.url} width={720} height={420} className="object-contain bg-[url('/images/background.png')] bg-cover rounded" alt={article.coverImage.alt} />
                                    </div>
                                    <div className="p-6 space-y-2 lg:col-span-5 md:self-end">
                                        <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">{article.title}</h3>
                                        {
                                            article.author && (
                                                <>
                                                    <span className="text-xs text-gray-400">{isFr ? "Par " : "By "}</span>
                                                    <span className="text-xs text-gray-400">{article.author}, </span>
                                                </>
                                            )
                                        }
                                        <span className="text-xs text-gray-400">{new Date(article?.date || article._firstPublishedAt).toLocaleDateString()}</span>
                                        <p>
                                            {article.desc}
                                        </p>
                                    </div>
                                </span>
                            </Link>
                        )
                    )
                }
            </section>
        </Layout>
    )
}

export const allArticles = [
    {
        id: "a",
        slug: "comment-réussir-votre-implantation-en-afrique-grâce-à-bikoula-complexe",
        title: "Comment réussir votre implantation en Afrique grâce à Bikoula Complexe?",
        coverImage: {
            url: "https://source.unsplash.com/mrzjGCHdtLI/1280x720",
            alt: 'alt text'
        },
        author: "Bikoula Complexe ",
        date: Date.now(),
        _firstPublishedAt: Date.now(),
        desc: "Lorsqu'une entreprise décide de s'implanter sur un nouveau marché, cela peut être à la fois excitant et effrayant. Cela est particulièrement vrai pour les entreprises qui cherchent à s'implanter en Afrique, un continent diversifié et complexe avec des cultures et des réglementations différentes de celles de l'Occident. Cependant, avec l'aide de Bikoula Complexe, il est possible de réussir votre implantation en Afrique.",
        content: [
            {
                type: "text",
                content: "Lorsqu'une entreprise décide de s'implanter sur un nouveau marché, cela peut être à la fois excitant et effrayant. Cela est particulièrement vrai pour les entreprises qui cherchent à s'implanter en Afrique, un continent diversifié et complexe avec des cultures et des réglementations différentes de celles de l'Occident. Cependant, avec l'aide de Bikoula Complexe, il est possible de réussir votre implantation en Afrique."
            },
            {
                type: "text",
                content: "En tant qu'entreprise spécialisée dans l'accompagnement des entreprises souhaitant s'implanter en Afrique, Bikoula Complexe offre une multitude de services pour aider les entreprises à réussir leur implantation sur le continent africain. Voici quelques conseils pratiques pour les entreprises qui cherchent à s'implanter en Afrique avec l'aide de Bikoula Complexe."
            },
            {
                type: "list",
                content: [
                    {
                        title: "Comprendre le marché et la culture locale",
                        content: "Pour réussir une implantation en Afrique, il est essentiel de comprendre le marché et la culture locale. Bikoula Complexe peut aider les entreprises à comprendre les spécificités du marché africain et à s'adapter à la culture locale. Ils disposent d'un réseau fiable et structuré pour vous aider à vous connecter avec les acteurs économiques privés et publics dans chaque pays."
                    },
                    {
                        title: "Identifier les opportunités d'affaires",
                        content: "Bikoula Complexe peut aider les entreprises à identifier les opportunités d'affaires en Afrique. Ils sont spécialistes de l'Afrique dans l'accompagnement et le conseil du secteur public et privé et des porteurs de projets. Ils peuvent vous aider à trouver les secteurs porteurs et les projets les plus prometteurs pour votre entreprise. Ils peuvent également vous aider à évaluer les risques potentiels et à mettre en place une stratégie adaptée."
                    },
                    {
                        title: "Trouver des partenaires locaux",
                        content: "Pour réussir une implantation en Afrique, il est souvent nécessaire de trouver des partenaires locaux fiables. Bikoula Complexe dispose d'un vaste réseau de partenaires locaux et peut vous aider à trouver les partenaires les plus adaptés à votre projet. Ils peuvent également vous aider à négocier des contrats et à gérer les relations avec vos partenaires locaux."
                    },
                    {
                        title: "Obtenir les autorisations nécessaires",
                        content: "L'obtention des autorisations nécessaires pour s'implanter en Afrique peut être complexe. Bikoula Complexe peut vous aider à naviguer le processus d'obtention des autorisations nécessaires pour votre entreprise, que ce soit des permis de travail, des licences commerciales ou autres. Ils peuvent également vous aider à comprendre les réglementations locales et les exigences fiscales pour votre entreprise."
                    },
                    {
                        title: "Trouver des financements",
                        content: "Bikoula Complexe peut également aider les entreprises à trouver des financements pour leur projet en Afrique. Ils peuvent vous aider à trouver les investisseurs les plus adaptés à votre projet et à négocier des conditions avantageuses. Ils peuvent également vous aider à identifier les sources de financement locales et à vous accompagner dans la recherche de subventions et d'autres formes d'aide financière."
                    },
                ]
            },
            {
                type: "text",
                content: "En conclusion, s'implanter en Afrique peut être une expérience stimulante et gratifiante pour les entreprises, mais cela peut également être un processus complexe et risqué. C'est pourquoi il est essentiel de travailler avec des experts locaux tels que Bikoula Complexe, qui peuvent aider les entreprises à comprendre le marché africain, à identifier les opportunités d'affaires, à trouver des partenaires locaux fiables, à obtenir les autorisations nécessaires et à trouver des financements pour leur projet. Avec l'aide de Bikoula Complexe, vous pouvez réussir votre implantation en Afrique et tirer parti des nombreuses opportunités qu'offre ce marché dynamique et en croissance rapide."
            },

        ]
    },
]

export const getStaticProps: GetStaticProps = async (context) => {
    // const data = await request<IData>({
    //     query: ARTICLES_QUERY(context.locale as string),
    //     variables: { locale: 'fr' },
    //     includeDrafts: false,
    //     excludeInvalid: true
    // });

    const data = {
        allArticles: allArticles
    }
    return {
        props: { data }
    };
}


export default News