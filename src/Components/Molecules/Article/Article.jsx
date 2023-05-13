import React from 'react'
import "./Article.scss"

const Article = ({artcTitle,artcImg,artcDesc,artcUrl}) => {
  return (
    <article className='article'>
        <h3 className='article-title'>{artcTitle}</h3>
        <img className='article-img' src={artcImg} alt="Seputar Sirapan" />
        <p className='article-desc'>{artcDesc}</p>
        <a href={artcUrl}><button className='article-button'>Selengkapnya</button></a>
    </article>
  )
}

export default Article