const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    mini: true,
    audio: [
      {
        name: "从别后(女声版)",
        artist: 'AZA微唱团',
        url: 'http://dl.stream.qqmusic.qq.com/M500001CRaZB2zNTxY.mp3?vkey=F1C65E5BBA4C30A13E4AD78AB0FE176D58D490181582F0CF5B05AFEC3FEAB448493B6A347E97FA6B95D8531FD8C3567035734ED6244049FC&guid=5150825362&fromtag=1',
        lrc: 'http://pqvlh54ap.bkt.clouddn.com/AZA%E5%BE%AE%E5%94%B1%E5%9B%A2-%E4%BB%8E%E5%88%AB%E5%90%8E%28%E5%A5%B3%E5%A3%B0%E7%89%88%29.lrc',
      },
      {
        name: '不露声色',
        artist: 'Jam',
        url: 'http://dl.stream.qqmusic.qq.com/M5000034NlJJ0r7L5s.mp3?vkey=DB2941A20CB8A1C96ED4CCDB0D77980A186C4EF816570CB17A3DB7CB2E3BBE62C55C9D7902AFEE9675DF42B8E8E5516D64D0410F6070B992&guid=5150825362&fromtag=1',
        lrc: 'http://pqvlh54ap.bkt.clouddn.com/Jam%E9%98%BF%E6%95%AC-%E4%B8%8D%E9%9C%B2%E5%A3%B0%E8%89%B2.lrc',
      },
      {
        name: '80000!',
        artist: 'PRC 巴音汗',
        url: 'http://pqvlh54ap.bkt.clouddn.com/PRC%20%E5%B7%B4%E9%9F%B3%E6%B1%97-80000%21.flac',
        lrc: 'http://pqvlh54ap.bkt.clouddn.com/PRC%20%E5%B7%B4%E9%9F%B3%E6%B1%97-80000%21.lrc',
      },
      {
        name: '一双手',
        artist: '阿细',
        url: 'http://dl.stream.qqmusic.qq.com/M500000eZ31i4PYJT7.mp3?vkey=2F6DF672A3A1FB6528EC9924EED11E7B87583764AB7D6D76EC39BF56F5FD1EB21917ADA41BE7306081D09AC9CBDD68804776EAB7712A2A18&guid=5150825362&fromtag=1',
        lrc: 'http://pqvlh54ap.bkt.clouddn.com/%E4%B8%80%E5%8F%8C%E6%89%8B-%E9%98%BF%E7%BB%86.lrc',
      },
      {
        name: '不染',
        artist: 'douyin',
        url: 'http://pqvlh54ap.bkt.clouddn.com/%E4%B8%8D%E6%9F%93.mp3',
        lrc: 'http://pqvlh54ap.bkt.clouddn.com/%E4%B8%8D%E6%9F%93.lrc',
      }
    ]
});