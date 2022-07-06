# boilerplate-webapp [<img src="https://github.com/chevalvert.png?size=100" align="right">](http://chevalvert.fr/)
> Webapp boilerplate with minimal JSX support

<br>

## Installation
### By using as a Github template
[Use this template](https://github.com/chevalvert/boilerplate-webapp/generate).

### By cloning and unboiling manually
```console
$ git clone https://github.com/chevalvert/boilerplate-webapp my-webapp
$ cd my-webapp
$ npm install
```

##### :bulb: Before starting your project, it is recommanded to unboil it using [brocessing/`unboil`](https://github.com/brocessing/unboil) :
>`unboil` allows you to clean a boilerplate project (files like package.json, readme, git...) to quickly start your own project from it.


## Usage

```console
$ npm run start
$ npm run build
$ npm run deploy:preprod
$ npm run deploy:gh-pages

$ npm run test
$ npm run lint
```

### Modules aliases
###### `package.json`
```json
{
  …
  "aliases": {
    "a-directory": "a-directory",
    "a-file": "a-directory/a-file"
  }
}
```

###### `index.js`
```js
import 'a-directory/a-file'
import foo from 'a-file'
```


### Deployment to production using GitHub releases
```console
$ npm run version
```

## Credits

JSX utils heavily based on [**pqml**](https://github.com/pqml)’s work.

## License
[MIT.](https://tldrlegal.com/license/mit-license)

