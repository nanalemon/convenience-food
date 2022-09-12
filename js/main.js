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
    const results=['手巻寿司 海鮮3種 ( 青まぜ )♥','全粒粉サンド 海老とブロッコリーのサラダサンド♥','全粒粉入りパンとボールフランスパン 5個入♥','炭火焼き鳥 柚子胡椒 ( チルド惣菜 )♥','さばのみそ煮 ( チルド惣菜 )♥','ボロネーゼ風ラザニア♥','炭火焼きとり ハラミ タレ ( ホットスナック )♥','チョコクッキーシュー♥','フロマージュパフェ♥','プリンドーン！！','ひとくちマドレーヌ♥','ひとくちチョコチャンクスコーン♥','ひとくちフィナンシェ♥','ひとくちバウムクーヘン♥','生姜の香り豊かな豚の生姜焼き ( 冷凍食品 )♥','焼いてる！こてっちゃん にんにく塩味 ( 冷凍食品 )♥','赤城 たべる牧場プリン ( アイス )♥'];

    menu.textContent=results[Math.floor(Math.random()*results.length)];
  });

  btn02.addEventListener('click',()=>{
    const results =['ぼっかけそばめし ( おにぎり )♥','新潟県産コシヒカリ使用 炙り焼神戸牛 ( おにぎり )♥','甘辛ヤンニョム弁当 ( 香るごまめし )♥','いなり寿司 舞茸♥','ベーコンエッグバーガー♥','7プレミアム 3色パン さつまいも・栗・かぼちゃ♥','もっちり白玉クリームぜんざい♥','ハーゲンダッツミニカップ 甘熟紅はるか♥','ピエール・エルメ シグネチャー キャラメル＆ポワール♥','7プレミアム ベーコン♥','ブルボン Poi-Kaki アーモンドチーズおかき♥','伊藤園お～いお茶 濃い茶 プレミアムティーバッグ♥'];

    menu02.textContent=results[Math.floor(Math.random()*results.length)];
  });


  btn03.addEventListener('click',()=>{
    const results =['たんぱく質が摂れる チキン＆たまご♥','たんぱく質が摂れる クラブハウスサンド♥','サラダラップ 海老とブロッコリー♥','たんぱく質が摂れる ガーリックチキン丼♥','たんぱく質が摂れる チーズチキンライス ( おにぎり )♥','MCTオイルが摂れる 瀬戸内海産しらすの菜飯 ( おにぎり )♥','NL パイコロネ～カスタード～♥','たんぱく質が摂れる タルタルチキン南蛮サラダ♥','まるで果実なシャインマスカットわらび♥','こだわりビーフの肉×プルドポークチーズバーガー♥','まるでメロンパンみたいなシュークリーム♥','マンゴープリン クリームのせ♥','ツナ＆たまごサンド♥','ハムとたまごBOX♥','チーズバーガー♥','パリッとジューシーなホットドッグ♥','ちょい麵 鶏ゆず塩らーめん♥','これが鶏竜田揚げ弁当♥','これがのり弁当♥','焼鮭和風幕の内 ( 梅しそひじきご飯 )♥','これが豚生姜焼弁当♥','これがハンバーグ弁当♥','グリル満天星お墨付き オムライス♥','ウチカフェ 北海道濃厚ミルクバー ( アイス )♥','いなり ( 3個入 )♥','大きなおにぎり 豚生姜焼♥','おにぎり2個入り ( 鮭・おかか )♥','しじみのおみそ汁♥','海苔とお麩のおみそ汁♥','あさり入り スンドゥブの素 中辛♥','四川風香味炒めの素♥','回鍋肉風甘辛みそ炒めの素♥'];

  menu03.textContent=results[Math.floor(Math.random()*results.length)];
  });


  btn04.addEventListener('click',()=>{
    const results =['やみつきになる！いもクリームパン♥','台湾風カステラ お芋♥','ほっくり和栗のモンブラン♥','カルボナーラ ( リングイネ )♥','ソフトクリームみたいな紅芋ホイップロール♥','チキンステーキ ゆず七味 ( ホットスナック )♥','おいもとミルクホイップのロールパン♥'];

  menu04.textContent=results[Math.floor(Math.random()*results.length)];
  });
  
}