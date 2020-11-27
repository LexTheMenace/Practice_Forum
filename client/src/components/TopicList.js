import React, { useContext, useEffect } from 'react'
import { loadTopics } from '../actions/forumActions';
import { ForumContext } from '../context/forumContext';

export default function TopicList({ category }) {
    const [state, dispatch] = useContext(ForumContext);
    const { topics } = state

    useEffect(() => {
       loadTopics(dispatch, category._id)
    }, [])
     
    
     if (topics && topics.length !== 0) {
          return (
              <div className="list-group">
                  {topics.map(topic => {
                      return (
                          <a key={topic._id}  href={`#/p/${category.title}/replies/${topic._id}`} className="list-group-item list-group-item-action flex-column align-items-start ">
                              <div className="d-flex w-100 justify-content-between">
                                  <h5 className="mb-1">{topic.title}</h5>
                               
                              </div>
                              <p className="mb-1">{topic.description} </p>
                          </a>
                      )
                  })}
              </div>
          )
      } else {
          return <h3> No topics for this category yet... Will you be the first? </h3>
      } 
}