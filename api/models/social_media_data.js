const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var SocialMediaSchema = new Schema({
  website_link: {
    type: String
  },
  facebook_link: {
    type: String
  },
  youtube_link: {
    type: String
  },
  twitter_link: {
    type: String
  },
  instagram_link: {
    type: String
  },
  github_link: {
    type: String
  },
  twitch_link: {
    type: String
  },
  spotify_link: {
    type: String
  },
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "users"
  }

});
const SocialMedia = mongoose.model("social_media_data", SocialMediaSchema);
module.exports = { SocialMedia }
