## goorm tools

dev tools for goorm developer

### Installation
```
$ git clone https://github.com/minungHan/goorm-dev-tools.git
$ cd goorm-dev-tools
$ npm install -g
```

### usage
#### grm svg
디자인팀으로부터 받은 svg파일을 Icon 컴포넌트로 변환시켜준다
```
  Usage: svg [options] <target path>

  Options:

    -p, --path [path]  변환된 jsx가 저장될 경로 (default: ./)
    -h, --help         output usage information

  Examples:

    $ grm svg ./images -p ./src/components/Icon
```

#### grm cmpnt
기본적인 component 뼈대를 만들어준다
```
  Usage: cmpnt [options] <name>

  Options:

    -t, --type [type]        컴포넌트 타입 "class" or "function" (default: class)
    -p, --path [path]        컴포넌트가 저장될 경로 (default: ./)
    -j, --jstype [jstype]    컴포넌트 파일의 확장자 (default: jsx)
    -c, --csstype [csstype]  컴포넌트 파일의 확장자 (default: scss)
    -h, --help               output usage information

  Examples:

    $ grm cmpnt Input
    $ grm cmpnt Input -t function -p ./src/components
```
### example
