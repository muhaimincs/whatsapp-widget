/* eslint import/no-commonjs: off, flowtype/require-valid-file-annotation: off, flowtype/require-return-type: off */

const zoidGlobals = require('zoid/globals');

module.exports = {
    __DEFAULT_CONTEXT__:  'iframe',
    // eslint-disable-next-line no-process-env
    __API1_URL__:         process.env.API1_URL || 'https://api1-stage.fastagent.io',
    // eslint-disable-next-line no-process-env
    __LOCAL_MOBILE_URL__: process.env.LOCAL_MOBILE_URL,
    __POPUP_SUPPORT__:    true,
    ...zoidGlobals
};
