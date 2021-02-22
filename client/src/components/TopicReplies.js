import React from 'react'

const TopicReplies = ({replies}) => {
    return (
        replies ?
        replies.map(({_id, description, created_at, user_name }) => {
          return <div key={_id} class="card text-white bg-primary card border-secondary mb-3 " style={{maxWidth: '50rem'}}>
              <div class="card-body">
                <p class="card-text">{description}</p>
                <small><span style={{ color: 'yellow'}}>{user_name}</span> posted at: {new Date(created_at).toLocaleDateString()}</small>
              </div>
              </div>
            })
        : null
    )
}
export default TopicReplies;