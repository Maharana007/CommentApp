import {Component} from 'react'

import {v4} from 'uuid'

import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here

class Comments extends Component {
  state = {userName: '', comment: '', commentList: []}

  isToggleLIke = id => {
    this.setState(prevState => ({
      commentList: prevState.commentList.map(eachComment => {
        if (id === eachComment.id) {
          return {...eachComment, isLike: !eachComment.isLike}
        }
        return eachComment
      }),
    }))
  }

  deleteComment = commentId => {
    const {commentList} = this.state

    this.setState({
      commentList: commentList.filter(comment => comment.id !== commentId),
    })
  }

  addCommentList = () => {
    const {commentList} = this.state

    return commentList.map(eachComment => (
      <CommentItem
        userComment={eachComment}
        key={eachComment.id}
        isToggleLIke={this.isToggleLIke}
        deleteComment={this.deleteComment}
      />
    ))
  }

  addComment = event => {
    event.preventDefault()
    const {userName, comment} = this.state

    const BackgroundColorClassNames = `initial-call ${
      initialContainerBackgroundClassNames[
        Math.ceil(Math.random().initialContainerBackgroundClassNames.length - 1)
      ]
    }`

    const newCommentList = {
      id: v4(),
      userName,
      comment,
      date: new Date(),
      isLike: false,
      userColorClass: BackgroundColorClassNames,
    }
    this.setState(prevState => ({
      commentList: [...prevState.commentList, newCommentList],
      userName: '',
      comment: '',
    }))
  }

  changeName = event => {
    this.setState({userName: event.target.value})
  }

  changeComment = event => {
    this.setState({comment: event.target.value})
  }

  render() {
    const {commentList, userName, comment} = this.state
    return (
      <div className="container">
        <form className="comment-container">
          <div className="comment-card">
            <h1 className="title"> Comments </h1>
            <p className="details"> say something about 4.O technologies</p>
            <input
              type="text"
              className="comment-box"
              placeholder="Your Name"
              value={userName}
              onChange={this.changeName}
            />
            <textarea
              className="comment-box"
              value={comment}
              placeholder="Your Comment"
              rows="5"
              cols="20"
              onChange={this.changeComment}
            />
            <button type="submit" className="button" onClick={this.addComment}>
              Add Comment
            </button>
          </div>
          <div className="comment-img-card">
            <img
              className="comment-img"
              alt="comments"
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            />
          </div>
        </form>
        <hr className="under-line" />
        <p className="comments-sub-title">
          <span className="comment-count"> {commentList.length} </span>
          Comments
        </p>
        <ul className="user-comment-container">{this.addCommentList}</ul>
      </div>
    )
  }
}

export default Comments
