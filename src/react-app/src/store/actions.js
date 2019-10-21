import React from 'react';
import Post from '../components/Post';
import {
  LOAD_DATA_SUCCESS,
  LOAD_DATA,
  LOAD_DATA_FAILURE,
  ACTION_FIND_MESSAGE,
  ACTION_DELETE_MESSAGE
} from '../constants/constants';
import GmailapiService from "../services/gmailapi-service";

export const loadData = () => {
  return dispatch => {

    const gmapi = new GmailapiService();

    window.onAuthorize = googleUser => {

      // Useful data for your client-side scripts:
      var profile = googleUser.getBasicProfile();
      console.log('ID: ' + profile.getId()); // Don't send this directly to your server!
      console.log('Full Name: ' + profile.getName());
      console.log('Given Name: ' + profile.getGivenName());
      console.log('Family Name: ' + profile.getFamilyName());
      console.log('Email: ' + profile.getEmail());


      window.access_token = googleUser.getAuthResponse().access_token;

      dispatch({ type: LOAD_DATA });
      let messages = [];

      gmapi.fetchAllMessages()
        .then(res => res.json())
        .then(obj => {
          obj.messages.forEach(el => {
            gmapi.fetchEveryMessage(el)
              .then(res => res.json())
              .then(data => {
                messages.push(data);
                const posts = messages.map(message => {
                  if (message.payload.headers.length < 4) {
                    messages.splice(messages.indexOf(message), 1);
                  }

                  return <Post messages={messages}
                               message={message}
                               key={message.id} />
                });

                if(posts.length === 99) {
                  dispatch({
                    type: LOAD_DATA_SUCCESS, payload: {
                      messages: posts,
                      user: user
                    }
                  });
                }
              });
            const user = {
              fullName: profile.getName(),
              imgUrl: profile.getImageUrl()
            };
          })
        })
        .catch(err => {
          dispatch({ type: LOAD_DATA_FAILURE, payload: err })
        });
    }
  }
};

export const findMessage = (posts) => {

  return dispatch => {
    dispatch({ type: ACTION_FIND_MESSAGE, payload: {
        messages: posts
      }
    });
  }
};


export const removeMessage = (post, posts) => {

  const gmapi = new GmailapiService();

  gmapi.fetchToRemoveMessage(post)
    .then(alert('message removed!'));

  posts.splice(posts.indexOf(post), 1);

  return dispatch => {
    dispatch({ type: ACTION_DELETE_MESSAGE, payload: {
        messages: posts
      }
    });
  }
};


export const sendMessage = (title, text, to) => {

  const gmapi = new GmailapiService();

  gmapi.fetchToSendMessage(title, text, to)
};