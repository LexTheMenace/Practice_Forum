import React, { useContext} from 'react'
import { Context } from '../context'
export default function CategoryList(props) {
    const theme = useContext(Context);
     const { isAdmin, loadCategories, addCategory } = theme.methods
    const { categories } = theme.state;
    console.log(categories);
    // const { categories } = props
    if (categories) {
        return (
            <div className="list-group">
                {categories.map(category => {
                    return (
                        <a key={category._id} href="#" className="list-group-item list-group-item-action flex-column align-items-start ">
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
       loadCategories()
        return <h1> Loading... </h1>
    }
}
