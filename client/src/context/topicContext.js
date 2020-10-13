import React, { Component } from 'react'
import { /* getAllTopics, */ createTopic } from '../API'
//Makes info available everywhere in the app
export const TopicContext = React.createContext();


const topicReducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'SET_TOPICS':
            return {
                ...state,
                topics: action.payload
            };
            case 'PUSH_TOPIC':
                return {
                    ...state,
                    topics: [...state.topics, action.payload]
                };
        default:
            return state;
    }
}

export class Provider extends Component {
    state = {
        topics: [],
    };

    dispatch = action => this.setState(state => topicReducer(state, action));


 /*    loadTopics = async () => {
        const topics = await getAllTopics();
        this.dispatch({
            type: 'SET_TOPICS',
            payload: topics
        })
    } */

    addTopic = async (newTopic) => {
        const topic = await createTopic(newTopic);
        this.dispatch({
            type: 'PUSH_TOPIC',
            payload: topic
        })
    }
     componentDidMount(){
        this.loadTopics()
    } 
    render() {

        return (
            // passing state as value to access anywhere you bring this in
            <TopicContext.Provider
                value={{
                    state: this.state,
                    methods: {
                        dispatch: this.dispatch,
                        loadTopics: this.loadTopics,
                        addTopic: this.addTopic

                    }
                }} >
                {this.props.children}
            </TopicContext.Provider>
        )
    }
}

export const Consumer = TopicContext.Consumer;