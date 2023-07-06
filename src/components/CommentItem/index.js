// Write your code here
import {formatDistanceToNow} from 'date-fns'

import './index.css'

const CommentItem = props => {
  const {userComment, isToggleLIke, deleteComment} = props
  const {id, userName, comment, date, isLike, userColorClass} = userComment

  const postedTime = formatDistanceToNow(date)

  const initialName = userName ? userName[0].toUpperCase() : ''
  const isClickLike = () => {
    isToggleLIke(id)
  }

  const isClickDelete = () => {
    deleteComment(id)
  }

  const isLiked = isLike ? 'liked' : 'no-like'

  const likeImg = isLike
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'

  return (
    <li>
      <div className="user-comment-card">
        <p className={userColorClass}> {initialName} </p>
        <div className="user-comment">
          <p className="user-name">
            {userName}
            <span className="time"> {postedTime} a minute ago</span>
          </p>
          <p className="comment"> {comment} </p>
        </div>
      </div>
      <div className="comment-like-delete-card">
        <img alt="like" className="like-img" src={likeImg} />

        <div className="like-card">
          <button type="button" className={isLiked} onClick={isClickLike}>
            Like
          </button>
        </div>
        <button type="button" onClick={isClickDelete}>
          <img
            alt="delete"
            className="delete"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
          />
        </button>
      </div>
      <hr className="line" />
    </li>
  )
}
export default CommentItem
