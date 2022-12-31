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
            id: "string",
            slug: "string",
            coverImage: {
                url: "string"
            },
            author: "string",
            date: "number",
            _firstPublishedAt: "number",
            desc: "string"
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
        slug: "article",
        coverImage: {
            url: "https://source.unsplash.com/random/1280x720"
        },
        author: "Bikoula Complexe ",
        date: Date.now(),
        _firstPublishedAt: Date.now(),
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel metus odio. Curabitur erat urna, tincidunt non odio id, ullamcorper vestibulum arcu. Phasellus sagittis pharetra dictum. Aliquam nibh ipsum, pellentesque quis suscipit vitae, blandit eget tortor. Morbi ultricies ac ligula at consequat."
    },
    {
        id: "b",
        slug: "article",
        coverImage: {
            url: "https://source.unsplash.com/random/1280x721"
        },
        author: "Bikoula Complexe",
        date: Date.now(),
        _firstPublishedAt: Date.now(),
        desc: "In interdum, dolor ac pharetra semper, lectus elit eleifend ligula, quis convallis enim turpis et nunc. Mauris aliquet, felis et interdum cursus, quam erat sagittis ante, quis porttitor augue ex ut neque. Maecenas vehicula magna mi, eget rhoncus lorem imperdiet id. Duis vulputate erat ac quam pretium, in venenatis lectus egestas. Curabitur finibus faucibus pellentesque. Pellentesque luctus ante a orci congue, vitae interdum tellus aliquam. Morbi varius tristique magna, quis varius orci tempor pulvinar. Vivamus maximus blandit arcu, ac vehicula neque facilisis pulvinar."
    },
    {
        id: "c",
        slug: "article",
        coverImage: {
            url: "https://source.unsplash.com/random/1280x722"
        },
        author: "Bikoula Complexe ",
        date: Date.now(),
        _firstPublishedAt: Date.now(),
        desc: "Pellentesque a metus eget quam ultrices placerat ac ut nibh. Suspendisse gravida magna sit amet ligula vehicula faucibus. Suspendisse vulputate mattis varius. Cras nulla arcu, imperdiet sed fringilla non, auctor a ligula. Aliquam purus orci, euismod et venenatis vel, suscipit accumsan nunc."
    }
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