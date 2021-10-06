import React, { useState } from "react"

const AddCommentForm = ({ articleName, setArticleInfo }) => {
  const [username, setUsername] = useState("")
  const [commentText, setCommentText] = useState("")

  const addComment = async () => {
    const result = await fetch(`/api/articles/${articleName}/add-comment`, {
      method: "post",
      body: JSON.stringify({ username, text: commentText }),
      headers: { "Content-Type": "application/json" },
    })
    const body = await result.json()
    setArticleInfo(body)
    setUsername("")
    setCommentText("")
  }

  return (
    <div id="add-comment-form">
      <h3>add a comment</h3>
      <label>
        Name:
        <input
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </label>
      <label>
        Comment:
        <textarea
          cols="50"
          rows="4"
          value={commentText}
          onChange={(event) => setCommentText(event.target.value)}
        ></textarea>
      </label>
      <button onClick={() => addComment()}>add comment</button>
    </div>
  )
}

export default AddCommentForm
