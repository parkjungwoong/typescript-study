# gulp-simple

# 목차
- [개요](#개요)
- [프로젝트 생성 방법](#프로젝트-생성-방법)
- [모듈 실행](#모듈-실행)
- [브라우저 실행](#브라우저-실행)
- [자동 컴파일 설정](#자동-컴파일-설정)

## 개요
typescript와 gulp를 이용한 간단한 개발 환경 구축 방법을 설명합니다.\
간단한 학습용으로 적합하며 프로덕트급으로 하기 위해서는 babel, Ugliy, 등 플러그인을 더 살펴보십시오

## 프로젝트 생성 방법
- 디렉토리, 의존성 설치
```
디렉토리 생성
gulp-simple/
   ├─ src/
   └─ dist/
 
# 프로젝트 root에서 실행  
npm init

# gulp-cli 없으면 글로벌로 설치
npm install -g gulp-cli

# 프로젝트 root에서 실행 typescript, gulp, gulp-typescript 의존성 설치
npm install --save-dev typescript gulp gulp-typescript
```

- tsconfig.json 생성
```
#root 디렉토리에 tsconfig.json 생성
{
  "files": [
    "src/main.ts"
  ],
  "compilerOptions": {
    "noImplicitAny": true,
    "target": "es5"
  },
  "exclude": [
    "node_modules"
  ]
}
```

- gulpfile.js 생성
```
#root 디렉토리에 gulpfile.js 생성
var gulp = require("gulp");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");

gulp.task("default", function () {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest("dist"));
});
```

## 모듈 실행
- ts 파일 작성
```
vi src/main.ts

function hello(compiler: string) {
    console.log(`hello from ${compiler}`);
}

hello("ts");
```

- 실행
```
gulp
node dist/main.js
```

## 브라우저 실행
- 의존성 설치
```
#browserify : 모듈 번들링
#tsify : Typeify 컴파일러에 접근할 수 있는 browserify 플러그인 
#vinyl-source-stream : browserify 출력을 gulp에서 vinyl으로 인식하는 형식으로 변환
npm install --save-dev browserify tsify vinyl-source-stream
```

- 페이지 만들기
```
vi src/index.html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>hello word</title>
</head>
<body>
<p>index.html</p>
<script src="bundle.js"></script>
</body>
</html>
```

- gulpfile.js 수정
```
var gulp = require("gulp");

var browserify = require("browserify");
var source = require('vinyl-source-stream');
var tsify = require("tsify");
var paths = {
    pages: ['src/*.html']
};

//copy-html 라는 task를 생성 , p
gulp.task("copy-html", function () {
    return gulp.src(paths.pages)
        .pipe(gulp.dest("dist"));
});

//"default" 가 실행 될때마다 gulp.series 안에 정의된 task가 실행됨
gulp.task('default', gulp.series(gulp.parallel('copy-html'), function () {
    return browserify({
        basedir: '.',
        debug: true,
        entries: ['src/main.ts'],
        cache: {},
        packageCache: {}
    })
    .plugin(tsify)
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('dist'));
}));
```

- 실행
```
gulp
dist/index.html 파일을 브라우저로 실행
```

## 자동 컴파일 설정
- Watchify가 파일을 저장할 때마다 gulp를 계속 실행해준다.
- 의존성 설치
```
npm install --save-dev watchify gulp-util
```
- gulpfile.js 수정
```

var gulp = require("gulp");
var browserify = require("browserify");
var source = require('vinyl-source-stream');
var watchify = require("watchify");
var tsify = require("tsify");
var gutil = require("gulp-util");
var paths = {
    pages: ['src/*.html']
};

var watchedBrowserify = watchify(browserify({
    basedir: '.',
    debug: true,
    entries: ['src/main.ts'],
    cache: {},
    packageCache: {}
}).plugin(tsify));

gulp.task("copy-html", function () {
    return gulp.src(paths.pages)
        .pipe(gulp.dest("dist"));
});

function bundle() {
    return watchedBrowserify
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest("dist"));
}

gulp.task('default', gulp.series(gulp.parallel('copy-html'), bundle));
watchedBrowserify.on("update", bundle);
watchedBrowserify.on("log", gutil.log);
```
