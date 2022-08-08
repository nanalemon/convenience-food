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
    const results=['リトルミイ ストロベリーチーズケーキ♥','ムーミンチーズケーキ♥','夏野菜のカルツォーネ♥','海老ピラフ ( おむすび )♥','2種類のトルティーヤ 牛焼肉とパストラミビーフ♥','バタービスケットサンド 紅茶♥','ホワイトチョコ＆クランベリーパン♥','ハニーマスタード風味 ポテトサラダ♥','天使のチーズケーキ♥','もち明太チーズドリア♥'];

    menu.textContent=results[Math.floor(Math.random()*results.length)];
  });

  btn02.addEventListener('click',()=>{
    const results =['クレープ レアチーズクリーム＆苺ソース♥','Lemon Choco レモンチョコレートホワイト♥','カルビー 香るじゃがビー トリュフバター味♥','日清 チキンラーメン ナポリタン 汁なし ( カップ麵 )♥','細切りフライドポテト ( 冷凍食品 )♥','魯珈監修カティロール スパイシーチキン♥','たんぱく質が摂れる やみつき冷奴 よだれ鶏♥','オハヨー ブリュレ ( アイス )♥','ボックスサンド ( たまご・ポテト・とんかつ )♥','手巻寿司 チキン南蛮巻 タルタルソース入り♥'];

    menu02.textContent=results[Math.floor(Math.random()*results.length)];
  });


  btn03.addEventListener('click',()=>{
    const results =['レモンパウンドケーキ ウィークエンドシトロン♥','NL もち麦のもっちりとしたはちみつレモンベーグル♥','カスタードドーナツ ボンボローニ♥','ささみフライ ( 塩レモン風味 )♥','おにぎり タルタルエビフライ♥','ホボクリム ほぼほぼクリームのシュー ( レアチーズ＆ベリー )♥','バゲットサンド ローストビーフ♥','ミルクホイップデニッシュ♥','トルティーヤ ハム＆5種のチーズ ( チーズ 2.5倍 )♥','レモンのもち食感ロール ( 瀬戸内産レモン )♥'];

  menu03.textContent=results[Math.floor(Math.random()*results.length)];
  });


  btn04.addEventListener('click',()=>{
    const results =['シナモロール まんまる焼き♥','フレンチフライポテト ( ホットスナック )♥','台湾風カステラ 長野県産シャインマスカットソース使用♥','ホイップまみれのホットケーキスフレ♥','ベルギーチョコプリン♥','ちーず饅頭♥','ゴーゴーメジャーカレーサンド♥','ゴーゴーカレーピラフおにぎり ( ゆでたまご )♥','寿司おにぎり えんがわわさび♥','ゴーゴーカレーポテトサラダ♥'];

  menu04.textContent=results[Math.floor(Math.random()*results.length)];
  });
  
}