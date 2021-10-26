import { Token as token} from './token';
import Axios_withoutInstance from 'axios';

const API = 'http://localhost:3001/api';

export const getUsers = async () => {
    try {
      const req = await token.get(`${API}/users`);
      return req;
    } catch (error) {
      return error;
    }
  };

  //User auth

  //use library for notifications(*)
export const login = async (username, password) => {
    const data = {
      username,
      password
    };
    console.log(username);
    try {
      const req = await Axios_withoutInstance.post(`${API}/users/login`,data);
      return req;

    } catch (error) {
      return error;
    }
  };
  
  //Tweets

export const getTweets = async () => {
    try {
      const req = await token.get(`${API}/tweets`);
      return req;
    } catch (error) {
      return error;
    }
  };

export const getTweet = async (id) => {
    try {
      const req = await token.get(`${API}/tweets/${id}`);
      return req;
    } catch (error) {
      return error;
    }
  };

export const likeTweet = async (like, tweetId) => {
    const data = {
      like,
      tweetId
    };
    try {
      const req = await token.put(`${API}/tweets/likes`, data);
      return req;
    } catch (error) {
      return error;
    }
  };

//Tweets CRUD
export const createTweets = async (content) => {
    try {
      const req = await token.post(`${API}/tweets`, content);
      return req;
    } catch (error) {
      return error;
    }
  };
  
export const deleteTweets = async (tweetId) => {
    try {
      const req = await token.delete(`${API}/tweets`, tweetId);
      return req;
    } catch (error) {
      return error;
    }
  };
  

//Comments CRUD

export const createComment = async (comment, tweetId) => {
    const data = {
      comment,
      tweetId
    };
    try {
      const req = await token.post(`${API}/tweets/comments`, data);
      return req;
    } catch (error) {
      return error;
    }
  };

export const deleteComment = async (comment, tweetId) => {
    const data = {
      comment,
      tweetId
    };
    try {
      const req = await token.delete(`${API}/tweets/comments`, data);
      return req;
    } catch (error) {
      return error;
    }
  };

  //Tasks

export const getTasks = async () => {
    try {
      const req = await token.get(`${API}/tasks`);
      return req;
    } catch (error) {
      return error;
    }
  };
  
export const createTask = async (content) => {
    try {
      const req = await token.post(`${API}/tasks`, { content });
      return req;
    } catch (error) {
      return error;
    }
  };
  
export const deleteTask = async (id) => {
    try {
      const req = await token.delete(`${API}/tasks`, { id });
      return req;
    } catch (error) {
      return error;
    }
  };