import React from 'react'
import ReactDisqusComments from 'react-disqus-comments'

export default class Comments extends React.Component {
  handleNewComment (comment) {
    console.log(comment.text)
  }

  render () {
    return (
      <ReactDisqusComments
        shortname='https-next-go-herokuapp-com.'
        identifier='something-unique-12345'
        title='Example Thread'
        url='https://https-next-go-herokuapp-com-1.disqus.com/embed.js'
        category_id='123456'
        onNewComment={this.handleNewComment} />
    )
  }
}
