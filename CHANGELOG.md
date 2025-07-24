# Changelog

## 0.1.0-alpha.1 (2025-07-24)

Full Changelog: [v0.0.1-alpha.0...v0.1.0-alpha.1](https://github.com/evolv3ai/doorloop/compare/v0.0.1-alpha.0...v0.1.0-alpha.1)

### Features

* **client:** add support for endpoint-specific base URLs ([e5c42ab](https://github.com/evolv3ai/doorloop/commit/e5c42abfce49c84aa3438580851a2f0834ac8736))
* **mcp:** fallback for void-typed methods ([ba9eb02](https://github.com/evolv3ai/doorloop/commit/ba9eb029a277939652a917372ee3ef66e7008da8))
* **mcp:** implement support for binary responses ([8522694](https://github.com/evolv3ai/doorloop/commit/85226943e103a7a6cb258609abbe799c601bab01))
* **mcp:** include http information in tools ([166c1ac](https://github.com/evolv3ai/doorloop/commit/166c1acf40a356fcc28a3984faa737e87cc1b57f))
* **mcp:** set X-Stainless-MCP header ([a943cf6](https://github.com/evolv3ai/doorloop/commit/a943cf6ed3a103fc7bd1278d9bf2b4d792615a9c))
* **mcp:** support filtering tool results by a jq expression ([6117401](https://github.com/evolv3ai/doorloop/commit/6117401e520eaed1986363c1ebe96f803a6b352f))


### Bug Fixes

* **client:** explicitly copy fetch in withOptions ([6c12f10](https://github.com/evolv3ai/doorloop/commit/6c12f102131662daf1ba33eba0d404f7bdb9bacc))
* **client:** get fetchOptions type more reliably ([9a0d726](https://github.com/evolv3ai/doorloop/commit/9a0d726ce3f764030046a6a51c1876de16f47d1f))
* compat with more runtimes ([9c57433](https://github.com/evolv3ai/doorloop/commit/9c5743355886bb8c1e7d7109ef83a2607f415bed))
* **mcp:** include description in dynamic tool search ([99bf426](https://github.com/evolv3ai/doorloop/commit/99bf42611801ae6fbb0394bb2d32be7d9c7e8008))
* **mcp:** include required section for top-level properties and support naming transformations ([302e203](https://github.com/evolv3ai/doorloop/commit/302e2032f06c90c1c74b95ec01f0689f4c91f681))
* **mcp:** relax input type for asTextContextResult ([9f55742](https://github.com/evolv3ai/doorloop/commit/9f5574212a28a61007299250393183d156f65cda))
* **mcp:** support jq filtering on cloudflare workers ([85b5563](https://github.com/evolv3ai/doorloop/commit/85b5563c41385d89f765dc1d53ebb9ff3865e9dc))
* publish script — handle NPM errors correctly ([28b82a7](https://github.com/evolv3ai/doorloop/commit/28b82a78e241cc6037a66538d87c8d3397823c89))


### Chores

* add docs to RequestOptions type ([9d7d75e](https://github.com/evolv3ai/doorloop/commit/9d7d75e6e11d9e272841e8169e67c62138b571ad))
* adjust eslint.config.mjs ignore pattern ([4ae8aba](https://github.com/evolv3ai/doorloop/commit/4ae8aba7aa1fed0bb90cf918ed1a51e2ac074c74))
* avoid type error in certain environments ([2a6380c](https://github.com/evolv3ai/doorloop/commit/2a6380ca8cf4dd7f1793a2ba97e40003474a16e0))
* change publish docs url ([445c44a](https://github.com/evolv3ai/doorloop/commit/445c44a9c7e0ffe6d8e1c24191fbf3efdfd18da2))
* **ci:** enable for pull requests ([c10149c](https://github.com/evolv3ai/doorloop/commit/c10149ccb1bc8cf2fd3a0780df82a360304e7dd8))
* **ci:** only run for pushes and fork pull requests ([71c83bd](https://github.com/evolv3ai/doorloop/commit/71c83bd993ba525663b636e3cf9e228ef2f2e15e))
* **client:** improve path param validation ([e488a5b](https://github.com/evolv3ai/doorloop/commit/e488a5b7a7eaa6d1562c23b0c26afe6f473b5de9))
* **client:** refactor imports ([8bd2250](https://github.com/evolv3ai/doorloop/commit/8bd225042badbaf3b8d67b2b1585aef0d68eca93))
* configure new SDK language ([b60e8b1](https://github.com/evolv3ai/doorloop/commit/b60e8b125ea0a755049eb8d5ebdc4a4cb17c277d))
* **deps:** bump eslint-plugin-prettier ([1308340](https://github.com/evolv3ai/doorloop/commit/13083405802d0373029bfc52291af4ad812f3709))
* **docs:** use top-level-await in example snippets ([5af0256](https://github.com/evolv3ai/doorloop/commit/5af0256242e32b1ee00a7235c3164c98a7988803))
* improve publish-npm script --latest tag logic ([a29aaa6](https://github.com/evolv3ai/doorloop/commit/a29aaa63e13ddf52dfde90cc8470c5a20249665b))
* **internal:** add pure annotations, make base APIResource abstract ([58c9b95](https://github.com/evolv3ai/doorloop/commit/58c9b95cfd5316549ea73bfad1020ad236102832))
* **internal:** codegen related update ([217306a](https://github.com/evolv3ai/doorloop/commit/217306a2554d658b9ebaceef841087e5526eace9))
* **internal:** fix readablestream types in node 20 ([d4938de](https://github.com/evolv3ai/doorloop/commit/d4938dedbf981c4c32e5c06d3757f2c147a58f70))
* **internal:** update jest config ([ed788bb](https://github.com/evolv3ai/doorloop/commit/ed788bb275f45f982a639dd629688f6acdbdefb5))
* make some internal functions async ([6fa6dd7](https://github.com/evolv3ai/doorloop/commit/6fa6dd727e66c0d41e45b41611ca005053dde4d5))
* **mcp:** formatting ([8821e28](https://github.com/evolv3ai/doorloop/commit/8821e28e0c51242adfa39850fa9a3cb12184ac6e))
* **mcp:** provides high-level initMcpServer function and exports known clients ([21b4f47](https://github.com/evolv3ai/doorloop/commit/21b4f47f918685a9a10b4d1e78d1031017a04812))
* **mcp:** remove duplicate assignment ([f7fbc41](https://github.com/evolv3ai/doorloop/commit/f7fbc415f1a0ed5fa94941288b537bbe995aa27a))
* **mcp:** rework imports in tools ([4fb5b65](https://github.com/evolv3ai/doorloop/commit/4fb5b65ff99f64ce2234b440abe209b936701b57))
* **readme:** update badges ([1b93b31](https://github.com/evolv3ai/doorloop/commit/1b93b31aeeec497b1afb23163de1e08f6e0c9ea9))
* **readme:** use better example snippet for undocumented params ([920961a](https://github.com/evolv3ai/doorloop/commit/920961af6358369e4924c7666a34f54e1f56daa2))
* **ts:** reorder package.json imports ([bed4047](https://github.com/evolv3ai/doorloop/commit/bed4047ae7d23385beab521b94f524152fef8280))
* update SDK settings ([0dc5563](https://github.com/evolv3ai/doorloop/commit/0dc5563ba6267edf7cdc308a5c8cbb59a2620c7c))
