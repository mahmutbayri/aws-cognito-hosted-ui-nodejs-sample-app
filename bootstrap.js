const {
    CognitoIdentityProviderClient,
    AddCustomAttributesCommand,
    GetUserCommand
} = require("@aws-sdk/client-cognito-identity-provider");

/**
 * @returns {CognitoIdentityProviderClient}
 */
const getClient = function () {
    return new CognitoIdentityProviderClient({
        profile: 'default',
        region: process.env.REGION,
        version: '2016-04-18'
    });
};

const getUser = function (accessToken) {
    const command = new GetUserCommand({
        'AccessToken': accessToken,
    });
    return getClient().send(command)
};

const getAccessTokenFromCookie = function (cookies) {
    const cookiePattern = new RegExp(`CognitoIdentityServiceProvider.${process.env.CLIENT_ID}.+.accessToken`);

    for (let cookieName in cookies) {
        if (cookiePattern.test(cookieName)) {
            return cookies[cookieName];
        }
    }
    return null;
}

module.exports = {
    getClient,
    getUser,
    getAccessTokenFromCookie
}