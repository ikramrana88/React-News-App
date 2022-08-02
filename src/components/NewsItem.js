import React from 'react'

export default function NewsItem(props) {
    let { title, description, imgUrl, url, author, date, source } = props;
        return (
            <div className="container">
                <div className="card" style={{ width: "23rem" }}>
                     <img src={imgUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className='text-muted'>By {author} on {new Date(date).toLocaleDateString()}</small></p>
                        <div className='d-flex justify-content-between'>
                            <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-dark btn-sm">Read More</a>
                            <button className="btn txt btn-sm">{source}</button>
                        </div>
                    </div>
                </div>
            </div>
        )
}