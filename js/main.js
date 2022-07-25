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
    const results=['あおさ香るふんわりたこ焼 ( 冷凍食品 )♥','炭火焼きとり かわ塩 ( ホットスナック )♥','大盛 ピリ辛！ガーリックトマトパスタ♥','あんバターコッペ♥','唐揚げたまごコッペ♥','ふわふわケーキオムレット チーズ♥','まんまる焼き ジュラシック・ワールド♥','トマトのソースとチーズの野菜包み焼♥','5種のチーズグラタン♥','いなり＆玉子寿司セット♥'];

    menu.textContent=results[Math.floor(Math.random()*results.length)];
  });

  btn02.addEventListener('click',()=>{
    const results =['エリックサウス監修 チキンビリヤニ 国産米使用♥','SPICY CURRY 魯珈監修 ろかプレート♥','シャウエッセン使用 ホットドッグ♥','SPICY CURRY 魯珈監修 炭火焼チキンティッカ♥','口どけチョコのダマンドマフィン♥','ハーゲンダッツ 優雅に香るタヒチバニラ♥','男気わさビーフ ( ポテトチップス )♥','日清 AFURI 柚子塩和えそば ( カップ麵 )♥','銀座デリー監修 カシミールカレー♥','ルードメール監修 特選スパイシービーフカレー♥'];

    menu02.textContent=results[Math.floor(Math.random()*results.length)];
  });


  btn03.addEventListener('click',()=>{
    const results =['おてがる和風ハンバーグ ( もち麦入りご飯 )♥','こだわりソースの海老明太マヨサラダ♥','ブルーベリー＆チーズデニッシュ フランス産発酵バター♥','中華蕎麦にし乃監修 台湾まぜそば風おにぎり♥','チョコチップメロンパン ホイップ＆チョコチップ♥','濃厚たまごケーキ♥','しっとりチーズスフレ ～レーズン～ 4個入♥','NL 食べたいに応える！マーガリンサンド♥','ちょい麵 サラダうどん♥','たんぱく質が摂れる チキン＆たまご ( ロールパン )♥'];

  menu03.textContent=results[Math.floor(Math.random()*results.length)];
  });


  btn04.addEventListener('click',()=>{
    const results =['台湾風カステラ 長野県産シャインマスカットソース使用♥','ゴーゴーロースカツカレー♥','ずっしり！ゴーゴーチキンカツ弁当♥','ゴーゴーカレーピラフ おにぎり ( ゆでたまご )♥','ゴーゴーカレーまぜそば♥','ゴーゴーメジャーカレーサンド♥','ゴーゴーカレーパン♥','ゴーゴーカレースープ♥','ゴーゴーカレーポテトサラダ♥','熟成銀鮭弁当 ( あおさ梅ごはん )♥'];

  menu04.textContent=results[Math.floor(Math.random()*results.length)];
  });
  
}