import React from 'react'
import { FaArrowLeft } from 'react-icons/fa6'

const BlogPage = () => {
    return (
        <div className='h-max mt-[130px] px-[5%] pb-24'>
            <div className='flex flex-col gap-8 pt-12'>
                <div className='flex flex-wrap items-center justify-between w-full'>
                    <h5 className='heading'>Nepali Culture: A Tapestry of Tradition and Diversity</h5>
                    <p className='mt-8 font-merriwether text-neutral-400 md:mt-0'>~ Sanjay Acharya, कक्षा 8</p>
                </div>
                <div className='flex flex-col gap-4 tracking-wide font-manrope text-neutral-700 text-lg/[200%]'>
                    <p>Nepal, nestled between the majestic Himalayas and the lush plains of the Terai, boasts a rich and vibrant culture that reflects the diversity and resilience of its people. Nepali culture is a tapestry woven from the threads of tradition, religion, festivals, art, music, cuisine, and rituals, creating a unique mosaic that has captivated the world for centuries.</p>
                    <p>At the heart of Nepali culture lies its diversity. The country is home to numerous ethnic groups, each with its own language, customs, and traditions. From the Newars of the Kathmandu Valley to the Sherpas of the Everest region, and from the Tharus of the Terai to the Gurungs of the hills, Nepal's cultural landscape is as varied as its geography. This diversity is celebrated through colorful festivals, traditional dances, and vibrant art forms that showcase the richness of Nepali heritage.</p>
                    <p>Religion plays a central role in Nepali culture, with Hinduism and Buddhism being the predominant faiths. Temples, stupas, monasteries, and shrines dot the landscape, serving as spiritual sanctuaries for devotees and pilgrims alike. The Pashupatinath Temple, Swayambhunath Stupa, and Lumbini, the birthplace of Lord Buddha, are revered sites that attract visitors from around the world. Religious festivals such as Dashain, Tihar, Buddha Jayanti, and Teej are celebrated with great fervor, bringing communities together in prayer, devotion, and celebration.
</p>
                </div>
            </div>
        </div>
    )
}

export default BlogPage