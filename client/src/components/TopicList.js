import React, { useContext} from 'react'
import { Context } from '../context'
export default function TopicList({category}) {
    const theme = useContext(Context);
     const {  loadTopics } = theme.methods
    const { topics } = theme.state;
    const filteredTopics = topics.filter(topic => topic.category_name === category )

    if (filteredTopics.length !== 0) {
        return (
            <div className="list-group">
                {filteredTopics.map(topic => {
                    return (
                        <a key={topic._id}  href={`#/p/${category}/${topic._id}`} className="list-group-item list-group-item-action flex-column align-items-start ">
                            <div className="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">{topic.title}</h5>
                                {/* <small>3 days ago</small> */}
                            </div>
                            <p className="mb-1">{topic.description} </p>
                        </a>
                    )
                })}
            </div>
        )
    } else {
        return <p> No topics for this category yet... Will you be the first? </p>
    }
}