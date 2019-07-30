# prototype-boilerplate [<img src="https://github.com/chevalvert.png?size=100" align="right">](http://chevalvert.fr/)
Boilerplate for javascript prototyping

<br>

## Installation
```console
$ git clone https://github.com/chevalvert/prototype-boilerplate my-proto
$ cd my-proto
$ npm install
```

##### :bulb: Before starting your project, it is recommanded to unboil it using [brocessing/`unboil`](https://github.com/brocessing/unboil) :
>`unboil` allows you to clean a boilerplate project (files like package.json, readme, git...) to quickly start your own project from it.


## Usage

```console
$ npm run start
$ npm run build
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


### Deployment using github releases
```console
$ npm run version
```

## License
[MIT.](https://tldrlegal.com/license/mit-license)

