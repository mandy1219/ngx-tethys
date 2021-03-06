# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [7.6.45](https://github.com/atinc/ngx-tethys/compare/7.6.44...7.6.45) (2020-04-13)



## [7.6.44](https://github.com/atinc/ngx-tethys/compare/7.6.43...7.6.44) (2020-04-11)


### Bug Fixes

* **tree:** origin tree data add checked prop ([2ec7fe1](https://github.com/atinc/ngx-tethys/commit/2ec7fe127872738c83b3d452c4d4a66ea605df32))


### Features

* **slide:** set slide width by config.width ([#605](https://github.com/atinc/ngx-tethys/issues/605)) ([cedf4f5](https://github.com/atinc/ngx-tethys/commit/cedf4f5caf2e15851d4ded2bd50a96896fa949c9)), closes [#INFR-236](https://github.com/atinc/ngx-tethys/issues/INFR-236)



## [7.6.43](https://github.com/atinc/ngx-tethys/compare/7.6.42...7.6.43) (2020-04-11)


### Bug Fixes

* **slide:** fix slide offset ([#611](https://github.com/atinc/ngx-tethys/issues/611)) ([d62b3c3](https://github.com/atinc/ngx-tethys/commit/d62b3c3980068473368205e82e0c6786a9314d19))
* modify group name font size(#INFR-262) ([4b1b1c1](https://github.com/atinc/ngx-tethys/commit/4b1b1c1aa29e9c4a641b492971fe5cf615cffc71)), closes [#INFR-262](https://github.com/atinc/ngx-tethys/issues/INFR-262)


### Features

* **grid:** add table-sm height ([#609](https://github.com/atinc/ngx-tethys/issues/609)) ([b840987](https://github.com/atinc/ngx-tethys/commit/b8409872ea031f0b6bd8a95a4688eb6d6b774eb6))



## [7.6.42](https://github.com/atinc/ngx-tethys/compare/7.6.41...7.6.42) (2020-04-09)


### Bug Fixes

* fix DOCUMENT import error ([#604](https://github.com/atinc/ngx-tethys/issues/604)) ([e1cdfb5](https://github.com/atinc/ngx-tethys/commit/e1cdfb5db71aaee961eebd76574b7ac58754d654))


### Features

* **slide:** support mode='push'/'side'/'over' #INFR-183 ([9d16543](https://github.com/atinc/ngx-tethys/commit/9d165435384353ef8ef25c3e9f7efa897f32b994)), closes [#INFR-183](https://github.com/atinc/ngx-tethys/issues/INFR-183)


### BREAKING CHANGES

* **slide:** configure THY_SLIDE_DEFAULT_CONFIG contain drawerContainer globally



## [7.6.41](https://github.com/atinc/ngx-tethys/compare/7.6.40...7.6.41) (2020-04-08)


### Bug Fixes

* **autocomplete:** fix can not detect change when onpush ([93cf9ca](https://github.com/atinc/ngx-tethys/commit/93cf9cae5752f536b03e54c6b281800545dcaa46))


### Features

* **action-menu:** automation hidden first and last divider ([#596](https://github.com/atinc/ngx-tethys/issues/596)) ([b51257e](https://github.com/atinc/ngx-tethys/commit/b51257e9917effbfc47a790a6011e47a22cb388c))
* **autocomplete:** add autocomplete component ([#600](https://github.com/atinc/ngx-tethys/issues/600)) ([c1a3a6c](https://github.com/atinc/ngx-tethys/commit/c1a3a6cbbb39a0ae4071fd706943e87e18f66e17))
* **grid:** table-sm td height initial ([#599](https://github.com/atinc/ngx-tethys/issues/599)) ([6f920c4](https://github.com/atinc/ngx-tethys/commit/6f920c4113f273e187e929a4bc4ed57a171f9e49))



## [7.6.40](https://github.com/atinc/ngx-tethys/compare/7.6.39...7.6.40) (2020-04-02)


### Bug Fixes

* #INF-526 恢复修改badge-section ([0470bc7](https://github.com/atinc/ngx-tethys/commit/0470bc7284221d1f4ea9cfd9f49183b14e88b9c5)), closes [#INF-526](https://github.com/atinc/ngx-tethys/issues/INF-526)
* #INF-526 恢复修改badge-section ([1e9e274](https://github.com/atinc/ngx-tethys/commit/1e9e274cf6497b9d17e398b288ce1935aaacafef)), closes [#INF-526](https://github.com/atinc/ngx-tethys/issues/INF-526)
* **tree:** fix expand status when tree nodes changed #INFR-189 ([26634fd](https://github.com/atinc/ngx-tethys/commit/26634fd44052e9593ced81280eed684838df8fe4)), closes [#INFR-189](https://github.com/atinc/ngx-tethys/issues/INFR-189)
* **tree:** sync last selecteds when data changed ([ccb5fbf](https://github.com/atinc/ngx-tethys/commit/ccb5fbf2b1d706f3152b8edc23155af934f9df6b))


### Features

* **date-picker:** ngModel support number and add directive validate ([2525d58](https://github.com/atinc/ngx-tethys/commit/2525d58ffff5b0abad5611b9593c2a9c6ce9073a))
* #INF-526 add badge test and use docs ([3cd6c0b](https://github.com/atinc/ngx-tethys/commit/3cd6c0b3d9633526861089860d586ce6306ccb9e)), closes [#INF-526](https://github.com/atinc/ngx-tethys/issues/INF-526)
* #INF-526 add badge use docs ([22df3fd](https://github.com/atinc/ngx-tethys/commit/22df3fd3c759f032eb5cca4b5e3523f5ad4f163f)), closes [#INF-526](https://github.com/atinc/ngx-tethys/issues/INF-526)
* **tree:** tree node support disabled class ([#586](https://github.com/atinc/ngx-tethys/issues/586)) ([92db08b](https://github.com/atinc/ngx-tethys/commit/92db08b2a79a99fc41750efa7196f25d3176573c))



## [7.6.39](https://github.com/atinc/ngx-tethys/compare/7.6.38...7.6.39) (2020-03-28)


### Bug Fixes

* **progress:** fix progress bar style when value is 0 ([537063e](https://github.com/atinc/ngx-tethys/commit/537063e25033e39f6721a608cff4c862a8e95be8))



## [7.6.38](https://github.com/atinc/ngx-tethys/compare/7.6.37...7.6.38) (2020-03-25)


### Reverts

* Revert " support fold breadcrumb item #INF-419 (#561)" (#575) ([1c84129](https://github.com/atinc/ngx-tethys/commit/1c8412916893c3c2acb45bdeb69ef26280085125)), closes [#INF-419](https://github.com/atinc/ngx-tethys/issues/INF-419) [#561](https://github.com/atinc/ngx-tethys/issues/561) [#575](https://github.com/atinc/ngx-tethys/issues/575)



## [7.6.37](https://github.com/atinc/ngx-tethys/compare/7.6.36...7.6.37) (2020-03-24)


### Bug Fixes

* **overlay:** add clearTimer in overlay directive ([#570](https://github.com/atinc/ngx-tethys/issues/570)) ([bb00e96](https://github.com/atinc/ngx-tethys/commit/bb00e960d2ffee2310053787827ab6c9e500b98c))
* **popover:** fix popover close error ([4e97c74](https://github.com/atinc/ngx-tethys/commit/4e97c741d2a95e9e73bdfe3f82bedffb12616116))


### Features

* **util:** tiny date add fromUnixTime and compare method #INF-529 ([8bff975](https://github.com/atinc/ngx-tethys/commit/8bff975e6b89490bc0c4460791059a8b6d73c4f6)), closes [#INF-529](https://github.com/atinc/ngx-tethys/issues/INF-529)



## [7.6.36](https://github.com/atinc/ngx-tethys/compare/7.6.35...7.6.36) (2020-03-19)


### Bug Fixes

* **popover:** add showTimeoutId and hideTimeoutId in base overlay ([#564](https://github.com/atinc/ngx-tethys/issues/564)) ([86fc5c9](https://github.com/atinc/ngx-tethys/commit/86fc5c9ff4fe1e8680468b5ca96e78e6b340940b))



## [7.6.35](https://github.com/atinc/ngx-tethys/compare/7.6.34...7.6.35) (2020-03-17)


### Bug Fixes

* **statistic:** set title and suffix font-size to 14px ([834e06d](https://github.com/atinc/ngx-tethys/commit/834e06da2b8d34479d87d1d086740a10f77b6add))
* **statistic:** set title and suffix font-size to 14px #INF-516 ([a81fe22](https://github.com/atinc/ngx-tethys/commit/a81fe22efbe2f1974fa32f802e5ecf501432e23f)), closes [#INF-516](https://github.com/atinc/ngx-tethys/issues/INF-516)
* **tree-select:** set expand icon line-height:1 ([d12ba08](https://github.com/atinc/ngx-tethys/commit/d12ba0886fc9be5a51ff728611deee368091a282))


### Features

* **popover:** add thyShowDelay in popover directive #INF-511 ([#560](https://github.com/atinc/ngx-tethys/issues/560)) ([ecc0f65](https://github.com/atinc/ngx-tethys/commit/ecc0f656ea6c04669ab93a8e699a354d5f15e1c1)), closes [#INF-511](https://github.com/atinc/ngx-tethys/issues/INF-511)



## [7.6.34](https://github.com/atinc/ngx-tethys/compare/7.6.33...7.6.34) (2020-03-14)


### Bug Fixes

* **popover:** add thyConfig in popover ([a22897d](https://github.com/atinc/ngx-tethys/commit/a22897de87ded82e01ff1cca5af67a12fb51ff6a))
* **popover:** fix ThyPopoverConfig import error ([e29c7e3](https://github.com/atinc/ngx-tethys/commit/e29c7e3ca82453c550992eebcdf4a4e06d0bf148))
* **statistic:** set statistic number font-family ([#550](https://github.com/atinc/ngx-tethys/issues/550)) ([1207489](https://github.com/atinc/ngx-tethys/commit/120748973bf2ec79dd2b56fee6fca6e237e0d77a))



## [7.6.33](https://github.com/atinc/ngx-tethys/compare/7.6.32...7.6.33) (2020-03-12)


### Bug Fixes

* **nav:** nav-thirdly should always have no border-bottom #INF-497 ([#547](https://github.com/atinc/ngx-tethys/issues/547)) ([8c7e73c](https://github.com/atinc/ngx-tethys/commit/8c7e73cdf9e8ae2452557c152b2f8d51e2876327)), closes [#INF-497](https://github.com/atinc/ngx-tethys/issues/INF-497)



## [7.6.32](https://github.com/atinc/ngx-tethys/compare/7.6.31...7.6.32) (2020-03-09)


### Bug Fixes

* **copy:** change demo url ([f2a7e59](https://github.com/atinc/ngx-tethys/commit/f2a7e59c2dcf0af2867915ea4006a7f5da3c5a64))
* **nav:** set border width avoid to bounce when hover or active #INF-478 ([587c9c7](https://github.com/atinc/ngx-tethys/commit/587c9c7f76e72c9813bc589f71c079cf1752250a)), closes [#INF-478](https://github.com/atinc/ngx-tethys/issues/INF-478) [#INF-478](https://github.com/atinc/ngx-tethys/issues/INF-478) [#INF-478](https://github.com/atinc/ngx-tethys/issues/INF-478)
* **statistic:** parametertype name add component name ([9786401](https://github.com/atinc/ngx-tethys/commit/9786401459e8bfa9d8ff59913571142c4a58c861))
* **statistic:** show value when value is 0 ([0faeb63](https://github.com/atinc/ngx-tethys/commit/0faeb63054dc9065c7d483504a20c5592ed6824d))
* **time-picker:** fix thy-time-picker style ([#538](https://github.com/atinc/ngx-tethys/issues/538)) ([61cafaa](https://github.com/atinc/ngx-tethys/commit/61cafaaca18bc12be94057ef6aace1d2cc338b17))
* **tree:** fix tree border height when thyType is sm ([#542](https://github.com/atinc/ngx-tethys/issues/542)) ([b9f4a88](https://github.com/atinc/ngx-tethys/commit/b9f4a88cbe9953b6dec81a2a9f27e706f89dd5f2))
* **vote:** parametertype name add component name ([930c841](https://github.com/atinc/ngx-tethys/commit/930c841980fe2f3aabcc0bfdb3951f81173dbaa8))


### Features

* **statistic:** support thyTitlePosition to set titlt position ([#539](https://github.com/atinc/ngx-tethys/issues/539)) ([e8d9502](https://github.com/atinc/ngx-tethys/commit/e8d9502e1381a51a833a5b571aa51a200cb4284f))



## [7.6.31](https://github.com/atinc/ngx-tethys/compare/7.6.30...7.6.31) (2020-02-28)


### Bug Fixes

* revert thy-content style ([9c3995f](https://github.com/atinc/ngx-tethys/commit/9c3995f0f8e3efa6b3d8f6be9cd1dbe1bd9525ff))
* **thy-menu:** keep active style when hover occurs ([3f7d21c](https://github.com/atinc/ngx-tethys/commit/3f7d21cbeccd35f7cdc23e1f1f04bcde7b9ddfb3))
* **tootip:** hide after touch ([188e1ed](https://github.com/atinc/ngx-tethys/commit/188e1edee7b7ec1df0012bfe268cc30b256f8df2))


### Features

* **thy-icon-nav:** #INF-448 thyType 支持无间隔 ([6a8a7f3](https://github.com/atinc/ngx-tethys/commit/6a8a7f302bb5352bd17aaead3849c0b07cb37c54)), closes [#INF-448](https://github.com/atinc/ngx-tethys/issues/INF-448)
* **thy-popover:** support outside closable(#INF-457) ([ea204d3](https://github.com/atinc/ngx-tethys/commit/ea204d3abae115c39df16e51b93fa56f5b03618d)), closes [#INF-457](https://github.com/atinc/ngx-tethys/issues/INF-457)



## [7.6.30](https://github.com/atinc/ngx-tethys/compare/7.6.29...7.6.30) (2020-02-26)


### Bug Fixes

* **thy-header:** operation middle and content overflow hidden(#INF-440) ([9e51fe0](https://github.com/atinc/ngx-tethys/commit/9e51fe0c546c01ae0b65267b76f5b01662bd21f4)), closes [#INF-440](https://github.com/atinc/ngx-tethys/issues/INF-440)


### Features

* **core:** add logger contains warn and warnDeprecation ([4db84a8](https://github.com/atinc/ngx-tethys/commit/4db84a82483be1b3fcfc9923f7e8bdda4df8fcb9))
* **thy-statistic:** add thy-statistic component ([#521](https://github.com/atinc/ngx-tethys/issues/521)) ([f53f3f0](https://github.com/atinc/ngx-tethys/commit/f53f3f0b782c7d790e42638d1dd8e99ab8d46f8d))
* **transfer:** support render content ref #PLN-154#INF-416#INF-388# ([#525](https://github.com/atinc/ngx-tethys/issues/525)) ([aa1f8d8](https://github.com/atinc/ngx-tethys/commit/aa1f8d8f1d46e93bc68c0405f88e394d5c98992e)), closes [#PLN-154](https://github.com/atinc/ngx-tethys/issues/PLN-154) [#INF-416](https://github.com/atinc/ngx-tethys/issues/INF-416) [#INF-388](https://github.com/atinc/ngx-tethys/issues/INF-388) [#PLN-154](https://github.com/atinc/ngx-tethys/issues/PLN-154) [#INF-416](https://github.com/atinc/ngx-tethys/issues/INF-416) [#INF-388](https://github.com/atinc/ngx-tethys/issues/INF-388)



<a name="7.6.29"></a>

## [7.6.29](https://github.com/atinc/ngx-tethys/compare/v7.6.24...v7.6.29) (2020-02-11)


### Bug Fixes

* fix select can not auto close when multiple select(#INF-300) ([7487e1f](https://github.com/atinc/ngx-tethys/commit/7487e1f)), closes [#INF-300](https://github.com/atinc/ngx-tethys/issues/INF-300)
* **button:** fix >ng8 use ngx-tethys build [@extend](https://github.com/extend) .x.x error #INF-390 ([eccc944](https://github.com/atinc/ngx-tethys/commit/eccc944)), closes [#INF-390](https://github.com/atinc/ngx-tethys/issues/INF-390)
* **button:** icon-danger-weak include btn-link-variant mixin ([#517](https://github.com/atinc/ngx-tethys/issues/517)) ([14e95d7](https://github.com/atinc/ngx-tethys/commit/14e95d7))
* **mention:** fix instert value in next line bug ([9056844](https://github.com/atinc/ngx-tethys/commit/9056844))
* **mention:** fix popover position when data changed ([0651d3d](https://github.com/atinc/ngx-tethys/commit/0651d3d))
* **popover:** fix DOCUMENT import error ([#496](https://github.com/atinc/ngx-tethys/issues/496)) ([1e15f6c](https://github.com/atinc/ngx-tethys/commit/1e15f6c))
* **tree-select:** remove min height  #AE-849 ([8539c41](https://github.com/atinc/ngx-tethys/commit/8539c41)), closes [#AE-849](https://github.com/atinc/ngx-tethys/issues/AE-849)
* **uitl:** set entities default value when entities is undefinde ([#509](https://github.com/atinc/ngx-tethys/issues/509)) ([9d230bc](https://github.com/atinc/ngx-tethys/commit/9d230bc))


### Features

* **date-picker:** add thyDatePicker module (#INF-125) ([b11df46](https://github.com/atinc/ngx-tethys/commit/b11df46)), closes [#INF-125](https://github.com/atinc/ngx-tethys/issues/INF-125)
* **mention:** mention support anto close ([9632c32](https://github.com/atinc/ngx-tethys/commit/9632c32))
* **time-picker:** add thyTimePickerModule #INF-332 ([#512](https://github.com/atinc/ngx-tethys/issues/512)) ([c639e19](https://github.com/atinc/ngx-tethys/commit/c639e19)), closes [#INF-332](https://github.com/atinc/ngx-tethys/issues/INF-332) [#INF-332](https://github.com/atinc/ngx-tethys/issues/INF-332)
* **tree-select:** support set icon type #AE-626 ([b86fd9c](https://github.com/atinc/ngx-tethys/commit/b86fd9c)), closes [#AE-626](https://github.com/atinc/ngx-tethys/issues/AE-626)



## [7.6.28](https://github.com/atinc/ngx-tethys/compare/7.6.24...7.6.28) (2020-02-10)


### Bug Fixes

* **button:** fix >ng8 use ngx-tethys build [@extend](https://github.com/extend) .x.x error #INF-390 ([eccc944](https://github.com/atinc/ngx-tethys/commit/eccc944)), closes [#INF-390](https://github.com/atinc/ngx-tethys/issues/INF-390)
* **mention:** fix instert value in next line bug ([9056844](https://github.com/atinc/ngx-tethys/commit/9056844))
* **mention:** fix popover position when data changed ([0651d3d](https://github.com/atinc/ngx-tethys/commit/0651d3d))
* **popover:** fix DOCUMENT import error ([#496](https://github.com/atinc/ngx-tethys/issues/496)) ([1e15f6c](https://github.com/atinc/ngx-tethys/commit/1e15f6c))
* **tree-select:** remove min height  #AE-849 ([8539c41](https://github.com/atinc/ngx-tethys/commit/8539c41)), closes [#AE-849](https://github.com/atinc/ngx-tethys/issues/AE-849)
* **uitl:** set entities default value when entities is undefinde ([#509](https://github.com/atinc/ngx-tethys/issues/509)) ([9d230bc](https://github.com/atinc/ngx-tethys/commit/9d230bc))
* fix select can not auto close when multiple select(#INF-300) ([7487e1f](https://github.com/atinc/ngx-tethys/commit/7487e1f)), closes [#INF-300](https://github.com/atinc/ngx-tethys/issues/INF-300)


### Features

* **date-picker:** add thyDatePicker module (#INF-125) ([b11df46](https://github.com/atinc/ngx-tethys/commit/b11df46)), closes [#INF-125](https://github.com/atinc/ngx-tethys/issues/INF-125)
* **mention:** mention support anto close ([9632c32](https://github.com/atinc/ngx-tethys/commit/9632c32))
* **time-picker:** add thyTimePickerModule #INF-332 ([#512](https://github.com/atinc/ngx-tethys/issues/512)) ([c639e19](https://github.com/atinc/ngx-tethys/commit/c639e19)), closes [#INF-332](https://github.com/atinc/ngx-tethys/issues/INF-332) [#INF-332](https://github.com/atinc/ngx-tethys/issues/INF-332)
* **tree-select:** support set icon type #AE-626 ([b86fd9c](https://github.com/atinc/ngx-tethys/commit/b86fd9c)), closes [#AE-626](https://github.com/atinc/ngx-tethys/issues/AE-626)



## [7.6.27](https://github.com/atinc/ngx-tethys/compare/7.6.24...7.6.27) (2020-02-07)


### Bug Fixes

* fix select can not auto close when multiple select(#INF-300) ([7487e1f](https://github.com/atinc/ngx-tethys/commit/7487e1f)), closes [#INF-300](https://github.com/atinc/ngx-tethys/issues/INF-300)
* **mention:** fix instert value in next line bug ([9056844](https://github.com/atinc/ngx-tethys/commit/9056844))
* **mention:** fix popover position when data changed ([0651d3d](https://github.com/atinc/ngx-tethys/commit/0651d3d))
* **popover:** fix DOCUMENT import error ([#496](https://github.com/atinc/ngx-tethys/issues/496)) ([1e15f6c](https://github.com/atinc/ngx-tethys/commit/1e15f6c))
* **tree-select:** remove min height  #AE-849 ([8539c41](https://github.com/atinc/ngx-tethys/commit/8539c41)), closes [#AE-849](https://github.com/atinc/ngx-tethys/issues/AE-849)


### Features

* **date-picker:** add thyDatePicker module (#INF-125) ([b11df46](https://github.com/atinc/ngx-tethys/commit/b11df46)), closes [#INF-125](https://github.com/atinc/ngx-tethys/issues/INF-125)
* **mention:** mention support anto close ([9632c32](https://github.com/atinc/ngx-tethys/commit/9632c32))



## [7.6.26](https://github.com/atinc/ngx-tethys/compare/7.6.24...7.6.26) (2020-01-16)


### Bug Fixes

* fix select can not auto close when multiple select(#INF-300) ([7487e1f](https://github.com/atinc/ngx-tethys/commit/7487e1f)), closes [#INF-300](https://github.com/atinc/ngx-tethys/issues/INF-300)
* **mention:** fix instert value in next line bug ([9056844](https://github.com/atinc/ngx-tethys/commit/9056844))
* **mention:** fix popover position when data changed ([0651d3d](https://github.com/atinc/ngx-tethys/commit/0651d3d))
* **popover:** fix DOCUMENT import error ([#496](https://github.com/atinc/ngx-tethys/issues/496)) ([1e15f6c](https://github.com/atinc/ngx-tethys/commit/1e15f6c))


### Features

* **mention:** mention support anto close ([9632c32](https://github.com/atinc/ngx-tethys/commit/9632c32))



## [7.6.25](https://github.com/atinc/ngx-tethys/compare/7.6.24...7.6.25) (2020-01-13)


### Bug Fixes

* fix select can not auto close when multiple select(#INF-300) ([7487e1f](https://github.com/atinc/ngx-tethys/commit/7487e1f)), closes [#INF-300](https://github.com/atinc/ngx-tethys/issues/INF-300)
* **popover:** fix DOCUMENT import error ([ad2c6c0](https://github.com/atinc/ngx-tethys/commit/ad2c6c0))



## [7.6.24](https://github.com/atinc/ngx-tethys/compare/7.6.23...7.6.24) (2020-01-13)


### Bug Fixes

* **vote:** vote background opacity to 0.1 ([#492](https://github.com/atinc/ngx-tethys/issues/492)) ([aa7375e](https://github.com/atinc/ngx-tethys/commit/aa7375e))


### Features

* **popover:** popover use new  FlexibleConnectedPositionStrategy ([cacc7a3](https://github.com/atinc/ngx-tethys/commit/cacc7a3))



## [7.6.23](https://github.com/atinc/ngx-tethys/compare/7.6.22...7.6.23) (2020-01-10)


### Bug Fixes

* **list:** replace icon ([#489](https://github.com/atinc/ngx-tethys/issues/489)) ([af14511](https://github.com/atinc/ngx-tethys/commit/af14511))


### Features

* **mention:** position self-adapte #INF-280 ([#490](https://github.com/atinc/ngx-tethys/issues/490)) ([9475b7d](https://github.com/atinc/ngx-tethys/commit/9475b7d)), closes [#INF-280](https://github.com/atinc/ngx-tethys/issues/INF-280)



## [7.6.22](https://github.com/atinc/ngx-tethys/compare/7.6.21...7.6.22) (2020-01-06)


### Features

* **mention:**  support popover class and select event ([0c4cf41](https://github.com/atinc/ngx-tethys/commit/0c4cf41))
* **mention:** support popover class and select event ([#487](https://github.com/atinc/ngx-tethys/issues/487)) ([e236b2c](https://github.com/atinc/ngx-tethys/commit/e236b2c))



## [7.6.21](https://github.com/atinc/ngx-tethys/compare/7.6.20...7.6.21) (2020-01-03)


### Bug Fixes

* export copy ([#484](https://github.com/atinc/ngx-tethys/issues/484)) ([6a3659a](https://github.com/atinc/ngx-tethys/commit/6a3659a))


### Features

* **mention:** add mention first ([#481](https://github.com/atinc/ngx-tethys/issues/481)) ([534c05c](https://github.com/atinc/ngx-tethys/commit/534c05c))
* **mention:** support remote search ([#485](https://github.com/atinc/ngx-tethys/issues/485)) ([3e2cba1](https://github.com/atinc/ngx-tethys/commit/3e2cba1))
* **vote:** support img vote ([#482](https://github.com/atinc/ngx-tethys/issues/482)) ([c0093f6](https://github.com/atinc/ngx-tethys/commit/c0093f6))



## [7.6.20](https://github.com/atinc/ngx-tethys/compare/7.6.19...7.6.20) (2019-12-30)



## [7.6.19](https://github.com/atinc/ngx-tethys/compare/7.6.17...7.6.19) (2019-12-27)


### Bug Fixes

* **button-icon:** button icon color test ([#476](https://github.com/atinc/ngx-tethys/issues/476)) ([c6cc1be](https://github.com/atinc/ngx-tethys/commit/c6cc1be))
* **button-icon:** support color ([#472](https://github.com/atinc/ngx-tethys/issues/472)) ([d226bcd](https://github.com/atinc/ngx-tethys/commit/d226bcd))
* **list:** modify key of defaultActive, add test ([c9c99a2](https://github.com/atinc/ngx-tethys/commit/c9c99a2))
* **vote:** add weak to thytype ([#474](https://github.com/atinc/ngx-tethys/issues/474)) ([2ceb18e](https://github.com/atinc/ngx-tethys/commit/2ceb18e))
* **vote:** support weak ([#470](https://github.com/atinc/ngx-tethys/issues/470)) ([2c7c471](https://github.com/atinc/ngx-tethys/commit/2c7c471))


### Features

* **list:** add thyDefaultHover to hover first ([8c2cd34](https://github.com/atinc/ngx-tethys/commit/8c2cd34))
* **list:** add thyDefaultHover to hover first ([#466](https://github.com/atinc/ngx-tethys/issues/466)) ([230ebdf](https://github.com/atinc/ngx-tethys/commit/230ebdf))



## [7.6.18](https://github.com/atinc/ngx-tethys/compare/7.6.17...7.6.18) (2019-12-27)


### Bug Fixes

* **button-icon:** support color ([#472](https://github.com/atinc/ngx-tethys/issues/472)) ([d226bcd](https://github.com/atinc/ngx-tethys/commit/d226bcd))
* **vote:** support weak ([#470](https://github.com/atinc/ngx-tethys/issues/470)) ([2c7c471](https://github.com/atinc/ngx-tethys/commit/2c7c471))


### Features

* **list:** add thyDefaultHover to hover first ([#466](https://github.com/atinc/ngx-tethys/issues/466)) ([230ebdf](https://github.com/atinc/ngx-tethys/commit/230ebdf))



## [7.6.17](https://github.com/atinc/ngx-tethys/compare/7.6.14...7.6.17) (2019-12-25)


### Bug Fixes

* **checkbox:** change checkbox demo ([#463](https://github.com/atinc/ngx-tethys/issues/463)) ([ad576aa](https://github.com/atinc/ngx-tethys/commit/ad576aa))
* **checkbox:** change checkbox transition ([#465](https://github.com/atinc/ngx-tethys/issues/465)) ([30d3e09](https://github.com/atinc/ngx-tethys/commit/30d3e09))
* **grid:** fix grid set selections error when unselect ([0c18db3](https://github.com/atinc/ngx-tethys/commit/0c18db3))
* **layout:** fix can't scroll to bottom in chrom 79.0.x #INF-262 ([c70e380](https://github.com/atinc/ngx-tethys/commit/c70e380)), closes [#INF-262](https://github.com/atinc/ngx-tethys/issues/INF-262)
* **list:** change grid list option styles ([e0e6d33](https://github.com/atinc/ngx-tethys/commit/e0e6d33))
* **stepper:** change step header line style ([23f58ac](https://github.com/atinc/ngx-tethys/commit/23f58ac))
* **stepper:** change step line color #CMN-810 ([176ae72](https://github.com/atinc/ngx-tethys/commit/176ae72)), closes [#CMN-810](https://github.com/atinc/ngx-tethys/issues/CMN-810)
* **tree:** fix check state error ([bd3cfa6](https://github.com/atinc/ngx-tethys/commit/bd3cfa6))
* **tree:** fix set default key error when node is null ([88a1435](https://github.com/atinc/ngx-tethys/commit/88a1435))


### Features

* **checbox:** add thyIndeterminate in checkbox #INF-269 ([20daea8](https://github.com/atinc/ngx-tethys/commit/20daea8)), closes [#INF-269](https://github.com/atinc/ngx-tethys/issues/INF-269)
* **tree:** support default selected keys prop ([02a0c03](https://github.com/atinc/ngx-tethys/commit/02a0c03))
* **tree:** support tree node check ([88b2948](https://github.com/atinc/ngx-tethys/commit/88b2948))
* **tree:** support tree node check ([#464](https://github.com/atinc/ngx-tethys/issues/464)) ([3a48a1a](https://github.com/atinc/ngx-tethys/commit/3a48a1a)), closes [#CMN-810](https://github.com/atinc/ngx-tethys/issues/CMN-810)
* **vote:** add vote component #INF-169 ([#458](https://github.com/atinc/ngx-tethys/issues/458)) ([62d77b3](https://github.com/atinc/ngx-tethys/commit/62d77b3)), closes [#INF-169](https://github.com/atinc/ngx-tethys/issues/INF-169) [#INF-169](https://github.com/atinc/ngx-tethys/issues/INF-169)



## [7.6.16](https://github.com/atinc/ngx-tethys/compare/7.6.14...7.6.16) (2019-12-24)


### Bug Fixes

* **layout:** fix can't scroll to bottom in chrom 79.0.x #INF-262 ([c70e380](https://github.com/atinc/ngx-tethys/commit/c70e380)), closes [#INF-262](https://github.com/atinc/ngx-tethys/issues/INF-262)


### Features

* **checbox:** add thyIndeterminate in checkbox #INF-269 ([20daea8](https://github.com/atinc/ngx-tethys/commit/20daea8)), closes [#INF-269](https://github.com/atinc/ngx-tethys/issues/INF-269)
* **vote:** add vote component #INF-169 ([#458](https://github.com/atinc/ngx-tethys/issues/458)) ([62d77b3](https://github.com/atinc/ngx-tethys/commit/62d77b3)), closes [#INF-169](https://github.com/atinc/ngx-tethys/issues/INF-169) [#INF-169](https://github.com/atinc/ngx-tethys/issues/INF-169)



## [7.6.14](https://github.com/atinc/ngx-tethys/compare/7.6.12...7.6.14) (2019-12-16)


### Bug Fixes

* **dialog:** change dialog header title font-weight to 400 #INF-254 ([#453](https://github.com/atinc/ngx-tethys/issues/453)) ([8868a3c](https://github.com/atinc/ngx-tethys/commit/8868a3c)), closes [#INF-254](https://github.com/atinc/ngx-tethys/issues/INF-254) [#INF-254](https://github.com/atinc/ngx-tethys/issues/INF-254) [#INF-254](https://github.com/atinc/ngx-tethys/issues/INF-254)
* **list:** change grid list option styles ([e0e6d33](https://github.com/atinc/ngx-tethys/commit/e0e6d33))
* **markdown:** fix markdown new line#CMN-801 ([#455](https://github.com/atinc/ngx-tethys/issues/455)) ([eacab2d](https://github.com/atinc/ngx-tethys/commit/eacab2d)), closes [line#CMN-801](https://github.com/line/issues/CMN-801)
* **stepper:** change step header line style ([23f58ac](https://github.com/atinc/ngx-tethys/commit/23f58ac))
* default thyCopyText ([adaf5db](https://github.com/atinc/ngx-tethys/commit/adaf5db))
* **stepper:** change step line color #CMN-810 ([176ae72](https://github.com/atinc/ngx-tethys/commit/176ae72)), closes [#CMN-810](https://github.com/atinc/ngx-tethys/issues/CMN-810)
 


### Features

* **result:** add result component ([#451](https://github.com/atinc/ngx-tethys/issues/451)) ([811c2b2](https://github.com/atinc/ngx-tethys/commit/811c2b2))



## [7.6.13](https://github.com/atinc/ngx-tethys/compare/7.6.12...7.6.13) (2019-12-11)


### Bug Fixes

* add thycopy event ThyCopyEvent ([996d3d9](https://github.com/atinc/ngx-tethys/commit/996d3d9))
* add thyCopyNotifyText to show notify ([aecaa65](https://github.com/atinc/ngx-tethys/commit/aecaa65))
* add ThyNotifyService provider ([bcf583f](https://github.com/atinc/ngx-tethys/commit/bcf583f))
* add ThyNotifyService provider ([e26c3bd](https://github.com/atinc/ngx-tethys/commit/e26c3bd))
* copy input() name ([22d428d](https://github.com/atinc/ngx-tethys/commit/22d428d))
* copy menu and input() name ([9b09891](https://github.com/atinc/ngx-tethys/commit/9b09891))
* copy test tick 4500 wait notify ([60aeb26](https://github.com/atinc/ngx-tethys/commit/60aeb26))
* copy test tick 4500 wait notify ([6063788](https://github.com/atinc/ngx-tethys/commit/6063788))
* copy tooltips  click to hover ([107a7dc](https://github.com/atinc/ngx-tethys/commit/107a7dc))
* default thyCopyText ([adaf5db](https://github.com/atinc/ngx-tethys/commit/adaf5db))
* fix test ts ([972185c](https://github.com/atinc/ngx-tethys/commit/972185c))
* remove parameter ([5a15c9f](https://github.com/atinc/ngx-tethys/commit/5a15c9f))
* remove vote ([81ff6db](https://github.com/atinc/ngx-tethys/commit/81ff6db))
* thy-copy test add ThyNotifyModule ([2564d65](https://github.com/atinc/ngx-tethys/commit/2564d65))
* thyCopyNotifyText to thyCopySuccessText ([adce370](https://github.com/atinc/ngx-tethys/commit/adce370))
* **action-menu:** add action menu variables in variables scss ([cf1aebc](https://github.com/atinc/ngx-tethys/commit/cf1aebc))
* **action-menu:** add group api parameters ([71b6b3e](https://github.com/atinc/ngx-tethys/commit/71b6b3e))
* **action-menu:** change styxName to styxTitle ([732059a](https://github.com/atinc/ngx-tethys/commit/732059a))


### Features

* copy ([f3f7ba3](https://github.com/atinc/ngx-tethys/commit/f3f7ba3))
* **action-menu:** add group type and divider type #INF-194 ([57ede21](https://github.com/atinc/ngx-tethys/commit/57ede21)), closes [#INF-194](https://github.com/atinc/ngx-tethys/issues/INF-194)
* **action-menu:** add thy-action-menu-group component ([9232118](https://github.com/atinc/ngx-tethys/commit/9232118))
* **copy:** add ThyCopyDirective ([ecf3c71](https://github.com/atinc/ngx-tethys/commit/ecf3c71))
* **thy-copy:** copy text when click ([e2b26bb](https://github.com/atinc/ngx-tethys/commit/e2b26bb))



## [7.6.12](https://github.com/atinc/ngx-tethys/compare/7.6.10...7.6.12) (2019-11-29)


### Bug Fixes

* **list:** change size varible ([1639836](https://github.com/atinc/ngx-tethys/commit/1639836))


### Features

* **list:** selection-list support thySize ([12e88d2](https://github.com/atinc/ngx-tethys/commit/12e88d2))
* **list:** support list sm size#INF-178 ([01b02a6](https://github.com/atinc/ngx-tethys/commit/01b02a6)), closes [size#INF-178](https://github.com/size/issues/INF-178)



## [7.6.11](https://github.com/atinc/ngx-tethys/compare/7.6.10...7.6.11) (2019-11-28)


### Bug Fixes

* **list:** change size varible ([1639836](https://github.com/atinc/ngx-tethys/commit/1639836))


### Features

* **list:** support list sm size#INF-178 ([01b02a6](https://github.com/atinc/ngx-tethys/commit/01b02a6)), closes [size#INF-178](https://github.com/size/issues/INF-178)



## [7.6.10](https://github.com/atinc/ngx-tethys/compare/7.6.7...7.6.10) (2019-11-28)


### Bug Fixes

* **gride-section:** remove () ([88c8cec](https://github.com/atinc/ngx-tethys/commit/88c8cec))
* **util:** fix util  match dom error when IE ([2972cc9](https://github.com/atinc/ngx-tethys/commit/2972cc9))


### Features

* **alert:** add type, success-week and warning-week and danger-week ([9a8319e](https://github.com/atinc/ngx-tethys/commit/9a8319e))
* **datepicker:** datepicker support default select value ([e0a4a1b](https://github.com/atinc/ngx-tethys/commit/e0a4a1b))
* **grid:** add thyShowHeader to control thread show or hide ([64bea19](https://github.com/atinc/ngx-tethys/commit/64bea19))
* **grid:** add thyShowHeader to control thread show or hide ([bbd1f85](https://github.com/atinc/ngx-tethys/commit/bbd1f85))
* **popover:** popover config add scroll stragety ([1776ed3](https://github.com/atinc/ngx-tethys/commit/1776ed3))



## [7.6.9](https://github.com/atinc/ngx-tethys/compare/7.6.7...7.6.9) (2019-11-20)


### Bug Fixes

* **util:** fix util  match dom error when IE ([2972cc9](https://github.com/atinc/ngx-tethys/commit/2972cc9))


### Features

* **popover:** popover config add scroll stragety ([1776ed3](https://github.com/atinc/ngx-tethys/commit/1776ed3))



## [7.6.8](https://github.com/atinc/ngx-tethys/compare/7.6.7...7.6.8) (2019-11-20)


### Features

* **popover:** popover config add scroll stragety ([1776ed3](https://github.com/atinc/ngx-tethys/commit/1776ed3))



## [7.6.7](https://github.com/atinc/ngx-tethys/compare/7.6.2...7.6.7) (2019-11-15)


### Bug Fixes

* **cascader:** fix clear style ([09e0080](https://github.com/atinc/ngx-tethys/commit/09e0080))
* **markdown:** add thyBypassSecurityTrustHtml without sanitize ([8ffcfa0](https://github.com/atinc/ngx-tethys/commit/8ffcfa0))
* **markdown:** use ng dom sanitizer sanitize html fix xss #CMN-477 ([67eefa3](https://github.com/atinc/ngx-tethys/commit/67eefa3)), closes [#CMN-477](https://github.com/atinc/ngx-tethys/issues/CMN-477)


### Features

* **avatar:** update avatar bg colors ([94ed242](https://github.com/atinc/ngx-tethys/commit/94ed242))
* **icon:** icon support safari ([ebbb53b](https://github.com/atinc/ngx-tethys/commit/ebbb53b))
* **icon:** icon support safari ([4deda76](https://github.com/atinc/ngx-tethys/commit/4deda76))



## [7.6.6](https://github.com/atinc/ngx-tethys/compare/7.6.2...7.6.6) (2019-11-15)


### Bug Fixes

* **cascader:** fix clear style ([09e0080](https://github.com/atinc/ngx-tethys/commit/09e0080))
* **markdown:** use ng dom sanitizer sanitize html fix xss #CMN-477 ([67eefa3](https://github.com/atinc/ngx-tethys/commit/67eefa3)), closes [#CMN-477](https://github.com/atinc/ngx-tethys/issues/CMN-477)


### Features

* **avatar:** update avatar bg colors ([94ed242](https://github.com/atinc/ngx-tethys/commit/94ed242))
* **icon:** icon support safari ([ebbb53b](https://github.com/atinc/ngx-tethys/commit/ebbb53b))
* **icon:** icon support safari ([4deda76](https://github.com/atinc/ngx-tethys/commit/4deda76))




## [7.6.5](https://github.com/atinc/ngx-tethys/compare/7.6.2...7.6.5) (2019-11-15)


### Bug Fixes

* **cascader:** fix clear style ([09e0080](https://github.com/atinc/ngx-tethys/commit/09e0080))
* **markdown:** use ng dom sanitizer sanitize html fix xss #CMN-477 ([67eefa3](https://github.com/atinc/ngx-tethys/commit/67eefa3)), closes [#CMN-477](https://github.com/atinc/ngx-tethys/issues/CMN-477)


### Features

* **avatar:** update avatar bg colors ([94ed242](https://github.com/atinc/ngx-tethys/commit/94ed242))
* **icon:** icon support safari ([ebbb53b](https://github.com/atinc/ngx-tethys/commit/ebbb53b))
* **icon:** icon support safari ([4deda76](https://github.com/atinc/ngx-tethys/commit/4deda76))



## [7.6.4](https://github.com/atinc/ngx-tethys/compare/7.6.2...7.6.4) (2019-11-15)


### Bug Fixes

* **cascader:** fix clear style ([09e0080](https://github.com/atinc/ngx-tethys/commit/09e0080))


### Features

* **avatar:** update avatar bg colors ([94ed242](https://github.com/atinc/ngx-tethys/commit/94ed242))
* **icon:** icon support safari ([ebbb53b](https://github.com/atinc/ngx-tethys/commit/ebbb53b))
* **icon:** icon support safari ([4deda76](https://github.com/atinc/ngx-tethys/commit/4deda76))



## [7.6.3](https://github.com/atinc/ngx-tethys/compare/7.6.2...7.6.3) (2019-11-14)


### Bug Fixes

* **cascader:** fix clear style ([09e0080](https://github.com/atinc/ngx-tethys/commit/09e0080))


### Features

* **icon:** icon support safari ([ebbb53b](https://github.com/atinc/ngx-tethys/commit/ebbb53b))
* **icon:** icon support safari ([4deda76](https://github.com/atinc/ngx-tethys/commit/4deda76))



## [7.6.2](https://github.com/atinc/ngx-tethys/compare/7.6.1...7.6.2) (2019-11-14)


### Features

* **alert:** support closeable & operationTemplate ([65252dc](https://github.com/atinc/ngx-tethys/commit/65252dc))



## [7.6.1](https://github.com/atinc/ngx-tethys/compare/7.6.0...7.6.1) (2019-11-13)


### Bug Fixes

* **custom-select:** fix class name for options ([3ca5d26](https://github.com/atinc/ngx-tethys/commit/3ca5d26))
* **custom-select:** remove checked-icon if ([f3b1040](https://github.com/atinc/ngx-tethys/commit/f3b1040))


### Features

* **alert:** add strong type of danger & secondary ([2b4ba88](https://github.com/atinc/ngx-tethys/commit/2b4ba88))



# [7.6.0](https://github.com/atinc/ngx-tethys/compare/7.5.29...7.6.0) (2019-11-12)


### Bug Fixes

* **custom-select:** fix test case and stop close when muitiple is true ([2fe45a7](https://github.com/atinc/ngx-tethys/commit/2fe45a7))
* **select-control:** fix change newlines when selected item is overflow ([65c33a3](https://github.com/atinc/ngx-tethys/commit/65c33a3))


### Features

* **custom-select:** support clear when panel is open ([4944088](https://github.com/atinc/ngx-tethys/commit/4944088))
* add cdkScrollable for demo ([b1a8f9c](https://github.com/atinc/ngx-tethys/commit/b1a8f9c))
* **skeleton:** add skeleton module contains thy-skeleton comp #INF-124 ([a49d883](https://github.com/atinc/ngx-tethys/commit/a49d883)), closes [#INF-124](https://github.com/atinc/ngx-tethys/issues/INF-124)



## [7.5.29](https://github.com/atinc/ngx-tethys/compare/7.5.27...7.5.29) (2019-11-07)


### Bug Fixes

* **action-menu:** change spacing between icon and text ([0a8e68c](https://github.com/atinc/ngx-tethys/commit/0a8e68c))
* **custom-select:** fix option active and hover conflict ([ed4d8b5](https://github.com/atinc/ngx-tethys/commit/ed4d8b5))
* **list:** update list-item bg to f3f3f3 ([9b1729f](https://github.com/atinc/ngx-tethys/commit/9b1729f))
* **select:** fix option paddingRight from 35 to 20 ([fa7d1cd](https://github.com/atinc/ngx-tethys/commit/fa7d1cd)), closes [#INF-94](https://github.com/atinc/ngx-tethys/issues/INF-94)
* **tree:** set default tree type ([8d40d02](https://github.com/atinc/ngx-tethys/commit/8d40d02))
* **tree-select:** modify style of single selection ([5694019](https://github.com/atinc/ngx-tethys/commit/5694019))


### Features

* **input:** input default autocomplete off (#INF-133,#AE-140) ([3cdb388](https://github.com/atinc/ngx-tethys/commit/3cdb388)), closes [#INF-133](https://github.com/atinc/ngx-tethys/issues/INF-133) [#AE-140](https://github.com/atinc/ngx-tethys/issues/AE-140)



## [7.5.28](https://github.com/atinc/ngx-tethys/compare/7.5.27...7.5.28) (2019-10-25)


### Bug Fixes

* **action-menu:** change spacing between icon and text ([0a8e68c](https://github.com/atinc/ngx-tethys/commit/0a8e68c))
* **list:** update list-item bg to f3f3f3 ([9b1729f](https://github.com/atinc/ngx-tethys/commit/9b1729f))
* **select:** fix option paddingRight from 35 to 20 ([fa7d1cd](https://github.com/atinc/ngx-tethys/commit/fa7d1cd)), closes [#INF-94](https://github.com/atinc/ngx-tethys/issues/INF-94)



## [7.5.27](https://github.com/atinc/ngx-tethys/compare/7.5.25...7.5.27) (2019-10-17)


### Bug Fixes

* remove left style for selected-value ([c922c6d](https://github.com/atinc/ngx-tethys/commit/c922c6d))
* **input:** add input size variables ([9470a2e](https://github.com/atinc/ngx-tethys/commit/9470a2e))
* delete nested span when show custom option ([d196d2a](https://github.com/atinc/ngx-tethys/commit/d196d2a))



## [7.5.26](https://github.com/atinc/ngx-tethys/compare/7.5.25...7.5.26) (2019-10-14)


### Bug Fixes

* delete nested span when show custom option ([d196d2a](https://github.com/atinc/ngx-tethys/commit/d196d2a))



## [7.5.25](https://github.com/atinc/ngx-tethys/compare/7.5.24...7.5.25) (2019-10-14)


### Bug Fixes

* **card:** change header title color to [#333](https://github.com/atinc/ngx-tethys/issues/333),  fix DOCUMENT error by way ([af7d8c0](https://github.com/atinc/ngx-tethys/commit/af7d8c0))



## [7.5.24](https://github.com/atinc/ngx-tethys/compare/7.5.23...7.5.24) (2019-10-12)


### Bug Fixes

* **card:** change padding-top as 10px when size is sm and divided mode ([e7c17dc](https://github.com/atinc/ngx-tethys/commit/e7c17dc))



## [7.5.23](https://github.com/atinc/ngx-tethys/compare/7.5.22...7.5.23) (2019-10-12)


### Bug Fixes

* **custom-select:** add complex-select demo ([8746026](https://github.com/atinc/ngx-tethys/commit/8746026))
* **custom-select:** add focus border and add interaction select function ([ab744d1](https://github.com/atinc/ngx-tethys/commit/ab744d1))
* **custom-select:** fix error ([bf27eb8](https://github.com/atinc/ngx-tethys/commit/bf27eb8))
* provider ComplexSelectSelectionComponent ([d9f713a](https://github.com/atinc/ngx-tethys/commit/d9f713a))
* **custom-select:** fix test case ([6a348a0](https://github.com/atinc/ngx-tethys/commit/6a348a0))
* **custom-select:** remove clear btn test style ([830f7fb](https://github.com/atinc/ngx-tethys/commit/830f7fb))
* **custom-select:** remove console log ([4891927](https://github.com/atinc/ngx-tethys/commit/4891927))
* **custom-select:** remove text-light for checked-icon ([32899f3](https://github.com/atinc/ngx-tethys/commit/32899f3))
* **option:** update padding-right from 20 to 35 ([28ffc4c](https://github.com/atinc/ngx-tethys/commit/28ffc4c))
* **select-control:** fix disable input when set thyDisabled ([6ae1634](https://github.com/atinc/ngx-tethys/commit/6ae1634))
* **tree-select:** add type for positions ([636a212](https://github.com/atinc/ngx-tethys/commit/636a212))
* **tree-select:** update style class for custom-select ([a594d15](https://github.com/atinc/ngx-tethys/commit/a594d15))


### Features

* **card:** add divided mode, header has border, padding increas [#265857](https://github.com/atinc/ngx-tethys/issues/265857) ([86862a5](https://github.com/atinc/ngx-tethys/commit/86862a5))
* **custom-select:** add custom-select-top-control and support search ([fc0c63c](https://github.com/atinc/ngx-tethys/commit/fc0c63c))
* **custom-select:** add empty status component for search ([c632286](https://github.com/atinc/ngx-tethys/commit/c632286))
* **custom-select:** apply withWrap in KeyManager(#[#265594](https://github.com/atinc/ngx-tethys/issues/265594)) ([19db2d2](https://github.com/atinc/ngx-tethys/commit/19db2d2))
* **custom-select:** support shortcut operation ([62f344f](https://github.com/atinc/ngx-tethys/commit/62f344f))
* **custom-select:** support thySortComparator sort selectionmodel ([332c46b](https://github.com/atinc/ngx-tethys/commit/332c46b))
* **select-control:** add thySize param and add test case ([4f2de96](https://github.com/atinc/ngx-tethys/commit/4f2de96))
* **select-control:** support backspace remove selected option ([c4599cd](https://github.com/atinc/ngx-tethys/commit/c4599cd))
* **select-control:** support thySize ([8369206](https://github.com/atinc/ngx-tethys/commit/8369206))



## [7.5.22](https://github.com/atinc/ngx-tethys/compare/7.5.21...7.5.22) (2019-10-11)


### Bug Fixes

* **action-menu:** add action menu item test [#266822](https://github.com/atinc/ngx-tethys/issues/266822) ([398c017](https://github.com/atinc/ngx-tethys/commit/398c017))
* fix tree-title 'g' letter be covered ([113292a](https://github.com/atinc/ngx-tethys/commit/113292a))
* **action-menu:** place icon in the middle of the action menu item ([9d782b2](https://github.com/atinc/ngx-tethys/commit/9d782b2))
* **popover:** add condition for add activeClass ([c200138](https://github.com/atinc/ngx-tethys/commit/c200138))


### Features

* **action-menu:** add thytype in action menu item [#266822](https://github.com/atinc/ngx-tethys/issues/266822) ([7414f42](https://github.com/atinc/ngx-tethys/commit/7414f42))
* #[#266961](https://github.com/atinc/ngx-tethys/issues/266961) ngx-tethys】添加link-muted,颜色为[#888](https://github.com/atinc/ngx-tethys/issues/888) ([23ae350](https://github.com/atinc/ngx-tethys/commit/23ae350))
* **breadcrumb:** chang icon and text color [#267177](https://github.com/atinc/ngx-tethys/issues/267177) ([65c1457](https://github.com/atinc/ngx-tethys/commit/65c1457)), closes [#888](https://github.com/atinc/ngx-tethys/issues/888)



## [7.5.21](https://github.com/atinc/ngx-tethys/compare/7.5.20...7.5.21) (2019-10-08)


### Bug Fixes

* **badge:** change danger badge color [#265706](https://github.com/atinc/ngx-tethys/issues/265706) ([6dd3244](https://github.com/atinc/ngx-tethys/commit/6dd3244))
* **entity-store:** fix trackBy 'this' error ([49d3080](https://github.com/atinc/ngx-tethys/commit/49d3080))
* **slide:** add pill style for close [#266712](https://github.com/atinc/ngx-tethys/issues/266712) ([37c4fe3](https://github.com/atinc/ngx-tethys/commit/37c4fe3))


### Features

* **badage:** supports text backgroud color custome, and alone use agile ([d1f2743](https://github.com/atinc/ngx-tethys/commit/d1f2743))
* **badage:** supports text backgroud color custome, and alone use agile ([7814417](https://github.com/atinc/ngx-tethys/commit/7814417))
* **badage:** supports text backgroud color custome, and alone use agile ([741751d](https://github.com/atinc/ngx-tethys/commit/741751d))
* **link:** add link-warning and link-warning-weak [#265951](https://github.com/atinc/ngx-tethys/issues/265951) ([dc233d7](https://github.com/atinc/ngx-tethys/commit/dc233d7))
* **switch:** add $switch-margin-bottom to switch ([b3f3018](https://github.com/atinc/ngx-tethys/commit/b3f3018)), closes [#265585](https://github.com/atinc/ngx-tethys/issues/265585)



## [7.5.20](https://github.com/atinc/ngx-tethys/compare/7.5.19...7.5.20) (2019-09-23)



## [7.5.19](https://github.com/atinc/ngx-tethys/compare/7.5.17...7.5.19) (2019-09-23)


### Bug Fixes

* fix custom-select active style and fix tree icon and text align ([9a719a6](https://github.com/atinc/ngx-tethys/commit/9a719a6))
* **list:** not call toggleOption() [#265188](https://github.com/atinc/ngx-tethys/issues/265188) ([9fd2009](https://github.com/atinc/ngx-tethys/commit/9fd2009))
* **nav:** icon should vertical center in item link ([59914a0](https://github.com/atinc/ngx-tethys/commit/59914a0))
* **pagination:**  style fix ([7325178](https://github.com/atinc/ngx-tethys/commit/7325178))
* **popover:** fix toState==enter in start animate ([5a9e689](https://github.com/atinc/ngx-tethys/commit/5a9e689))
* **slide:** modify by review ([3721979](https://github.com/atinc/ngx-tethys/commit/3721979))


### Features

* **slide:** add .active to trigger,add animation ([615cd05](https://github.com/atinc/ngx-tethys/commit/615cd05))
* **tree:** support customer expand icon [#264984](https://github.com/atinc/ngx-tethys/issues/264984) ([7975898](https://github.com/atinc/ngx-tethys/commit/7975898))



## [7.5.18](https://github.com/atinc/ngx-tethys/compare/7.5.17...7.5.18) (2019-09-23)


### Bug Fixes

* fix custom-select active style and fix tree icon and text align ([9a719a6](https://github.com/atinc/ngx-tethys/commit/9a719a6))
* **list:** not call toggleOption() [#265188](https://github.com/atinc/ngx-tethys/issues/265188) ([9fd2009](https://github.com/atinc/ngx-tethys/commit/9fd2009))
* **nav:** icon should vertical center in item link ([59914a0](https://github.com/atinc/ngx-tethys/commit/59914a0))
* **pagination:**  style fix ([7325178](https://github.com/atinc/ngx-tethys/commit/7325178))
* **popover:** fix toState==enter in start animate ([5a9e689](https://github.com/atinc/ngx-tethys/commit/5a9e689))
* **slide:** modify by review ([3721979](https://github.com/atinc/ngx-tethys/commit/3721979))


### Features

* **slide:** add .active to trigger,add animation ([615cd05](https://github.com/atinc/ngx-tethys/commit/615cd05))
* **tree:** support customer expand icon [#264984](https://github.com/atinc/ngx-tethys/issues/264984) ([7975898](https://github.com/atinc/ngx-tethys/commit/7975898))



## [7.5.17](https://github.com/atinc/ngx-tethys/compare/7.5.16...7.5.17) (2019-09-12)


### Bug Fixes

* **popover:** fix popover can not auto close when insideClosable is true ([16b78fa](https://github.com/atinc/ngx-tethys/commit/16b78fa))



## [7.5.16](https://github.com/atinc/ngx-tethys/compare/7.5.15...7.5.16) (2019-09-11)


### Features

* **dialog:** add thySize for header, add pill style for close [#264303](https://github.com/atinc/ngx-tethys/issues/264303) ([e6a4856](https://github.com/atinc/ngx-tethys/commit/e6a4856))



## [7.5.15](https://github.com/atinc/ngx-tethys/compare/7.5.14...7.5.15) (2019-09-11)


### Bug Fixes

* fix button shake when change button is disabled ([28b2d11](https://github.com/atinc/ngx-tethys/commit/28b2d11))
* **other:** solve the effect of style on layout ([51f154d](https://github.com/atinc/ngx-tethys/commit/51f154d))
* **overlat-directive:** remove implements OnDescroty ([d553109](https://github.com/atinc/ngx-tethys/commit/d553109))
* **popover:** should close when click origin again manualClosure as true ([e5b890c](https://github.com/atinc/ngx-tethys/commit/e5b890c))


### Features

* **core:** add upper overlay contains service, ref, config, container ([24794ac](https://github.com/atinc/ngx-tethys/commit/24794ac))
* **popover:** popover support manualClosure ([0909b7b](https://github.com/atinc/ngx-tethys/commit/0909b7b))
* **popover:** popover support manualClosure ([5ba7b56](https://github.com/atinc/ngx-tethys/commit/5ba7b56))
* **popover:** popover support manualClosure ([8f036dd](https://github.com/atinc/ngx-tethys/commit/8f036dd))
* **popover:** popover support multiple ([aa5ce9c](https://github.com/atinc/ngx-tethys/commit/aa5ce9c))
* **slide:** slide section divider border ui input switch ([bb0357a](https://github.com/atinc/ngx-tethys/commit/bb0357a))
* **slide:** slide section divider border ui input switch ([14f3da1](https://github.com/atinc/ngx-tethys/commit/14f3da1))
* **slide:** slide section divider border ui input switch ([ee73560](https://github.com/atinc/ngx-tethys/commit/ee73560))
* **slide:** slide section divider border ui input switch ([eedced0](https://github.com/atinc/ngx-tethys/commit/eedced0))



## [7.5.14](https://github.com/atinc/ngx-tethys/compare/7.5.13...7.5.14) (2019-08-29)


### Bug Fixes

* **property-operation:** del theme cursor pointer ([341180c](https://github.com/atinc/ngx-tethys/commit/341180c))
* fix button shake when change button is disabled ([74775ad](https://github.com/atinc/ngx-tethys/commit/74775ad))
* **entity-store:** incorrect error message ([7512d0a](https://github.com/atinc/ngx-tethys/commit/7512d0a))
* **entity-store:** remove pageIndex and add clearPagination [#261249](https://github.com/atinc/ngx-tethys/issues/261249) ([fd689ca](https://github.com/atinc/ngx-tethys/commit/fd689ca))
* **property-operation:** change doc ([837f338](https://github.com/atinc/ngx-tethys/commit/837f338))
* **property-operation:** del cursor pointer ([83f30e8](https://github.com/atinc/ngx-tethys/commit/83f30e8))
* fix button shake when change button is disabled ([e2dadc9](https://github.com/atinc/ngx-tethys/commit/e2dadc9))
* fix tree drag drop bug ([600e047](https://github.com/atinc/ngx-tethys/commit/600e047))


### Features

* **property-operation:** feat thyDisabled and thyClick[#261473](https://github.com/atinc/ngx-tethys/issues/261473) ([c6eb973](https://github.com/atinc/ngx-tethys/commit/c6eb973))



## [7.5.13](https://github.com/atinc/ngx-tethys/compare/7.5.12...7.5.13) (2019-08-27)


### Bug Fixes

* **entity-store:** should remove by id when idKey is custom ([0985408](https://github.com/atinc/ngx-tethys/commit/0985408))



## [7.5.12](https://github.com/atinc/ngx-tethys/compare/7.5.11...7.5.12) (2019-08-27)


### Bug Fixes

* **dialog:** [#000](https://github.com/atinc/ngx-tethys/issues/000) dialog add eunm full/remove export referenes ([66eb78f](https://github.com/atinc/ngx-tethys/commit/66eb78f))



## [7.5.11](https://github.com/atinc/ngx-tethys/compare/7.5.10...7.5.11) (2019-08-26)


### Bug Fixes

* **other:** add demo-title ([8fc9ea8](https://github.com/atinc/ngx-tethys/commit/8fc9ea8))
* **other:** adjust layout ([1a9d09e](https://github.com/atinc/ngx-tethys/commit/1a9d09e))
* **other:** demo layout adjustment ([1e2f606](https://github.com/atinc/ngx-tethys/commit/1e2f606))
* **other:** remove log ([63ca549](https://github.com/atinc/ngx-tethys/commit/63ca549))
* **other:** style adjustment ([eb36950](https://github.com/atinc/ngx-tethys/commit/eb36950))


### Features

* **avatar:** add a disabled style ([cd71b6c](https://github.com/atinc/ngx-tethys/commit/cd71b6c))
* **store:** add references support for entity store [#260560](https://github.com/atinc/ngx-tethys/issues/260560) ([fea2e70](https://github.com/atinc/ngx-tethys/commit/fea2e70))
* **utils:** add merge and build references dictionary methods [#260560](https://github.com/atinc/ngx-tethys/issues/260560) ([fc8afa2](https://github.com/atinc/ngx-tethys/commit/fc8afa2))
* **utils:** add merge and build references dictionary methods [#260560](https://github.com/atinc/ngx-tethys/issues/260560) ([eb1e12f](https://github.com/atinc/ngx-tethys/commit/eb1e12f))



## [7.5.10](https://github.com/atinc/ngx-tethys/compare/7.5.9...7.5.10) (2019-08-20)


### Bug Fixes

* **form:** prevent submit when element has 'contenteditable' attribute ([e6be89e](https://github.com/atinc/ngx-tethys/commit/e6be89e))
* fix tree drag drop bug ([d8b9898](https://github.com/atinc/ngx-tethys/commit/d8b9898))


### Features

* **icon-nav:** add thyIconNavLinkIcon param and add test cases [#259926](https://github.com/atinc/ngx-tethys/issues/259926) ([4489b2d](https://github.com/atinc/ngx-tethys/commit/4489b2d))
* **layout:** add isolated for sidebar, width support lg 300px [#260322](https://github.com/atinc/ngx-tethys/issues/260322) ([ab843a8](https://github.com/atinc/ngx-tethys/commit/ab843a8))



## [7.5.9](https://github.com/atinc/ngx-tethys/compare/7.5.8...7.5.9) (2019-08-16)


### Bug Fixes

* **option-item:** change prefix icon color use in tree select ([8bcb595](https://github.com/atinc/ngx-tethys/commit/8bcb595))
* **popover:** replace ComponentType from core/src render3 to cdk/portal ([ffc6acf](https://github.com/atinc/ngx-tethys/commit/ffc6acf))
* **store:** should get immutable entities when curd entities [#259936](https://github.com/atinc/ngx-tethys/issues/259936) ([bd48c89](https://github.com/atinc/ngx-tethys/commit/bd48c89))


### Features

* **nav:** add icon nav component for icon actions nav [#259926](https://github.com/atinc/ngx-tethys/issues/259926) ([a841efa](https://github.com/atinc/ngx-tethys/commit/a841efa))



## [7.5.8](https://github.com/atinc/ngx-tethys/compare/7.5.6...7.5.8) (2019-08-15)


### Bug Fixes

* **checkbox:** checkout disabled style ([50aa75c](https://github.com/atinc/ngx-tethys/commit/50aa75c))
* **core:** change option hover bg color and refactor theme [#259681](https://github.com/atinc/ngx-tethys/issues/259681) ([3186f4d](https://github.com/atinc/ngx-tethys/commit/3186f4d))
* **input:** checkout and radio theme ([30bb44c](https://github.com/atinc/ngx-tethys/commit/30bb44c))
* **menu:** menu active color and hover background color ([60d69c5](https://github.com/atinc/ngx-tethys/commit/60d69c5))
* **menu:** menu active color and hover background color ([c8daec6](https://github.com/atinc/ngx-tethys/commit/c8daec6))
* **popover:** remove min-height ([332f761](https://github.com/atinc/ngx-tethys/commit/332f761))
* **slide:** change slide body section padding ([6576ebc](https://github.com/atinc/ngx-tethys/commit/6576ebc))
* **transfer:** fix dragDrop when list is empty ([7a931f5](https://github.com/atinc/ngx-tethys/commit/7a931f5))
* **tree:** fix drag drop position error ([1f5a87a](https://github.com/atinc/ngx-tethys/commit/1f5a87a))


### Features

* **notify:** add notify border ([365d4af](https://github.com/atinc/ngx-tethys/commit/365d4af))
* **table:** remove tr hover space for table ([11a5db1](https://github.com/atinc/ngx-tethys/commit/11a5db1))
* **tree:** new drag and drop(break-change: remove thyOnDraggableChange) ([591b4b7](https://github.com/atinc/ngx-tethys/commit/591b4b7))



## <small>7.5.7 (2019-08-14)</small>

* chore: change demo ([ed72304](https://github.com/atinc/ngx-tethys/commit/ed72304))
* feat(tree): new drag and drop(break-change: remove thyOnDraggableChange) ([591b4b7](https://github.com/atinc/ngx-tethys/commit/591b4b7))
* fix(input): checkout and radio theme ([30bb44c](https://github.com/atinc/ngx-tethys/commit/30bb44c))
* fix(slide): change slide body section padding ([6576ebc](https://github.com/atinc/ngx-tethys/commit/6576ebc))



## <small>7.5.6 (2019-08-14)</small>

* fix: fix drag and dorp errors ([4bc83e5](https://github.com/atinc/ngx-tethys/commit/4bc83e5))
* fix: fix import error ([f5758fe](https://github.com/atinc/ngx-tethys/commit/f5758fe))
* fix: hover color cheage to $gray-100 ([2d77d76](https://github.com/atinc/ngx-tethys/commit/2d77d76))
* fix(grid): #252531 fix sort style ([9a4640f](https://github.com/atinc/ngx-tethys/commit/9a4640f))
* fix(input):  remove useless variables input-search-padding-y ([e537e19](https://github.com/atinc/ngx-tethys/commit/e537e19))
* fix(input): input search default height modification (#257733) ([31cd699](https://github.com/atinc/ngx-tethys/commit/31cd699)), closes [#257733](https://github.com/atinc/ngx-tethys/issues/257733)
* fix(menu): menu hover change to background $gray-80 ([5904ebf](https://github.com/atinc/ngx-tethys/commit/5904ebf))
* fix(notify): change expression ([7eecb22](https://github.com/atinc/ngx-tethys/commit/7eecb22))
* fix(notify): fix hide notify content ([25902e9](https://github.com/atinc/ngx-tethys/commit/25902e9))
* fix(pagination): #257573 thy-page-link ([620e802](https://github.com/atinc/ngx-tethys/commit/620e802)), closes [#257573](https://github.com/atinc/ngx-tethys/issues/257573)
* fix(property-operation): fix hover icon style and change demo  #256410 ([22c0ead](https://github.com/atinc/ngx-tethys/commit/22c0ead)), closes [#256410](https://github.com/atinc/ngx-tethys/issues/256410)
* fix(select): select remove button position adjustment(#257534) ([057cd11](https://github.com/atinc/ngx-tethys/commit/057cd11)), closes [#257534](https://github.com/atinc/ngx-tethys/issues/257534)
* fix(slide): stop propagation when close slide ([8b79505](https://github.com/atinc/ngx-tethys/commit/8b79505))
* fix(transfer): fix repeated value when assign data ([36c68fb](https://github.com/atinc/ngx-tethys/commit/36c68fb))
* fix(tree): fix covert tree node bug when key is empty string ([0cf1164](https://github.com/atinc/ngx-tethys/commit/0cf1164))
* chore(notify): recover notify example ([6b62e6c](https://github.com/atinc/ngx-tethys/commit/6b62e6c))
* chore(release): upgrade to 7.5.5 ([0275f55](https://github.com/atinc/ngx-tethys/commit/0275f55))
* feat(drag-drop): add drag and drop directives ([38eed2c](https://github.com/atinc/ngx-tethys/commit/38eed2c))
* feat(grid): #254209 click favorite display ([1380463](https://github.com/atinc/ngx-tethys/commit/1380463)), closes [#254209](https://github.com/atinc/ngx-tethys/issues/254209)
* feat(grid): #254209 click favorite style ([f599168](https://github.com/atinc/ngx-tethys/commit/f599168)), closes [#254209](https://github.com/atinc/ngx-tethys/issues/254209)
* feat(grid): #254209 pr review question ([cc213c2](https://github.com/atinc/ngx-tethys/commit/cc213c2)), closes [#254209](https://github.com/atinc/ngx-tethys/issues/254209)
* refactor(flexible-text): add thyContainer argument ([539c0e2](https://github.com/atinc/ngx-tethys/commit/539c0e2))
* refactor(flexible-text): support thyContainContainerClass(#257211) ([8558df6](https://github.com/atinc/ngx-tethys/commit/8558df6)), closes [#257211](https://github.com/atinc/ngx-tethys/issues/257211)



## <small>7.5.5 (2019-08-12)</small>

* fix(grid): #252531 fix sort style ([9a4640f](https://github.com/atinc/ngx-tethys/commit/9a4640f))
* fix(property-operation): fix hover icon style and change demo  #256410 ([22c0ead](https://github.com/atinc/ngx-tethys/commit/22c0ead)), closes [#256410](https://github.com/atinc/ngx-tethys/issues/256410)
* fix(transfer): fix repeated value when assign data ([36c68fb](https://github.com/atinc/ngx-tethys/commit/36c68fb))
* fix(tree): fix covert tree node bug when key is empty string ([0cf1164](https://github.com/atinc/ngx-tethys/commit/0cf1164))



## <small>7.5.4 (2019-08-09)</small>

* chore(release): upgrade to 7.5.4 ([2b6462e](https://github.com/atinc/ngx-tethys/commit/2b6462e))
* feat(dialog): dialog footer padding  modify(#257040) ([bfb04af](https://github.com/atinc/ngx-tethys/commit/bfb04af)), closes [#257040](https://github.com/atinc/ngx-tethys/issues/257040)
* feat(popover): support panel class and inside closable #256645 ([c9db78e](https://github.com/atinc/ngx-tethys/commit/c9db78e)), closes [#256645](https://github.com/atinc/ngx-tethys/issues/256645)
* fix(list): #256435 grid模式下hover阴影被遮挡 ([55f5b58](https://github.com/atinc/ngx-tethys/commit/55f5b58)), closes [#256435](https://github.com/atinc/ngx-tethys/issues/256435)
* fix(popover): delete animation ([727a238](https://github.com/atinc/ngx-tethys/commit/727a238))
* fix(popover): fix popover build ([e23d5af](https://github.com/atinc/ngx-tethys/commit/e23d5af))
* fix(tree-select): change prefix icon style #239673 ([c767705](https://github.com/atinc/ngx-tethys/commit/c767705)), closes [#239673](https://github.com/atinc/ngx-tethys/issues/239673)




## <small>7.5.3 (2019-08-08)</small>

* feat: add demo ([88dbcb2](https://github.com/atinc/ngx-tethys/commit/88dbcb2))
* feat: add thy-typography-rich ([e9b9a80](https://github.com/atinc/ngx-tethys/commit/e9b9a80))
* feat(icon-text): icon padding ([1d9f230](https://github.com/atinc/ngx-tethys/commit/1d9f230))
* feat(nav): ui ([4ec6717](https://github.com/atinc/ngx-tethys/commit/4ec6717))
* feat(store): add clearState fn and add test case(#255027) ([7e55f00](https://github.com/atinc/ngx-tethys/commit/7e55f00)), closes [#255027](https://github.com/atinc/ngx-tethys/issues/255027)
* feat(tree-select): support node icon template #239673 ([044d63f](https://github.com/atinc/ngx-tethys/commit/044d63f)), closes [#239673](https://github.com/atinc/ngx-tethys/issues/239673)
* feat(variables): add close color variables ([e1671bf](https://github.com/atinc/ngx-tethys/commit/e1671bf))
* chore(release): upgrade to 7.5.2 ([dd19f9f](https://github.com/atinc/ngx-tethys/commit/dd19f9f))
* fix: pre code style ([41e36f9](https://github.com/atinc/ngx-tethys/commit/41e36f9))
* fix: typography style ([8a0bbdc](https://github.com/atinc/ngx-tethys/commit/8a0bbdc))
* fix: typography style ([d0257e2](https://github.com/atinc/ngx-tethys/commit/d0257e2))
* fix: 文本改成排版 ([23e0058](https://github.com/atinc/ngx-tethys/commit/23e0058))
* fix(agile): #255003 thy-nav下加button按钮，button的thy-icon颜色失效 ([c3ae8a2](https://github.com/atinc/ngx-tethys/commit/c3ae8a2)), closes [#255003](https://github.com/atinc/ngx-tethys/issues/255003)
* fix(button): change button padding ([c1abbb0](https://github.com/atinc/ngx-tethys/commit/c1abbb0))
* fix(dialog): change box shadow and backdrop shadow ([5aa67bb](https://github.com/atinc/ngx-tethys/commit/5aa67bb))
* fix(link): move thy-icon font-size 14px to link-has-icon ([c26f617](https://github.com/atinc/ngx-tethys/commit/c26f617))
* fix(notify): adjust title position #255598 ([14e0adb](https://github.com/atinc/ngx-tethys/commit/14e0adb)), closes [#255598](https://github.com/atinc/ngx-tethys/issues/255598)



## <small>7.5.2 (2019-08-07)</small>

* fix: pre code style ([41e36f9](https://github.com/atinc/ngx-tethys/commit/41e36f9))
* fix: typography style ([8a0bbdc](https://github.com/atinc/ngx-tethys/commit/8a0bbdc))
* fix: typography style ([d0257e2](https://github.com/atinc/ngx-tethys/commit/d0257e2))
* fix: 文本改成排版 ([23e0058](https://github.com/atinc/ngx-tethys/commit/23e0058))
* fix(agile): #255003 thy-nav下加button按钮，button的thy-icon颜色失效 ([c3ae8a2](https://github.com/atinc/ngx-tethys/commit/c3ae8a2)), closes [#255003](https://github.com/atinc/ngx-tethys/issues/255003)
* fix(button): change button padding ([c1abbb0](https://github.com/atinc/ngx-tethys/commit/c1abbb0))
* fix(dialog): change box shadow and backdrop shadow ([5aa67bb](https://github.com/atinc/ngx-tethys/commit/5aa67bb))
* fix(link): move thy-icon font-size 14px to link-has-icon ([c26f617](https://github.com/atinc/ngx-tethys/commit/c26f617))
* fix(notify): adjust title position #255598 ([14e0adb](https://github.com/atinc/ngx-tethys/commit/14e0adb)), closes [#255598](https://github.com/atinc/ngx-tethys/issues/255598)
* feat: add demo ([88dbcb2](https://github.com/atinc/ngx-tethys/commit/88dbcb2))
* feat(icon-text): icon padding ([1d9f230](https://github.com/atinc/ngx-tethys/commit/1d9f230))
* feat(store): add clearState fn and add test case(#255027) ([7e55f00](https://github.com/atinc/ngx-tethys/commit/7e55f00)), closes [#255027](https://github.com/atinc/ngx-tethys/issues/255027)



## <small>7.5.1 (2019-08-02)</small>

* fix: export popover and flexible-text for build ngx-styx erros ([53948f5](https://github.com/atinc/ngx-tethys/commit/53948f5))
* fix(action-menu): action-menu max ui ([6b2bca7](https://github.com/atinc/ngx-tethys/commit/6b2bca7))
* fix(datepicker-range): ui ([652b816](https://github.com/atinc/ngx-tethys/commit/652b816))
* fix(nav): fix focus nav thy icon style ([8a99c72](https://github.com/atinc/ngx-tethys/commit/8a99c72))
* fix(nav): fix thy icon in nav style ([a783d61](https://github.com/atinc/ngx-tethys/commit/a783d61))
* fix(notify): add link hover state ([0bff8ef](https://github.com/atinc/ngx-tethys/commit/0bff8ef))
* fix(notify): adjust notify style ([3699f0e](https://github.com/atinc/ngx-tethys/commit/3699f0e))
* fix(notify): del notify detail target blank ([c4c0b53](https://github.com/atinc/ngx-tethys/commit/c4c0b53))
* fix(notify): del start host ([623f8c4](https://github.com/atinc/ngx-tethys/commit/623f8c4))
* fix(popover): remove thy-popover-opened class when popover closed ([f7abd64](https://github.com/atinc/ngx-tethys/commit/f7abd64))
* feat: support tooltipPin;add global config provider ([b872c1f](https://github.com/atinc/ngx-tethys/commit/b872c1f))
* feat(button): change md from 36 to 32 and default 38 to 36 #253484 ([720d3c3](https://github.com/atinc/ngx-tethys/commit/720d3c3)), closes [#253484](https://github.com/atinc/ngx-tethys/issues/253484)
* feat(dialog): add full size and box shadow #252859 ([3648cee](https://github.com/atinc/ngx-tethys/commit/3648cee)), closes [#252859](https://github.com/atinc/ngx-tethys/issues/252859)
* docs: refactor global demo contains link, variables, reboot ([6155316](https://github.com/atinc/ngx-tethys/commit/6155316))



## 7.5.0 (2019-07-29)

* feat: add component flexible-text(#247654) ([f23e605](https://github.com/atinc/ngx-tethys/commit/f23e605)), closes [#247654](https://github.com/atinc/ngx-tethys/issues/247654)
* feat: support flexible placement;remove failture case(#251211) ([7b6313e](https://github.com/atinc/ngx-tethys/commit/7b6313e)), closes [#251211](https://github.com/atinc/ngx-tethys/issues/251211)
* feat(action menu): ui ([30995b0](https://github.com/atinc/ngx-tethys/commit/30995b0))
* feat(badge): ui add min-width ([f187422](https://github.com/atinc/ngx-tethys/commit/f187422))
* feat(datepicker): change thy icon ([b78223a](https://github.com/atinc/ngx-tethys/commit/b78223a))
* feat(datepicker): change thy icon ([b18b7e9](https://github.com/atinc/ngx-tethys/commit/b18b7e9))
* feat(drag): drag item line to move it around ([8a3172e](https://github.com/atinc/ngx-tethys/commit/8a3172e))
* feat(flexible-text): add component: flexible-text (#247654) ([89127f0](https://github.com/atinc/ngx-tethys/commit/89127f0)), closes [#247654](https://github.com/atinc/ngx-tethys/issues/247654)
* feat(form): change checkbox and radio icon to css3 ([1d0c8f8](https://github.com/atinc/ngx-tethys/commit/1d0c8f8))
* feat(link): add link-major style ([3e9be2e](https://github.com/atinc/ngx-tethys/commit/3e9be2e))
* feat(link): add theme link-major ([1d42681](https://github.com/atinc/ngx-tethys/commit/1d42681))
* feat(popover): add popover module for open content #252700 ([fd8487f](https://github.com/atinc/ngx-tethys/commit/fd8487f)), closes [#252700](https://github.com/atinc/ngx-tethys/issues/252700)
* feat(table): add bottom border  of table #252678 ([ee2d7ba](https://github.com/atinc/ngx-tethys/commit/ee2d7ba)), closes [#252678](https://github.com/atinc/ngx-tethys/issues/252678)
* feat(thy-icon): support legging ([a24bb57](https://github.com/atinc/ngx-tethys/commit/a24bb57))
* feat(thy-icon): support two tone color ([938c6be](https://github.com/atinc/ngx-tethys/commit/938c6be))
* feat(thy-icon): support two tone color, rotate ([8edfdc9](https://github.com/atinc/ngx-tethys/commit/8edfdc9))
* feat(thy-icon): support two tone color, rotate\ ([ee6205d](https://github.com/atinc/ngx-tethys/commit/ee6205d))
* feat(tooltip): add tooltip offset and change tooltip style ([e4c9162](https://github.com/atinc/ngx-tethys/commit/e4c9162))
* feat(transfer): #251417 support fixed item and ([3e846a0](https://github.com/atinc/ngx-tethys/commit/3e846a0))
* fix: add component flexible-text ([b4a17a8](https://github.com/atinc/ngx-tethys/commit/b4a17a8))
* fix: change remove icon in avatar and select ([6a2780a](https://github.com/atinc/ngx-tethys/commit/6a2780a))
* fix: correct constructor.name can is undefine failture(#250980) ([6d6f2d6](https://github.com/atinc/ngx-tethys/commit/6d6f2d6)), closes [#250980](https://github.com/atinc/ngx-tethys/issues/250980)
* fix: fix demo show ([722ac34](https://github.com/atinc/ngx-tethys/commit/722ac34))
* fix: fix flexible-text test ([b73bc69](https://github.com/atinc/ngx-tethys/commit/b73bc69))
* fix: flexible-text hide test ([03c70e6](https://github.com/atinc/ngx-tethys/commit/03c70e6))
* fix: modify avatar and select removed icon style ([8b19df1](https://github.com/atinc/ngx-tethys/commit/8b19df1))
* fix: remove console log ([bf9bd01](https://github.com/atinc/ngx-tethys/commit/bf9bd01))
* fix(button): change button padding and min width #252402 ([65b6856](https://github.com/atinc/ngx-tethys/commit/65b6856)), closes [#252402](https://github.com/atinc/ngx-tethys/issues/252402)
* fix(color): change info color #2dbcff and success to #66c060 #237760 ([0512b4c](https://github.com/atinc/ngx-tethys/commit/0512b4c)), closes [#2](https://github.com/atinc/ngx-tethys/issues/2) [#66c060](https://github.com/atinc/ngx-tethys/issues/66c060) [#237760](https://github.com/atinc/ngx-tethys/issues/237760)
* fix(dialog): change dialog-body overflow, add thy-dialog-content #247676 ([e3e7968](https://github.com/atinc/ngx-tethys/commit/e3e7968)), closes [#247676](https://github.com/atinc/ngx-tethys/issues/247676)
* fix(dialog): set animation state enter after last click position #250111 ([7e306bd](https://github.com/atinc/ngx-tethys/commit/7e306bd)), closes [#250111](https://github.com/atinc/ngx-tethys/issues/250111)
* fix(dialog): set animation state enter after last click position #250111 ([8d2a0fb](https://github.com/atinc/ngx-tethys/commit/8d2a0fb)), closes [#250111](https://github.com/atinc/ngx-tethys/issues/250111)
* fix(dialog): trap focus after animation is void (#251580) ([87de8d1](https://github.com/atinc/ngx-tethys/commit/87de8d1)), closes [#251580](https://github.com/atinc/ngx-tethys/issues/251580)
* fix(flexible-text): fix flexible-text test(#247654) ([c393803](https://github.com/atinc/ngx-tethys/commit/c393803)), closes [#247654](https://github.com/atinc/ngx-tethys/issues/247654)
* fix(input): change search-input icon styles #249790 ([b470a86](https://github.com/atinc/ngx-tethys/commit/b470a86)), closes [#249790](https://github.com/atinc/ngx-tethys/issues/249790)
* fix(layout): fix header prefix-icon font-size to 20px ([687e978](https://github.com/atinc/ngx-tethys/commit/687e978))
* fix(notify): adjust notify layout#252522 ([f142fdb](https://github.com/atinc/ngx-tethys/commit/f142fdb)), closes [layout#252522](https://github.com/layout/issues/252522)
* fix(slide): fix slide fly in out #247791 ([5d9e56a](https://github.com/atinc/ngx-tethys/commit/5d9e56a)), closes [#247791](https://github.com/atinc/ngx-tethys/issues/247791)
* fix(thy-dialog): correct animation failture ([fb626f0](https://github.com/atinc/ngx-tethys/commit/fb626f0))
* fix(tooltip): change tooltip arrow width ang height ([dfe8eb9](https://github.com/atinc/ngx-tethys/commit/dfe8eb9))
* fix(tooltip): change tooltip-max-width to 350px ([8b54e8b](https://github.com/atinc/ngx-tethys/commit/8b54e8b))
* docs(popover): prefect demo and api parameters #252700 ([76ea3a8](https://github.com/atinc/ngx-tethys/commit/76ea3a8)), closes [#252700](https://github.com/atinc/ngx-tethys/issues/252700)
* refactor: adjust drag style in list and transfer ([f3a3918](https://github.com/atinc/ngx-tethys/commit/f3a3918))
* refactor(flexible-text): refactor content oberve;add test case(#252170) ([1391b9f](https://github.com/atinc/ngx-tethys/commit/1391b9f)), closes [#252170](https://github.com/atinc/ngx-tethys/issues/252170)
* refactor(flexible-text): remove directive file;deprecated rxjs Subject ([f7670ed](https://github.com/atinc/ngx-tethys/commit/f7670ed))
* refactor(icon-text): refactor icon-text ([a5689b9](https://github.com/atinc/ngx-tethys/commit/a5689b9))
* refactor(list): replace wtf with thy-icon ([c309049](https://github.com/atinc/ngx-tethys/commit/c309049))
* refactor(overlay): refactor core overlay utils, add test cases #252700 ([80d2a7a](https://github.com/atinc/ngx-tethys/commit/80d2a7a)), closes [#252700](https://github.com/atinc/ngx-tethys/issues/252700)
* refactor(thy-flexible-text): add directive;refactor element(#247654) ([1699419](https://github.com/atinc/ngx-tethys/commit/1699419)), closes [#247654](https://github.com/atinc/ngx-tethys/issues/247654)
* refactor(thy-tooltip): refactor tooltip component placement(#251211) ([5a20e21](https://github.com/atinc/ngx-tethys/commit/5a20e21)), closes [#251211](https://github.com/atinc/ngx-tethys/issues/251211)
* style(icon): change icon default size to `1rem` ([38d09f3](https://github.com/atinc/ngx-tethys/commit/38d09f3))
* style(layout): change layout-header-title in center ([5d971c7](https://github.com/atinc/ngx-tethys/commit/5d971c7))
* style(transfer): #252474 fix item and middle icon ([b7ba392](https://github.com/atinc/ngx-tethys/commit/b7ba392))
* Update CHANGELOG.md ([8446b8c](https://github.com/atinc/ngx-tethys/commit/8446b8c))
* chore(release): upgrade to 7.3.5 ([dbe9397](https://github.com/atinc/ngx-tethys/commit/dbe9397))
* chore(release): upgrade to 7.3.6 ([aa52fc7](https://github.com/atinc/ngx-tethys/commit/aa52fc7))
* chore(release): upgrade to 7.4.0 ([5d08a8f](https://github.com/atinc/ngx-tethys/commit/5d08a8f))
* test(alert): fix alert tests #238645 ([bd84872](https://github.com/atinc/ngx-tethys/commit/bd84872)), closes [#238645](https://github.com/atinc/ngx-tethys/issues/238645)



## 7.4.0 (2019-07-26)

* refactor: adjust drag style in list and transfer ([f3a3918](https://github.com/atinc/ngx-tethys/commit/f3a3918))
* refactor(flexible-text): remove directive file;deprecated rxjs Subject ([f7670ed](https://github.com/atinc/ngx-tethys/commit/f7670ed))
* refactor(icon-text): refactor icon-text ([a5689b9](https://github.com/atinc/ngx-tethys/commit/a5689b9))
* refactor(list): replace wtf with thy-icon ([c309049](https://github.com/atinc/ngx-tethys/commit/c309049))
* refactor(thy-flexible-text): add directive;refactor element(#247654) ([1699419](https://github.com/atinc/ngx-tethys/commit/1699419)), closes [#247654](https://github.com/atinc/ngx-tethys/issues/247654)
* refactor(thy-tooltip): refactor tooltip component placement(#251211) ([5a20e21](https://github.com/atinc/ngx-tethys/commit/5a20e21)), closes [#251211](https://github.com/atinc/ngx-tethys/issues/251211)
* feat: add component flexible-text(#247654) ([f23e605](https://github.com/atinc/ngx-tethys/commit/f23e605)), closes [#247654](https://github.com/atinc/ngx-tethys/issues/247654)
* feat: support flexible placement;remove failture case(#251211) ([7b6313e](https://github.com/atinc/ngx-tethys/commit/7b6313e)), closes [#251211](https://github.com/atinc/ngx-tethys/issues/251211)
* feat(drag): drag item line to move it around ([8a3172e](https://github.com/atinc/ngx-tethys/commit/8a3172e))
* feat(flexible-text): add component: flexible-text (#247654) ([89127f0](https://github.com/atinc/ngx-tethys/commit/89127f0)), closes [#247654](https://github.com/atinc/ngx-tethys/issues/247654)
* feat(link): add link-major style ([3e9be2e](https://github.com/atinc/ngx-tethys/commit/3e9be2e))
* feat(link): add theme link-major ([1d42681](https://github.com/atinc/ngx-tethys/commit/1d42681))
* feat(thy-icon): support legging ([a24bb57](https://github.com/atinc/ngx-tethys/commit/a24bb57))
* feat(thy-icon): support two tone color ([938c6be](https://github.com/atinc/ngx-tethys/commit/938c6be))
* feat(thy-icon): support two tone color, rotate ([8edfdc9](https://github.com/atinc/ngx-tethys/commit/8edfdc9))
* feat(thy-icon): support two tone color, rotate\ ([ee6205d](https://github.com/atinc/ngx-tethys/commit/ee6205d))
* feat(transfer): #251417 support fixed item and ([3e846a0](https://github.com/atinc/ngx-tethys/commit/3e846a0))
* style(icon): change icon default size to `1rem` ([38d09f3](https://github.com/atinc/ngx-tethys/commit/38d09f3))
* style(layout): change layout-header-title in center ([5d971c7](https://github.com/atinc/ngx-tethys/commit/5d971c7))
* fix: add component flexible-text ([b4a17a8](https://github.com/atinc/ngx-tethys/commit/b4a17a8))
* fix: change remove icon in avatar and select ([6a2780a](https://github.com/atinc/ngx-tethys/commit/6a2780a))
* fix: correct constructor.name can is undefine failture(#250980) ([6d6f2d6](https://github.com/atinc/ngx-tethys/commit/6d6f2d6)), closes [#250980](https://github.com/atinc/ngx-tethys/issues/250980)
* fix: fix demo show ([722ac34](https://github.com/atinc/ngx-tethys/commit/722ac34))
* fix: fix flexible-text test ([b73bc69](https://github.com/atinc/ngx-tethys/commit/b73bc69))
* fix: flexible-text hide test ([03c70e6](https://github.com/atinc/ngx-tethys/commit/03c70e6))
* fix: modify avatar and select removed icon style ([8b19df1](https://github.com/atinc/ngx-tethys/commit/8b19df1))
* fix: remove console log ([bf9bd01](https://github.com/atinc/ngx-tethys/commit/bf9bd01))
* fix(color): change info color #2dbcff and success to #66c060 #237760 ([0512b4c](https://github.com/atinc/ngx-tethys/commit/0512b4c)), closes [#2](https://github.com/atinc/ngx-tethys/issues/2) [#66c060](https://github.com/atinc/ngx-tethys/issues/66c060) [#237760](https://github.com/atinc/ngx-tethys/issues/237760)
* fix(dialog): set animation state enter after last click position #250111 ([7e306bd](https://github.com/atinc/ngx-tethys/commit/7e306bd)), closes [#250111](https://github.com/atinc/ngx-tethys/issues/250111)
* fix(dialog): set animation state enter after last click position #250111 ([8d2a0fb](https://github.com/atinc/ngx-tethys/commit/8d2a0fb)), closes [#250111](https://github.com/atinc/ngx-tethys/issues/250111)
* fix(dialog): trap focus after animation is void (#251580) ([87de8d1](https://github.com/atinc/ngx-tethys/commit/87de8d1)), closes [#251580](https://github.com/atinc/ngx-tethys/issues/251580)
* fix(flexible-text): fix flexible-text test(#247654) ([c393803](https://github.com/atinc/ngx-tethys/commit/c393803)), closes [#247654](https://github.com/atinc/ngx-tethys/issues/247654)
* fix(layout): fix header prefix-icon font-size to 20px ([687e978](https://github.com/atinc/ngx-tethys/commit/687e978))
* fix(thy-dialog): correct animation failture ([fb626f0](https://github.com/atinc/ngx-tethys/commit/fb626f0))
* fix(tooltip): change tooltip arrow width ang height ([dfe8eb9](https://github.com/atinc/ngx-tethys/commit/dfe8eb9))
* fix(tooltip): change tooltip-max-width to 350px ([8b54e8b](https://github.com/atinc/ngx-tethys/commit/8b54e8b))
* test(alert): fix alert tests #238645 ([bd84872](https://github.com/atinc/ngx-tethys/commit/bd84872)), closes [#238645](https://github.com/atinc/ngx-tethys/issues/238645)
* chore(release): upgrade to 7.3.5 ([dbe9397](https://github.com/atinc/ngx-tethys/commit/dbe9397))
* chore(release): upgrade to 7.3.6 ([aa52fc7](https://github.com/atinc/ngx-tethys/commit/aa52fc7))

## <small>7.3.6 (2019-07-23)</small>

* fix: add component flexible-text ([b4a17a8](https://github.com/atinc/ngx-tethys/commit/b4a17a8))
* fix: change remove icon in avatar and select ([6a2780a](https://github.com/atinc/ngx-tethys/commit/6a2780a))
* fix: correct constructor.name can is undefine failture(#250980) ([6d6f2d6](https://github.com/atinc/ngx-tethys/commit/6d6f2d6)), closes [#250980](https://github.com/atinc/ngx-tethys/issues/250980)
* fix: fix flexible-text test ([b73bc69](https://github.com/atinc/ngx-tethys/commit/b73bc69))
* fix: flexible-text hide test ([03c70e6](https://github.com/atinc/ngx-tethys/commit/03c70e6))
* fix: modify avatar and select removed icon style ([8b19df1](https://github.com/atinc/ngx-tethys/commit/8b19df1))
* fix(color): change info color #2dbcff and success to #66c060 #237760 ([0512b4c](https://github.com/atinc/ngx-tethys/commit/0512b4c)), closes [#2](https://github.com/atinc/ngx-tethys/issues/2) [#66c060](https://github.com/atinc/ngx-tethys/issues/66c060) [#237760](https://github.com/atinc/ngx-tethys/issues/237760)
* fix(dialog): set animation state enter after last click position #250111 ([8d2a0fb](https://github.com/atinc/ngx-tethys/commit/8d2a0fb)), closes [#250111](https://github.com/atinc/ngx-tethys/issues/250111)
* fix(dialog): set animation state enter after last click position #250111 ([7e306bd](https://github.com/atinc/ngx-tethys/commit/7e306bd)), closes [#250111](https://github.com/atinc/ngx-tethys/issues/250111)
* fix(flexible-text): fix flexible-text test(#247654) ([c393803](https://github.com/atinc/ngx-tethys/commit/c393803)), closes [#247654](https://github.com/atinc/ngx-tethys/issues/247654)
* fix(thy-dialog): correct animation failture ([fb626f0](https://github.com/atinc/ngx-tethys/commit/fb626f0))
* fix(tooltip): change tooltip arrow width ang height ([dfe8eb9](https://github.com/atinc/ngx-tethys/commit/dfe8eb9))
* fix(tooltip): change tooltip-max-width to 350px ([8b54e8b](https://github.com/atinc/ngx-tethys/commit/8b54e8b))
* chore(release): upgrade to 7.3.5 ([dbe9397](https://github.com/atinc/ngx-tethys/commit/dbe9397))
* feat: add component flexible-text(#247654) ([f23e605](https://github.com/atinc/ngx-tethys/commit/f23e605)), closes [#247654](https://github.com/atinc/ngx-tethys/issues/247654)
* feat(flexible-text): add component: flexible-text (#247654) ([89127f0](https://github.com/atinc/ngx-tethys/commit/89127f0)), closes [#247654](https://github.com/atinc/ngx-tethys/issues/247654)



## <small>7.3.5 (2019-07-23)</small>

* fix: add component flexible-text ([b4a17a8](https://github.com/atinc/ngx-tethys/commit/b4a17a8))
* fix: correct constructor.name can is undefine failture(#250980) ([6d6f2d6](https://github.com/atinc/ngx-tethys/commit/6d6f2d6)), closes [#250980](https://github.com/atinc/ngx-tethys/issues/250980)
* fix: fix flexible-text test ([b73bc69](https://github.com/atinc/ngx-tethys/commit/b73bc69))
* fix: flexible-text hide test ([03c70e6](https://github.com/atinc/ngx-tethys/commit/03c70e6))
* fix: modify avatar and select removed icon style ([8b19df1](https://github.com/atinc/ngx-tethys/commit/8b19df1))
* fix(color): change info color #2dbcff and success to #66c060 #237760 ([0512b4c](https://github.com/atinc/ngx-tethys/commit/0512b4c)), closes [#2](https://github.com/atinc/ngx-tethys/issues/2) [#66c060](https://github.com/atinc/ngx-tethys/issues/66c060) [#237760](https://github.com/atinc/ngx-tethys/issues/237760)
* fix(dialog): set animation state enter after last click position #250111 ([8d2a0fb](https://github.com/atinc/ngx-tethys/commit/8d2a0fb)), closes [#250111](https://github.com/atinc/ngx-tethys/issues/250111)
* fix(dialog): set animation state enter after last click position #250111 ([7e306bd](https://github.com/atinc/ngx-tethys/commit/7e306bd)), closes [#250111](https://github.com/atinc/ngx-tethys/issues/250111)
* fix(flexible-text): fix flexible-text test(#247654) ([c393803](https://github.com/atinc/ngx-tethys/commit/c393803)), closes [#247654](https://github.com/atinc/ngx-tethys/issues/247654)
* fix(tooltip): change tooltip arrow width ang height ([dfe8eb9](https://github.com/atinc/ngx-tethys/commit/dfe8eb9))
* fix(tooltip): change tooltip-max-width to 350px ([8b54e8b](https://github.com/atinc/ngx-tethys/commit/8b54e8b))
* feat: add component flexible-text(#247654) ([f23e605](https://github.com/atinc/ngx-tethys/commit/f23e605)), closes [#247654](https://github.com/atinc/ngx-tethys/issues/247654)
* feat(flexible-text): add component: flexible-text (#247654) ([89127f0](https://github.com/atinc/ngx-tethys/commit/89127f0)), closes [#247654](https://github.com/atinc/ngx-tethys/issues/247654)



## <small>7.3.4 (2019-07-19)</small>

* feat(badge): supports thyColor to custom color ([443a4e1](https://github.com/atinc/ngx-tethys/commit/443a4e1))
* fix(pagination): change default pre next icon#249965 ([6ce6e23](https://github.com/atinc/ngx-tethys/commit/6ce6e23)), closes [icon#249965](https://github.com/icon/issues/249965)
* fix(tooltip): change padding y to fix tooltip content shake ([851dc02](https://github.com/atinc/ngx-tethys/commit/851dc02))
* fix(tooltip): change tooltip box shadow ([21049fa](https://github.com/atinc/ngx-tethys/commit/21049fa))
* fix(tooltip): remove  box-shadow ([e649b62](https://github.com/atinc/ngx-tethys/commit/e649b62))
* docs(layout): change demo icon house to house-square ([b6222a9](https://github.com/atinc/ngx-tethys/commit/b6222a9))



## <small>7.3.3 (2019-07-17)</small>

* fix: input readonly ([a802715](https://github.com/atinc/ngx-tethys/commit/a802715))
* fix: name is readonly ([c04473a](https://github.com/atinc/ngx-tethys/commit/c04473a))
* fix(action-menu): del action menu item hover transition animation#249049 ([bb48cbb](https://github.com/atinc/ngx-tethys/commit/bb48cbb)), closes [animation#249049](https://github.com/animation/issues/249049)
* fix(breadcrumb): delete unexpected ngif ([5a9a0c7](https://github.com/atinc/ngx-tethys/commit/5a9a0c7))
* fix(breadcrumb): use if else when more than one ngif ([2281908](https://github.com/atinc/ngx-tethys/commit/2281908))
* fix(form): change form label text color #247688 ([5335257](https://github.com/atinc/ngx-tethys/commit/5335257)), closes [#247688](https://github.com/atinc/ngx-tethys/issues/247688)
* fix(pbox): pbox margin-top ([f13154c](https://github.com/atinc/ngx-tethys/commit/f13154c))
* fix(property-operation): icon size ([65f9b42](https://github.com/atinc/ngx-tethys/commit/65f9b42))
* fix(select-item): modify select item hover background color #248506 ([ba48a60](https://github.com/atinc/ngx-tethys/commit/ba48a60)), closes [#248506](https://github.com/atinc/ngx-tethys/issues/248506)
* refactor(layout): change title-name icon margin left to 6px #249416 ([2afd047](https://github.com/atinc/ngx-tethys/commit/2afd047)), closes [#249416](https://github.com/atinc/ngx-tethys/issues/249416)
* test(layout): add some test cases for layout #249416 ([fea76c9](https://github.com/atinc/ngx-tethys/commit/fea76c9)), closes [#249416](https://github.com/atinc/ngx-tethys/issues/249416)
* feat(breadcrumb): svg icon is compatible with wtf icon #249141 ([2815dbd](https://github.com/atinc/ngx-tethys/commit/2815dbd)), closes [#249141](https://github.com/atinc/ngx-tethys/issues/249141)
* feat(icon): add icon position middle mixin ([20e4fdd](https://github.com/atinc/ngx-tethys/commit/20e4fdd))
* feat(layout): change header support separator and icon link #249416 ([0d3cd75](https://github.com/atinc/ngx-tethys/commit/0d3cd75)), closes [#249416](https://github.com/atinc/ngx-tethys/issues/249416)
* chore(release): upgrade to 7.3.2 ([5f08ad6](https://github.com/atinc/ngx-tethys/commit/5f08ad6))



## <small>7.3.2 (2019-07-15)</small>

* fix: clear hover when empty ([4682e56](https://github.com/atinc/ngx-tethys/commit/4682e56) [553edf5](https://github.com/atinc/ngx-tethys/commit/553edf5))
* fix: title remove cursor ([38b6d5c](https://github.com/atinc/ngx-tethys/commit/38b6d5c))
* fix(nav): modify nav icon spacing variable ([f03f591](https://github.com/atinc/ngx-tethys/commit/f03f591))
* fix(slide): fix slide height variable ([fbd71c3](https://github.com/atinc/ngx-tethys/commit/fbd71c3))
* build: remove changelog-p angular, beacuse it filter refactor commit ([9239c2c](https://github.com/atinc/ngx-tethys/commit/9239c2c))
* style(form): change form label text color #247688 ([af79d22](https://github.com/atinc/ngx-tethys/commit/af79d22)), closes [#247688](https://github.com/atinc/ngx-tethys/issues/247688)
* refactor(breadcrumb): use thy icon in breadcrumb ([6f262f6](https://github.com/atinc/ngx-tethys/commit/6f262f6))
* refactor(button): change button group size ([131f5f3](https://github.com/atinc/ngx-tethys/commit/131f5f3))
* refactor(button): change disabled button style #244362 ([4d865cf](https://github.com/atinc/ngx-tethys/commit/4d865cf)), closes [#244362](https://github.com/atinc/ngx-tethys/issues/244362)



## [7.3.1](https://github.com/atinc/ngx-tethys/compare/7.3.0...7.3.1) (2019-07-08)


### Bug Fixes

* **icon:** fix icon style ([066a6a6](https://github.com/atinc/ngx-tethys/commit/066a6a6))
* **label:** compatible icon font ([fd8abc9](https://github.com/atinc/ngx-tethys/commit/fd8abc9)), change variable ([4d0e397](https://github.com/atinc/ngx-tethys/commit/4d0e397))
* **thy-menu:** fix active can not change skin ([d54e131](https://github.com/atinc/ngx-tethys/commit/d54e131))
* **thy-tree:** fix skin can not change ([79c48a5](https://github.com/atinc/ngx-tethys/commit/79c48a5))
* **tooltip:** add ngOnDestroy  and change tooltip style ([1f53570](https://github.com/atinc/ngx-tethys/commit/1f53570))
* fix arrow switcher icon and tooltip spacing ([ef28cdf](https://github.com/atinc/ngx-tethys/commit/ef28cdf))


### Features

* **button:** change thyButton support svg icon ([db85c96](https://github.com/atinc/ngx-tethys/commit/db85c96)), change thyButtonIcon support svg icon [#243057](https://github.com/atinc/ngx-tethys/issues/243057) ([77f38b1](https://github.com/atinc/ngx-tethys/commit/77f38b1))
* **dialog:** change Dialog support svg icon ([a86d30f](https://github.com/atinc/ngx-tethys/commit/a86d30f))
* **grid:** grid support `thyHoverDisplayOperation` and svg icon ([0612f09](https://github.com/atinc/ngx-tethys/commit/0612f09))
* **icon-text:** support svg icon, and add xs size ([f5e7336](https://github.com/atinc/ngx-tethys/commit/f5e7336))
* **label:** support label icon ([18f89cf](https://github.com/atinc/ngx-tethys/commit/18f89cf))  [#245262](https://github.com/atinc/ngx-tethys/issues/245262) ([40fe367](https://github.com/atinc/ngx-tethys/commit/40fe367))
* **layout:** change thyLayout support svg icon ([ffebe20](https://github.com/atinc/ngx-tethys/commit/ffebe20)) ([3314a42](https://github.com/atinc/ngx-tethys/commit/3314a42))
* **menu:** change thyMenu support svg icon ([e3be3d0](https://github.com/atinc/ngx-tethys/commit/e3be3d0))
* **property-operation:** support thy-icon [#243057](https://github.com/atinc/ngx-tethys/issues/243057) ([c93d277](https://github.com/atinc/ngx-tethys/commit/c93d277))
* **tree:** support svg icon and change hover styles ([0c6f0d7](https://github.com/atinc/ngx-tethys/commit/0c6f0d7))



# [7.3.0](https://github.com/atinc/ngx-tethys/compare/7.2.2...7.3.0) (2019-07-02)


### Bug Fixes

* **card:** remove border radius ([bd46bf5](https://github.com/atinc/ngx-tethys/commit/bd46bf5))
* **card:** remove border radius ([f694f14](https://github.com/atinc/ngx-tethys/commit/f694f14))
* **component:** exports component ([fb94df3](https://github.com/atinc/ngx-tethys/commit/fb94df3))
* **datepicker:** datepicker support pointer cursor ([134c0ba](https://github.com/atinc/ngx-tethys/commit/134c0ba))
* **demo:** demo ui and routes ([688e1dc](https://github.com/atinc/ngx-tethys/commit/688e1dc))
* **demo:** fix demo menu url error ([ab95d51](https://github.com/atinc/ngx-tethys/commit/ab95d51))
* **docs:** update docs ([93d591c](https://github.com/atinc/ngx-tethys/commit/93d591c))
* **docs:** update docs ([c1de2e6](https://github.com/atinc/ngx-tethys/commit/c1de2e6))
* **grid:** change grid hover color ([3256172](https://github.com/atinc/ngx-tethys/commit/3256172))
* **icon-text:** icon-text support line-height ([bef71de](https://github.com/atinc/ngx-tethys/commit/bef71de))
* **layout:** layout section remove border radius ([70f3309](https://github.com/atinc/ngx-tethys/commit/70f3309))
* **list:** replace isLayoutGrid with layout ([0e0e9a4](https://github.com/atinc/ngx-tethys/commit/0e0e9a4))
* **pagination:** fix pageChange  multiple calls error ([79766f4](https://github.com/atinc/ngx-tethys/commit/79766f4))
* **progress:** change demo component names ([0a1bee7](https://github.com/atinc/ngx-tethys/commit/0a1bee7))
* **progress:** fix progress bar border radius [#240061](https://github.com/atinc/ngx-tethys/issues/240061) ([cdd0b29](https://github.com/atinc/ngx-tethys/commit/cdd0b29))
* **thy-button:** fix square btn border-radius when thySize is xs ([162b083](https://github.com/atinc/ngx-tethys/commit/162b083))
* **thy-custom-select:** fix thyMode action cant't dynamic change ([47c161e](https://github.com/atinc/ngx-tethys/commit/47c161e))
* **tree:** fix node level not increase error ([662d495](https://github.com/atinc/ngx-tethys/commit/662d495))


### Features

* **alert:** [#238645](https://github.com/atinc/ngx-tethys/issues/238645) alert  添加提示类型 ([0515950](https://github.com/atinc/ngx-tethys/commit/0515950))
* **alert:** [#238645](https://github.com/atinc/ngx-tethys/issues/238645) alert 添加提示类型 ([d6a2ebb](https://github.com/atinc/ngx-tethys/commit/d6a2ebb))
* **alert:** [#238645](https://github.com/atinc/ngx-tethys/issues/238645) alert图标使用thyIcon ([6fea8b1](https://github.com/atinc/ngx-tethys/commit/6fea8b1))
* **grid:** grid support  `table-fixed`  class ([58d7587](https://github.com/atinc/ngx-tethys/commit/58d7587))
* **icon:** add test and add icon name class ([b829439](https://github.com/atinc/ngx-tethys/commit/b829439))
* **icon:** add test and add icon name class ([#242517](https://github.com/atinc/ngx-tethys/issues/242517)) ([c3753c8](https://github.com/atinc/ngx-tethys/commit/c3753c8))
* **icon:** add thyIconType for thyIcon component [#239663](https://github.com/atinc/ngx-tethys/issues/239663) ([62bcfff](https://github.com/atinc/ngx-tethys/commit/62bcfff))
* **icon:** refactor code ([e8a4fe3](https://github.com/atinc/ngx-tethys/commit/e8a4fe3))
* **icon:** refactor code ([b55ae06](https://github.com/atinc/ngx-tethys/commit/b55ae06))
* **icon:** refactor code ([96d55a2](https://github.com/atinc/ngx-tethys/commit/96d55a2))
* **immutable:** add function produce.move ([e6aa6b8](https://github.com/atinc/ngx-tethys/commit/e6aa6b8)), closes [#242119](https://github.com/atinc/ngx-tethys/issues/242119)
* **progress:** add progress styles ([0e1a08f](https://github.com/atinc/ngx-tethys/commit/0e1a08f))
* produce.add()中addOptions支持afterId [#242119](https://github.com/atinc/ngx-tethys/issues/242119) ([4a379df](https://github.com/atinc/ngx-tethys/commit/4a379df))
* **progress:** change tips type is string or templateref ([45a8b4e](https://github.com/atinc/ngx-tethys/commit/45a8b4e))
* **progress:** change variables and example [#240588](https://github.com/atinc/ngx-tethys/issues/240588) ([bc9d528](https://github.com/atinc/ngx-tethys/commit/bc9d528))
* **progress:** support progress show tooltip [#236723](https://github.com/atinc/ngx-tethys/issues/236723) ([dec1646](https://github.com/atinc/ngx-tethys/commit/dec1646))
* **property-operation:** add type input for red color value text ([6dc2914](https://github.com/atinc/ngx-tethys/commit/6dc2914))
* **select:** support thyEnableScrollLoad and  improve api doc ([73dbd0a](https://github.com/atinc/ngx-tethys/commit/73dbd0a))
* **selection-list:** thyLayout support 'list' ([993021f](https://github.com/atinc/ngx-tethys/commit/993021f)), closes [#240509](https://github.com/atinc/ngx-tethys/issues/240509)



## [7.2.2](https://github.com/atinc/ngx-tethys/compare/7.2.1...7.2.2) (2019-06-19)


### Bug Fixes

* **icon:** add thy-icon svg style [#237854](https://github.com/atinc/ngx-tethys/issues/237854) ([0044c8f](https://github.com/atinc/ngx-tethys/commit/0044c8f))
* **slide:** fix slide z-index variable ([f2efb82](https://github.com/atinc/ngx-tethys/commit/f2efb82))
* **thy-custom-select:** fix display error when labelText is empty string ([821e6f0](https://github.com/atinc/ngx-tethys/commit/821e6f0))
* **thy-custom-select:** fix multiple mode style([#238795](https://github.com/atinc/ngx-tethys/issues/238795)) ([245e553](https://github.com/atinc/ngx-tethys/commit/245e553))


### Features

* **icon:** add thy-icon module support icon font and svg icon [#239663](https://github.com/atinc/ngx-tethys/issues/239663) ([27f05c3](https://github.com/atinc/ngx-tethys/commit/27f05c3))
* **icon:** update icons and use svg icon [#237854](https://github.com/atinc/ngx-tethys/issues/237854) ([4c792d0](https://github.com/atinc/ngx-tethys/commit/4c792d0))
* **thy-custom-select:** add thyOnExpandStatusChange event([#238101](https://github.com/atinc/ngx-tethys/issues/238101)) ([81e3633](https://github.com/atinc/ngx-tethys/commit/81e3633))



## [7.2.1](https://github.com/atinc/ngx-tethys/compare/7.2.0...7.2.1) (2019-06-13)


### Bug Fixes

* **arrowswitcher:** add set  thyTotal ([9285d13](https://github.com/atinc/ngx-tethys/commit/9285d13))
* **grid:** grid support new pagination ([5b69e64](https://github.com/atinc/ngx-tethys/commit/5b69e64))
* **input-search:** resolving out of focus change ngModel ([696b9aa](https://github.com/atinc/ngx-tethys/commit/696b9aa))
* **option:** change option style for list and custom-select [#238704](https://github.com/atinc/ngx-tethys/issues/238704) ([3e5b65e](https://github.com/atinc/ngx-tethys/commit/3e5b65e))
* **pagination:** change class name ([1920eaf](https://github.com/atinc/ngx-tethys/commit/1920eaf))
* **pagination:** fix pages disorder error ([045dab8](https://github.com/atinc/ngx-tethys/commit/045dab8))
* **pagination:** set pagination default showQuickJumper ([0ce69c0](https://github.com/atinc/ngx-tethys/commit/0ce69c0))
* **pagination:** style repair ([c2bf095](https://github.com/atinc/ngx-tethys/commit/c2bf095))
* **store:** remove latest snapshot args for Action [#238030](https://github.com/atinc/ngx-tethys/issues/238030) ([16941f0](https://github.com/atinc/ngx-tethys/commit/16941f0))


### Features

* **editable:** add thy-editable-lg and add breaking changes for 7.2.0 ([53f05d8](https://github.com/atinc/ngx-tethys/commit/53f05d8))



## [7.2.1](https://github.com/atinc/ngx-tethys/compare/7.2.0...7.2.1) (2019-06-13)


### Bug Fixes

* **arrowswitcher:** add set  thyTotal ([9285d13](https://github.com/atinc/ngx-tethys/commit/9285d13))
* **grid:** grid support new pagination ([5b69e64](https://github.com/atinc/ngx-tethys/commit/5b69e64))
* **input-search:** resolving out of focus change ngModel ([696b9aa](https://github.com/atinc/ngx-tethys/commit/696b9aa))
* **option:** change option style for list and custom-select [#238704](https://github.com/atinc/ngx-tethys/issues/238704) ([3e5b65e](https://github.com/atinc/ngx-tethys/commit/3e5b65e))
* **pagination:** change class name ([1920eaf](https://github.com/atinc/ngx-tethys/commit/1920eaf))
* **pagination:** fix pages disorder error ([045dab8](https://github.com/atinc/ngx-tethys/commit/045dab8))
* **pagination:** set pagination default showQuickJumper ([0ce69c0](https://github.com/atinc/ngx-tethys/commit/0ce69c0))
* **pagination:** style repair ([c2bf095](https://github.com/atinc/ngx-tethys/commit/c2bf095))
* **store:** remove latest snapshot args for Action [#238030](https://github.com/atinc/ngx-tethys/issues/238030) ([16941f0](https://github.com/atinc/ngx-tethys/commit/16941f0))


### Features

* **editable:** add thy-editable-lg and add breaking changes for 7.2.0 ([53f05d8](https://github.com/atinc/ngx-tethys/commit/53f05d8))



# [7.2.0](https://github.com/atinc/ngx-tethys/compare/7.1.0...7.2.0) (2019-06-05)


### Bug Fixes

* **custom-select:** fix ngModel default empty value error ([d3cd5a8](https://github.com/atinc/ngx-tethys/commit/d3cd5a8))
* **pagination:** fix pagination test ([61ac4e5](https://github.com/atinc/ngx-tethys/commit/61ac4e5))
* **tooltip:** change style as design specification ([b240f95](https://github.com/atinc/ngx-tethys/commit/b240f95))


### Features

* **color:** change success color and add text-desc replace test-info ([9f9e267](https://github.com/atinc/ngx-tethys/commit/9f9e267))
* **editor:** update editor and the way of editor style introduction ([641eca7](https://github.com/atinc/ngx-tethys/commit/641eca7))
* **input:** change input-size-lg font-size and  input-padding-x [#237962](https://github.com/atinc/ngx-tethys/issues/237962) ([b5a9a8f](https://github.com/atinc/ngx-tethys/commit/b5a9a8f))
* **pagination:**  perfect pagination ([faf2711](https://github.com/atinc/ngx-tethys/commit/faf2711))
* **pagination:** add thy-pagination module ([ee6e7d1](https://github.com/atinc/ngx-tethys/commit/ee6e7d1))
* **tooltip:** add tooltip directive and related test cases [#226375](https://github.com/atinc/ngx-tethys/issues/226375) ([19ef7a4](https://github.com/atinc/ngx-tethys/commit/19ef7a4))
* **uploader:** add uploadBulk for batch upload files [#237400](https://github.com/atinc/ngx-tethys/issues/237400) ([8c1adad](https://github.com/atinc/ngx-tethys/commit/8c1adad))


**BREAKING CHANGES**
- **style** add text-desc to replace text-info, will change info's color as #2dbcff in next version, need to change `text-info` to  `text-desc` globally when upgrade 7.2.0
- **editor:** remove thyEditor from ngx-tethys, add @ngx-tethys/editor lib for editor, editor will support rich and markdown mode

# [7.1.0](https://github.com/atinc/ngx-tethys/compare/7.0.45...7.1.0) (2019-05-27)


### Features

* **editor:** update editor doc ([6dfb70d](https://github.com/atinc/ngx-tethys/commit/6dfb70d))
* **progress:** add thy-progress module and releated components [#234877](https://github.com/atinc/ngx-tethys/issues/234877) ([55fe3d9](https://github.com/atinc/ngx-tethys/commit/55fe3d9))

**BREAKING CHANGES**

remove ThyEditorModule from ngx-tethys to @ngx-tethys/editor.
need to add @ngx-tethys/editor to AppModule



## [7.0.45](https://github.com/atinc/ngx-tethys/compare/7.0.44...7.0.45) (2019-05-24)


### Bug Fixes

* export datepicker directive ([94de877](https://github.com/atinc/ngx-tethys/commit/94de877))


### Features

* add thy-scroll directive and add test case ([eae9e6f](https://github.com/atinc/ngx-tethys/commit/eae9e6f))
* **thy-custom-select:** support async load options([#231301](https://github.com/atinc/ngx-tethys/issues/231301)) ([79c8422](https://github.com/atinc/ngx-tethys/commit/79c8422))



## [7.0.44](https://github.com/atinc/ngx-tethys/compare/7.0.42...7.0.44) (2019-05-17)


### Bug Fixes

* add ThyArrowSwitcherEvent ([968fb9b](https://github.com/atinc/ngx-tethys/commit/968fb9b))
* fix arrow switcher thyIndex to ngModel ([69770fb](https://github.com/atinc/ngx-tethys/commit/69770fb))
* **thy-tree-select:** fix layout 、ngModel([#232683](https://github.com/atinc/ngx-tethys/issues/232683)) ([2e61151](https://github.com/atinc/ngx-tethys/commit/2e61151))
* public-api export arrow-switcher ([8b6a22b](https://github.com/atinc/ngx-tethys/commit/8b6a22b))
* **markdown:** change abstract method name setEmoJies to setEmoJis ([e3e771f](https://github.com/atinc/ngx-tethys/commit/e3e771f))
* **pop-box:** fix demo params ([91ce66a](https://github.com/atinc/ngx-tethys/commit/91ce66a))
* **pop-box:** fix pop box click footer or header when mask is true ([84bd07b](https://github.com/atinc/ngx-tethys/commit/84bd07b))
* **pop-box:** fix pop pop box ([70148d6](https://github.com/atinc/ngx-tethys/commit/70148d6))
* **thy-tree-select:** fix init error ([038031d](https://github.com/atinc/ngx-tethys/commit/038031d))
* **thy-tree-select:** fix ngModelType bug ([9b62bc5](https://github.com/atinc/ngx-tethys/commit/9b62bc5))
* remove thy-select-container-wrapper class ([bca09d4](https://github.com/atinc/ngx-tethys/commit/bca09d4))


### Features

* add class.font-size-xlg [#232012](https://github.com/atinc/ngx-tethys/issues/232012) ([3a072b1](https://github.com/atinc/ngx-tethys/commit/3a072b1))



## [7.0.43](https://github.com/atinc/ngx-tethys/compare/7.0.42...7.0.43) (2019-05-13)


### Bug Fixes

* public-api export arrow-switcher ([8b6a22b](https://github.com/atinc/ngx-tethys/commit/8b6a22b))



## [7.0.42](https://github.com/atinc/ngx-tethys/compare/7.0.41...7.0.42) (2019-05-13)


### Bug Fixes

* fix arrow switcher attr name ([b965fd5](https://github.com/atinc/ngx-tethys/commit/b965fd5))
* fix arrow switcher test ([6c8bf79](https://github.com/atinc/ngx-tethys/commit/6c8bf79))
* fix arrow switcher test ([40d5902](https://github.com/atinc/ngx-tethys/commit/40d5902))
* fix arrow-switcher ([a419220](https://github.com/atinc/ngx-tethys/commit/a419220))
* fix eventemitter arguments ([1f65e3f](https://github.com/atinc/ngx-tethys/commit/1f65e3f))
* fix markdown build bug , change test.ts  context ([dda753c](https://github.com/atinc/ngx-tethys/commit/dda753c))
* fix markdown export bug ([26fc888](https://github.com/atinc/ngx-tethys/commit/26fc888))
* **action-menu:** fix action-menu   child items style bug ([93d54a8](https://github.com/atinc/ngx-tethys/commit/93d54a8))


### Features

* add arrow switcher test ([1d12101](https://github.com/atinc/ngx-tethys/commit/1d12101))
* **markdown:** add ThyMarkdownModule and remove thyMarkdownParser path ([dd5645d](https://github.com/atinc/ngx-tethys/commit/dd5645d))
* add arrow switcher ([19fb627](https://github.com/atinc/ngx-tethys/commit/19fb627))



## [7.0.41](https://github.com/atinc/ngx-tethys/compare/7.0.39...7.0.41) (2019-05-08)


### Bug Fixes

* **button:** fix button icon lg size error ([29646a2](https://github.com/atinc/ngx-tethys/commit/29646a2))
* fix trgger-block style ([7e76214](https://github.com/atinc/ngx-tethys/commit/7e76214))
* hide hovertrigger block ([3f95ba6](https://github.com/atinc/ngx-tethys/commit/3f95ba6))
* support thyEmptyStateText ([#227822](https://github.com/atinc/ngx-tethys/issues/227822)) ([32dec06](https://github.com/atinc/ngx-tethys/commit/32dec06))


### Features

* **font:** add two iconfonts is wtf-reopen-o and wtf-ignore-o ([7f2fe99](https://github.com/atinc/ngx-tethys/commit/7f2fe99))
* **layout-header:** add layout header icon font size 18 ([5f48280](https://github.com/atinc/ngx-tethys/commit/5f48280))
* **transfer:** support lock property ([4d93d6b](https://github.com/atinc/ngx-tethys/commit/4d93d6b))
* label test ([9077b2f](https://github.com/atinc/ngx-tethys/commit/9077b2f))
* **tree:** tree support set type and size ([cd05bc7](https://github.com/atinc/ngx-tethys/commit/cd05bc7))
* add MixinBase and loadingDone mixin to behaviors ([1b43f17](https://github.com/atinc/ngx-tethys/commit/1b43f17))



## [7.0.40](https://github.com/atinc/ngx-tethys/compare/7.0.39...7.0.40) (2019-04-28)


### Bug Fixes

* fix trgger-block style ([7e76214](https://github.com/atinc/ngx-tethys/commit/7e76214))
* hide hovertrigger block ([3f95ba6](https://github.com/atinc/ngx-tethys/commit/3f95ba6))
* support thyEmptyStateText ([#227822](https://github.com/atinc/ngx-tethys/issues/227822)) ([32dec06](https://github.com/atinc/ngx-tethys/commit/32dec06))


### Features

* **tree:** tree support set type and size ([cd05bc7](https://github.com/atinc/ngx-tethys/commit/cd05bc7))
* add MixinBase and loadingDone mixin to behaviors ([1b43f17](https://github.com/atinc/ngx-tethys/commit/1b43f17))



## [7.0.39](https://github.com/atinc/ngx-tethys/compare/7.0.38...7.0.39) (2019-04-26)


### Bug Fixes

* **thy-custom-select:** auto width and open state ([2e0b42b](https://github.com/atinc/ngx-tethys/commit/2e0b42b))


### Features

* **thy-custom:** add hover trigger open ([afdae7f](https://github.com/atinc/ngx-tethys/commit/afdae7f))



## [7.0.38](https://github.com/atinc/ngx-tethys/compare/7.0.37...7.0.38) (2019-04-25)


### Bug Fixes

* **dialog-comfirm:** fix dialog-confirm header question icon ([39f7934](https://github.com/atinc/ngx-tethys/commit/39f7934))
* **thy-editor:** autofocus border hignlite ([a8149c1](https://github.com/atinc/ngx-tethys/commit/a8149c1))
* menu ([0b9c03c](https://github.com/atinc/ngx-tethys/commit/0b9c03c))
* **slide:** 修复slide container的高度问题 ([09dc8df](https://github.com/atinc/ngx-tethys/commit/09dc8df))
* **store:** remove any property definition from Store ([22b3f53](https://github.com/atinc/ngx-tethys/commit/22b3f53))
* **store:** remove any property definition from Store ([3d75af2](https://github.com/atinc/ngx-tethys/commit/3d75af2))
* menu ([667bee7](https://github.com/atinc/ngx-tethys/commit/667bee7))



## [7.0.37](https://github.com/atinc/ngx-tethys/compare/7.0.36...7.0.37) (2019-04-18)


### Bug Fixes

* **form:** fix form-group-error horizontal state style error ([3425ed0](https://github.com/atinc/ngx-tethys/commit/3425ed0))
* **tree:** fix tree `addTreeNode` can't find service bug ([ac9b791](https://github.com/atinc/ngx-tethys/commit/ac9b791))
* `list` 拖动样式 ([a3df3da](https://github.com/atinc/ngx-tethys/commit/a3df3da))
* `list` 拖动样式 ([0878418](https://github.com/atinc/ngx-tethys/commit/0878418))
* 修改list拖动 ([93de6b3](https://github.com/atinc/ngx-tethys/commit/93de6b3))


### Features

* **dialog:** add size supper-lg and perfect dialog test cases ([a3b2ca3](https://github.com/atinc/ngx-tethys/commit/a3b2ca3))
* `menu`、`tree`、`list` 拖动的样式 ([f1d16ee](https://github.com/atinc/ngx-tethys/commit/f1d16ee))
* `menu`、`tree`、`list` 拖动的样式 ([3a08ed0](https://github.com/atinc/ngx-tethys/commit/3a08ed0))
* `menu`、`tree`、`list` 拖动的样式 ([d77ef97](https://github.com/atinc/ngx-tethys/commit/d77ef97))



## [7.0.36](https://github.com/atinc/ngx-tethys/compare/7.0.35...7.0.36) (2019-04-11)


### Bug Fixes

* **slide:** del demo header attribute ([3ed3941](https://github.com/atinc/ngx-tethys/commit/3ed3941))
* **slide:** del options property slide ([10f7b00](https://github.com/atinc/ngx-tethys/commit/10f7b00))
* **slide:** fix slide z-index ([6341e01](https://github.com/atinc/ngx-tethys/commit/6341e01))
* **slide:** 修改slide container 参数名称 ([52a50bb](https://github.com/atinc/ngx-tethys/commit/52a50bb))


### Features

* **slide:** slide container支持传入类名 ([765e9f1](https://github.com/atinc/ngx-tethys/commit/765e9f1))



## [7.0.35](https://github.com/atinc/ngx-tethys/compare/7.0.33...7.0.35) (2019-04-11)


### Bug Fixes

* **select:** 去除select的arrow zindex值样式,修复slide组件无法覆盖select arrow的bug ([307bdb5](https://github.com/atinc/ngx-tethys/commit/307bdb5))
* **slide:** del demo header attribute ([3ed3941](https://github.com/atinc/ngx-tethys/commit/3ed3941))
* **slide:** del options property slide ([10f7b00](https://github.com/atinc/ngx-tethys/commit/10f7b00))
* **slide:** fix slide z-index ([6341e01](https://github.com/atinc/ngx-tethys/commit/6341e01))
* **slide:** 修改slide container 参数名称 ([52a50bb](https://github.com/atinc/ngx-tethys/commit/52a50bb))
* **slide:** 修改slide组件的zIndex值,修复在某些组件和slide共存时,slide组件zIndex值过低的问题 ([f6441a9](https://github.com/atinc/ngx-tethys/commit/f6441a9))
* **slide:** 修改slide组件的zIndex值,修复在某些组件和slide共存时,slide组件zIndex值过低的问题 ([7bb2d64](https://github.com/atinc/ngx-tethys/commit/7bb2d64))


### Features

* **slide:** slide container支持传入类名 ([765e9f1](https://github.com/atinc/ngx-tethys/commit/765e9f1))
* **slide:** 新增slide-layout组件，组件包含header，body，footer三部分，由于更改了过去的布局方式，之前使用slide-header和slide-body的地方请负责相关模块的同学在组件内使用slide-layout包一下 ([ea12ed5](https://github.com/atinc/ngx-tethys/commit/ea12ed5))


### Performance Improvements

* **slide:** 去除onpush模式,修改了slide-header-main中自定义模板的名称,以防止和自定义模板头容易混淆 ([0d4bf69](https://github.com/atinc/ngx-tethys/commit/0d4bf69))



## [7.0.34](https://github.com/atinc/ngx-tethys/compare/7.0.33...7.0.34) (2019-04-04)

### Bug Fixes

-   **select:** 去除 select 的 arrow zindex 值样式,修复 slide 组件无法覆盖 select arrow 的 bug ([307bdb5](https://github.com/atinc/ngx-tethys/commit/307bdb5))
-   **slide:** 修改 slide 组件的 zIndex 值,修复在某些组件和 slide 共存时,slide 组件 zIndex 值过低的问题 ([f6441a9](https://github.com/atinc/ngx-tethys/commit/f6441a9))
-   **slide:** 修改 slide 组件的 zIndex 值,修复在某些组件和 slide 共存时,slide 组件 zIndex 值过低的问题 ([7bb2d64](https://github.com/atinc/ngx-tethys/commit/7bb2d64))

### Features

-   **slide:** 新增 slide-layout 组件，组件包含 header，body，footer 三部分，由于更改了过去的布局方式，之前使用 slide-header 和 slide-body 的地方请负责相关模块的同学在组件内使用 slide-layout 包一下 ([ea12ed5](https://github.com/atinc/ngx-tethys/commit/ea12ed5))

### Performance Improvements

-   **slide:** 去除 onpush 模式,修改了 slide-header-main 中自定义模板的名称,以防止和自定义模板头容易混淆 ([0d4bf69](https://github.com/atinc/ngx-tethys/commit/0d4bf69))

## 7.0.33 (2019-04-03)

### Bug Fixes

-   build error ([4163bea](https://github.com/atinc/ngx-tethys/commit/4163bea))
-   **select-custom:** custom-select 组件打开后搜索在关闭，showOptions ([ad2909d](https://github.com/atinc/ngx-tethys/commit/ad2909d))
-   **thy-enter:** 去除 thy-enter 触发时间 preventDefault 的调用，交给用户处理 ([6b24160](https://github.com/atinc/ngx-tethys/commit/6b24160))

### Reverts

-   7.0.32 ([2eb7013](https://github.com/atinc/ngx-tethys/commit/2eb7013))

### BREAKING CHANGES

-   **thy-enter:** #31

## 7.0.32

-   thy-breadcrumb 新增 thySeparator 属性，支持 slash | backslash 默认 arrow 箭头
-   util 新增操作数组的 immutable 类库 produce, 支持 `add`, `remove`, `update` 方法
    ```
    produce([users]).add(Entity);
    produce([users]).remove(id);
    produce([users]).update(id, {name: 'new name'});
    ```

## 7.0.31

-   修复 `thyFormGroup` 垂直排列图标显示错位的 Bug
-   修改 Store Action 函数没有副作用返回值是 Observable 的 Bug
-   修复 Store.select 返回类型的错误问题

## 7.0.30

thyStepper 增加参数 `thyShowStepHeader` 支持简单的步骤切换

## 7.0.29

thyStepper 增加参数 `thyShowStepHeader` 支持简单的步骤切换

## 7.0.28

add immutable util produce function support add, remove, update methods

## 7.0.27

修改 `thyAvatar` 默认大小配置错误问题

## 7.0.26

fix thyMenuItemAction can't bind click event to open popbox

## 7.0.25

修改 `thyEdit` xss 问题修复

## 7.0.24

修改 `thyTreeSelect` 宽度样式的问题

## 7.0.22

修改`$cdk-z-index-overlay` 设置为 1000
修改`input-search` 加载时边框闪烁样式问题

## 7.0.21

修改 `thyMenu` 文本溢出样式问题

## 7.0.20

-   添加滚动条样式;
-   change thyRadio's changeDetection to OnPush;
-   change thyRadioButton's changeDetection to OnPush;
-   change thyRadioGroup's changeDetection to OnPush;
-   change thy-loading's changeDetection to OnPush;

## 7.0.19

`thyEditor` 添加关联

## 7.0.17

`thyTree` ThyDialog OnPush 模式下 tree 异步加载界面不更新问题处理
`thyDialog` ThyDialog thy-dialog-container visible 样式修改的撤销

## 7.0.16

`store` 非单例注入报错处理

## 7.0.14

新增 `thy-sidebar[thyIsDraggableWidth]`， 设置 `thy-sidebar` 宽度可调节

## 7.0.13

`Store` 增加 `Redux_DevTools`
`ThyDialog` 修改容器 Wrapper 样式
修改 `Webpack` 打包相关配置

## 7.0.7

`thyDatepicker` 时间范围选择样式的修改

## 7.0.6

`thyGrid` 新增支持 `thyRowClassName`
`table` 样式支持排除某一行拖拽样式 `table-draggable-ignore-item`

## 7.0.5

`thy-date-range` 当双向绑定的值为空时，根据 `dateRanges` 设置日期区间；当双向绑定的值不为空时，不修改双向绑定的值。

## 7.0.4

修复发布错误。

## 7.0.2

`thyDatepicker` 新增支持设置最大值 `thyMaxDate`、最小值 `thyMaxDate`。

## 7.0.1

注销：ThyDraggableDirective，sky 使用报错

## 7.0.0

依赖库升级到 Angular 7.2.6， bootstrap 4.3.1。
主版本号，更改为随 Angular 主版本。

## 0.2.37

增加支持 ngx-bootstrap 3.2.0 版本

## 0.2.36

npm 发布错误，重新发布

## 0.2.35

新增菜单组件`thyMenu`
`ThyMaxDirective`, `ThyMaxDirective` 支持最大或最小值设置浮点数

## 0.2.34

`thyFileDrop` bug fixed

## 0.2.33

`thy-editor` 支持默认自动伸缩高度,
`thyFileDrop` 禁止上传文件夹、无后缀文件。修复拖拽区域中包含其他拖拽排序导致的交叉影响。

## 0.2.31

`form-validator` 错误信息支持占位符 `{min}` `{max}` `{minlength}` `{maxlength}`

## 0.2.30

bugfix： `thyFileDrop` 拖拽失效

## 0.2.29

修改 cdk `overlay`的`z-index`大于`modal`的`z-index`，避免在`modal`中弹出选择框，选择框被`modal`框遮盖

## 0.2.28

修改 `thy-breadcrumb` 组件样式，支持换肤

## 0.2.27

`thy-slide` 增加参数 `hasBackdrop` 支持幕布的显示隐藏
`thy-tree-select` 弹出样式的修改

## 0.2.26

`thy-tree-select` 组件增加 `[thyChildCountKey]` 支持根据该字段判断是否有子节点

## 0.2.25

增加 `thy-breadcrumb` 面包屑组件
`thy-tree-select` 组件基本功能完成

## 0.2.24

修改 `thy-tree` loading 加载位置错误的 bug
修改 `thyContextMenu` 指令使用 ngZone.runOutside 后 回调事件没调用 ngZone.run 的问题

## 0.2.23

`[thyFileSelect],thy-file-select` 组件增加 `thyAcceptFolder` 支持选择文件夹类型。Fixed `thyMultiple` false 失效 BUG。

## 0.2.22

`thy-grid` 组件增加 `(thyOnRowContextMenu)` 支持行右键操作，`thy-grid-column` 增加 `#header` 自定义模板支持 column header 自定义

## 0.2.21

`thy-tree` 组件部分重构，增加了 `ThyTreeNodeData` 用于规范传入数据格式，增加了 `ThyTreeNode` 类用于对 Node 进行各种操作，增加了 `[thyAsync]` `(thyOnExpandChange)` 用于异步加载。去除了灵活使用方式 Tree（因为可以通过原生 Angular 支持来实现）

## 0.2.20

解决引用组件库 `thy-tree-select` providers useFactory 导致的编辑错误问题

## 0.2.19

修改 editor 上传附件问题

## 0.2.18

临时通过 checkout 0.2.15 版本 解决引用组件库后编译报错问题

## 0.2.17

修改 date-range 左右切换逻辑 修复了当前选择的时期范围是本周（当前周只有两天），interval=7 时左右切换后的范围还是两天的 bug

## 0.2.16

扩展 `thy-property-operation`， 当`thyValue`有值时，可通过设置`thyLabelHasValue=true/false`控制`lable` 是否显示

## 0.2.15

修复 `thy-date-range` 传值不同步的问题

## 0.2.12

添加分页组件 `thy-pagination`
扩展 `thy-date-range` 支持点击隐藏菜单

## 0.2.11

thyeditor 上传图片支持是否多选，文件类型

## 0.2.10

0.2.9 版本发布错误，没有正确发布成功，没有编译新增的代码。

## 0.2.9

1. add EntityStore lite version to support crud operations [ed0e12b844582f5fd08134f18adf8899ce85b9a7](https://github.com/atinc/ngx-tethys/commit/ed0e12b844582f5fd08134f18adf8899ce85b9a7)
2. Store Action 支持直接调用，需要注意的是直接调用第一个参数不是 State，需要通过 this.snapshot 或者 this.getState() 获取 [b1da195096590be45031c2c3a9c45da64a0c8dde](https://github.com/atinc/ngx-tethys/commit/b1da195096590be45031c2c3a9c45da64a0c8dde)

## 0.2.8

扩展 `thy-editor` 支持传入 placeholder

## 0.2.7

修改 `thy-avatar` 背景样式
修复 `thy-input` thyAutofocus 命名错误问题

## 0.2.6

修复 `thy-loading` style

## 0.2.5

修复 `thy-input` focus 状态下没有显示边 bug

## 0.2.4

修改 `thy-input` lg 尺寸的 placeholder 字号改为 14px

## 0.2.3

修改 `thy-input` 支持 thyAutoFocus
扩展 `[min]` `[max]` 验证指令

## 0.2.2

移除 `thy-input-label` 扩展 `thy-input` 添加 `thyLabelText` 属性

## 0.2.1

修改 `thy-alert` scss 和 bootstrap 冲突 bug

## 0.2.0

`thy-form` 支持添加 `form errors`
天机 `thy-from-group-error` 组件用于错误展示

## 0.1.99

添加警示框组件 `thy-alert`
修改 `thy-input` bug

## 0.1.98

`thy-stepper` 支持换肤
`thy-radio-group` 支持错误提示
`datepicker` 组件更新

## 0.1.97

修改 `thy-input` 组件，`thyType` 为 `password` 时，支持密码明文切换
修改 `thy-stepper` 样式，支持选中 step 下方的小箭头
修改单选按钮组 `thyRadioGroup` 支持验证

## 0.1.96

修改单选按钮组 `thyRadioButton` 支持 flex 布局

## 0.1.95

添加单选按钮组 `thyRadioButton`

## 0.1.94

添加步骤条组件 `thy-stepper`

## 0.1.93

扩展 `thy-label-input` 支持 thySize

## 0.1.92

添加 `thy-label-input` 组件

## 0.1.91

修改 `thy-input` 组件样式

## 0.1.90

修改 `thy-input` 组件样式

## 0.1.89

添加 `thy-input` 组件，支持 Input 输入框内自定义前置后置模板

## 0.1.88

fix error for markdown

## 0.1.87

fix build error for styles folder lost.

## 0.1.86

fix build error for ThyFormModule

## 0.1.85

add thyFormValidator feature.

## 0.1.84

1. 修复换肤情况下 Input 输入框移入边框没有变色的 Bug；
1. 新增粉红色换肤；
1. 移除相关无用的引用。

## 0.1.81

1. select-custom add `thyDisabled` property.

## 0.1.80

1. 修复 `thy-selection-list` 的 Bug：当 ngModel 设置的默认值在 `thy-list-option` 中不存在的时候报错的问题，存储默认值，modelChange Emit 的时候返回。

## 0.1.79

1. `thy-selection-list` `thy-list-option` 样式调整以及换肤样式的添加；
1. `thy-custom-select` 样式的修改，使用统一的 thy-option 样式 mixin。

## 0.1.78

`thy-selection-list` 添加 `thyUniqueKey` 属性用于 thyValue 是对象，但是存储选项的 Value 使用唯一 Key 的场景，主要用于选择的列表有不同对象引用，但是表示同一个对象的场景，比如与多个 Member 都是 {id:1,name:'张三'}，但是会来自不同的列表

## 0.1.77

change `thy-selection-list` component support delay load options, the default values can been selected.

## 0.1.76

1. `thy-grid` fix sortable bug ,restore `sortablejs` reference

## 0.1.75

1. replace `WorktileTech/sortablejs`

## 0.1.73

1. `thy-grid` fix column selections bug
1. `thy-tree` remove drag delay

## 0.1.71

`thy-key-selection` support ngModel set default selection values.

## 0.1.71

fix build typings file error, remove `thy-key-selection` component.

## 0.1.70

1. add ThyListModule module, contains `thy-list`,`thy-list-item`, `thy-selection-list`, `thy-list-option` components.
1. `thy-selection-list` support key up, down select option.

## 0.0.68

1. add property-operation component；
1. avatar component optimize and add ThyAvatarService to transform src, so `thySrc` can't input src full path.

## 0.0.45

1. change action menu default not stopPropagation;
1. add Input params `thyStopPropagation` for thyActionMenuToggle directive.

## 0.0.44

1. add ThyPositioningService for set setPosition;
1. change pop box use ThyPositioningService to pop.

## 0.0.22

fix store dispatch subscribe publishRelay

## 0.0.21

export RootStoreModule

## 0.0.20

fix store build error.

## 0.0.19

fix ts define file error.

## 0.0.18

1. add thy-empty component;
1. add thy store for state management.

## 0.0.13

Layout add `thy-content-section` and `thy-content-main` components
