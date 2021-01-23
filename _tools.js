module.exports = {
  // has to be imported in configuration.js:
  // const { buildBinFile } = require('../../_tools.js');
  buildBinFile(type, level, options = {}) {
    const mergedOptions = {
      // Defaults
      ...{ executable: 'bin' },
      // More options
      ... options,
      // Requirements
      type,
      level
    }
    return JSON.stringify(mergedOptions);
  },
  // has to be imported in configuration.js:
  // const { buildPdfFile } = require('../../_tools.js');
  buildPdfFile(title, text, options = {}) {
    const mergedOptions = {
       // Defaults
       ...{ size: 4.3, signed: true },
       ...options,
      title,
      text,
      ...(options.licensed!== undefined) ? {
        licensed: options.licensed,
        user: ''
      } : {},
    }
    return JSON.stringify(mergedOptions);
  }
}
