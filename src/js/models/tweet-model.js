'use strict';

import TweetsCollection from '../collections/tweets';

let TweetModel = Backbone.Model.extend({
  defaults: {
    username: '',
    createdAt: '',
    postedAt: '',
    tweet: ''
  }

  parse : function(response) {
    var data = {
      user: response.attributes.user_id,
      body: response.attributes.body,
      id: response.id
    }
  }
})


export default TweetsCollection;
