import React from "react"

import ArticlesList from "../components/ArticlesList"
import articleContent from "./article-content"

const ArticlesListPage = () => {
  return (
    <>
      <h2>articles</h2>
      <ArticlesList articles={articleContent} />
    </>
  )
}

export default ArticlesListPage
