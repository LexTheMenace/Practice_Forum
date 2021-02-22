import axios from 'axios';
let BASE_URL = 'http:deployed.url';

 if(window.location.hostname === 'localhost') {
    BASE_URL = 'http://localhost:3000';
};

const API_URL = `${BASE_URL}/api/v1`;

export async function getAllCategories(){
  const res = await axios.get(`${API_URL}/categories`);
  const categories = await res.data;
  return categories;
};

export async function createCategory(newCategory){
  const res = await axios.post(`${API_URL}/categories`, newCategory,  {
    headers: {
    authorization: `Bearer ${localStorage.token}`
  }} );
  const category = await res.data;
  return category;
};

export async function getAllTopics(id){
  const res = await axios.get(`${API_URL}/topics/${id}`, );
  const topics = await res.data;
  return topics;
};

export async function createTopic(newTopic, user){
  const categories = await axios.get(`${API_URL}/categories`);
  const [category] = categories.data.filter(category => category.title === newTopic.category_name);

  newTopic.user_id = user._id;
  newTopic.category_id = category._id;

  const res = await axios.post(`${API_URL}/topics`, newTopic,  {
    headers: {
    authorization: `Bearer ${localStorage.token}`
  }} );

  const topic = await res.data;
  return topic;
};

export async function createTopicReply(newTopicReply){

  const res = await axios.post(`${API_URL}/topics/replies`, newTopicReply,  {
    headers: {
    authorization: `Bearer ${localStorage.token}`
  }} );
  const reply = await res.data;
  return reply;
};

export async function getAllReplies(id){
  const res = await axios.get(`${API_URL}/topics/replies/${id}`, );
  const replies = await res.data;
  return replies;
};