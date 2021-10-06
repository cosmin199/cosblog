import React from "react"

const CommentsList = ({ comments }) => {
  return (
    <>
      <h3>Comment</h3>
      {comments.map((comment, key) => (
        <div classname="comment" key={key}>
          <h4>{comment.username}</h4>
          <p>{comment.text}</p>
        </div>
      ))}
    </>
  )
}

export default CommentsList
