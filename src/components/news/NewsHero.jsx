import NewsMain from "./NewsMain"

const NewsHero = () => {
    return (
        <div className='mt-[130px] px-[5%] pt-12 pb-8'>
            <h5 className="heading">Notices</h5>
            <ul className="flex flex-col gap-2 pt-8 font-medium list-disc list-inside">
                {
                    notices.map((notice) => (
                        <li className="w-auto underline cursor-pointer md:w-max text-sky-700 hover:text-sky-900 font-manrope" title={notice.title}><a href="#">{notice.title}</a></li>
                    ))
                }
            </ul>
        </div>
    )
}

export default NewsHero

const notices = [
    {
        title: 'Admission Open'
    },
    {
        title: 'Class 9 Result'
    },
    {
        title: 'Sport Day Notice'
    },
    {
        title: 'Friday Extra Curriculum'
    }
   
]