import React from 'react'
import { loadCategories } from '../actions/forumActions';
import { useForumContext } from '../context/forumContext';

const CategoryList = () => {
    const { categories, dispatch} = useForumContext();

    if (categories.length > 0) {
        return (
            <div className="list-group">
                <h2>Categories</h2>
                {categories.map(category => {
                    return (
                        <a key={category._id} id={category._id} href={`#/p/${category.title}`} className="list-group-item list-group-item-action flex-column align-items-start ">
                            <div className="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">{category.title}</h5>
                                {/* <small>3 days ago</small> */}
                            </div>
                            <p className="mb-1">{category.description} </p>
                        </a>
                    )
                })}
            </div>
        )
    } else {
       loadCategories(dispatch)
        return <h1> Loading... </h1>
    }
}

export default CategoryList;