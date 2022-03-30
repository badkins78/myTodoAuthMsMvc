exports.creds = {
  "client_id":"1018870726313-opakrms4g289kgqiirr73n8ca9hp0fmn.apps.googleusercontent.com",
  "project_id":"mvctodomsauth",
  "auth_uri":"https://accounts.google.com/o/oauth2/auth",
  "token_uri":"https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs",
  "client_secret":"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",
  "redirect_uris":["https://mytodooauth20mvc.herokuapp.com/auth/google/callback", "http://localhost:2121"],
  "javascript_origins":["https://mytodooauth20mvc.herokuapp.com"]
}
;

exports.destroySessionUrl = 'http://localhost:2121';

exports.useMongoDBSessionStore = false;

exports.databaseUri = 'mongodb://localhost/OIDCStrategy';

exports.mongoDBSessionMaxAge = 24 * 60 * 60;