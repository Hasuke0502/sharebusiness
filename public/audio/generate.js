const fs = require('fs');
const { exec } = require('child_process');
const path = require('path');

// ffmpegがインストールされているか確認するスクリプト
console.log('音声ファイル生成スクリプトを開始します...');

// 正解音と不正解音を生成するコマンド
// 注：このコマンドはffmpegを使用します。ffmpegがインストールされていない場合は事前にインストールする必要があります
// 例：npm install -g ffmpeg-static または システムのパッケージマネージャでffmpegをインストール

// 正解音生成（上昇するピアノ音）
const generateCorrectSound = `
ffmpeg -f lavfi -i "sine=frequency=880:duration=0.1,apad=pad_dur=0.05" \
       -f lavfi -i "sine=frequency=1318.51:duration=0.1,apad=pad_dur=0.05" \
       -f lavfi -i "sine=frequency=1760:duration=0.2,afade=t=out:st=0.1:d=0.1" \
       -filter_complex "[0][1][2]concat=n=3:v=0:a=1[out]" \
       -map "[out]" -b:a 192k -ar 44100 public/audio/correct.mp3
`;

// 不正解音生成（下降するピアノ音）
const generateIncorrectSound = `
ffmpeg -f lavfi -i "sine=frequency=440:duration=0.1,apad=pad_dur=0.05" \
       -f lavfi -i "sine=frequency=415.3:duration=0.2,afade=t=out:st=0.1:d=0.1" \
       -filter_complex "[0][1]concat=n=2:v=0:a=1[out]" \
       -map "[out]" -b:a 192k -ar 44100 public/audio/incorrect.mp3
`;

// 代替として、より静かな音を生成するコマンド
const generateSimpleCorrectSound = `
ffmpeg -f lavfi -i "sine=frequency=880:duration=0.3,afade=t=out:st=0.2:d=0.1" \
       -ar 44100 -b:a 192k public/audio/correct.mp3
`;

const generateSimpleIncorrectSound = `
ffmpeg -f lavfi -i "sine=frequency=440:duration=0.3,afade=t=out:st=0.2:d=0.1" \
       -ar 44100 -b:a 192k public/audio/incorrect.mp3
`;

// ディレクトリ確認
if (!fs.existsSync(path.resolve(__dirname, 'public/audio'))) {
  fs.mkdirSync(path.resolve(__dirname, 'public/audio'), { recursive: true });
}

console.log('正解音を生成中...');
exec(generateSimpleCorrectSound, (error, stdout, stderr) => {
  if (error) {
    console.error(`実行エラー: ${error.message}`);
    return;
  }
  if (stderr) {
    console.log(`ffmpeg出力: ${stderr}`);
  }
  console.log('正解音の生成が完了しました');

  console.log('不正解音を生成中...');
  exec(generateSimpleIncorrectSound, (error, stdout, stderr) => {
    if (error) {
      console.error(`実行エラー: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`ffmpeg出力: ${stderr}`);
    }
    console.log('不正解音の生成が完了しました');
    
    console.log('両方の音声ファイルの生成が完了しました');
  });
}); 