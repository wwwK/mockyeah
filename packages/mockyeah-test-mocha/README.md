# @mockyeah/test-mocha

[Mocha](https://mochajs.org) unit test setup for [mockyeah](https://github.com/mockyeah/mockyeah),
a powerful service mocking, recording, and playback utility.

<img src="https://raw.githubusercontent.com/mockyeah/mockyeah/master/packages/mockyeah-docs/src/images/logo/mockyeah-600.png" height="200" />

[![npm](https://img.shields.io/npm/v/@mockyeah/test-mocha.svg)](https://www.npmjs.com/package/@mockyeah/test-mocha)

More at https://mockyeah.js.org/Packages/mockyeah-test-mocha.

All you need to do is:

```js
import mockyeah from '@mockyeah/test-mocha';

describe('test', () => {
  it('should work', () =>
    mockyeah
      .get('/')
      .expect()
      .once()
      .run(fetch('/'))
      .verify());
});
```

## License

@mockyeah/test-mocha is released under the [MIT License](https://opensource.org/licenses/MIT).
