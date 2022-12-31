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
        <Layout title={title} desc={desc}>
            <NavBar active="blog" />
            {/* <Header title={pageTitle} subtitle={title} /> */}
            <Header title={article.title} />
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

                    <div className="space-y-4 text-justify">
                        <h3 className="text-2xl font-semibold sm:text-4xl group-focus:underline">{article.title}</h3>
                        {
                            article.author && (
                                <>
                                    <span className="text-xs text-gray-400">{isFr ? "Par " : "By "}</span>
                                    <span className="text-xs text-gray-400">{article.author}, </span>
                                </>
                            )
                        }
                        <span className="text-xs text-gray-400">{new Date(article?.date).toLocaleDateString()}</span>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel metus odio. Curabitur erat urna, tincidunt non odio id, ullamcorper vestibulum arcu. Phasellus sagittis pharetra dictum. Aliquam nibh ipsum, pellentesque quis suscipit vitae, blandit eget tortor. Morbi ultricies ac ligula at consequat. Aliquam erat volutpat. Donec nec purus maximus, mattis risus et, gravida tellus. Vestibulum quis condimentum risus. Nam imperdiet nunc leo, id venenatis turpis hendrerit sit amet. Praesent fringilla feugiat massa eget tempus. Proin eget tortor tellus.
                        </p>

                        <p>
                            Mauris elementum est felis, sodales lacinia risus consectetur consequat. Vestibulum aliquet est dignissim fermentum pharetra. Nunc sed turpis quis mi fringilla egestas sed vitae dolor. Donec id blandit risus. Aliquam erat volutpat. Nam in ultrices nisl. Nulla facilisis convallis dui, nec dictum diam dignissim ac. Nam aliquet est lorem, eleifend lobortis libero molestie sit amet.
                        </p>

                        <p>
                            In interdum, dolor ac pharetra semper, lectus elit eleifend ligula, quis convallis enim turpis et nunc. Mauris aliquet, felis et interdum cursus, quam erat sagittis ante, quis porttitor augue ex ut neque. Maecenas vehicula magna mi, eget rhoncus lorem imperdiet id. Duis vulputate erat ac quam pretium, in venenatis lectus egestas. Curabitur finibus faucibus pellentesque. Pellentesque luctus ante a orci congue, vitae interdum tellus aliquam. Morbi varius tristique magna, quis varius orci tempor pulvinar. Vivamus maximus blandit arcu, ac vehicula neque facilisis pulvinar. Suspendisse lacinia ipsum elit, eget lobortis erat fermentum tincidunt. Nunc mattis nisi urna, vitae pretium ipsum venenatis sit amet. Donec euismod rhoncus aliquam. Donec nec sem sed augue ullamcorper gravida. Pellentesque scelerisque metus ipsum, eget elementum mi sollicitudin at. In ac interdum metus, ac accumsan lorem. Quisque id lacinia risus. Maecenas id enim ut magna consequat luctus a eu nulla.
                        </p>

                        <p>
                            Pellentesque a metus eget quam ultrices placerat ac ut nibh. Suspendisse gravida magna sit amet ligula vehicula faucibus. Suspendisse vulputate mattis varius. Cras nulla arcu, imperdiet sed fringilla non, auctor a ligula. Aliquam purus orci, euismod et venenatis vel, suscipit accumsan nunc. Sed nec felis et eros bibendum varius. Vivamus dui lectus, viverra et lacus nec, cursus molestie metus. Praesent commodo sem nulla, sed ullamcorper elit interdum vel. Duis luctus ex eget ligula pharetra, et bibendum purus euismod. Curabitur lacus mi, venenatis id ultrices ut, pellentesque quis metus. Suspendisse mollis euismod efficitur. Duis varius metus tortor, vitae faucibus ligula cursus vitae. Morbi ullamcorper nibh non risus facilisis, in volutpat dolor tempus. Morbi porttitor finibus accumsan. Mauris consequat ornare risus sit amet rutrum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
                        </p>

                        <p>
                            Fusce id ultricies arcu. Vivamus porttitor libero non eros viverra scelerisque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed egestas nisl eu rhoncus finibus. Donec semper nisl sed risus dignissim, at molestie nisl laoreet. Duis placerat vehicula ex id fringilla. Nam molestie ex at fermentum congue. Nullam in odio sed lectus convallis finibus vitae at metus. Nam porta enim in scelerisque consectetur. Praesent vel malesuada justo, in facilisis leo. Praesent quis auctor mauris, sed tempus dui. Nam in euismod tellus.
                        </p>

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