// // gulpプラグインの読み込み
// const gulp = require("gulp");
// // Sassをコンパイルするプラグインの読み込み
// const sass = require("gulp-sass")(require("sass"));

// // style.scssをタスクを作成する
// gulp.task("default", () => {
//   // style.scssファイルを取得
//   return (
//     gulp
//       .src("sass/mystyle.scss")
//       // Sassのコンパイルを実行
//       .pipe(sass())
//       // cssフォルダー以下に保存
//       .pipe(gulp.dest("css"))
//   );
// });




// gulpプラグインを読み込みます
const { src, dest, watch } = require("gulp");
// Sassをコンパイルするプラグインを読み込みます
const sass = require("gulp-sass")(require("sass"));

/**
 * Sassをコンパイルするタスクです
 */
const compileSass = () =>
  // style.scssファイルを取得
  src("sass/mystyle.scss")
    // Sassのコンパイルを実行
    .pipe(
      // コンパイル後のCSSを展開
      sass({
        outputStyle: "expanded"
      })
    )
    // cssフォルダー以下に保存
    .pipe(dest("css"));

/**
 * Sassファイルを監視し、変更があったらSassを変換します
 */
const watchSassFiles = () => watch("sass/mystyle.scss", compileSass);

// npx gulpというコマンドを実行した時、watchSassFilesが実行されるようにします
exports.default = watchSassFiles;