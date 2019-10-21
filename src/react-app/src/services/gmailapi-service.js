
export default class GmailapiService {

  _gapi = 'https://www.googleapis.com/gmail/v1/users/me/messages';

  fetchAllMessages() {

    return fetch(`${this._gapi}?access_token=${window.access_token}`, {
      method: 'get'
    })
  }

  fetchEveryMessage(el) {

    return fetch(`${this._gapi}/${el.id}?access_token=${window.access_token}`, {
      method: 'get'
    })
  }

  fetchToRemoveMessage(post) {

    return fetch(`${this._gapi}/${post.id}/trash?access_token=${window.access_token}`, {
      method: 'post'
    })
  }

  fetchToSendMessage(title, text, to) {

    let data = btoa(
      "From: ilyasubota777@gmail.com\r\n" +
      "To: " +to+ "\r\n" +
      "Subject: "+title+"\r\n\r\n" +

      text
    )
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+$/, '');

    return fetch(`${this._gapi}/send?access_token=${window.access_token}`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'raw': data
      })
    })
  }
}