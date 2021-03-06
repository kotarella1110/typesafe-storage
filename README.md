<div align="center">

<h1>typesafe-storage</h1>

Typesafe [Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API) wrapper to support objects and arrays.

[![License](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)
[![Actions Status](https://github.com/kotarella1110/typesafe-storage/workflows/CI/badge.svg)](https://github.com/kotarella1110/typesafe-storage/actions?query=workflow%3ACI)
[![NPM Version](https://img.shields.io/npm/v/typesafe-storage?style=flat-square)](https://www.npmjs.com/package/typesafe-storage)
[![Downloads Month](https://img.shields.io/npm/dm/typesafe-storage?style=flat-square)](https://www.npmjs.com/package/typesafe-storage)
[![Downloads Total](https://img.shields.io/npm/dt/typesafe-storage?style=flat-square)](https://www.npmjs.com/package/typesafe-storage)
[![Dependencies Status](https://david-dm.org/kotarella1110/typesafe-storage.svg?style=flat-square)](https://david-dm.org/kotarella1110/typesafe-storage)
[![Semantic Release](https://img.shields.io/badge/%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)
[![Commitizen Friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square)](http://commitizen.github.io/cz-cli/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-green.svg?style=flat-square)](CONTRIBUTING.md)

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->

</div>

## Installation

```
npm install typesafe-storage

# or

yarn add typesafe-storage
```

## Usage

[CodeSandbox](https://codesandbox.io/s/typesafe-storage-msl4z)

```ts
import { createStorage } from "typesafe-storage";

const storage = createStorage<{
  string: string;
  number: number;
  object: {
    string: string;
    number: number;
  };
  array: (string | number)[];
}>(localStorage);

storage.setItem("string", "value");
storage.setItem("number", 1);
storage.setItem("number", "error"); // ❌: Argument of type '"error"' is not assignable to parameter of type 'number'.
storage.setItem("object", {
  string: "value",
  number: 1
});
storage.setItem("array", ["value", 1]);
storage.setItem("notExistKey", "value"); // ❌: Argument of type '"notExistKey"' is not assignable to parameter of type '"string" | "number" | "object" | "array"'.

storage.getItem("string");
storage.getItem("number");
storage.getItem("object");
storage.getItem("array");
storage.getItem("notExistKey"); // ❌: Argument of type '"notExistKey"' is not assignable to parameter of type '"string" | "number" | "object" | "array"'.

storage.removeItem("string");
storage.removeItem("number");
storage.removeItem("object");
storage.removeItem("array");
storage.removeItem("notExistKey"); // ❌: Argument of type '"notExistKey"' is not assignable to parameter of type '"string" | "number" | "object" | "array"'.

storage.clear();
```

## Contributing

Contributions are always welcome! Please read the [contributing](./CONTRIBUTING.md) first.

## Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://qiita.com/kotarella1110"><img src="https://avatars1.githubusercontent.com/u/12913947?v=4" width="100px;" alt=""/><br /><sub><b>Kotaro Sugawara</b></sub></a><br /><a href="https://github.com/kotarella1110/typesafe-storage/commits?author=kotarella1110" title="Code">💻</a> <a href="https://github.com/kotarella1110/typesafe-storage/commits?author=kotarella1110" title="Documentation">📖</a> <a href="#ideas-kotarella1110" title="Ideas, Planning, & Feedback">🤔</a> <a href="#infra-kotarella1110" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/kotarella1110/typesafe-storage/commits?author=kotarella1110" title="Tests">⚠️</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

## License

[MIT](./LICENSE) © [Kotaro Sugawara](https://twitter.com/kotarella1110)
