import React, { useEffect } from 'react'
import Wraper from '../conponents/Wraper'
import { UseNewsContext } from '../Config/Context'
import Loader from '../conponents/Loader'


const News = () => {

const {News , SetNews ,FetchData ,Loading}  = UseNewsContext()


useEffect(()=>{
  (async ()=>{
    const data = await FetchData()
    SetNews(data.articles)
  })()
},[])

if(Loading) return <Loader/>

  return (
    <Wraper>
      <div className='grid grid-cols-4 gap-4 max-[970px]:grid-cols-3 max-[650px]:grid-cols-2 max-[460px]:grid-cols-1 '>
        {
          News.map((item,index)=>{
            if(!item.urlToImage) return null
            return (
              <Card key={index} details={item}/>
            )
          })
        }
        
      </div>
    </Wraper>
  )
}

export default News


function Card({details}) {
  return (

      <div className="card bg-base-100  shadow-sm">
        <figure>
          <img
            src={details?.urlToImage}
            alt="Shoes" className='w-full aspect-video object-contain' />
        </figure>
        <div className="card-body">
          <h2 className="line-clamp-2 card-title">{details?.title}</h2>
          <p className='line-clamp-3'>{details?.description}</p>
          <div className="card-actions justify-end">
            <button onClick={()=>(window.open(details?.url))} className="btn btn-primary mt-2">Learn More</button>
          </div>
        </div>
      </div>

  )
}

