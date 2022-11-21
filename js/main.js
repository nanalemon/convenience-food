'use strict';
{
  const btn=document.getElementById('btn');
  const btn02=document.getElementById('btn02');
  const btn03=document.getElementById('btn03');
  const btn04=document.getElementById('btn04');

  const menu=document.getElementById('menu');
  const menu02=document.getElementById('menu02');
  const menu03=document.getElementById('menu03');
  const menu04=document.getElementById('menu04');

  btn.addEventListener('click',()=>{
    const results=['平焼きベーコンチーズデニッシュ♥','メープルスティック 5本入♥','ホイップチョコロール♥','三田製麵所監修 つけ麺風肉まん♥','バター香る 焼きチーズタルト～4種のチーズ使用～♥','バタービスケットサンド キャラメルりんご♥','ちいかわ まんまる焼き♥','渋皮栗のモンブラン大福♥','キャラメルりんごフラッペ♥','甜麺醤のコクと甘みジャージャー麺 ( 冷凍食品 )♥','こだわりスープを楽しむ小籠包 ( 冷凍食品 )♥','ロッテ ワッフルコーン 本格ベルギーチョコ ( アイス )♥'];

    menu.textContent=results[Math.floor(Math.random()*results.length)];
  });

  btn02.addEventListener('click',()=>{
    const results =['ベーコンエッグおむすび♥','サーモンのクリームポテト♥','7プレミアム マーラーカオ 4個入♥','国産小麦使用 ふんわりメロンパン♥','国産小麦使用 練乳ミルクフランス♥','もっちりクレープ レアチーズクリーム＆レアチーズホイップ♥','7プレミアム クラウンリング ショコラホイップ♥','7プレミアム ゼロゼリートリプル グレープフルーツ♥','ハーゲンダッツミニカップ キャンディングアーモンド♥','お店で蒸した中華風蒸しケーキ マーラーカオ♥','ロッテ ゼロ シュガーフリービスケット♥','低糖質ミルクチョコレート♥','森永 ダース ロカボ糖質30%off♥','不二家 ルック 100年のショートケーキ♥','じっくりコトコトこんがりパン 超濃厚完熟かぼちゃポタージュ♥','じっくりコトコトこんがりパン 超濃厚コーンポタージュ♥'];

    menu02.textContent=results[Math.floor(Math.random()*results.length)];
  });


  btn03.addEventListener('click',()=>{
    const results =['NL アップルカスタードパイ 2個入♥','NL モンブランみたいなパン♥','マチノパン ブラックショコラパイ♥','マチノパン マロンバゲット♥','石窯バゲットサンド ハム＆チーズ♥','アーモンド入りベビーチーズ♥','ダルゴナコーヒー TASTE 220ml♥'];

  menu03.textContent=results[Math.floor(Math.random()*results.length)];
  });


  btn04.addEventListener('click',()=>{
    const results =['あんバタータルトケーキ♥','パニーニ ( ミートソース＆チーズ )♥','やみつきになる！メロンパン♥','ホイップまみれのガトーショコラ ～ベルギーチョコ使用～♥','しっとりふんわり生カスタードワッフル♥','具沢山オムレツサンド♥','でかむすび こく旨鶏醤油マヨネーズ♥','漬けダレで味わうトロサーモンおむすび♥','クレープケーキ ( プリン風味 )♥','メープルアーモンドケーキ♥','コクとスパイスのかれーぱん♥','台湾蜜いもサンド♥','かけ算おにぎり 鰹節×ツナマヨ♥','手巻 ねぎ塩チキンステーキ♥','かけ算おにぎり 赤しそ×明太子♥','ベルギーマッシュポテト ( ホットスナック )♥','クリスマスmini 鳥羽周作シェフ監修 フロマージュノエル♥','クリスマスmini ベルギーチョコレートノエル♥'];

  menu04.textContent=results[Math.floor(Math.random()*results.length)];
  });
  
}