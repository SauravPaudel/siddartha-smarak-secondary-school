import React from 'react'
import { Link } from 'react-router-dom'

const toTop = () => {
    window.scrollTo({ top: 0 })
}


const BlogHero = () => {
    return (
        <div className='w-full mt-[130px] pt-12 pb-24 px-[5%]'>
            <h5 className='mb-8 heading'>Blogs</h5>
            <div className='w-full'>
                <h5 className='w-full text-2xl text-center text-neutral-700 font-manrope'>Featured Blogs</h5>
                <h5 className='w-full text-2xl text-center text-neutral-500 font-manrope'>Explore the finest blogs Siddartha Smarak has to offer:</h5>
                <section className='grid justify-center w-full grid-cols-1 pt-16 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12'>
                    <card className='flex flex-col items-center overflow-hidden bg-white border-b-4 border-r-4 h-max border-sky-800 rounded-xl hover:translate-y-[-.5rem] shadow-xl duration-300 outline-4 duration-750 outline-sky-700 hover:outline-dashed '>
                        <img src="https://source.unsplash.com/random?nepal" className='flex object-cover object-center w-full h-64' alt="" />
                        <div className='flex flex-col w-full py-4 px-[5%] divide-y-2'>
                            <div className='flex justify-between w-full pb-2'>
                                <h5 className='text-lg font-medium font-merriwether' >Nepali Culture: A Tapestry of Tradition</h5>
                                <h5 className='text-lg text-neutral-500 font-manrope'>2081/01/10</h5>
                            </div>
                            <p className='pt-4 mb-4 text-base tracking-wider text-justify font-manrope text-neutral-700 line-clamp-4' >Nepal, nestled between the majestic Himalayas and the lush plains of the Terai, boasts a rich and vibrant culture that reflects the diversity and resilience of its people. Nepali culture is a tapestry woven from the threads of tradition, religion, festivals, art, music, cuisine, and rituals, creating a unique mosaic that has captivated the world for centuries.</p>
                            <div className='flex items-center justify-between w-full pt-4 pb-2'>
                                <Link to='/BlogPage' onClick={toTop} className='px-4 py-2 text-white duration-300 rounded-xl hover:opacity-80 bg-sky-800/80'>Read More</Link>
                                <p className='text-sm font-merriwether text-neutral-500'>~ Sanjay Acharya<span className='italic'>Class 8</span></p>
                            </div>
                        </div>
                    </card>
                    <card className='flex flex-col items-center overflow-hidden bg-white border-b-4 border-r-4 h-max border-sky-800 hover:translate-y-[-.5rem] shadow-xl outline-4 hover:outline-dashed outline-sky-800 duration-300 rounded-xl'>
                        <img src="https://source.unsplash.com/random?school" className='flex object-cover object-center w-full h-64' alt="" />
                        <div className='flex flex-col w-full py-4 px-[5%] divide-y-2 '>
                            <div className='flex justify-between w-full pb-2'>
                                <h5 className='text-lg font-medium font-merriwether' >मेरो विद्यालय</h5>
                                <h5 className='text-lg text-neutral-500 font-manrope'>2088/11/10</h5>
                            </div>
                            <p className='pt-4 mb-4 text-base tracking-wider text-justify font-manrope text-neutral-700 line-clamp-4' >Siddhartha Smarak Higher Secondary School is a prominent educational institution located in Kapilvastu, Nepal. Established with a vision to provide quality education and holistic development to its students, Siddhartha Smarak HSS has earned a reputation for excellence in academics, extracurricular activities, and overall student growth.</p>
                            <div className='flex items-center justify-between w-full pt-4 pb-2'>
                                <Link to='/BlogPage' onClick={toTop} className='px-4 py-2 text-white duration-300 rounded-xl hover:opacity-80 bg-sky-800/80'>Read More</Link>
                                <p className='text-sm font-merriwether text-neutral-500'>Kriti Bista <span className='italic'>Class X</span></p>
                            </div>
                        </div>
                    </card>
                    <card className='flex flex-col items-center overflow-hidden bg-white border-b-4 border-r-4 h-max border-sky-800 hover:translate-y-[-.5rem] shadow-xl outline-4 hover:outline-dashed outline-sky-800 duration-300 rounded-xl'>
                        <img src="https://source.unsplash.com/random?politics" className='flex object-cover object-center w-full h-64' alt="" />
                        <div className='flex flex-col w-full py-4 px-[5%] divide-y-2 '>
                            <div className='flex justify-between w-full pb-2'>
                                <h5 className='text-lg font-medium font-merriwether' >Nepal's Political Scenario</h5>
                                <h5 className='text-lg text-neutral-500 font-manrope'>2080/09/08</h5>
                            </div>
                            <p className='pt-4 mb-4 text-base tracking-wider text-justify font-manrope text-neutral-700 line-clamp-4' >Nepal, a landlocked country situated between India and China, has undergone significant political transformations in recent decades. From a monarchy to a federal democratic republic, Nepal's political landscape has witnessed a series of changes, albeit with its fair share of challenges and complexities.</p>
                            <div className='flex items-center justify-between w-full pt-4 pb-2'>
                                <Link to='/BlogPage' onClick={toTop} className='px-4 py-2 text-white duration-300 rounded-xl hover:opacity-80 bg-sky-800/80'>Read More</Link>
                                <p className='text-sm font-merriwether text-neutral-500'>Sirjana Shrestha <span className='italic'>Class 7</span></p>
                            </div>
                        </div>
                    </card>
                    {/* <card className='flex flex-col items-center overflow-hidden bg-white border-b-4 border-r-4 h-max border-sky-800 hover:translate-y-[-.5rem] shadow-xl outline-4 hover:outline-dashed outline-sky-800 duration-300 rounded-xl'>
                        <img src="https://source.unsplash.com/random?blog" className='flex object-cover object-center w-full h-64' alt="" />
                        <div className='flex flex-col w-full py-4 px-[5%] divide-y-2 '>
                            <div className='flex justify-between w-full pb-2'>
                                <h5 className='text-lg font-medium font-merriwether' >Yo what's up</h5>
                                <h5 className='text-lg text-neutral-500 font-manrope'>24/25/16</h5>
                            </div>
                            <p className='pt-4 mb-4 text-base tracking-wider text-justify font-manrope text-neutral-700 line-clamp-4' >Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
                            <div className='flex items-center justify-between w-full pt-4 pb-2'>
                                <Link to='/BlogPage' onClick={toTop} className='px-4 py-2 text-white duration-300 rounded-xl hover:opacity-80 bg-sky-800/80'>Read More</Link>
                                <p className='text-sm font-merriwether text-neutral-500'>Author's Name ~ <span className='italic'>Class X</span></p>
                            </div>
                        </div>
                    </card> */}
                    {/* <card className='flex flex-col items-center overflow-hidden bg-white border-b-4 border-r-4 h-max border-sky-800 hover:translate-y-[-.5rem] shadow-xl outline-4 hover:outline-dashed outline-sky-800 duration-300 rounded-xl'>
                        <img src="https://source.unsplash.com/random?blog" className='flex object-cover object-center w-full h-64' alt="" />
                        <div className='flex flex-col w-full py-4 px-[5%] divide-y-2 '>
                            <div className='flex justify-between w-full pb-2'>
                                <h5 className='text-lg font-medium font-merriwether' >Yo what's up</h5>
                                <h5 className='text-lg text-neutral-500 font-manrope'>24/25/16</h5>
                            </div>
                            <p className='pt-4 mb-4 text-base tracking-wider text-justify font-manrope text-neutral-700 line-clamp-4' >Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
                            <div className='flex items-center justify-between w-full pt-4 pb-2'>
                                <Link to='/BlogPage' onClick={toTop} className='px-4 py-2 text-white duration-300 rounded-xl hover:opacity-80 bg-sky-800/80'>Read More</Link>
                                <p className='text-sm font-merriwether text-neutral-500'>Author's Name ~ <span className='italic'>Class X</span></p>
                            </div>
                        </div>
                    </card> */}
                    {/* <card className='flex flex-col items-center overflow-hidden bg-white border-b-4 border-r-4 h-max border-sky-800 hover:translate-y-[-.5rem] shadow-xl outline-4 hover:outline-dashed outline-sky-800 duration-300 rounded-xl'>
                        <img src="https://source.unsplash.com/random?blog" className='flex object-cover object-center w-full h-64' alt="" />
                        <div className='flex flex-col w-full py-4 px-[5%] divide-y-2 '>
                            <div className='flex justify-between w-full pb-2'>
                                <h5 className='text-lg font-medium font-merriwether' >Yo what's up</h5>
                                <h5 className='text-lg text-neutral-500 font-manrope'>24/25/16</h5>
                            </div>
                            <p className='pt-4 mb-4 text-base tracking-wider text-justify font-manrope text-neutral-700 line-clamp-4' >Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
                            <div className='flex items-center justify-between w-full pt-4 pb-2'>
                                <Link to='/BlogPage' onClick={toTop} className='px-4 py-2 text-white duration-300 rounded-xl hover:opacity-80 bg-sky-800/80'>Read More</Link>
                                <p className='text-sm font-merriwether text-neutral-500'>Author's Name ~ <span className='italic'>Class X</span></p>
                            </div>
                        </div>
                    </card> */}
                </section>
            </div>
        </div>
    )
}

export default BlogHero