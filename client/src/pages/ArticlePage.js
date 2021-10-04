import React from "react"
import articleContent from "./article-content"

const ArticlePage = ({ match }) => {
  const name = match.params.name
  const article = articleContent.find((article) => article.name === name)

  if (!article) return <h2>article does not exist</h2>

  return (
    <>
      <h2>{article.title}</h2>
      {article.content.map((paragraph, key) => (
        <p key={key}>{paragraph}</p>
      ))}
    </>
  )
}

export default ArticlePage
