import type { GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
// import { StructuredText } from 'react-datocms'
import { allArticles } from '.';
import Header from '../../components/Header';
import Layout from '../../components/Layout';
import NavBar from '../../components/NavBar';
// @ts-ignore
// const ImageGallery = dynamic(import('react-image-gallery'));
// import { ARTICLES_QUERY, ARTICLE_QUERY, IArticle, IData, request } from '../../lib/datocms'

// import "react-image-gallery/styles/css/image-gallery.css";
// import ReactPlayer from 'react-player'

interface IArticle {
    id: string
    slug: string
    title: string
    coverImage: {
        url: string
        alt: string
    },
    author: string
    content: any[]
    date: number
    _firstPublishedAt: number
    desc: string
}

interface Props {
    data: {
        article: IArticle
    }
}

const Article: NextPage<Props> = ({ data }) => {
    const { locale } = useRouter()
    // const isFr = useMemo(() => (locale || '').toLowerCase().includes('fr'), [locale])
    const isFr = true
    const article = useMemo(() => data.article, [data])
    const title = "Article"
    const desc = "Article"

    // const galleryTitle = isFr ? "Galerie" : "Gallery"

    // const renderItem = (src: string) => {
    //     const VideoView = () => <ReactPlayer controls url={src} />
    //     return VideoView
    // }

    return (
        <Layout title={"Comment réussir votre implantation en Afrique grâce à Bikoula Complexe?"} desc={"Lorsqu'une entreprise décide de s'implanter sur un nouveau marché, cela peut être à la fois excitant et effrayant. Cela est particulièrement vrai pour les entreprises qui cherchent à s'implanter en Afrique, un continent diversifié et complexe avec des cultures et des réglementations différentes de celles de l'Occident. Cependant, avec l'aide de Bikoula Complexe, il est possible de réussir votre implantation en Afrique."}>
            <NavBar active="blog" />
            {/* <Header title={pageTitle} subtitle={title} /> */}
            <Header title={"Blog"} />
            <section className="container flex flex-col items-center max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                {
                    article.coverImage && (
                        <div className="block max-w-sm gap-3 mx-auto sm:max-w-full group lg:grid lg:grid-cols-12">
                            <div className="w-full h-64 sm:h-96 lg:col-span-12">
                                <Image src={article.coverImage.url} width={720} height={420} className="object-contain bg-[url('/images/background.png')] bg-cover rounded" alt={article.coverImage.alt} />
                            </div>
                        </div>
                    )
                }

                {/* Content */}
                <div className="block max-w-sm  mx-auto sm:max-w-2xl group text-gray-800 font-sans text-lg">

                    <div className="space-y-4 text-justify prose lg:prose-xl">
                        <h3 className="text-2xl font-semibold sm:text-4xl group-focus:underline">Comment réussir votre implantation en Afrique grâce à Bikoula Complexe?</h3>
                        {
                            article.author && (
                                <>
                                    <span className="text-xs text-gray-400">{isFr ? "Par " : "By "}</span>
                                    <span className="text-xs text-gray-400">{article.author}, </span>
                                </>
                            )
                        }
                        <span className="text-xs text-gray-400">{new Date(article?.date).toLocaleDateString()}</span>

                        {
                            article.content.map((_node, i) => {
                                if (_node.type == "text") return <p key={i}>{_node.content}</p>
                                if (_node.type == 'list') return (
                                    <ul key={i}>
                                        {
                                            // Git ignore
                                            _node.content.map(_listItem => (
                                                <li key={i}>
                                                    <h4>{_listItem.title}</h4>
                                                    <p>{_listItem.content}</p>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                )
                                return <></>
                            })
                        }

                        {/* <StructuredText
                            data={article.body}
                            renderBlock={context => {
                                console.log(context)
                                if (context.record.__typename === 'paragraph') {
                                    return <p>{context.record.__typename}</p>
                                }
                                return <p>{context.record.__typename}</p>
                            }}
                        /> */}

                    </div>

                    <div className="container">
                        {/* {
                            (article?.gallery?.length && article?.gallery?.length > 0) &&
                            (
                                <>
                                    <h4 className="text-2xl font-semibold sm:text-4xl group-focus:underline">{galleryTitle}</h4>
                                    {
                                        <ImageGallery
                                            // @ts-ignore
                                            items={article.gallery.map(_item => ({
                                                original: _item?.url,
                                                originalAlt: _item?.alt || 'Mvomeka Fenassco 2022 Gallery image',
                                                thumbnailAlt: _item.responsiveImage?.alt || 'Mvomeka Fenassco 2022 Gallery image',
                                                thumbnail: _item.responsiveImage?.src || '',
                                                renderItem: _item.responsiveImage?.src ? null : renderItem(_item?.url)
                                            }))}
                                        />
                                    }
                                </>
                            )
                        } */}
                    </div>

                </div>

            </section>
        </Layout>
    )
}

export const getStaticProps: GetStaticProps = async (context) => {

    // const data = await request({
    //     query: ARTICLE_QUERY(context.locale as string, context.params?.slug as string),
    //     variables: {
    //         slug: context.params?.slug as string,
    //         locale: context.locale as string
    //     },
    //     includeDrafts: false,
    //     excludeInvalid: true
    // });
    return {
        props: {
            data: { article: allArticles[0] }
        },
        // revalidate: 1
    };
}

// export const getStaticPaths: GetStaticPaths = async (context) => {
export const getStaticPaths = async (context: any) => {
    // const data = await request<IData>({
    //     query: ARTICLES_QUERY(context.defaultLocale as string),
    //     variables: {
    //         locale: 'fr'
    //     },
    //     includeDrafts: false,
    //     excludeInvalid: true
    // });

    return {
        // paths: data.allArticles.map((artcle) => ({
        //     params: {
        //         slug: artcle.slug
        //     }
        // })), //OK
        paths: allArticles.map(_ => ({ params: { slug: _.slug } })),
        fallback: 'blocking'
    }

}


export default Article