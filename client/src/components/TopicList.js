import React, { useContext, useEffect } from 'react'
import { Context } from '../context'
export default function TopicList({ category }) {
    const theme = useContext(Context);
    const { loadTopics } = theme.methods
    const { topics } = theme.state

    useEffect(() => {
       loadTopics(category._id)
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