import React from 'react'
import { Icon } from '@iconify/react'

// className="w-8/12 h-screen px-4 py-12 mx-auto sm:px-6 lg:px-4"
export default function AboutUs() {
    return (
        <div className="flex h-screen bg-black/90">
            <video playsInline autoPlay loop muted className="flex opacity-50 z-2 h-100" src="/Shurima-Crest.webm" />

            <section className="absolute top-0 grid w-10/12 mt-auto ml-auto mr-auto ">
                <div data-testid="title" className="z-0 pb-12 mt-12 text-center">
                    <h1 className="font-mono font-bold text-white text-7xl font-heading">
                        Check our awesome team members
                    </h1>
                </div>
                {/* Dua Jaradat */}
                <div className="grid gap-4 ml-8 lg:grid-cols-2">

                    <div className="z-0 flex flex-col w-auto p-4 overflow-hidden rounded-lg bg-black/40 sahdow-lg md:flex-row">
                        <div className="w-auto md:w-2/5 h-80">
                            <img className="object-cover object-center w-full h-full" src="/dua.jpg" alt="Dua Jaradat" />
                        </div>
                        <div className="w-auto p-2 space-y-2 text-left md:w-3/5 md:p-4">
                            <p className="font-mono text-4xl font-bold text-white">Du'a Jaradat</p>
                            <p className="font-mono text-xl text-blue-600">Software Developer</p>
                            <hr className="text-xl font-bold text-white" />
                            <p className="font-mono text-2xl leading-relaxed text-white">I’m Du’a Jaradat
                                I’m a Software Engineer with background in Civil Engineering.</p>
                            <div className="flex justify-start p-2 space-x-2">
                                <a href="https://github.com/duajaradat?tab=repositories" className="text-white hover:text-blue-600">
                                    <Icon icon="entypo-social:github" width="40" height="40" />
                                </a>
                                <a href="https://www.linkedin.com/in/du-a-jaradat-b7474413b/" className="text-white hover:text-blue-600">
                                    <Icon icon="entypo-social:linkedin-with-circle" width="40" height="40" />
                                </a>

                            </div>
                        </div>
                    </div>

                    {/* Mohammad Al-Hanbali */}

                    <div className="z-0 flex flex-col w-auto p-4 mr-8 overflow-hidden rounded-lg bg-black/40 sahdow-lg md:flex-row">
                        <div className="w-auto md:w-2/5 h-80">
                            <img className="object-cover object-center w-full h-full" src="/mohammad.png" alt="Mohammad Al-Hanbali" />
                        </div>
                        <div className="w-auto p-2 space-y-2 text-left md:w-3/5 md:p-4">
                            <p className="font-mono text-4xl font-bold text-white">Mohammad Al-Hanbali</p>
                            <p className="font-mono text-xl text-blue-600">Software Developer</p>
                            <hr className="text-xl font-bold text-white" />
                            <p className="font-mono text-2xl leading-relaxed text-white">I'm Mohammed Al-Hanbali, a full stack developer with a background in Architecture Engineering.</p>
                            <div className="flex justify-start space-x-2">
                                <a href="https://github.com/Moha-AlHanbali" className="text-white hover:text-blue-600">
                                    <Icon icon="entypo-social:github" width="40" height="40" />
                                </a>
                                <a href="https://www.linkedin.com/in/mohaalhanbali/" className="text-white hover:text-blue-600">
                                    <Icon icon="entypo-social:linkedin-with-circle" width="40" height="40" />
                                </a>

                            </div>
                        </div>
                    </div>

                    {/* Ehab Ahmad */}
                    <div className="z-0 flex flex-col w-auto p-4 overflow-hidden rounded-lg bg-black/40 sahdow-lg md:flex-row">
                        <div className="w-full md:w-2/5 h-80">
                            <img className="object-cover object-center w-full h-full" src="/ehab.jpeg" alt="Ehab Ahmad" />
                        </div>
                        <div className="w-full p-2 space-y-2 text-left md:w-3/5 md:p-4">
                            <p className="font-mono text-4xl font-bold text-white">Ehab Ahmad</p>
                            <p className="font-mono text-xl text-blue-600">Software Developer</p>
                            <hr className="text-xl font-bold text-white" />
                            <p className="font-mono text-2xl leading-relaxed text-white">I'm Ehab Ahmad
                                I’m a Software Engineer with background in Civil Engineering.</p>
                            <div className="flex justify-start space-x-2">
                                <a href="https://github.com/eng-ehabsaleh" className="text-white hover:text-blue-600">
                                    <Icon icon="entypo-social:github" width="40" height="40" />
                                </a>
                                <a href="https://www.linkedin.com/in/ehab-ahmad/" className="text-white hover:text-blue-600">
                                    <Icon icon="entypo-social:linkedin-with-circle" width="40" height="40" />
                                </a>

                            </div>
                        </div>
                    </div>

                    <div className="z-0 flex flex-col w-auto p-4 mr-8 overflow-hidden rounded-lg bg-black/40 sahdow-lg md:flex-row">
                        <div className="w-full md:w-2/5 h-80">
                            <img className="object-cover object-center w-full h-full" src="/bashar.jfif" alt="Bashar Ta'amneh" />
                        </div>
                        <div className="w-full p-2 space-y-2 text-left md:w-3/5 md:p-4">
                            <p className="font-mono text-4xl font-bold text-white">Bashar Ta'amneh</p>
                            <p className="font-mono text-xl text-blue-600">Software Developer</p>
                            <hr className="font-mono text-2xl font-bold text-white" />
                            <p className="font-mono text-2xl leading-relaxed text-white">I'm a Software Engineer.
                                obtained a Bachelor’s degree in computer engineering.
                            </p>
                            <div className="flex justify-start space-x-2">
                                <a href="#" className="text-white hover:text-blue-600">
                                    <Icon icon="entypo-social:github" width="40" height="40" />
                                </a>
                                <a href="https://www.linkedin.com/in/bashar-taamneh-402b8b11a/" className="text-white hover:text-blue-600">
                                    <Icon icon="entypo-social:linkedin-with-circle" width="40" height="40" />
                                </a>

                            </div>
                        </div>
                    </div>


                </div>

            </section >
        </div >
    )
}
