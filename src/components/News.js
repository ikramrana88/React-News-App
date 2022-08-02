import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
// import InfiniteScroll from 'react-infinite-scroll-component'

export default function News(props) {

    const capital = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
     if (props.category==='general') {
       
        document.title="Home | Daily News"; 
    }
    else{

        document.title = `${capital(props.category)} | Daily News`
    }
    
    const [articles, setArticles] = useState([])
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)
    const [totalResults, setTotalResults] = useState(0)

    useEffect(() => {
        updateNews()
        // props.setProgress=100
    }, [])

    const updateNews = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${props.apikey}&page=1&pageSize=${props.pageSize}`;
        setLoading(true)
        // props.setProgress=10
        let data = await fetch(url);
        // props.setProgress=30
        let parsedData = await data.json();
        // props.setProgress=60
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
    }

    const previous = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${props.apikey}&page=${page - 1}&pageSize=${props.pageSize}`;
        setLoading(true)
        let data = await fetch(url);
        let parsedData = await data.json();
        setPage(page - 1)
        setArticles(parsedData.articles)
        setLoading(false)
    }

    const next = async () => {

        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${props.apikey}&page=${page + 1}&pageSize=${props.pageSize}`;
        setLoading(true)
        let data = await fetch(url);
        let parsedData = await data.json();
        setPage(page + 1)
        setArticles(parsedData.articles)
        setLoading(false)

    }

    // const fetchData = async () => {
    //     setPage(page + 1)
    //     let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${props.apikey}&page=1&pageSize=${props.pageSize}`;
    //     setLoading(true)
    //     let data = await fetch(url);
    //     let parsedData = await data.json();
    //     setArticles(parsedData.articles)
    //     setTotalResults(parsedData.totalResults)
    //     setLoading(false)

    // }

    return (
        <>
                       
            <div className="container text-center margin">
                <h1 >Daily News - Top Stories about {capital(props.category)}</h1>
            </div>
            <div className="container">
                {loading && <Spinner />}
            </div>
            {/* <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchData}
                    hasMore={articles.length !== totalResults}
                    loader={<Spinner/>}
                > */}
            <div className="container my-3">
                <div className="row my">
                    {!loading && articles.map((element) => {
                        return <div className="col md-4 my-2" key={element.url}>
                            <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imgUrl={element.urlToImage ? element.urlToImage : "https://cdn.cnn.com/cnnnext/dam/assets/220801232505-global-markets-pelosi-taiwan-intl-hnk-super-tease.jpg"} url={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                        </div>
                    })}
                </div>
            </div>

            {/* </InfiniteScroll> */}

            <div className="container d-flex justify-content-between my-5">
                <button type="button" className="btn btn-dark" onClick={previous} disabled={page <= 1}>&larr; Previous</button>
                <button type="button" className="btn btn-dark" onClick={next} disabled={page + 1 > Math.ceil(totalResults / props.pageSize)}>Next &rarr;</button>
            </div>
            
        </>
    )
}

News.defaultProps = {
    pageSize: 9,
    category: 'general'
}

News.propTypes = {
    pageSize: PropTypes.number,
    category: PropTypes.string
}
