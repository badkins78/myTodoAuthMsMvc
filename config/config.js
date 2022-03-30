exports.creds = {
  identityMetadata: 'https://login.microsoftonline.com/common/v2.0/.well-known/openid-configuration',

  clientID: 'ee372626-5658-4428-acf0-d5c48c4b969e',

  clientSecret: 'd5b01ac5-fa48-4d34-a4f5-1a71368122ce',

  responseType: 'code id_token',

  responseMode: 'form_post',

  redirectUrl: 'http://localhost:2121/auth/openid/return',

  allowHttpForRedirectUrl: true,

  validateIssuer: false,

  issuer: null,

  passReqToCallback: false,

  useCookieInsteadOfSession: false,

  cookieEncryptionKeys: [
    { 'key': '12345678901234567890123456789012', 'iv': '123456789012' },
    { 'key': 'abcdefghijklmnopqrstuvwxyzabcdef', 'iv': 'abcdefghijkl' }
  ],

  scope: ['profile', 'offline_access', 'https://graph.microsoft.com/mail.read'],

  loggingLevel: false,

  nonceLifetime: null,

  nonceMaxAmount: 5,

  clockSkew: null,
};

exports.destroySessionUrl = 'http://localhost:2121';

exports.useMongoDBSessionStore = false;

exports.databaseUri = 'mongodb://localhost/OIDCStrategy';

exports.mongoDBSessionMaxAge = 24 * 60 * 60;
