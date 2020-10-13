import React from 'react'

export default function TopicReplies({replies}) {
    return (
        replies ?
        replies.map(reply => {
          return <div class="card text-white bg-primary card border-secondary mb-3 " style={{maxWidth: '50rem'}}>
          <div class="card-body">
            <p class="card-text">{reply.description}</p>
            <small>posted at: {reply.created_at}</small>
          </div>
          </div>
        })
        : null
    )
}
