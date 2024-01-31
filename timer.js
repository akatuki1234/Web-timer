/********************* タイマー処理 *********************/
const getTimer = function(){
  let hour_number_left = document.querySelector( ".hour__number--left" );
  let hour_number_right = document.querySelector( ".hour__number--right" );
  let minutes_number_left = document.querySelector( ".minutes__number--left" );
  let minutes_number_right = document.querySelector( ".minutes__number--right" );
  let secounds_number_left = document.querySelector( ".secounds__number--left" );
  let secounds_number_right = document.querySelector( ".secounds__number--right" );
  const default_hour_number_left = hour_number_left.textContent;
  const default_hour_number_right = hour_number_right.textContent;
  const default_miniutes_number_left = minutes_number_left.textContent;
  const default_miniutes_number_right = minutes_number_right.textContent;
  const default_secounds_number_left = secounds_number_left.textContent;
  const default_secounds_number_right = secounds_number_right.textContent;
  let clear = null;
  let clicked = false;              //クリックされているのか or されていないのか
  let startClicked = false;
  const Start = () => { 
    console.log( "Start関数を実行しました。" );
    // console.log( 
    //   `現在は、${ hour_number_left.textContent }${ hour_number_right.textContent }:${ minutes_number_left.textContent }${ minutes_number_right.textContent }:${ secounds_number_left.textContent }${ secounds_number_right.textContent }\tです。`);
      if ( !clicked ){
        clicked = true;
        startClicked = true;
        clear = setInterval( TimerOn, 1000 );
      }
      else {
        console.log( "既にタイマーはスタートしています。" );
      }
  }; 
  const Porse = () => {
    console.log( "Porse関数を実行しました。" );
    if ( clicked ) {
      clicked = false;
      clearInterval( clear )
    }
    else {
      console.log( "既にタイマーはストップしています。" );
    }
  };
  const Reset = () => {
    if ( startClicked ) {
      startClicked = false;
      console.log( "Reset関数を実行しました。" );
      hour_number_left.textContent = default_hour_number_left;
      hour_number_right.textContent = default_hour_number_right;
      minutes_number_left.textContent = default_miniutes_number_left;
      minutes_number_right.textContent = default_miniutes_number_right;
      secounds_number_left.textContent = default_secounds_number_left;
      secounds_number_right.textContent = default_secounds_number_right;
      TimerOff();
    }
    else {
      console.log( "現在の値は初期値です。" )
    }
  };

  const TimerOn = () => {
    console.log( "Start関数 → TimerOn関数を実行しました。" );
    let hour = parseInt( hour_number_left.textContent + hour_number_right.textContent );;
    let minutes = parseInt( minutes_number_left.textContent + minutes_number_right.textContent );
    let secounds = parseInt( secounds_number_left.textContent + secounds_number_right.textContent );
    const Process_end = ( hour <= 0 && minutes <= 0 && secounds <= 0 );
    if ( !Process_end ) {
      secounds --;
      if( hour >= 0 && minutes >= 0 && secounds >= 0 ) {
        const secounds_str = secounds < 10 ? "0" + secounds.toString() : secounds.toString();
        secounds_number_left.textContent = secounds_str.charAt(0);
        secounds_number_right.textContent = secounds_str.charAt(1);
      }
      else if ( hour >= 0 && minutes > 0 && secounds < 0 ) {
        minutes --;
        const minutes_str = minutes < 10 ? "0" + minutes.toString() : minutes.toString();
        minutes_number_left.textContent = minutes_str.charAt(0);
        minutes_number_right.textContent = minutes_str.charAt(1);
        secounds = 59;
        const secounds_str = secounds < 10 ? "0" + secounds.toString() : secounds.toString();
        secounds_number_left.textContent = secounds_str.charAt(0);
        secounds_number_right.textContent = secounds_str.charAt(1);
      }
      else if ( hour >= 0 && minutes >= 0 && secounds < 0 ) {
        hour --;
        const hour_str = hour < 10 ? "0" + hour.toString() : hour.toString();
        hour_number_left.textContent = hour_str.charAt(0);
        hour_number_right.textContent = hour_str.charAt(1);
        minutes = 59;
        const minutes_str = minutes < 10 ? "0" + minutes.toString() : minutes.toString();
        minutes_number_left.textContent = minutes_str.charAt(0);
        minutes_number_right.textContent = minutes_str.charAt(1);
        secounds = 59;
        const secounds_str = secounds < 10 ? "0" + secounds.toString() : secounds.toString();
        secounds_number_left.textContent = secounds_str.charAt(0);
        secounds_number_right.textContent = secounds_str.charAt(1);
      }
    }
    else {
      TimerOff();
    }
  }
  const TimerOff = () => { 
    console.log( "Start関数 → TimerOn関数 -> TimerOff関数を実行しました。" );
    console.log( "タイマーが終了しました。" );
    clearInterval( clear );
    clear = null;
  };

  return { Start:() => Start(), Porse:() => Porse(), Reset: () => Reset() }
};

const Timer = getTimer();

const buttonArray = [
  { id: "Start", lister: () => Timer.Start() },
  { id: "Stop", lister: () => Timer.Porse() },
  { id: "Reset", lister: () => Timer.Reset() }
];

buttonArray.forEach( e => document.getElementById( e.id ).addEventListener( "click", e.lister ) );

/********************************************************/