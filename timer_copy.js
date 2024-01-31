//** クリックしたらタイマを設定できる。 **//
const timer = document.querySelector( ".timer" );
let timer_setting_menu_judge = false;
timer.addEventListener( "mousedown", () => {
  // timer_setting_menu が表示されている or 表示されていない
  if ( ! ( timer_setting_menu_judge ) )
  {
    // timer_setting_menu を表示する判定。
    timer_setting_menu_judge = true;

    // timer_setting_menu をHTMLファイルから取得。
    const timer_setting_menu = document.getElementsByClassName( "timer_setting_menu_closed" ).item( 0 );

    // timer_setting_menu のクラス名を置き換える。
    timer_setting_menu.classList.replace( "timer_setting_menu_closed", "timer_setting_menu_open" );
  }
  else {
    // timer_setting_menu を表示する判定。
    timer_setting_menu_judge = false;

    // timer_setting_menu をHTMLファイルから取得。
    const timer_setting_menu = document.getElementsByClassName( "timer_setting_menu_open" ).item( 0 );

    // timer_setting_menu のクラス名を置き換える。
    timer_setting_menu.classList.replace( "timer_setting_menu_open", "timer_setting_menu_closed" );
  }
});
//********************************************//

//** タイマ処理。 **//

//必要なHTMLタグの取得
const hour_number_left = document.getElementsByClassName("hour__number--left").item( 0 );
const hour_number_right = document.getElementsByClassName("hour__number--right").item( 0 );
const minutes_number_left = document.getElementsByClassName("minutes__number--left").item( 0 );
const minutes_number_right = document.getElementsByClassName("minutes__number--right").item( 0 );
const secounds_number_left = document.getElementsByClassName("secounds__number--left").item( 0 );
const secounds_number_right = document.getElementsByClassName("secounds__number--right").item( 0 );

let hour = parseInt( hour_number_left.textContent + hour_number_right.textContent );
let minutes = parseInt( minutes_number_left.textContent + minutes_number_right.textContent );
let secounds = parseInt( secounds_number_left.textContent + secounds_number_right.textContent );
const hour_origin = hour;
const minutes_origin = minutes;
const secounds_origin = secounds;

function count_time() {
  const Process_end = ( hour >= 0 && minutes >= 0 && secounds >= 0  ); 
  if ( Process_end ) {
    const hour_str = hour < 10 ? "0" + hour.toString() : hour.toString();
    const minutes_str = minutes < 10 ? "0" + minutes.toString() : minutes.toString();
    const secounds_str = secounds < 10 ? "0" + secounds.toString() : secounds.toString();
    hour_number_left.textContent = hour_str.toString().charAt(0);
    hour_number_right.textContent = hour_str.toString().charAt(1);
    minutes_number_left.textContent = minutes_str.toString().charAt(0);
    minutes_number_right.textContent = minutes_str.toString().charAt(1);
    secounds_number_left.textContent = secounds_str.toString().charAt(0);
    secounds_number_right.textContent = secounds_str.toString().charAt(1);
    secounds --;
    console.log( hour, minutes, secounds );
    if ( hour >= 0 && minutes > 0 && secounds < 0 ) {
      minutes --;
      secounds = 59;
    }
    else if( hour >= 0 && minutes <= 0 && secounds < 0) {
      hour --;
      minutes = 59;
      secounds = 59;
    }
  }
  else {
    console.log( "終了" );
    clearInterval( clear );
    clear = null;
  }
}

//********************************************//


//** Start or Stop ボタンの作成 **//
const button_start = document.getElementsByClassName( "timer__button--StartOrStop" ).item(0);
let button_status = false;
let clear = undefined;
button_start.addEventListener("mousedown", () => {
  if( !(button_status) ){
    button_status = true;
    clear = setInterval( count_time, 1000 );
  }
  else {
    button_status = false;
    clearInterval( clear );
  }
});
//****************************************************//

//** Reset ボタンの作成 **//
const reset_button = document.getElementsByClassName( "timer__button--Reset" ).item(0);
reset_button.addEventListener("mousedown", () => {
  const reset_button_hour = parseInt( hour_origin ) >= 10 ? hour_origin.toString() : "0" + hour_origin.toString();
  const reset_button_minutes = parseInt( minutes_origin ) >= 10 ? minutes_origin.toString() : "0" + minutes_origin.toString();
  const reset_button_secounds = parseInt( secounds_origin ) >= 10 ? secounds_origin.toString() : "0" + secounds_origin.toString();

  hour_number_left.textContent = reset_button_hour.charAt( 0 );
  hour_number_right.textContent = reset_button_hour.charAt( 1 );
  minutes_number_left.textContent = reset_button_minutes.charAt( 0 );
  minutes_number_right.textContent = reset_button_minutes.charAt( 1 );
  secounds_number_left.textContent = reset_button_secounds.charAt( 0 );
  secounds_number_right.textContent = reset_button_secounds.charAt( 1 );

  const hour_str = hour_origin.toString();
  const minutes_str = minutes_origin.toString();
  const secounds = secounds_origin.toString();
  hour_number_left.textContent = parseInt( hour_str ) >= 10 ? hour_str.charAt( 0 ) : "0";
  hour_number_right.textContent = parseInt( hour_str ) >= 10 ? hour_str.charAt( 1 ) : hour_str.charAt( 0 );
});
//****************************************************//