import React from 'react'
import Wraper from './Wraper'
import { UseNewsContext } from '../Config/Context'


export default function Navbar({ className }) {

    const { SetNews, FetchData } = UseNewsContext()

    let timer = null;
    const handleSearch = async (e) => {
        const searchValue = e.target.value
        if(!searchValue) return

        clearTimeout(timer);

        timer = setTimeout(async() => {
            const data = await FetchData(`/everything?q=${searchValue}`)
            SetNews(data.articles)
        },1000)

    }



    return (
        <div className={`bg-gray-600 ${className}`}>
            <Wraper>
                <div className="navbar ">
                    <div className="flex-1">
                        <a className="btn btn-ghost text-xl max-[460px]:text-sm">INTERNATOINAL NEWS</a>
                    </div>
                    <div className="flex gap-2">
                        <input type="text"
                            placeholder="Search"
                            className="input input-bordered w-24 md:w-auto"
                            onChange={handleSearch}
                        />
                    </div>
                </div>
            </Wraper>
        </div>
    )
}
