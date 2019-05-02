const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    mini: true,
    audio: [
      {
        name: "你一定要幸福",
        artist: '简弘亦',
        url: 'http://www.ytmp3.cn/down/51689.mp3',
        cover: 'http://img.ytmp3.cn/image/52.jpg',
        lrc: 'lrc2.lrc'
      },
      {
        name: '一百万个可能(Live)',
        artist: '摩登兄弟',
        url: 'http://www.ytmp3.cn/down/52772.mp3',
        cover: 'http://img.ytmp3.cn/image/53.jpg',
      },
      {
        name: 'The Rose',
        artist: 'Westlife',
        url: 'http://www.ytmp3.cn/down/56694.mp3',
        cover: 'http://img.ytmp3.cn/image/51.jpg',
      },
      {
        name: 'In The Eyes',
        artist: '江映东',
        url: 'http://www.ytmp3.cn/down/53053.mp3',
        cover: 'http://img.ytmp3.cn/image/10.jpg',
      },
      {
        name: 'In The Eyes',
        artist: '江映东',
        url: 'http://dl.stream.qqmusic.qq.com/M5000040ZKt52jxJ6Y.mp3?vkey=CC4ED65675536D8F15D48C9CF083DC6D04378938F843C9D404F64D317D1B8155250D508421EB0D23DF1B109C145CD8FADCDD2D18F2BDCA23&guid=5150825362&fromtag=1',
        cover: 'http://img.ytmp3.cn/image/10.jpg',
      }
    ]
});