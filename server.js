//express를 모듈을 가지고 온다.
var express = require("express");

var app = express();
var http = require("http");
var path = require("path"); //경로작업
var logger = require("morgan");
var cookieParser = require("cookie-parser");

// 아래 순서
app.use(logger("dev"));
// css, js, image등 정적 파일 접근
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/public/main.html");
});

app.listen(3000, function() {
  console.log("서버 Start __dirname: ", __dirname);
});
