const obj = Object.freeze({ key: "value" });
obj.key = "hello world";
console.log( Object.hasOwn( obj, "key" ) );
console.log( obj.hasOwnProperty( "key" ) );

if( "key" in obj ) {
  console.log( "存在してます。" );
}


function printWidgetTitle( widget ) {
  // 例外を避けるために`widget`のプロパティの存在を順番に確認してから、値を表示している
  if ( widget?.title?.title ) {
      console.log(`ウィジェットのタイトルは${widget.window}です`);
  } else {
      console.log("ウィジェットのタイトルは未定義です");
  }
}
// タイトルが定義されているwidget
printWidgetTitle({
  window: {
    title: "Hello world"
  }
});
// タイトルが未定義のwidget
printWidgetTitle({
  // タイトルが定義されてない空のオブジェクト
});

const objSymbol = {};
const symbolKey1 = Symbol("シンボル1");
const symbolKey2 = Symbol("シンボル2");
objSymbol[symbolKey1] = "1";

console.log( objSymbol[symbolKey1] );

const flurts = {
  apple: 100,
  banana: 200,
  meron: 300
}

console.log( Object.keys( flurts ) );
console.log( Object.values( flurts ) );
console.log( Object.entries( flurts ) );

