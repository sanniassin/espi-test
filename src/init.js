import 'babel-polyfill';
import $ from 'jquery';
import Modernizr from 'modernizr';
import _ from 'lodash';

import { isMobileDevice, isTabletDevice } from 'shared/utils';

if (Modernizr.passiveeventlisteners) {
  // Chrome 56+ workaround
  // React doesn't support passive event listeners yet,
  // so we turn all document listeners into non-passive by default

  var documentAddEventListener = document.addEventListener;

  document.addEventListener = (type, listener, options, ...rest) => {
    if (_.isBoolean(options)) {
      options = {
        capture: options
      };
    }
    if (!options || !_.has(options, 'passive')) {
      options = {
        ...options,
        passive: false
      };
    }
    documentAddEventListener.call(document, type, listener, options, ...rest);
  };
}

if (isMobileDevice()) {
  $('meta[name="viewport"]').attr('content', 'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=yes');
} else if (isTabletDevice()) {
  $('meta[name="viewport"]').attr('content', 'width=1024, user-scalable=yes');
}
