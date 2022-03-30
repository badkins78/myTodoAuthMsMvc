exports.creds = {
  clientID:
    "1018870726313-opakrms4g289kgqiirr73n8ca9hp0fmn.apps.googleusercontent.com",

  clientSecret: "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",

  redirectUrl: [
    "https://mytodooauth20mvc.herokuapp.com/auth/google/callback",
    "http://localhost:2121",
  ],

  projectID: "mvctodomsauth",

  validateIssuer: false,

  issuer: null,

  passReqToCallback: false,

  useCookieInsteadOfSession: false,

  scope: "profile",

  loggingLevel: false,

  nonceLifetime: null,

  nonceMaxAmount: 5,

  clockSkew: null,

  authUri: "https://accounts.google.com/o/oauth2/auth",

  tokenUri: "https://oauth2.googleapis.com/token",

  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",

  javascript_origins: ["https://mytodooauth20mvc.herokuapp.com"],
};

exports.destroySessionUrl = "http://localhost:2121";

exports.useMongoDBSessionStore = false;

exports.databaseUri = "mongodb://localhost/OIDCStrategy";

exports.mongoDBSessionMaxAge = 24 * 60 * 60;
