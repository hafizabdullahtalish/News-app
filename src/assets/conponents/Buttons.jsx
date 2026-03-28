import React from 'react'
import Wraper from './Wraper'
import { UseNewsContext } from '../Config/Context'

const Buttons = ({ className }) => {


     const catogary = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology']

    const { SetNews, FetchData } = UseNewsContext()

    const handleClick = async (e) => {
        const ClickedBtn  = e.target.value
        const data = await FetchData(`/everything?q=${ClickedBtn}`)
        SetNews(data.articles)
    }


    return (
        <div className={`${className} bg-base-100`}>
            <Wraper>
                <div className='flex justify-center w-fit max-w-full overflow-x-auto scrollbar-none px-4 m-auto '>
                    {
                        catogary.map((catogary, index) => {
                            return (
                                <button 
                                key={index} 
                                className="btn btn-secondary my-6 mx-2" 
                                onClick={handleClick} 
                                value={catogary}>
                                {catogary}
                                </button>
                            )
                        })
                    }
                </div>
            </Wraper>
        </div>

    )
}

export default Buttons
