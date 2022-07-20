

const ProblemsWeSolve: React.FC<{}> = ({ }) => {

    return (
        <section className="dark:bg-gray-800 dark:text-gray-100">
            <div className="container max-w-xl p-6 py-16 mx-auto space-y-12 lg:px-8 lg:max-w-7xl">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl text-gray-50">Problems we solve</h2>
                    <p className="max-w-3xl mx-auto mt-4 text-xl text-center dark:text-gray-400">Quando cetero his ne, eum admodum sapientem ut.</p>
                </div>
                <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                    <div>
                        {/* <h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-50">Ad vix debet docendi</h3> */}
                        {/* <p className="mt-3 text-lg dark:text-gray-400">Ne dicta praesent ocurreret has, diam theophrastus at pro. Eos etiam regione ut, persius eripuit quo id. Sit te euismod tacimates.</p> */}
                        <div className="space-y-6">
                            {
                                [
                                    "Per ei quaeque sensibus",
                                    "Cu imperdiet posidonium sed",
                                    "Nulla omittam sadipscing mel ne",
                                    "Ad vix debet docendi"
                                ].map(title => (
                                    <div className="flex align-center" key={title}>
                                        <div className="flex-shrink-0">
                                            <div className="flex items-center justify-center w-6 h-6 text-brown">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="text-lg font-medium leading-6 dark:text-gray-50">Per ei quaeque sensibus</h4>
                                            <p className="mt-2 dark:text-gray-400">Ex usu illum iudico molestie. Pro ne agam facete mediocritatem, ridens labore facete mea ei. Pro id apeirian dignissim.</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div aria-hidden="true" className="mt-10 lg:mt-0 hidden lg:block">
                        <img src="https://source.unsplash.com/random/360x480" alt="" className="mx-auto rounded-lg shadow-lg dark:bg-gray-500" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProblemsWeSolve