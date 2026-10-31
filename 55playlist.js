    // Converts your categorized object format (playlists = { rock: [...], jazz: [...] })

const playlists = [
  {
    id: "song-1",
    title: "All Out Of Love",
    artist: "Air Supply",
    album: "Lost in Love",
    cover: "https://zero-heaven.github.io/lyricmp3player/mp3/Air Supply - All Out of Love.jpg",
    audioUrl: "https://zero-heaven.github.io/lyricmp3player/mp3/Air Supply - All Out of Love.mp3",
    lrcRaw: `[ti:All Out Of Love]
[ar:Air Supply]
[al:Lost in Love]
[00:00.00]All Out of Love - Air Supply - 1980
[00:22.01]I'm lying alone with my head on the phone(我一個人躺著，電話筒就在我的耳邊)
[00:26.68]Thinking of you till it hurts(我就這樣，一直想著你，直到想不下去為止) 
[00:31.17]I know you hurt too but what else can we do(我知道妳也很難過，但我們還能怎樣？)
[00:35.42]Tormented and torn apart(這一切真是要人命啊！)
[00:39.92]I wish I could carry your smile and my heart(我希望自己能繼續撐下去，有妳的微笑陪著我)
[00:44.42]For times when my life seems so low(當我的人生很魯的時候…)
[00:48.67]It would make me believe what tomorrow could bring(這樣，我就能相信，我的明天會更好)
[00:52.42]When today doesn't really know, doesn't really know(因為，今天我迷惑，很迷惑)
[00:59.42]I'm all out of love, I'm so lost without you(沒有人愛我了，沒有你我就像迷路的小羊)
[01:04.17]I know you were right believing for so long(我知道你曾經相信過我)
[01:09.17]I'm all out of love, what am I without you(現在，沒有你的愛，我還算是個人嗎？)
[01:13.17]I can't be too late to say that I was so wrong(我蹉跎太久，一直沒告訴你是我錯了)
[01:21.92]I want you to come back and carry me home(我想要你回來，帶我回家)
[01:26.42]Away from this long lonely nights(帶我走出每個孤單寂寞的夜晚)
[01:30.67]I'm reaching for you, are you feeling it too(我伸出手想要偷摸你一下，你感覺到了嗎？)
[01:34.67]Does the feeling seem oh so right(這感覺對了)
[01:39.42]And what would you say if I called on you now(你說我現在打電話給你好不好啊？)
[01:43.92]And said that I can't hold on(告訴你，我再也撐不住了)
[01:48.17]There's no easy way, it gets harder each day(吃回頭草這種事，沒有捷徑，如果不快點，就要被別人搶先了…)
[01:52.42]Please love me or I'll be gone, I'll be gone(這一次，如果你不愛我，我就會消失，我會馬上滾)
[01:58.67]I'm all out of love, I'm so lost without you(沒有人愛我了，沒有你我就像迷路的小羊)
[02:03.67]I know you were right believing for so long(我知道你曾經相信過我)
[02:08.18]I'm all out of love, what am I without you(現在，沒有你的愛，我還算是個人嗎？)
[02:12.43]I can't be too late to say that I was so wrong(我蹉跎太久，一直沒告訴你我錯了)
[02:21.17]Oh, what are you thinking of(噢，你現在想到了什麼呢？)
[02:27.43]What are you thinking of(想到了什麼呀？)
[02:32.17]What are you thinking of(噢，你現在想到的是我嗎？)
[02:36.67]What are you thinking of(到底是不是我呢？)
[02:47.42]I'm all out of love, I'm so lost without you(沒有人愛我了，沒有你我就像迷路的小羊)
[02:52.68]I know you were right believing for so long(我知道你曾經相信過我)
[02:57.67]I'm all out of love, what am I without you(現在，沒有你的愛，我還算是個人嗎？)
[03:01.92]I can't be too late I know I was so wrong(我蹉跎太久，一直沒告訴你我錯了)
[03:06.67]I'm all out of love, I'm so lost without you(沒有人愛我了，沒有你我就像迷路的小羊)
[03:10.92]I know you were right believing for so long(我知道你曾經相信過我)
[03:15.16]I'm all out of love, what am I without you(現在，沒有你的愛，我還算是個人嗎？)
[03:19.42]I can't be too late I know I was so wrong(我蹉跎太久，一直沒告訴你我錯了)
[03:24.42]I'm all out of love, I'm so lost without you(沒有人愛我了，沒有你我就像迷路的小羊)
[03:28.42]I know you were right believing for so long(我知道你曾經相信過我)
[03:33.17]I'm all out of love, what am I without you(現在，沒有你的愛，我還算是個人嗎？)
[03:37.17]I can't be too late to say that I was so wrong(我蹉跎太久，一直沒告訴你我錯了)` 
  },
  {
    id: "song-2",
    title: "A Time For Us",
    artist: "Andy Williams",
    album: "OSCAR",
    cover: "https://zero-heaven.github.io/lyricmp3player/mp3/Andy Williams - A Time For Us.jpg",
    audioUrl: "https://zero-heaven.github.io/lyricmp3player/mp3/Andy Williams - A Time For Us.mp3",
    lrcRaw: `[ti:A Time For Us]
[ar:Andy Williams]
[al:OSCAR]
[au:Nino Rota]
[in:Romeo & Juliet in 1968]
[by:Freedom of Motherland]
[re:正義必勝]
[re:正義必勝]

[00:00.00]Andy Williams - A Time For Us  (Bilingual Lrc)

[00:10.45]我倆的時光，總有一天會來
[00:10.45]A time for us, someday there'll be
[00:16.15]當鎖鏈被勇氣蝕穿，從愛中而生必然是自由的(無所顧忌的愛)
[00:16.15]When chains are torn by courage born Of a love that's free 
[00:23.12]長久被否定的夢想將大放異彩
[00:23.12]A time when dreams so long denied can flourish
[00:31.85]我們現在必須隱藏的愛終得浮現
[00:31.85]As we unveil The love we now must hide
[00:42.02]我倆的時光，指日可待
[00:42.02]A time for us, at last to see
[00:51.07]人生中一段值得我倆珍惜的時光
[00:51.07]A life worth while for you and me
[00:59.53]用愛穿越淚水與荊棘，
[00:59.53]And with our love through tears and thorns
[01:04.39]我們一定能承受，像我們安然度過每場暴風雨
[01:04.39]We will endure as we pass surely Through every storm
[01:11.05]我倆的時光，總有一天會來
[01:11.05]A time for us, someday there'll be a new world
[01:20.50]一個嶄新的世界，
[01:20.50]a world of shining hope
[01:23.85]為你我閃耀著希望的世界
[01:23.85]For you and me
[01:29.91]我倆的時光，指日可待
[01:29.91]A time for us at last to see
[01:39.26]人生中一段值得我倆珍惜的時光
[01:39.26]A life worth while for you and me
[01:47.75]用愛穿越淚水與荊棘，
[01:47.75]And with our love through tears and thorns
[01:52.71]我們一定能承受，像我們安然度過每場暴風雨
[01:52.71]We will endure as we pass surely Through every storm
[01:58.84]我倆的時光，總有一天會來
[01:58.84]A time for us, someday there'll be a new world
[02:08.68]一個嶄新的世界，
[02:08.68]a world of shining hope
[02:13.61]為你我閃耀著希望的世界
[02:13.61]For you and me` 
  },
  {
    id: "song-3",
    title: "First Of May",
    artist: "Bee Gees",
    album: "Odessa: The Complete Odessa",
    cover: "https://zero-heaven.github.io/lyricmp3player/mp3/Bee Gees - First Of May.jpg",
    audioUrl: "https://zero-heaven.github.io/lyricmp3player/mp3/Bee Gees - First Of May.mp3",
    lrcRaw: `[ti:First Of May]
[ar:Bee Gees]
[al:Odessa: The Complete Odessa]
[by:Freedom of Motherland]

[00:00.00]First Of May - Bee Gees (1969)
[00:13.00]movie theme <Melody> (1971)

[00:18.25]When I was small, and Christmas trees were tall,
[00:25.43]we used to love while others used to play.
[00:33.30]Don't ask me why, but time has passed us by,
[00:40.79]some one else moved in from far away.

[00:48.60]Now we are tall, and Christmas trees are small,
[00:56.22]and you don't ask the time of day.
[01:03.00]But you and I, our love will never die,
[01:11.37]but guess we'll cry come first of May.

[01:19.96]The apple tree that grew for you and me,
[01:26.83]I watched the apples falling one by one.
[01:33.24]And I recall the moment of them all,
[01:41.79]the day I kissed your cheek and you were mine.

[01:49.44]Now we are tall, and Christmas trees are small,
[01:57.01]and you don't ask the time of day.
[02:03.94]But you and I, our love will never die,
[02:11.34]but guess we'll cry come first of May.

[02:19.82]When I was small, and Christmas trees were tall,
[02:26.93]do do do do do do do do do...
[02:36.27]Don't ask me why, but time has passed us by,
[02:43.71]some one else moved in from far away.` 
  },
  {
    id: "song-4",
    title: "Massachusetts",
    artist: "Bee Gees",
    album: "Mythology",
    cover: "https://zero-heaven.github.io/lyricmp3player/mp3/Bee Gees - Massachusetts.jpg",
    audioUrl: "https://zero-heaven.github.io/lyricmp3player/mp3/Bee Gees - Massachusetts.mp3",
    lrcRaw: `[ti:Massachusetts]
[ar:Bee Gees]
[al:Mythology]
[au:Maurice Gibb, Barry Gibb, Robin Gibb]
[by:Freedom of Motherland]
[re:正義必勝]

[00:00.00]Bee Gees - Massachusetts  (Bilingual Lrc)

[00:09.11]好像我要回到麻薩諸塞州了
[00:09.11]Feel I'm goin' back to Massachusetts
[00:18.31]某些景況提醒我該回家去了
[00:18.31]Something's telling me I must go home
[00:26.17]而麻薩諸塞州的燈火全都熄滅了
[00:26.17]And the lights all went out in Massachusetts
[00:35.21]就在我離去讓她孤單一人的那天
[00:35.21]The day I left her standing on her own
[00:46.11]想搭便車到舊金山
[00:46.11]Tried to hitch a ride to San Francisco
[00:55.45]做些我想做的事
[00:55.45]Gotta do the things I wanna do
[01:03.71]而麻薩諸塞州的燈火全都熄滅了
[01:03.71]And the lights all went out in Massachusetts
[01:12.21]他們將我帶回到與你共度的過往
[01:12.21]They brought me back to see my way with you
[01:23.40]聊起在麻薩諸塞州的生活
[01:23.40]Talk about the life in Massachusetts
[01:32.92]談著我曾經遇見過的人們
[01:32.92]Speak about the people I have seen
[01:41.02]而麻薩諸塞州的燈火全都熄滅了
[01:41.02]And the lights all went out in Massachusetts
[01:50.05]麻薩諸塞州這個我曾熟悉的地方
[01:50.05]And Massachusetts is one place I have seen
[02:00.21]我一定會記得麻薩諸塞州...
[02:00.21]I will be back to Massachusetts
[02:03.94](I will be back to Massachusetts)
[02:07.94]I will be back to Massachusetts` 
  },
  {
    id: "song-5",
    title: "Melody Fair",
    artist: "Bee Gees",
    album: "The Very Best Of The Bee Gees",
    cover: "https://zero-heaven.github.io/lyricmp3player/mp3/Bee Gees - Melody Fair.jpg",
    audioUrl: "https://zero-heaven.github.io/lyricmp3player/mp3/Bee Gees - Melody Fair.mp3",
    lrcRaw: `[ti:Melody Fair]
[ar:Bee Gees]
[al:The Very Best Of The Bee Gees]
[au:Barry Gibb / Maurice Gibb / Robin Gibb]
[by:Freedom of Motherland]
[re:正義必勝]
[re:正義必勝]

[00:00.00]Movie theme by Melody(兩小無猜)1971 
[00:00.00]Melody Fair - Bee Gees 1969 :  (Bilingual Lrc)

[00:27.50]那位哭喪著臉的女孩是誰？
[00:27.50]Who Is The Girl With The Crying Face
[00:33.50]她正注視著這大千世界
[00:33.50]Looking At Millions Of Signs
[00:39.50]她明白人生就是一場賽跑
[00:39.50]She Knows That Life Is A Running Race
[00:45.50]她的臉不應該有任何跡象
[00:45.50]Her Face Shouldn't Show Any Sign
[00:48.50]美麗的梅樂蒂，你不梳理你的頭髮嗎？
[00:48.50]Melody Fair Won't You Comb Your Hair
[00:54.50]你也可以漂亮
[00:54.50]You Can Be Beautiful Too
[00:58.50]美麗的梅樂蒂，
[00:58.50]Melody Fair
[01:02.50]記住你只是個女人
[01:02.50]Remember You're Only A Woman Ah Ah
[01:10.50]美麗的梅樂蒂，
[01:10.50]Melody Fair
[01:14.50]別忘了你只是個女孩
[01:14.50]Remember You're Only A Girl
[01:23.50]啊........
[01:23.50]Ah.........
[01:30.50]那位倚在窗邊的女孩是誰？
[01:30.50]Who Is The Girl At The Window Pane
[01:36.50]望著雨水傾瀉而下
[01:36.50]Watching The Rain Falling Down
[01:42.50]梅樂蒂，人生並不像一場雨
[01:42.50]Melody Life Isn't Like The Rain
[01:47.50]它就像旋轉木馬一樣
[01:47.50]It's Just Like A Merry-Go-Round
[01:51.50]美麗的梅樂蒂，你不梳理你的頭髮嗎？
[01:51.50]Melody Fair Won't You Comb Your Hair
[01:56.50]你也可以漂亮
[01:56.50]You Can Be Beautiful Too
[02:01.50]美麗的梅樂蒂，
[02:01.50]Melody Fair
[02:05.50]記住你只是個女人
[02:05.50]Remember You're Only A Woman Ah Ah
[02:13.50]美麗的梅樂蒂，
[02:13.50]Melody Fair
[02:17.50]別忘了你只是個女孩
[02:17.50]Remember You're Only A Girl
[02:26.50]啊........
[02:26.50]Ah.........
[02:33.50]那位哭喪著臉的女孩是誰？
[02:33.50]Who Is The Girl With The Crying Face
[02:38.50]她正注視著這大千世界
[02:38.50]Looking At Millions Of Signs
[02:44.50]她明白人生就是一場賽跑
[02:44.50]She Knows That Life Is A Running Race
[02:50.50]她的臉不應該有任何跡象
[02:50.50]Her Face Shouldn't Show Any Sign
[02:53.50]美麗的梅樂蒂，你不梳一梳頭髮嗎？
[02:53.50]Melody Fair Won't You Comb Your Hair
[02:59.50]你也可以很漂亮
[02:59.50]You Can Be Beautiful Too
[03:04.50]美麗的梅樂蒂，
[03:04.50]Melody Fair
[03:08.50]記住你只是個女人
[03:08.50]Remember You're Only A Woman Ah Ah
[03:16.50]美麗的梅樂蒂，
[03:16.50]Melody Fair
[03:20.50]別忘了你只是個女孩
[03:20.50]Remember You're Only A Girl
[03:29.50]啊........
[03:29.50]Ah.........` 
  },
  {
    id: "song-6",
    title: "Take My Breath Away",
    artist: "Berlin",
    album: "Unknown Album",
    cover: "https://zero-heaven.github.io/lyricmp3player/mp3/Berlin%20-%20Take%20My%20breath%20Away.jpg",
    audioUrl: "https://zero-heaven.github.io/lyricmp3player/mp3/Berlin%20-%20Take%20My%20breath%20Away.mp3",
    lrcRaw: `[ti:Take My Breath Away]
[ar:Berlin]
[au:Giorgio Moroder/Tom Whitlock]

[00:00.00]Berlin - Take My breath Away(Movie<Top Gun>) 1986

[00:11.73]Watching every motion in my foolish lover's game
[00:21.42]On this endless ocean finally lovers know no shame
[00:31.17]Turning and returning to some secret place inside
[00:41.30]Watching in slow motion as you turn around and say
[00:50.24]Take my breath away
[00:59.97]Take my breath away
[01:11.08]Watching I keep waiting still anticipating love
[01:21.10]Never hesitating to become the fated ones
[01:30.86]Turning and returning to some secret place to hide
[01:40.88]Watching in slow motion as you turn to me and say
[01:49.53]Take my breath away
[02:00.81]Through the hourglass I saw you, in time you slipped away
[02:10.98]When the mirror crashed I called you, and turned to hear you say
[02:19.60]If only for today I am unafraid
[02:29.72]Take my breath away
[02:37.50]Take my breath away
[02:50.55]Watching every motion in this foolish lover's game
[03:00.38]Haunted by the notion somewhere there's a love in flames
[03:10.33]Turning and returning to some secret place inside
[03:20.36]Watching in slow motion as you turn to me and say
[03:29.06]Take my breath away
[03:37.69]My love, take my breath away
[03:48.15]My love, take my breath away
[04:00.79]Take My Breath Away
[04:07.98]My Love` 
  },
  {
    id: "song-7",
    title: "Casablanca",
    artist: "Bertie Higgins",
    album: "Just Another Day in Paradise",
    cover: "https://zero-heaven.github.io/lyricmp3player/mp3/Bertie Higgins - Casablanca.jpg",
    audioUrl: "https://zero-heaven.github.io/lyricmp3player/mp3/Bertie Higgins - Casablanca.mp3",
    lrcRaw: `[ar: Bertie Higgins]
[al: Just Another Day in Paradise]
[ti: Casablanca]
[by: Freedom of Motherland]
[00:01.10]Movie theme by Casablanca(北非影碟) 1942
[00:13.00]Casablanca - Bertie Higgins 1982 :   (Bilingual Lrc)
[00:15.84]看著《卡薩布蘭卡》這部片時，我愛上了你
[00:15.84]I fell in love with you watching Casablanca
[00:23.48]當時汽車電影院的后排燈光閃爍不定
[00:23.48]Back row at the driven show in the flickering light
[00:30.86]爆米花和可樂在星光下
[00:30.86]Popcorn and cokes beneath the stars
[00:34.73]變成了香檳和魚子醬
[00:34.73]became champagne and caviar
[00:39.29]我們在漫長的而燥熱的夏夜里盡情歡笑
[00:39.29]Making love on a long hot summer's night
[00:46.23]我以為在看《卡薩布蘭卡》時，你愛上了我
[00:46.23]I thought you fell in love with me watching Casablanca
[00:53.91]咖啡館里的吊扇下牽手
[00:53.91]Holding hand neath the paddle fan
[00:56.79]在點著燭光的里克
[00:56.79]in rick's candle lit cafe
[01:01.40]我們躲在聚光燈照不到的陰影里
[01:01.40]Hiding in the shadows from the spies
[01:05.25]你的眼里映著摩洛哥的月光
[01:05.25]Monoccan moonshine in your eyes
[01:08.47]隨著電影在我那輛舊雪佛萊里變著魔術
[01:08.47]Making magic at the movies in my old Chevrolet
[01:15.83]噢！卡薩布蘭卡的親吻依舊
[01:15.83]Oh a kiss is still a kiss in Casablanca
[01:23.64]但沒有了你的嘆息，那吻已不成吻
[01:23.64]But kiss is not a kiss without your sigh
[01:31.42]請來卡薩布蘭卡找我
[01:31.42]Please come back to me in Casablanca
[01:39.05]隨著時光流逝，我一天比一天更愛你
[01:39.05]I love you more and more each day as time goes by
[02:20.84]我猜，在卡薩布蘭卡有很多傷心人
[02:20.84]I guess there're many broken hearts in Casablanca
[02:28.14]你知道我從未到過那里所以我不是很清楚
[02:28.14]You know I've never really been there so I don't know
[02:35.44]我想我們的愛情故事不會被
[02:35.44]I guess our love story will never be seen
[02:40.14]搬上銀幕
[02:40.14]on the big wide silver screen
[02:43.50]但當我不得不看著你離去，我也感受到那種傷痛
[02:43.50]But it hurt just as bad when I had to watch you go
[02:50.54]噢！卡薩布蘭卡的親吻依舊
[02:50.54]Oh a kiss is still a kiss in Casablanca
[02:58.65]但沒有了你的嘆息，那吻已不成吻
[02:58.65]But kiss is not a kiss without your sigh
[03:05.39]請來卡薩布蘭卡找我
[03:05.39]Please come back to me in Casablanca
[03:13.45]隨著時光流逝，我一天比一天更愛你
[03:13.45]I love you more and more each day as time goes by
[03:20.39]噢！卡薩布蘭卡的親吻依舊
[03:20.39]Oh a kiss is still a kiss in Casablanca
[03:28.25]但沒有了你的嘆息，那吻已不成吻
[03:28.25]But kiss is not a kiss without your sigh
[03:35.82]請來卡薩布蘭卡找我
[03:35.82]Please come back to me in Casablanca
[03:43.35]隨著時光流逝，我一天比一天更愛你
[03:43.35]I love you more and more each day as time goes by
[03:50.99]隨著時光流逝，我一天比一天更愛你
[03:50.99]I love you more and more each day as time goes by` 
  },
  {
    id: "song-8",
    title: "Call Me",
    artist: "Blondie",
    album: "Call Me (Theme From American Gigolo)",
    cover: "https://zero-heaven.github.io/lyricmp3player/mp3/Blondie - Call Me_1980.jpg",
    audioUrl: "https://zero-heaven.github.io/lyricmp3player/mp3/Blondie - Call Me_1980.mp3",
    lrcRaw: `[ar:Blondie]
[al:Call Me (Theme From American Gigolo)]
[ti:Call Me]
[au:Deborah Harry, Giorgio Moroder]
[length:03:32.32]
[by:Freedom of Motherland]
[re:正義必勝]
[re:www.megalobiz.com/lrc/maker]
[ve:v1.2.3]
[00:15.48]Color me your color, baby.
[00:19.20]Color me your car.
[00:22.28]Color me your color, darling.
[00:25.80]I know who you are.
[00:29.18]Come up off your color chart.
[00:32.35]I know where you're coming from.
[00:35.51]Call me on the line.
[00:38.29]Call me, call me any anytime.
[00:42.27]Call me, my love, you can call me any day or night.
[00:48.97]Call me!
[00:56.28]Cover me with kisses, baby.
[00:59.40]Cover me with love.
[01:02.82]Roll me in designer sheets.
[01:05.81]I'll never get enough.
[01:09.11]Emotions come, i don't know why.
[01:13.08]Cover up love's alibi.
[01:17.42]Call me on the line.
[01:20.56]Call me, call me any anytime.
[01:24.47]Call me oh my love.
[01:27.22]When you're ready we can share the wine.
[01:31.12]Call me.
[01:38.19]Ooh, he speaks the languages of love.
[01:44.91]Ooh, amore, chiamami （chiamami）.
[01:52.07]Ooh, appelle-moi, mon cheri (appelle-moi).
[01:58.12]Anytime, anyplace, anywhere, anyway!
[02:03.80]Anytime, anyplace, anywhere, any day, anyway!
[02:10.38]
[02:43.40]Call me my love.
[02:46.36]Call me, call me any anytime.
[02:50.42]Call me for a ride.
[02:52.44]
[02:53.22]Call me, call me for some overtime.
[02:57.02]Call me my love.
[02:59.96]Call me, call me in a sweet design.
[03:03.62]Call me, call me for your lover's lover's alibi.
[03:10.42]Call me on the line.
[03:13.26]Call me, call me any anytime..
[03:17.15]Call me.
[03:19.03]Oh, call me, ooh ooh ah.
[03:24.17]Call me my love.
[03:26.98]Call me, call me any anytime` 
  },
  {
    id: "song-9",
    title: "Lucky One",
    artist: "Corinne Bailey Rae",
    album: "Unknown Album",
    cover: "https://zero-heaven.github.io/lyricmp3player/mp3/Corinne Bailey Rae - Lucky One.jpg",
    audioUrl: "https://zero-heaven.github.io/lyricmp3player/mp3/Corinne Bailey Rae - Lucky One.mp3",
    lrcRaw: `[ti: Lucky One]
[ar: Corinne Bailey Rae]
[length: 02:38]
[by:Freedom of Motherland]
[re:正義必勝]
[re:正義必勝]

[00:00.00]Lucky One (from Stans Lee-s Lucky Man) - Corinne Bailey Rae

[00:00.00]Corinne Bailey Rae - Lucky One
[00:03.12]Fortune is a fickle friend
[00:06.54]Here today and then gone again
[00:09.03]A good time girl, when it hurts
[00:11.21]Is nowhere to be found
[00:13.08]Ha. Ha. Ha. Ha she's laughing in your face
[00:16.25]When you think that you've got it made
[00:18.86]Patient with your life now
[00:21.41]Careful with your pride
[00:23.21]Hold tight This could be a wild ride
[00:26.81]It could be a late night
[00:29.30]Who is the underdog
[00:31.09]And who's gonna be the lucky one
[00:33.21]Hold tight This could be a wild ride
[00:36.70]It could be a late night
[00:39.18]Who is the underdog
[00:40.62]And who's gonna be the lucky one
[00:43.04]Fortune is a fickle friend
[00:44.97]Here today and then gone again
[00:47.39]A good time girl, when it hurts
[00:49.63]Is nowhere to be found
[00:51.50]Ha. Ha. Ha. Ha she's laughing in your face
[00:54.73]When you think that you've got it made
[00:57.22]Patient with your life now
[00:59.90]Careful with your pride
[01:01.70]Hold tight This could be a wild ride
[01:05.43]It could be a late night
[01:07.67]Who is the underdog
[01:09.50]And who's gonna be the lucky one
[01:10.88]Fortune is a fickle friend
[01:12.74]Here today and then gone again
[01:15.23]A good time girl, when it hurts
[01:17.47]Is nowhere to be found
[01:19.28]Ha. Ha. Ha. Ha she's laughing in your face
[01:22.44]When you think that you've got it made
[01:24.93]Patient with your life now
[01:27.55]Careful with your pride
[01:29.60]Hold tight This could be a wild ride
[01:33.33]It could be a late night
[01:35.45]Who is the underdog
[01:37.19]And who's gonna be the lucky one
[01:38.85]Fortune is a fickle friend
[01:40.60]Here today and then gone again
[01:43.27]A good time girl, when it hurts
[01:45.57]Is nowhere to be found
[01:47.25]Ha. Ha. Ha. Ha she's laughing in your face
[01:50.61]When you think that you've got it made
[01:53.23]Patient with your life now
[01:55.71]Careful with your pride
[01:57.64]Hold tight This could be a wild ride
[02:01.31]It could be a late night
[02:03.49]Who is the underdog
[02:05.23]And who's gonna be the lucky one
[02:07.45]Hold tight This could be a wild ride
[02:10.81]It could be a late night
[02:13.05]Who is the underdog
[02:14.93]And who's gonna be the lucky one
[02:17.22]Hold tight This could be a wild ride
[02:21.08]It could be a late night
[02:23.13]Who is the underdog
[02:24.93]And who's gonna be the lucky one
[02:25.22]Hold tight This could be a wild ride
[02:27.08]It could be a late night
[02:29.13]Who is the underdog
[02:31.93]And who's gonna be the lucky one` 
  },
  {
    id: "song-10",
    title: "Time After Time",
    artist: "Cyndi Lauper",
    album: "Unknown Album",
    cover: "https://zero-heaven.github.io/lyricmp3player/mp3/Cyndi Lauper - Time After Time.jpg",
    audioUrl: "https://zero-heaven.github.io/lyricmp3player/mp3/Cyndi Lauper - Time After Time.mp3",
    lrcRaw: `[ti:Time After Time]
[ar:Cyndi Lauper]
[by:Freedom of Motherland]
[re:正義必勝]
[re:正義必勝]

[00:00.00]Time After Time - Cyndi Lauper

[00:15.01]Lying in my bed i hear the clock tick 
[00:19.76]And think of you
[00:22.38]Caught up in circles confusion
[00:25.57]Is nothing new
[00:29.51]Flashback warm nights
[00:33.69]Almost left behind
[00:36.95]Suitcases of memories 
[00:41.13]Time after
[00:42.32]Sometimes you picture me
[00:45.51]I'm walking too far ahead
[00:49.82]You're calling to me  i can't hear
[00:54.63]What you've said
[00:57.00]Then you say go slow
[01:01.19]I fall behind
[01:04.75]The second hand unwinds
[01:07.51]If you're lost you can look and you will find me
[01:12.32]Time after time
[01:14.95]If you fall i will catch you i'll be waiting
[01:19.63]Time after time
[01:22.26]If you're lost you can look and you will find me
[01:26.82]Time after time
[01:29.57]If you fall i will catch you i'll be waiting
[01:34.32]Time after time

[01:52.44]After my picture fades and darkness has
[01:57.81]Turned to gray
[01:59.75]Watching through windows you're wondering
[02:04.00]If i'm ok
[02:07.00]Secrets stolen from deep inside
[02:14.95]The drum beats out of time
[02:17.27]If you're lost you can look and you will find me
[02:22.02]Time after time
[02:24.77]If you fall i will catch you i'll be waiting
[02:29.39]Time after time

[02:47.53]You said go slow
[02:51.66]I fall behind
[02:55.22]The second hand unwinds
[02:57.84]If you're lost you can look and you will find me
[03:02.53]Time after time
[03:05.22]If you fall i will catch you i'll be waiting
[03:09.84]Time after time
[03:12.59]If you're lost you can look and you will find me
[03:17.15]Time after time
[03:19.97]If you fall i will catch you i'll be waiting
[03:24.59]Time after time
[03:28.84]Time after time
[03:32.09]Time after time
[03:35.71]Time after time
[03:39.40]Time after time
[03:43.03]Time after time
[03:46.71]Time after time
[03:50.28]Time after time` 
  },
  {
    id: "song-11",
    title: "Longer",
    artist: "Dan Fogelderg",
    album: "Phoenix",
    cover: "https://zero-heaven.github.io/lyricmp3player/mp3/Dan Fogelderg - LONGER.jpg",
    audioUrl: "https://zero-heaven.github.io/lyricmp3player/mp3/Dan Fogelderg - LONGER.mp3",
    lrcRaw: `[ti:Longer]
[ar:Dan Fogelderg]
[al:Phoenix]

[00:00.00]Longer - Dan Fogelderg 1979
[00:23.50]早在海裡有魚兒之前
[00:23.50]Longer than there've been fishes in the ocean
[00:29.43]比任何鳥兒飛到更高的地方過
[00:29.43]Higer than any bird ever flew
[00:35.08]遠在天上有星星之前
[00:35.08]Longer than there've been stars up in the heavens
[00:41.93]我就已經深愛著你(與你墜入愛河)
[00:41.93]I've been in love with you(I am in love with you)
[02:31.05]早在海裡有魚兒之前
[02:31.05]Longer than there've been fishes in the ocean
[02:36.45]比任何鳥兒飛到更高的地方過
[02:36.45]Higer than any bird ever flew 
[02:43.97]遠在天上有星星之前
[02:43.97]Longer than there've been stars up in the heavens
[02:48.54]我就已經深愛著你(與你墜入愛河)
[02:48.54]I've been in love with you(I am in love with you)
[02:54.10]我就已經深愛著你(與你墜入愛河)
[02:54.10]I've been in love with you(I am in love with you)
[00:46.93]遠比任何山峰上的大教堂更堅固
[00:46.93]Stronger than any mountain cathedral 
[00:54.40]遠比樹的成長更真實
[00:54.40]Truer than any tree ever grew
[01:00.30]比原始森林更深邃
[01:00.30]Deeper than any forest primeval
[01:06.52]我與你墜入了愛河
[01:06.52]I am in love with you
[01:12.31]我會在冬日裡帶來熾火
[01:12.31]I'll bring fire in the winters
[01:18.14]在春日裡，你帶來陣雨
[01:18.14]You'll send showers in the springs
[01:24.62]我們將飛越過秋天與夏日
[01:24.62]We'll fly through the falls and summers
[01:30.60]以我們雙翼上的愛
[01:30.60]With love on our my wings
[01:37.72]若干年後，
[01:37.72]Through the years
[01:38.40]當熾火轉弱
[01:38.40]As the fire starts to mellow
[01:42.41]燃燒著我們生命之書裡的字句
[01:42.41]Burning lines in the book of our lives
[01:48.54]雖然封面已斑駁，
[01:48.54]Though the binding cracks
[01:51.50]書頁亦逐漸泛黃
[01:51.50]And the pages start to yellow
[01:54.36]我依然愛著你
[01:54.36]I'll be in love with you
[01:57.50]依然深愛著你
[01:57.50]I'll be in love with you` 
  },
  {
    id: "song-12",
    title: "Shape of you",
    artist: "Ed Sheeran",
    album: "Unknown Album",
    cover: "https://zero-heaven.github.io/lyricmp3player/mp3/Ed Sheeran - Shape of You.jpg",
    audioUrl: "https://zero-heaven.github.io/lyricmp3player/mp3/Ed Sheeran - Shape of You.mp3",
    lrcRaw: `[ti:Shape of you]
[ar:Ed Sheeran]
[length:04:23.24]
[by:Freedom of Motherland]
[re:正義必勝]
[re:正義必勝]

[00:00.00]Shape of You - Ed Sheeran

[00:15.77]The club isn't the best place to find a lover
[00:18.24]So the bar is where I go
[00:20.53]Me and my friends at the table doing shots
[00:23.03]Drinking faster and then we talk slow
[00:26.04]Come over and start up a conversation with just me
[00:28.54]And trust me I'll give it a chance now
[00:30.54]Take my hand, stop
[00:32.04]Put Van The Man on the jukebox
[00:33.28]And then we start to dance
[00:34.79]And now I'm singing like
[00:36.54]Girl, you know I want your love
[00:38.03]Your love was handmade for somebody like me
[00:40.29]Come on now, follow my lead
[00:43.27]I may be crazy, don't mind me
[00:45.78]Say, boy, let's not talk too much
[00:48.29]Grab on my waist and put that body on me
[00:51.52]Come on now, follow my lead
[00:53.28]Come, come on now, follow my lead
[00:57.04]I'm in love with the shape of you
[00:59.52]We push and pull like a magnet do
[01:01.78]Although my heart is falling too
[01:04.27]I'm in love with your body
[01:07.03]And last night you were in my room
[01:09.53]And now my bedsheets smell like you
[01:11.28]Every day discovering something brand new
[01:14.53]I'm in love with your body
[01:16.28]Oh I oh I oh I oh I
[01:19.55]I'm in love with your body
[01:21.80]Oh I oh I oh I oh I
[01:24.53]I'm in love with your body
[01:26.29]Oh I oh I oh I oh I
[01:29.54]I'm in love with your body
[01:31.53]Every day discovering something brand new
[01:34.53]I'm in love with the shape of you
[01:36.74]One week in we let the story begin
[01:38.25]We're going out on our first date
[01:40.49]You and me are thrifty
[01:42.24]So go all you can eat
[01:43.49]Fill up your bag and I fill up a plate
[01:46.03]We talk for hours and hours about the sweet and the sour
[01:48.22]And how your family is doing okay
[01:50.97]Leave and get in a taxi, then kiss in the backseat
[01:53.48]Tell the driver make the radio play
[01:55.03]And I'm singing like
[01:55.90]Girl, you know I want your love
[01:58.29]Your love was handmade for somebody like me
[02:01.53]Come on now, follow my lead
[02:03.28]I may be crazy, don't mind me
[02:05.75]Say, boy, let's not talk too much
[02:08.25]Grab on my waist and put that body on me
[02:11.54]Come on now, follow my lead
[02:13.31]Come, come on now, follow my lead
[02:17.03]I'm in love with the shape of you
[02:19.54]We push and pull like a magnet do
[02:22.28]Although my heart is falling too
[02:24.53]I'm in love with your body
[02:26.53]And last night you were in my room
[02:29.04]And now my bedsheets smell like you
[02:31.04]Every day discovering something brand new
[02:34.55]I'm in love with your body
[02:36.28]Oh I oh I oh I oh I
[02:39.28]I'm in love with your body
[02:41.79]Oh I oh I oh I oh I
[02:44.52]I'm in love with your body
[02:46.03]Oh I oh I oh I oh I
[02:49.29]I'm in love with your body
[02:51.99]Every day discovering something brand new
[02:54.78]I'm in love with the shape of you
[02:56.53]Come on, be my baby, come on
[02:58.28]Come on, be my baby, come on
[03:01.03]Come on, be my baby, come on
[03:03.55]Come on, be my baby, come on
[03:06.03]Come on, be my baby, come on
[03:08.54]Come on, be my baby, come on
[03:11.03]Come on, be my baby, come on
[03:13.55]Come on, be my baby, come on
[03:18.29]I'm in love with the shape of you
[03:20.53]We push and pull like a magnet do
[03:23.04]Although my heart is falling too
[03:25.78]I'm in love with your body
[03:28.04]Last night you were in my room
[03:30.28]And now my bedsheets smell like you
[03:32.54]Every day discovering something brand new
[03:35.78]I'm in love with your body
[03:38.03]Come on, be my baby, come on
[03:39.78]Come on, be my baby, come on
[03:41.03]I'm in love with your body
[03:42.28]Come on, be my baby, come on
[03:44.80]Come on, be my baby, come on
[03:45.78]I'm in love with your body
[03:47.54]Come on, be my baby, come on
[03:49.27]Come on, be my baby, come on
[03:50.79]I'm in love with your body
[03:52.29]Every day discovering something brand new
[03:55.53]I'm in love with the shape of you` 
  },
  {
    id: "song-13",
    title: "Always On My Mind",
    artist: "Elvis Presley",
    album: "The Fool Album",
    cover: "https://zero-heaven.github.io/lyricmp3player/mp3/Elvis Presley - Always on My Mind.jpg",
    audioUrl: "https://zero-heaven.github.io/lyricmp3player/mp3/Elvis Presley - Always on My Mind.mp3",
    lrcRaw: `[ti:Always On My Mind]
[ar:Elvis Presley]
[al:The Fool Album]
[au:Wayne Thompson/Mark James/Johnny Christopher]
[by:Freedom of Motherland]
[re:正義必勝]
[re:正義必勝]

[00:00.00]Always On My Mind - Elvis Presley (1973)  (Bilingual Lrc)

[00:07.89]Maybe I didn't treat you 或許我對妳不夠好
[00:13.71]Quite as good as I should have
[00:18.94]Maybe I didn't love you
[00:24.54]Quite as often as I could have
[00:30.05]Little things I should have said and done 許多該說、該做的小事情
[00:35.58]I just never took the time 我都沒有說，也沒有做

[00:40.31]You were always on my mind 妳的倩影永遠縈繞我心
[00:45.67]You were always on my mind 妳的倩影永遠縈繞我心

[00:51.52]Maybe I didn't hold you 或許，在妳孤寂的時候，我沒有抱著妳
[00:56.76]All those lonely, lonely times
[01:01.98]And I guess I never told you 我猜，我也沒告訴過妳
[01:07.30]I'm so happy that you're mine 妳的愛，讓我感到無比幸福
[01:12.51]If I make you feel second best 若我讓妳覺得妳不是我的最愛
[01:17.39]Girl, I'm sorry I was blind 寶貝，那我真的要對妳說聲抱歉，是我不懂珍惜妳

[01:22.58]You were always on my mind 妳的倩影永遠縈繞我心
[01:28.07]You were always on my mind 妳的倩影永遠縈繞我心

[01:32.44]Tell me, tell me that your sweet love hasn't died 告訴我，告訴我妳對我深情依舊
[01:42.95]Give me, give me one more chance 給我，請再給我一次機會
[01:49.53]To keep you satisfied, satisfied  satisfied 讓我帶給妳幸福

[02:04.46]Little things I should have said and done 許多該說、該做的小事情
[02:09.77]I just never took the time 我都沒有說，也沒有做
[02:14.29]You were always on my mind 妳的倩影永遠縈繞我心
[02:19.69]You are always on my mind
[02:34.31]You are always on my mind
[02:44.73]Maybe I didn't treat you 或許我對妳不夠好
[02:49.88]Quite as good as I should have
[02:55.12]Maybe I didn't love you 或許，我對妳不夠愛
[03:00.23]Quite as often as I could have

[03:05.35]Maybe I didn't hold you 或許，在妳孤寂的時候，我沒有抱著妳
[03:10.47]All those lonely, lonely times
[03:15.59]And I guess I never told you 我猜，我也沒告訴過妳
[03:20.70]I'm so happy that you're mine 妳的愛，讓我感到無比幸福
[03:25.88]Maybe I didn't treat you 或許我對妳不夠好` 
  },
  {
    id: "song-14",
    title: "One Way Ticket",
    artist: "Eruption",
    album: "Leave a Light",
    cover: "https://zero-heaven.github.io/lyricmp3player/mp3/Eruption - One Way Ticket (1978).jpg",
    audioUrl: "https://zero-heaven.github.io/lyricmp3player/mp3/Eruption - One Way Ticket (1978).mp3",
    lrcRaw: `[ar:Eruption]
[al:Leave a Light]
[ti:One Way Ticket]
[au:Jack Keller, Hank Hunter]
[length:03:35.11]
[by:Life is visible 1997]
[re:www.megalobiz.com/lrc/maker]
[ve:v1.2.3]
[00:0.00]One Way Ticket - Eruption 1979
[00:03.25]Mmm, hmm, hmm, hmm
[00:09.76]Oh, oh, oh, oho
[00:15.22]Yeah, yeah, yeah, yeah
[00:19.23]1. One way ticket,
[00:21.52]one way ticket
[00:23.25]2. One way ticket,
[00:25.26]one way ticket
[00:27.26]3. One way ticket,
[00:28.99]one way ticket to the blues
[00:34.73]Choo choo train
[00:36.74]a-tracking down the track
[00:38.75]Gotta travel on,
[00:40.76]ain't never coming back
[00:42.19]Ooh ooh,
[00:44.20]got a one way ticket to the blues
[00:50.51]Bye bye love,
[00:52.23]my baby's leaving me
[00:54.24]Now lonely teardrops a
[00:55.96]re all that I can see
[00:57.68]Ooh hoo,
[00:59.65]got a one way ticket to the blues
[01:05.95]Gonna take a trip
[01:07.39]to lonesome town
[01:09.68]Gonna stay at Heartbreak Hotel
[01:13.40]A fool such as I,
[01:15.41]There never was
[01:17.42]I cry a tear so well
[01:21.43]1. One way ticket,
[01:23.15]one way ticket
[01:25.16]2. One way ticket,
[01:27.17]one way ticket
[01:29.17]3. One way ticket,
[01:31.18]one way ticket to the blues
[01:36.64]Choo choo, train
[01:38.64]a-tracking down the track
[01:40.65]Gotta travel on,
[01:42.66]ain't never coming back
[01:44.09]Ooh ooh,
[01:46.09]got a one way ticket to the blues
[01:59.55]Got a one way ticket to the blues
[02:04.34]Ah, gonna take a trip
[02:06.92]to lonesome town
[02:09.21]Gonna stay at Heartbreak Hotel
[02:12.65]Oh, a fool such as I
[02:14.66]There never was
[02:16.66]I cried a tear so well, yeah, yeah
[02:20.67]1. One way ticket,
[02:22.68]one way ticket
[02:24.68]2. One way ticket,
[02:26.40]one way ticket
[02:28.41]3. One way ticket,
[02:30.42]one way ticket to the blues
[02:36.15]Choo, choo, train
[02:38.15]a-tracking down the track
[02:40.16]Gotta travel on,
[02:41.88]ain't never coming back
[02:43.60]1.Ooh ooh,
[02:51.34]got a one way ticket to the blues
[02:52.78]2.Ooh ooh,
[02:59.37]got a one way ticket to the blues
[03:01.38]1.(One way, one way,
[03:01.99]one way ticket)
[03:04.25]2.(One way, one way,
[03:05.98]one way ticket)
[03:08.25]3.(One way, one way,
[03:09.96]one way ticket)
[03:12.25]4.(One way, one way,
[03:13.68]one way ticket)
[03:15.99]5.(One way, one way,
[03:17.67]one way ticket)
[03:19.75]6.(One way, one way,
[03:21.38]one way ticket)
[03:23.25]7.(One way, one way,
[03:25.37]one way ticket)
[03:27.25]8.(One way, one way,
[03:29.09]one way ticket)` 
  },
  {
    id: "song-15",
    title: "Hold Me Tight Or Don't",
    artist: "Fall Out Boy",
    album: "Mania",
    cover: "https://zero-heaven.github.io/lyricmp3player/mp3/Fall Out Boy - Hold Me Tight Or Don't.jpg",
    audioUrl: "https://zero-heaven.github.io/lyricmp3player/mp3/Fall Out Boy - Hold Me Tight Or Don't.mp3",
    lrcRaw: `[ar: Fall Out Boy]
[al: Mania]
[ti: Hold Me Tight Or Don't]
[au: Patrick Stump / Jonny Coffer / Joe Trohman / Andrew Hurley / Pete Wentz]
[by: Freedom of Motherland]

[re: LRC Editor - Android app]
[ve: Version 3.2.6]

[00:00.00]Hold Me Tight Or Don't - Fall Out Boy
[00:05.52]Oh na na na na na na na na
[00:10.09]I never really feel a thing
[00:13.15]I'm just kinda too froze
[00:16.34]You were the only one
[00:18.22]That even kinda came close
[00:21.04]I just pinch myself
[00:23.21]No longer comatose
[00:26.08]I woke up, no luck
[00:28.06]I woke up, no luck
[00:30.01]And when your stitch comes loose
[00:34.04]I wanna sleep on every piece of fuzz
[00:37.45]And stuffing that comes out of you, you
[00:42.09]I took too many hits off this memory
[00:45.17]I need to come down
[00:48.04]An-n-n-n-n-n-n-n-nother day goes by
[00:54.63]So hold me tight
[00:58.47]Hold me tight, or don't
[01:00.30]Oh n-n-no, no this isn't how our story ends
[01:04.43]So hold me tight
[01:06.80]Hold me tight, or don't
[01:10.10]Oh na na na na na na na na na na na
[01:12.91]Na na na na na na na
[01:15.52]Oh na na na na na na na na na na na
[01:20.51]I got too high again
[01:23.00]Realized I can't not be with you
[01:25.74]Or be just your friend
[01:28.01]I love you to death
[01:30.13]But I just can't, I just can't pretend
[01:33.03]We were lovers first
[01:35.25]Confidants but never friends
[01:37.96]Were we ever friends?
[01:40.27]But when your stitch comes loose
[01:43.87]I wanna sleep on every piece of fuzz
[01:47.37]And stuffing that comes out of you, you
[01:51.96]I took too many hits off this memory
[01:55.80]I need to come down
[01:59.34]An-n-n-n-n-n-n-n-nother day goes by
[02:04.48]So hold me tight
[02:07.25]Hold me tight, or don't
[02:10.33]Oh n-n-no, no this isn't how our story ends
[02:14.30]So hold me tight
[02:16.50]Hold me tight, or don't
[02:20.10]Oh na na na na na na na na na na na
[02:23.11]Na na na na na na na
[02:25.33]Oh na na na na na na na na na na na
[02:28.52]Hold me tight, or don't
[02:29.98]'Cause I'm past the limits
[02:34.97]The distance between us
[02:37.89]It sharpens me like a knife
[02:41.29]Past the limits
[02:44.89]The distance between us
[02:47.61]It sharpens me like a knife
[02:55.19]An-n-n-n-n-n-n-n-nother day goes by
[02:58.26]Hold me tight, or don't
[03:04.82]I'm pretty sure that this isn't how our story ends
[03:09.42]So hold me tight
[03:10.77]Hold me tight, or don't
[03:15.06]Oh na na na na na na na na na na na
[03:20.29]Na na na na na na na` 
  },
  {
    id: "song-16",
    title: "Demons",
    artist: "Imagine Dragons",
    album: "All Time Rock, Vol. 3",
    cover: "https://zero-heaven.github.io/lyricmp3player/mp3/Imagine Dragons - Demons.jpg",
    audioUrl: "https://zero-heaven.github.io/lyricmp3player/mp3/Imagine Dragons - Demons.mp3",
    lrcRaw: `[ti: Demons]
[ar: Imagine Dragons]
[al: All Time Rock, Vol. 3]
[by:Freedom of Motherland]
[00:00.00]Imagine Dragons - Demons (2016)

[00:09.45]When the days are cold
[00:12.70]And the cards all fold
[00:15.39]And the saints we see
[00:18.12]Are all made of gold
[00:20.75]When your dreams all fail
[00:23.62]And the ones we hail
[00:26.13]Are the worst of all
[00:28.69]And the blood's run stale

[00:32.51]I wanna hide the truth
[00:35.17]I wanna shelter you
[00:37.84]But with the beast inside
[00:40.57]There's nowhere we can hide
[00:43.26]No matter what we breed
[00:45.95]We still are made of greed
[00:48.54]This is my kingdom come
[00:51.21]This is my kingdom come

[00:54.24]When you feel my heat
[00:56.86]Look into my eyes
[00:59.38]It's where my demons hide
[01:01.91]It's where my demons hide
[01:04.80]Don't get too close
[01:07.46]It's dark inside
[01:10.07]It's where my demons hide
[01:12.63]It's where my demons hide

[01:14.78]At the curtain's call
[01:16.85]It's the last of all
[01:19.16]When the lights fade out
[01:21.92]All the sinners crawl
[01:24.86]So they dug your grave
[01:27.35]And the masquerade
[01:30.13]Will come calling out
[01:32.81]At the mess you made

[01:36.70]Don't wanna let you down
[01:39.33]But I am hell bound
[01:41.90]Though this is all for you
[01:44.64]Don't wanna hide the truth
[01:47.37]No matter what we breed
[01:49.90]We still are made of greed
[01:52.63]This is my kingdom come
[01:55.31]This is my kingdom come

[01:58.23]When you feel my heat
[02:00.80]Look into my eyes
[02:03.55]It's where my demons hide
[02:06.00]It's where my demons hide
[02:08.96]Don't get too close
[02:11.53]It's dark inside
[02:14.02]It's where my demons hide
[02:16.57]It's where my demons hide

[02:19.57]They say it's what you make
[02:21.92]I say it's up to fate
[02:24.56]It's woven in my soul
[02:27.22]I need to let you go
[02:30.13]Your eyes, they shine so bright
[02:32.70]I wanna save that light
[02:35.19]I can't escape this now
[02:37.91]Unless you show me how

[02:41.02]When you feel my heat
[02:43.56]Look into my eyes
[02:46.09]It's where my demons hide
[02:48.53]It's where my demons hide
[02:51.61]Don't get too close
[02:54.25]It's dark inside
[02:56.58]It's where my demons hide
[02:59.29]It's where my demons hide` 
  },
  {
    id: "song-17",
    title: "What A Feeling",
    artist: "Irene Cara",
    album: "Unknown Album",
    cover: "https://zero-heaven.github.io/lyricmp3player/mp3/Irene Cara - What A Feeling.jpg",
    audioUrl: "https://zero-heaven.github.io/lyricmp3player/mp3/Irene Cara - What A Feeling.mp3",
    lrcRaw: `[ti:What A Feeling]
[ar:Irene Cara]
[by:Freedom of Motherland]
[re:正義必勝]
[re:正義必勝]

[00:00.00]What A Feeling - Irene Cara : Flashdance(閃舞) 1983

[00:10.31]First when there's nothing
[00:14.17]But a slow glowing dream
[00:19.21]That your fear seems to hide
[00:24.39]Deep inside your mind
[00:29.08]All alone I have cried
[00:33.72]Silent tears full of pride
[00:39.58]In a world made of steel,Made of stone
[00:51.98]Well, I hear the music,
[00:55.79]Close my eyes, feel the rhythm
[00:59.41]Wrap around, take a holdOf my heart
[01:06.65]What a feeling
[01:09.71]Bein's believin'
[01:13.43]I can have it all, now I'm dancing for my life
[01:21.05]Take your passion
[01:24.61]And make it happen
[01:28.63]Pictures come alive,
[01:31.91]You can dance right through your life
[01:51.17]Now I hear the music
[01:56.53]Close my eyes, I am rhythm
[01:58.98]In a flash it takes hold
[02:02.35]Of my heart
[02:06.15]What a feeling
[02:09.45]Bein's believin'
[02:13.13]I can have it all, now I'm dancing for my life
[02:20.60]Take your passion
[02:24.34]And make it happen
[02:28.11]Pictures come alive,
[02:30.34]Now I'm dancing through my life
[02:36.04]What a feeling
[02:50.88]What a feeling (I am music now)
[02:54.01]Bein's believin' (I am rhythm now)
[02:58.13]Pictures come alive,
[03:01.61]You can dance right through your life.
[03:05.46]What a feeling (you can really have it al)
[03:09.46]What a feeling (pictures come alive when I call)
[03:12.81]I can have it all (I can really have it all)
[03:16.86]Have it all (pictures come alive when I call)
[03:24.45]What a feeling!!!!` 
  },
  {
    id: "song-18",
    title: "Time In A Bottle",
    artist: "Jim Croce",
    album: "Unknown Album",
    cover: "https://zero-heaven.github.io/lyricmp3player/mp3/Jim%20Croce%20-%20Time%20in%20a%20bottle_1973.jpg",
    audioUrl: "https://zero-heaven.github.io/lyricmp3player/mp3/Jim%20Croce%20-%20Time%20in%20a%20bottle_1973.mp3",
    lrcRaw: `[ti:Time In A Bottle]
[ar:Jim Croce]
[length:02:28.78]

[00:00.00] Time in a Bottle - Jim Croce

[00:13.08]If I could save time in a bottle
[00:18.28]The first thing that I'd like to do
[00:23.50]Is to save every day
[00:26.44]'Til eternity passes away
[00:30.23]Just to spend them with you
[00:34.50]If I could make days last forever
[00:39.50]If words could make wishes come true
[00:45.30]I'd save every day like a treasure and then
[00:50.16]Again, I would spend them with you
[00:56.01]But there never seems to be enough time
[00:59.20]To do the things you want to do
[01:01.50]Once you find them
[01:07.01]I've looked around enough to know
[01:10.01]That you're the one I want to go
[01:12.43]Through time with
[01:29.65]If I had a box just for wishes
[01:35.20]And dreams that had never come true
[01:41.19]The box would be empty
[01:43.68]Except for the memory
[01:46.18]Of how they were answered by you
[01:51.42]But there never seems to be enough time
[01:54.20]To do the things you want to do
[01:56.69]Once you find them
[02:02.18]I've looked around enough to know
[02:05.17]That you're the one I want to go
[02:07.68]Through time with` 
  },
  {
    id: "song-19",
    title: "Imagine",
    artist: "John Lennon",
    album: "Unknown Album",
    cover: "https://zero-heaven.github.io/lyricmp3player/mp3/John Lennon - Imagine.jpg",
    audioUrl: "https://zero-heaven.github.io/lyricmp3player/mp3/John Lennon - Imagine.mp3",
    lrcRaw: `[ti: Imagine]
[ar: John Lennon]
[by: Freedom of Motherland]
[re:正義必勝]
[re:正義必勝]

[00:00.00]Imagine - John Lennon  (Bilingual Lrc)

[00:14.52]Imagine there's no heaven我在想像，如果世界上沒有天堂會怎樣？

[00:21.01]It's easy if you try如果你試著想像，其實並不難

[00:27.32]No hell below us沒有天堂，也沒有地獄

[00:34.43]Above us only sky頭頂上只有一片藍天

[00:39.86] Imagine all the people想像一下，如果每個人都 
[00:45.40]Living for today活在當下，世界會是如何？

[00:53.31]Imagine there's no countries想想看，如果這個世界上，沒有國家會怎樣？

[00:59.27]It isn't hard to do其實這是有可能的

[01:05.56]Nothing to kill or die for這樣就不用打戰，也不會有無辜的生命死去

[01:11.81]And no religion too如果世界上沒有宗教呢？

[01:18.02]Imagine all the people想像看看， 
[01:23.56]Living life in peace這個世界就真的和平了

[01:31.35]You may say I'm a dreamer你可能覺得我在作夢

[01:37.09]But I'm not the only one但是我不是唯一這麼想的人

[01:43.39]I hope someday you'll join us希望有一天，你也能加入我們

[01:49.92]And the world will be as one這個世界再也沒有分裂的國家、對立的陣營

[01:56.08]Imagine no possessions大家都沒有財產

[02:02.33]I wonder if you can可以嗎？

[02:08.73]No need for greed or hunger就不會再有無數貪婪和飢餓的人

[02:14.92]A brotherhood of man大家都像兄弟姐妹

[02:21.11]Imagine all the people 想像所有的人，
[02:26.67]Sharing all the world都能和平共享這個世界的資源

[02:34.48]You may say I'm a dreamer你會覺得我很傻

[02:40.49]But I'm not the only one不過，我不是唯一的傻子

[02:46.50]I hope someday you'll join us希望有一天你能加入我們

[02:53.27]And the world will live as one這個世界就和平了` 
  },
  {
    id: "song-20",
    title: "Dust in the Wind",
    artist: "Kansas",
    album: "point of know return",
    cover: "https://zero-heaven.github.io/lyricmp3player/mp3/Kansas - Dust in the Wind.jpg",
    audioUrl: "https://zero-heaven.github.io/lyricmp3player/mp3/Kansas - Dust in the Wind.mp3",
    lrcRaw: `[ti:Dust in the Wind]
[ar:Kansas ]
[al:point of know return]
[by:Freedom of Motherland]
[re:正義必勝]
[re:正義必勝]

[00:00.00]dust in the wind - kansas

[00:21.00]I close my eyes, 
[00:26.30]only for a moment, and the moment's gone
[00:31.00]All my dreams, pass before my eyes, a curiosity
[00:42.00]Dust in the wind, all they are is dust in the wind.
[00:52.00]Same old song, just a drop of water in an endless sea
[01:02.00]All we do, crumbles to the ground, though we refuse to see
[01:13.00]Dust in the wind, all we are is dust in the wind
[02:11.00] Don't hang on, nothing lasts forever but the earth and sky
[02:21.00]It slips away, and all your money won't another minute buy.
[02:33.00]Dust in the wind, all we are is dust in the wind
[02:42.00]Dust in the wind, everything is dust in the wind.` 
  },
  {
    id: "song-21",
    title: "Say You Say Me",
    artist: "Lionel Richie",
    album: "Unknown Album",
    cover: "https://zero-heaven.github.io/lyricmp3player/mp3/Lionel Richie - Say You Say Me.jpg",
    audioUrl: "https://zero-heaven.github.io/lyricmp3player/mp3/Lionel Richie - Say You Say Me.mp3",
    lrcRaw: `[ti:Say You Say Me]
[ar:Lionel Richie]
[by:Freedom of Motherland]
[re:正義必勝]
[re:正義必勝]

[00:00.00]Say You Say Me - Lionel Richie

[00:15.73]Say you, say me
[00:20.63]Say it for always
[00:26.00]That's the way it should be
[00:31.00]Say you, say me
[00:35.70]Say it together, naturally
[00:45.25]I had a dream, I had an awesome dream
[00:52.26]People in the park
[00:56.40]Playing game in the dark
[01:01.74]And what they played
[01:03.56]Was a masquerade
[01:06.57]But from behind the walls of doubt
[01:11.50]A voice was crying out
[01:20.00]Say you, say me
[01:25.13]Say it for always
[01:30.00]That's the way it should be
[01:34.75]Say you, say me
[01:39.86]Say it together, naturally
[01:50.38]As we go down life's lonesome highway
[01:56.45]Seems the hardest thing to do
[02:00.00]Is to find a friend or two
[02:05.30]That helping hand
[02:07.57]Someone who understands
[02:11.64]When you feel you've lost your way
[02:14.94]You've got someone there to say
[02:17.95]I'll show you oo, oo, oo
[02:23.60]Say you, say me
[02:29.13]Say it for always
[02:33.79]That's the way it should be
[02:38.60]Say you, say me
[02:44.07]Say it together, naturally
[02:50.30]So you think you know the answers
[02:53.05]Oh no!
[02:56.10]Well the whole world's got ya dancing
[02:58.00]That's right I'm telling you
[03:01.50]It's time to start believing
[03:02.85]Oh Yes!
[03:06.30]Believe in who you are
[03:09.65]You are a shining star...oh
[03:17.15]Say you, say me
[03:22.78]Say it for always
[03:27.60]That's the way it should be
[03:32.22]Say you, say me
[03:37.90]Say it together, naturally
[03:45.55]Say it together, naturally` 
  },
  {
    id: "song-22",
    title: "To Sir with Love",
    artist: "Lulu",
    album: "1967",
    cover: "https://zero-heaven.github.io/lyricmp3player/mp3/Lulu - To Sir With Love.jpg",
    audioUrl: "https://zero-heaven.github.io/lyricmp3player/mp3/Lulu - To Sir With Love.mp3",
    lrcRaw: `[ar:Lulu]
[al:1967]
[ti:To Sir with Love]
[au:Don Black and Mark London]
[by:Nothing is Mine]
[re:www.megalobiz.com/lrc/maker]
[ve:v1.2.3]
[00:01.11]To Sir with Love - Lulu  1967
[00:10.35]Those schoolgirl days那些在女子學校的日子
[00:15.52]of telling tales and biting nails are gone說著故事、咬著指甲的歲月已不再
[00:25.47]But in my mind但是在我心中
[00:29.78]I know they will still live on and on, and on我知道這段歲月將依然活
[00:39.82]But how do you thank someone但是妳該如何感謝
[00:43.26]Who has taken you from crayons to perfume?那個從蠟筆到香水一直引導妳的人
[00:49.27]It isn't easy, but I'll try那並不容易，但我願意試試
[00:57.88]If you wanted the sky如果你要整片天空
[01:00.09]Write across the sky in letters我會在天空上寫滿字
[01:05.25]That would soar a thousand feet high那將會有一千英呎高
[01:10.41]"To Sir, with love"寫著"吾愛吾師"
[01:19.21]The time has come
[01:24.09]For closing books and long last looks must end闔上課本的時刻已來到，最後的一瞥還是要結束
[01:33.74]And as I leave當我離開
[01:38.91]I know that I am leaving my best friend我明白我將離開我最好的朋友
[01:48.66]A friend who taught me right from wrong一個教導我分辨對錯、
[01:52.67]and weak from strong, that's a lot to learn從軟弱變堅強的朋友,要學的東西還很多
[01:57.84]What, what can I give you in return?但我能送你什麼來報答你呢？
[02:07.22]If you wanted the moon如果你想要月亮
[02:09.51]I would try to make a start我會努力試試看
[02:12.58]But I would rather you let me give my heart但我寧可你讓我把心獻給你
[02:20.04]To Sir, with love寫上"吾愛吾師"` 
  },
  {
    id: "song-23",
    title: "Xanadu",
    artist: "Olivia Newton-John and Electric Light Orchestra",
    album: "Xanadu",
    cover: "https://zero-heaven.github.io/lyricmp3player/mp3/Olivia Newton John - Xanadu 1980.jpg",
    audioUrl: "https://zero-heaven.github.io/lyricmp3player/mp3/Olivia Newton John - Xanadu 1980.mp3",
    lrcRaw: `[ar:Olivia Newton-John and Electric Light Orchestra]
[al:Xanadu]
[ti:Xanadu]
[au: Jeff Lynne]
[length:03:35.59]
[Motherland]
[re:���q����]
[re:www.megalobiz.com/lrc/maker]
[ve:v1.2.3]
[00:11.04]A place where nobody dared to go
[00:16.79]The love that we came to know
[00:20.04]They call it Xanadu
[00:26.29]And now, open your eyes and see what we have made is real
[00:35.05]We are in Xanadu
[00:42.12]A million lights are dancing and you are, a shooting star
[00:49.62]An everlasting world and you're here with me, eternally
[00:58.64]Xanadu, Xanadu
[01:05.33](Now we are here) in Xanadu
[01:13.85]Xanadu, Xanadu
[01:20.33](Now we are here) in Xanadu
[01:25.30]Xanadu, your neon lights will shine for you, Xanadu
[01:37.38]The love that echoes of long ago
[01:43.12]You needed the world to know
[01:46.13]They are in Xanadu
[01:52.62]The dream that came through a million years
[01:58.13]That lived through all the tears
[02:01.37]It came to Xanadu
[02:08.62]A million light are dancing and you are, a shooting star
[02:16.12]An everlasting world and you're here with me, eternally
[02:26.87]Xanadu, Xanadu
[02:33.36](Now we are here) in Xanadu
[02:42.08]Xanadu, Xanadu
[02:48.55](Now we are here) in Xanadu
[02:52.58]Now that I'm here, now that you're near, in Xanadu
[03:01.52]Now that I'm here, now that you're near, in Xanadu
[03:13.51]Xanadu` 
  },
  {
    id: "song-24",
    title: "That Girl",
    artist: "Olly Murs",
    album: "Unknown Album",
    cover: "https://zero-heaven.github.io/lyricmp3player/mp3/Olly Murs - That Girl.jpg",
    audioUrl: "https://zero-heaven.github.io/lyricmp3player/mp3/Olly Murs - That Girl.mp3",
    lrcRaw: `[ti:That Girl]
[ar:Olly Murs]
[length:02:54.79]
[Motherland]
[re:正義必勝]
[re:正義必勝]

[00:00.00]Olly Murs - That Girl

[00:00.01]There's a girl but I let her get away
[00:05.90]It's all my fault cause pride got in the way
[00:11.15]And I'd be lying if I said I was okay
[00:16.40]About that girl the one I let get away
[00:21.40]I keep saying no
[00:24.15]This can't be the way it was supposed to be
[00:27.05]I keep saying no
[00:29.40]There's gotta be a way to get you close to me
[00:32.65](Now I know you gotta) speak up if you want somebody
[00:36.65]Can't let them get away, oh no
[00:39.15]You don't wanna end up sorry
[00:41.65]The way that I'm feeling everyday
[00:43.90](Don't you know)
[00:44.90]No no no no
[00:47.15]There's no home for the broken heart
[00:49.15](Don't you know)
[00:50.16]No no no no
[00:52.40]There's no home for the broken
[00:54.65]There's a girl but I let her get away
[00:59.65]Its my fault cause I said I needed space
[01:05.16]And I've been torturing myself night and day
[01:10.41]About that girl, the one I let get away
[01:15.40]I keep saying no
[01:17.91]This can't be the way it was supposed to be
[01:20.66]I keep saying no
[01:23.40]There's gotta be a way
[01:25.05]There's gotta be a way
[01:25.80]To get you close to me
[01:27.20](You gotta) speak up if you want somebody
[01:30.21]Can't let them get away, oh no
[01:32.96]You don't wanna end up sorry
[01:35.71]The way that I'm feeling everyday
[01:37.71](Don't you know)
[01:38.71]No no no no
[01:40.96]There's no home for the broken heart
[01:43.21](Don't you know)
[01:44.21]No no no no
[01:46.46]There's no home for the broken
[01:49.20]No home for me
[01:51.95]No home cause I'm broken
[01:54.46]No room to breathe
[01:56.70]And I got no one to blame
[02:00.21]No home for me
[02:02.71]No home cause I'm broken
[02:04.70]About that girl
[02:06.21]The one I let get away
[02:09.71]So you better
[02:10.46]Speak up if you want somebody
[02:13.71]You can't let them get away oh no no
[02:16.21]You don't wanna end up sorry oh no
[02:19.20]The way that I'm feeling everyday
[02:20.71](Don't you know)
[02:21.95]No no no no
[02:23.96]There's no home for the broken heart
[02:26.70](Don't you know)
[02:27.46]No no no no
[02:29.45]Theres no home for the broken
[02:32.96]You don't wanna lose that love
[02:34.96]It's only gonna hurt too much
[02:36.71](I'm telling you)
[02:38.21]You don't wanna lose that love
[02:40.21]It's only gonna hurt too much
[02:42.20](I'm telling you)
[02:43.71]You don't wanna lose that love
[02:45.36]Cause there's no hope for the broken heart
[02:47.85]About that girl
[02:49.60]The one I let get away` 
  },
  {
    id: "song-25",
    title: "Blowin' in the wind",
    artist: "Peter, Paul and Mary",
    album: "Unknown Album",
    cover: "https://zero-heaven.github.io/lyricmp3player/mp3/Peter, Paul & Mary - Blowing in the Wind.jpg",
    audioUrl: "https://zero-heaven.github.io/lyricmp3player/mp3/Peter, Paul & Mary - Blowing in the Wind.mp3",
    lrcRaw: `[ti:Blowin' in the wind]
[ar:Peter, Paul and Mary]
[by:Annie]
[id:blihaock]
[length:02:57]

[00:00.00]Peter, Paul and Mary
[00:00.00]Blowin' in the wind
[00:00.00]Paroles et musique : Bob Dylan    1963
[00:00.00][01:49.87][02:40.54][02:51.49] 
[00:12.59]How many roads must a man walk down
[00:18.38]Before they call him a man ?
[00:24.91]How many seas must a white dove sail
[00:30.57]Before she sleeps in the sand ?
[00:37.22]How many times must the cannon balls fly
[00:42.89]Before they're forever banned ?
[00:49.36][01:38.25]The answer, my friend, is blowin' in the wind
[00:55.02][01:44.16]The answer is blowin' in the wind.
[01:02.23]How many years must a mountain exist
[01:07.70]Before it is washed to the sea ?
[01:14.23]How many years can some people exist
[01:19.84]Before they're allowed to be free ?
[01:26.56]How many times can a man turn his head
[01:31.97]And pretend that he just doesn't see ?
[01:51.52]How many times must a man look up
[01:56.80]Before he can see the sky ?
[02:03.37]How many ears must one man have
[02:09.12]Before he can hear people cry ?
[02:15.41]How many deaths will it take
[02:19.63]'Till he knows that too many people have died ?
[02:27.74]The answer, my friend, is blowin' in the wind.
[02:33.75][02:47.56]The answer is blowin' in the wind
]
[al: In the wind` 
  },
  {
    id: "song-26",
    title: "Lemon Tree",
    artist: "Peter, Paul & Mary",
    album: "Peter, Paul & Mary",
    cover: "https://zero-heaven.github.io/lyricmp3player/mp3/Peter, Paul & Mary - Lemon Tree.jpg",
    audioUrl: "https://zero-heaven.github.io/lyricmp3player/mp3/Peter, Paul & Mary - Lemon Tree.mp3",
    lrcRaw: `[ti: Lemon Tree]
[ar: Peter, Paul & Mary]
[al: Peter, Paul & Mary]
[Motherland]
[re:正義必勝]
[re:正義必勝]

[00:00.00]Peter, Paul & Mary - Lemon Tree (檸檬樹) 1962  (Bilingual Lrc)

[00:06.47]當我還只是個十歲男孩，我父親對我說：
[00:06.47]When I was just a lad of ten, my father said to me,
[00:12.12]「來向這可愛的檸檬樹學習一堂課。」
[00:12.12]"Come here and take a lesson from the lovely lemon tree."
[00:17.41]「孩子呀！不要以『愛』為信仰。」我父親對我說：
[00:17.41]"Don't put your faith in love, my boy", my father said to me,
[00:23.01]「我害怕你會發現『愛』像這可愛的檸檬樹。」
[00:23.01]"I fear you'll find that love is like the lovely lemon tree."
[00:30.01]檸檬樹十分漂亮，而且檸檬的花很香。
[00:30.01]Lemon tree very pretty and the lemon flower is sweet
[00:36.41]可惜檸檬果實的味太酸，不能夠直接吃。
[00:36.41]but the fruit of the poor lemon is impossible to eat.
[00:42.11]檸檬樹十分漂亮，而且檸檬的花很香。
[00:42.11]Lemon tree very pretty and the lemon flower is sweet
[00:48.01]可惜檸檬果實的味太酸，不能夠直接吃。
[00:48.01]but the fruit of the poor lemon is impossible to eat.
[00:55.51]一天我與愛人躺在那檸檬樹底下。
[00:55.51]One day beneath the lemon tree, my love and I did lie
[01:02.01]一個甜美的女孩，當她微笑，星星都會升滿天。
[01:02.01]A girl so sweet that when she smiled the stars rose in the sky.
[01:07.01]我們整個夏天在那檸檬樹下，沐浴在愛中。
[01:07.01]We passed that summer lost in love beneath the lemon tree
[01:13.01]她音樂般的笑聲，使我忘記了父親的話。
[01:13.01]the music of her laughter hid my father's words from me:
[01:20.01]檸檬樹十分漂亮，而且檸檬的花很香。
[01:20.01]Lemon tree very pretty and the lemon flower is sweet
[01:27.01]可惜檸檬果實的味太酸，不能夠直接吃。
[01:27.01]but the fruit of the poor lemon is impossible to eat.
[01:33.01]檸檬樹十分漂亮，而且檸檬的花很香。
[01:33.01]Lemon tree very pretty and the lemon flower is sweet
[01:39.01]可惜檸檬果實的味太酸，不能夠直接吃。
[01:39.01]but the fruit of the poor lemon is impossible to eat.
[01:46.01]一天她帶走了太陽，也沒留下一句話。
[01:46.01]One day she left without a word. She took away the sun.
[01:52.01]在她留下的黑暗中，我知道她做了些什麼。
[01:52.01]And in the dark she left behind, I knew what she had done.
[01:58.01]她離我找了新對象，這是老調而真的故事。
[01:58.01]She'd left me for another, it's a common tale but true.
[02:04.01]傷透的男人變聰明了，我把這些話頌給你。
[02:04.01]A sadder man but wiser now I sing these words to you:
[02:12.01]檸檬樹十分漂亮，而且檸檬的花很香。
[02:12.01]Lemon tree very pretty and the lemon flower is sweet
[02:19.01]可惜檸檬果實的味太酸，不能夠直接吃。
[02:19.01]but the fruit of the poor lemon is impossible to eat.
[02:25.01]檸檬樹十分漂亮，而且檸檬的花很香。
[02:25.01]Lemon tree very pretty and the lemon flower is sweet
[02:31.01]可惜檸檬果實的味太酸，不能夠直接吃。
[02:31.01]but the fruit of the poor lemon is impossible to eat.
[02:38.01]檸檬樹...
[02:38.01]Lemon tree...` 
  },
  {
    id: "song-27",
    title: "Against All Odds",
    artist: "Phil Collins",
    album: "Music From the Original Motion Picture Soundtrack",
    cover: "https://zero-heaven.github.io/lyricmp3player/mp3/Phil Collins - Against All Odds.jpg",
    audioUrl: "https://zero-heaven.github.io/lyricmp3player/mp3/Phil Collins - Against All Odds.mp3",
    lrcRaw: `[ti:Against All Odds]
[ar:Phil Collins]
[al:Music From the Original Motion Picture Soundtrack]
[by:Motherland]

[00:00.00]Against All Odds - Phil Collins (1984)

[00:08.26]How can I just let you walk away
[00:11.64]Just let you leave without a trace
[00:16.01]When I stand here taking every breath, with you, ooh
[00:24.04]You're the only one who really knew me at all
[00:32.84]How can you just walk away from me
[00:36.50]When all I can do is watch you leave
[00:40.90]Cos we've shared the laughter and the pain
[00:44.97]And even shared the tears
[00:48.78]You're the only one who really knew me at all
[00:56.08]So take a look at me now
[01:00.59]There's just an empty space
[01:04.67]And there's nothing left here to remind me
[01:10.15]Just the memory of your face
[01:13.53]Ooh, Take a look at me now,
[01:17.25]there's just an empty space
[01:21.26]And you coming back to me is against all odds
[01:26.41]And that's what I've got to face
[01:34.31]Instrumental
[01:36.75]I wish, I could just make you turn around
[01:41.09]Turn around and see me cry
[01:44.58]There's so much I need to say to you
[01:48.93]so many reasons why
[01:52.84]You're the only one who really knew me at all

[02:00.08]So take a look at me now,
[02:04.81]there's just an empty space
[02:08.88]And there's nothing left here to remind me,
[02:14.01]just the memory of your face
[02:17.09]Now Take a look at me now,
[02:20.78]'cos there's just an empty space
[02:25.43]But to wait for you,  is all I can do
[02:30.44]and that's what I've got to face
[02:32.97]Take a good look at me now,
[02:37.43]'cos I'll still be standing here
[02:41.78]And you coming back to me is against all odds
[02:47.21]It's the chance I've gotta take
[02:57.14]Instrumental
[03:04.54]Just take a look at me now` 
  },
  {
    id: "song-28",
    title: "Another day in paradise",
    artist: "Phil Collins",
    album: "...But Seriously",
    cover: "https://zero-heaven.github.io/lyricmp3player/mp3/Phil Collins - Another Day In Paradise.jpg",
    audioUrl: "https://zero-heaven.github.io/lyricmp3player/mp3/Phil Collins - Another Day In Paradise.mp3",
    lrcRaw: `[ti: Another day in paradise]
[ar: Phil Collins]
[al: ...But Seriously]
[by:Motherland]

[00:00.00]Another day in paradise - Phil Collins  (1989)
[00:35.05]She calls out to the man on the street
[00:40.16]"Sir, can you help me?
[00:44.18]It's cold and I've nowhere to sleep
[00:48.58]Is there somewhere you can tell me?"
[00:53.59]He walks on, doesn't look back
[00:58.40]He pretends he can't hear her
[01:02.89]Starts to whistle as he crosses the street
[01:07.79]Seems embarrassed to be there
[01:12.02]Oh, think twice,
[01:15.34]'cause it's another day for you and me in paradise
[01:21.14]Oh, think twice, 
[01:25.27]'cause it's another day for you
[01:28.27]You and me in paradise
[01:39.76]Think about it
[01:50.12]She calls out to the man on the street
[01:54.93]He can see she's been crying
[01:59.56]She's got blisters on the soles of her feet
[02:04.28]She can't walk but she's trying
[02:08.61]Oh, think twice,
[02:12.10]'cause it's another day for you and me in paradise
[02:17.40]Oh, think twice,
[02:21.30]it's just another day for you
[02:25.16]You and me in paradise
[02:36.05]Just think about it
[02:47.40]Oh Lord, is there nothing more anybody can do?
[02:55.85]Oh Lord, there must be something you can say
[03:07.76]You can tell from the lines on her face
[03:12.60]You can see that she's been there
[03:17.18]Probably been moved on from every place
[03:21.83]Cause she didn't fit in there
[03:26.30]Oh, think twice,
[03:30.03]'cause it's another day for you and me in paradise
[03:35.23]Oh, think twice,
[03:39.13]'cause it's just another day for you,
[03:42.15]You and me in paradise
[03:49.07]Just think about it
[03:54.37]Mhm
[03:59.08]Think about it
[04:03.65]It's just another day for you and me in paradise
[04:12.53]It's just another day for you and me in paradise (para-paradise)
[04:22.65]Paradise
[04:26.31]Ooh, just think about it
[04:32.04]Paradise
[04:36.21]Just think about it (para-paradise)
[04:41.81]Paradise
[04:46.30]Mhm, paradise
[04:51.21]Paradise
[04:54.19]Just another day` 
  },
  {
    id: "song-29",
    title: "Right Here Waiting",
    artist: "Richard Marx",
    album: "Repeat Offender",
    cover: "https://zero-heaven.github.io/lyricmp3player/mp3/Richard Marx - Right Here Waiting.jpg",
    audioUrl: "https://zero-heaven.github.io/lyricmp3player/mp3/Richard Marx - Right Here Waiting.mp3",
    lrcRaw: `[ti:Right Here Waiting]
[ar:Richard Marx]
[al:Repeat Offender]
[Motherland]
[re:正義必勝]
[re:正義必勝]

[00:00.00]Right Here Waiting - Richard Marx  (Bilingual Lrc)

[00:46.00]隔海相思，日復一日
[00:46.00]Oceans apart day after day
[00:51.00]我逐漸陷入瘋狂
[00:51.00]And I slowly go insane
[00:56.00]在電話裡聽著你的聲音
[00:56.00]I hear your voice on the line
[01:02.00]但那不能療傷止痛
[01:02.00]But it doesn't stop the pain
[01:07.00]如果永遠見不到你
[01:07.00]If I see you next to never
[01:12.00]我倆還談什麼天長地久
[01:12.00]How can we say forever
[01:17.00]不論你去了哪裡？
[01:17.00]Wherever you go
[01:20.00]不管你做了什麼？
[01:20.00]Whatever you do
[01:22.00]我都會在此為你等候
[01:22.00]I will be right here waiting for you
[01:28.00]不管未來如何
[01:28.00]Whatever it takes
[01:30.00]或我有多麼傷心
[01:30.00]Or how my heart breaks
[01:32.00]我都會在此為你等候
[01:32.00]I will be right here waiting for you
[01:44.00]過去我一直視為理所當然
[01:44.00]I took for granted, all the times
[01:50.00]以為那終究會繼續
[01:50.00]That I thought would last somehow
[01:55.00]我聽到笑語，嚐到淚水
[01:55.00]I hear the laughter, I taste the tears
[02:01.00]現在卻無法靠近你
[02:01.00]But I can't get near you now
[02:06.00]寶貝，你難道看不出來？
[02:06.00]Oh, can't you see it baby
[02:11.00]你已經令我瘋狂
[02:11.00]You've got me goin' crazy
[02:16.00]不論你去了哪裡？
[02:16.00]Wherever you go
[02:19.00]不管你做了什麼？
[02:19.00]Whatever you do
[02:21.00]我都會在此為你等候
[02:21.00]I will be right here waiting for you
[02:27.00]不管未來如何
[02:27.00]Whatever it takes
[02:30.00]或我有多麼傷心
[02:30.00]Or how my heart breaks
[02:32.00]我都會在此為你等候
[02:32.00]I will be right here waiting for you
[02:39.00]我懷疑要怎樣才讓這段戀情繼續下去
[02:39.00]I wonder how we can survive This romance
[02:49.00]如果最後我能夠和你在一起
[02:49.00]But in the end if I'm with you
[02:54.00]我會好好把握機會
[02:54.00]I'll take the chance
[03:22.00]寶貝，你難道看不出來？
[03:22.00]Oh,can't you see it baby
[03:26.00]你已經令我瘋
[03:26.00]You've got me going crazy
[03:31.00]狂不論你去了哪裡？
[03:31.00]Wherever you go
[03:33.00]不管你做了什麼？
[03:33.00]Whatever you do
[03:36.00]我都會在此為你等候
[03:36.00]I will be right here waiting for you
[03:41.00]不管未來如何
[03:41.00]Whatever it takes
[03:44.00]或我有多麼傷心
[03:44.00]Or how my heart breaks
[03:47.00]我都會在此為你等候
[03:47.00]I will be right here waiting for you
[04:01.00]在此為你等候
[04:01.00]Waiting for you` 
  },
  {
    id: "song-30",
    title: "Sailing",
    artist: "Rod Stewart",
    album: "Atlantic Crossing",
    cover: "https://zero-heaven.github.io/lyricmp3player/mp3/Rod Stewart - Sailing.jpg",
    audioUrl: "https://zero-heaven.github.io/lyricmp3player/mp3/Rod Stewart - Sailing.mp3",
    lrcRaw: `[ti:Sailing]
[ar:Rod Stewart]
[al:Atlantic Crossing]
[au:Gavin Sutherland]
[length:03:46.97]
[Motherland]
[re:正義必勝]
[re:正義必勝]

[00:00.00]Rod Stewart - Sailing

[00:13.62]I am sailing
[00:17.83]I am sailing
[00:21.70]Home again
[00:25.31]Cross the sea
[00:29.03]I am sailing
[00:32.75]Stormy waters
[00:36.75]To be near you
[00:40.11]To be free
[00:44.05]I am flying
[00:47.77]I am flying
[00:51.45]Like a bird
[00:55.17]Cross the sky
[00:59.25]I am flying
[01:02.65]Passing high clouds
[01:06.65]To be near you
[01:10.40]To be free
[01:14.11]Can you hear me? Can you hear me?
[01:21.95]Through the dark night, far away
[01:29.05]I am dying, forever crying
[01:36.96]To be with you, who can say
[01:44.55]Can you hear me? Can you hear me?
[01:51.95]Through the dark night, far away
[01:59.39]I am dying, forever crying
[02:06.76]To be with you, who can say?
[02:45.92]We are sailing, we are sailing
[02:53.37]Home again
[02:56.81]Cross the sea
[03:00.53]We are sailing
[03:04.17]Stormy waters
[03:08.24]To be near you
[03:11.82]To be free
[03:14.96]Oh, Lord, to be near you, to be free
[03:22.45]Oh, my Lord, to be near you, to be free
[03:29.35]Oh, my Lord, to be near you, to be free
[03:37.16]Oh, Lord` 
  },
  {
    id: "song-31",
    title: "Scarborough Fair",
    artist: "Sarah Brightman",
    album: "Unknown Album",
    cover: "https://zero-heaven.github.io/lyricmp3player/mp3/Sarah Brightman - Scarborough Fair.jpg",
    audioUrl: "https://zero-heaven.github.io/lyricmp3player/mp3/Sarah Brightman - Scarborough Fair.mp3",
    lrcRaw: `[ti:Scarborough Fair]
[ar:Sarah Brightman]
[Motherland]
[re:正義必勝]
[re:正義必勝]

[00:00.00]Scarborugh fair - Sarah Brightman  (Bilingual Lrc)

[00:10.87]Are you going to Scarborough Fair 你們正要去史卡博羅市集嗎?
[00:18.61]Parsley, sage, rosemary and thyme 荷蘭芹、鼠尾草、迷迭香和百里香 
[00:27.85]Remember me to one who lives there 請記得代我問候住在那裡的一個人  
[00:35.41]She was once a true love of mine 他曾是我的真情摯愛 
[00:41.89] 
[00:45.68]Tell her to make me a cambric shirt 跟他說為我縫件白亞麻襯衫   
[00:53.50]Parsley, sage, rosemary and thyme 荷蘭芹、鼠尾草、迷迭香和百里香
[01:02.78]Without no seams nor needle work 不用縫線也沒有針工  
[01:10.32]Then she'll be a true love of mine 那麼他將會是我的真情摯愛  
[01:20.59]Tell her to find me an acre of land 跟他說為我找一畝地  
[01:28.24]Parsley, sage, rosemary and thyme 荷蘭芹、鼠尾草、迷迭香和百里香  
[01:37.85]Between salt water and the sea strands 在海水與淺灘之間 
[01:45.58]Then she'll be a true love of mine 那麼他將會是我的真情摯愛  
[01:51.93]
[01:55.66]Tell her to reap it with a sickle of leather 要他用皮製的鐮刀收割 
[02:03.38]Parsley, sage, rosemary and thyme 荷蘭芹、鼠尾草、迷迭香和百里香  
[02:12.76]And gather it all in a bunch of heather 用石南草捆紮成束  
[02:20.73]Then she'll be a true love of mine 那麼他將會是我的真情摯愛
[02:27.62]
[02:31.01]Are you going to Scarborough Fair 你們正要去史卡博羅市集嗎? 
[02:38.69]Parsley, sage, rosemary and thyme 荷蘭芹、鼠尾草、迷迭香和百里香
[02:47.98]Remember me to one who lives there 請記得代我問候住在那裡的一個人 
[02:55.69]She was once a true love of mine 他曾是我的真情摯愛` 
  },
  {
    id: "song-32",
    title: "San Francisco",
    artist: "Scott Mckenzie",
    album: "Kokomo",
    cover: "https://zero-heaven.github.io/lyricmp3player/mp3/Scott McKenzie - San_Francisco_1967.jpg",
    audioUrl: "https://zero-heaven.github.io/lyricmp3player/mp3/Scott McKenzie - San_Francisco_1967.mp3",
    lrcRaw: `[ti:San Francisco]
[ar:Scott Mckenzie]
[al:Kokomo]
[au:Journeyman]
[Motherland]
[re:正義必勝]
[re:正義必勝]

[00:00.00][00:01.71]Sanfrancisco - Scott Mckenzie

[00:08.01]if you're going to san francisco
[00:16.20]be sure to wear some flowers in your hair
[00:24.41]if you're going to san francisco
[00:33.39]you're gonna meet some gentle people there
[00:43.56]for those who come to san francisco
[00:52.39]summertime will be a love-in there
[01:01.05]in the streets of san francisco
[01:09.42]gentle people with flowers in their hair
[01:19.67]all across the nation such a strange vibration
[01:28.76]people in motion
[01:34.27]there's a whole generation with a new explanation
[01:43.32]people in motion people in motion
[01:50.96]for those who come to san francisco
[01:58.76]be sure to wear some flowers in your hair
[02:08.53]if you come to san francisco
[02:16.65]summertime will be a love-in there
[02:29.15]if you come to san francisco
[02:38.59]summertime will be a love-in there` 
  },
  {
    id: "song-33",
    title: "Because I Love You",
    artist: "Shakin' Stevens",
    album: "Unknown Album",
    cover: "https://zero-heaven.github.io/lyricmp3player/mp3/Shakin' Stevens - Because I Love You.jpg",
    audioUrl: "https://zero-heaven.github.io/lyricmp3player/mp3/Shakin' Stevens - Because I Love You.mp3",
    lrcRaw: `[ti: Because I Love You]
[ar: Shakin' Stevens]
[by: Freedom of Motherland]
[re:正義必勝]

[00:00.00]Because I Love You - Shakin' Stevens  (Bilingual Lrc)

[00:00.71]If I got down on my knees and I pleaded with you,(如果我向妳跪下 如果我向妳哀求)
[00:05.61]if I crossed a million oceans just to be with you,(如果我渡千山萬水，只為了與妳相依)
[00:10.08]Would you ever(妳還會)
[00:14.28]Let me down?(拒絕我嗎？)

[00:19.05]If I climbed the highest mountain just to hold you tight,(如果我登高峰，只為了抓緊妳)
[00:23.55]if I said that I would love you every single night,(如果我告訴妳，我會愛妳一生一世)
[00:29.20]Would you ever(妳還會)
[00:33.35]Let me down?(拒絕我嗎？)

[00:38.06]Well, I'm sorry if it sounds kinda sad,(啊！如果這些話語帶著憂鬱，真的抱歉)
[00:42.91]it's just that(我)
[00:48.79]worried,(擔心)
[00:52.08]so worried(很擔心)
[00:56.34]that you'll let me down.(妳會離我而去)

[01:01.03]Because I love you,(啊！只因為我愛妳呀！)
[01:07.47]love you,(我愛妳呀！)
[01:12.15]love you,(愛妳！)
[01:15.12]so don't let me down.(不要拒絕我，好嗎？)

[01:20.74]If I swam the longest river just to call your name,(如果我游渡長河，只為呼喚妳的名字)
[01:25.52]if I said the way I feel for you would never change,(如果我說我愛妳不變)
[01:30.30]Would you ever fool around?(妳還會再愚弄我嗎？)

[01:39.52]Well, I'm sorry if it sounds kinda bad,(啊！如果那些話語帶著憂鬱，真的抱歉)
[01:44.88]it's just that(我)
[01:49.02]worried,(我擔心)
[01:53.26]I'm so worried(擔心)
[01:57.15]that you'll let me down.(妳會離我而去)

[02:02.59]Because I(love you, love you),(啊！只因為我愛妳)
[02:13.07]love you,(愛妳，)
[02:18.03]love you.(愛妳呀！)

[02:20.38]Well I'm sorry if it sounds kinda bad,(啊！如果那些話語帶著憂鬱，真的抱歉)
[02:26.99]it's just that(我)
[02:31.84]worried,(擔心)
[02:35.68]I'm so worried(擔心)
[02:39.18]that you'll let me down.(妳會離我而去)

[02:44.31]Because I love you,(啊！只因為我愛妳)
[02:50.91]love you,(愛妳)

[02:54.40]Oooh, I love you,(嗚...，愛妳呀！)
[02:59.95]love you,(愛妳，)
[03:04.81]love you.(愛妳。)` 
  },
  {
    id: "song-34",
    title: "Simon & Garfunkel - Mrs. Robinson",
    artist: "Unknown Artist",
    album: "Unknown Album",
    cover: "https://zero-heaven.github.io/lyricmp3player/mp3/Simon & Garfunkel - Mrs. Robinson.jpg",
    audioUrl: "https://zero-heaven.github.io/lyricmp3player/mp3/Simon & Garfunkel - Mrs. Robinson.mp3",
    lrcRaw: `[ti:]Mrs Robinson
[ar:]Simon & Garfunkel
[Motherland]
[re:正義必勝]
[re:正義必勝]


[00:00.00]Mrs. Robinson - Simon & Garfunkel

[00:32.99]And here's to you, Mrs. Robinson,
[00:36.67]Jesus loves you more than you will know. Wo, Wo, Wo.
[00:43.68]God bless you, please Mrs. Robinson.
[00:47.22]Heaven holds a place for those who pray,
[00:51.83]Hey, hey, hey
[01:00.31]We'd like to know a little bit about your for our files
[01:05.75]We'd like to help you learn to help yourself.
[01:11.19]Look around you all you see are sympathetic eyes,
[01:17.80]Stroll around the grounds until you feel at home.
[01:23.03]And here's to you, Mrs. Robinson,
[01:26.29]Jesus loves you more than you will know.
[01:33.32]God bless you, please, Mrs. Robinson.
[01:36.83]Heaven holds a place for those who pray,
[01:41.34]Hey, hey, hey
[01:49.69]Hide in the hiding place where no one ever goes.
[01:56.23]Put it in your pantry with your cupcakes.
[02:02.49]It's a little secret just the Robinsons' affair.
[02:08.46]Most of all you've got to hide it from the kids.
[02:12.78]Koo-koo-ka-choo, Mrs. Robinson,
[02:16.18]Jesus loves you more than you will know.
[02:23.07]God bless you, please, Mrs. Robinson.
[02:26.48]Heaven holds a place for those who pray,
[02:31.40]Hey, hey, hey
[02:40.45]Sitting on a sofa on a Sunday afternoon.
[02:46.82]Going to the candidate's debate.
[02:51.75]Laugh about it, shout about it
[02:54.05]When you've got to choose
[02:58.15]Every way you look at this you lose.
[03:02.40]Where have you gone, Joe DiMaggio,
[03:05.95]Our nation turns it's lonely eyes to you.
[03:13.13]What's that you say, Mrs. Robinson.
[03:16.58]Jotting Joe has left and gone away,
[03:21.26]Hey hey hey.` 
  },
  {
    id: "song-35",
    title: "Scarborough Fair",
    artist: "Simon and Garfunkel",
    album: "Parsley, Sage, Rosemary and Thyme",
    cover: "https://zero-heaven.github.io/lyricmp3player/mp3/Simon & Garfunkel - Scarborough Fair.jpg",
    audioUrl: "https://zero-heaven.github.io/lyricmp3player/mp3/Simon & Garfunkel - Scarborough Fair.mp3",
    lrcRaw: `[ti: Scarborough Fair]
[ar: Simon and Garfunkel]
[al: Parsley, Sage, Rosemary and Thyme]
[by: Freedom of Motherland]
[re: 正義必勝]

[00:00.00]Scarborough Fair (1966) - Paul Simon and Garfunkel  (Bilingual Lrc)

[00:10.12]你們正要去史卡博羅市集嗎?
[00:10.12]Are you going to Scarborough Fair
[00:17.53]荷蘭芹、鼠尾草、迷迭香和百里香
[00:17.53]Parsley, sage, rosemary and thyme
[00:26.15]請記得代我問候住在那裡的一個人
[00:26.15]Remember me to one who lives there
[00:33.83]他曾是我的真情摯愛
[00:33.83]She was once a true love of mine
[00:43.46]跟他說為我縫件白亞麻襯衫
[00:43.46]Tell her to make me a cambric shirt
[00:50.96]荷蘭芹、鼠尾草、迷迭香和百里香
[00:50.96]Parsley, sage, rosemary and thyme
[00:59.77]不用縫線也沒有針工
[00:59.77]Without no seams nor needle work
[01:07.20]那麼他將會是我的真情摯愛
[01:07.20]Then she'll be a true love of mine
[01:17.04]跟他說為我找一畝地
[01:17.04]Tell her to find me an acre of land
[01:24.27]荷蘭芹、鼠尾草、迷迭香和百里香
[01:24.27]Parsley, sage, rosemary and thyme
[01:33.38]在海水與淺灘之間
[01:33.38]Between salt water and the sea strands
[01:41.04]那麼他將會是我的真情摯愛
[01:41.04]Then she'll be a true love of mine
[01:50.80]要他用皮製的鐮刀收割
[01:50.80]Tell her to reap it with a sickle of leather
[01:57.87]荷蘭芹、鼠尾草、迷迭香和百里香
[01:57.87]Parsley, sage, rosemary and thyme
[02:06.34]用石南草捆紮成束
[02:06.34]And gather it all in a bunch of heather
[02:14.62]那麼他將會是我的真情摯愛
[02:14.62]Then she'll be a true love of mine
[02:24.40]你們正要去史卡博羅市集嗎？
[02:24.40]Are you going to Scarborough Fair
[02:32.20]荷蘭芹、鼠尾草、迷迭香和百里香
[02:32.20]Parsley, sage, rosemary and thyme
[02:41.40]請記得代我問候住在那裡的一個人
[02:41.40]Remember me to one who lives there
[02:48.82]他曾是我的真情摯愛
[02:48.82]She was once a true love of mine` 
  },
  {
    id: "song-36",
    title: "The Sound of Silence",
    artist: "Simon & Garfunkel",
    album: "Wednesday Morning, 3 A.M.",
    cover: "https://zero-heaven.github.io/lyricmp3player/mp3/Simon & Garfunkel - The Sound of Silence.jpg",
    audioUrl: "https://zero-heaven.github.io/lyricmp3player/mp3/Simon & Garfunkel - The Sound of Silence.mp3",
    lrcRaw: `[ti:The Sound of Silence]
[ar:Simon & Garfunkel]
[al:Wednesday Morning, 3 A.M.]
[au:Paul Simon]
[Motherland]
[re:正義必勝]
[re:正義必勝]

[00:00.00]Simon & Garfunkel - The Sound of Silence  (Bilingual Lrc)

[00:04.070]你好 黑暗 我的老朋友
[00:04.070]Hello darkness my old friend.
[00:07.690]我又來和你交談
[00:07.690]I've come 2 talk with U again.
[00:12.170]因為有一種幻覺正向悄悄地向我襲來
[00:12.170]Because a vision softly creeping.
[00:15.880]在我熟睡的時候留下了它的種子
[00:15.880]Left its seeds while I was sleeping.
[00:21.440]這種幻覺在我的腦海裡生根發芽
[00:21.440]And the vision that was planted in my brain.
[00:27.130]纏繞著我
[00:27.130]Still remains.
[00:31.910]伴隨著寂靜的聲音
[00:31.910]Within the sound of silence !
[00:37.460]在不安的夢幻中我獨自行走
[00:37.460]In restless dreams I walk alone.
[00:42.040]狹窄的鵝卵石街道
[00:42.040]Narrow streets of cobble stone.
[00:46.460]在路燈的光環照耀下
[00:46.460]'Neath the halo of a street lamp.
[00:50.780]我豎起衣領 抵禦嚴寒和潮濕
[00:50.780]I turned my collar 2 the cold & damp.
[00:55.530]一道耀眼的霓虹燈光刺入我的眼睛
[00:55.530]When my eyes were stabbled by the flash of a neon light.
[01:02.630]它劃破夜空
[01:02.630]That split the night.
[01:06.380]觸摸著寂靜的聲音
[01:06.380]And touched the sound of silence.
[01:11.660]A在炫目的燈光下
[01:11.660]And in the naked night I saw.
[01:16.150]我看見成千上萬的人
[01:16.150]Ten thousand people maybe more.
[01:21.300]人們說而不言
[01:21.300]People talking without speaking.
[01:25.350]聽而不聞
[01:25.350]People hearing without listening.
[01:30.000]人們創造歌曲卻唱不出聲來
[01:30.000]People writing songs that voices never share.
[01:37.420]沒有人敢
[01:37.420]And no one dare.
[01:40.780]打擾這寂靜的聲音
[01:40.780]Disturb the sound of silence.
[01:46.890]我說：“傻瓜，難道你不知道
[01:46.890]"Fool" said I "U do not know."
[01:51.080]寂靜如同頑疾滋長”
[01:51.080]"Silence like a cancer grows."
[01:55.360]聽我對你說的有益的話
[01:55.360]"Hear my words that I might teach U."
[02:00.000]拉住我伸給你的手
[02:00.000]"Take my arms that I might reach U."
[02:04.170]但是我的話猶如雨滴飄落
[02:04.170]But my words like silent rain-drops fell.
[02:13.580]在寂靜的水井中迴響
[02:13.580]And echoed in the wells of silence.
[02:21.000]人們(向自己創造的霓虹之神)鞠躬 祈禱
[02:21.000]And the people bow & prayed.
[02:25.280]人們(向自己創造的霓虹之神)鞠躬 祈禱
[02:25.280]To the neon God they made.
[02:29.470]神光中閃射出告誡的語句
[02:29.470]And the sign flash out its warning.
[02:34.020]在字裡行間指明
[02:34.020]In the words that it was forming.
[02:38.300]它告訴人們
[02:38.300]And the sign said "The words of the prophers.
[02:42.020]預言者的話都已寫在地鐵的牆上和房屋的大廳裡
[02:42.020]Are written the subway walls & tenement halls".
[02:49.210]在寂靜的聲音裡低語
[02:49.210]And whispered in the sounds of silence.` 
  },
  {
    id: "song-37",
    title: "The House Of The Rising Sun",
    artist: "The Animals",
    album: "Unknown Album",
    cover: "https://zero-heaven.github.io/lyricmp3player/mp3/The Animals - House of the Rising Sun.jpg",
    audioUrl: "https://zero-heaven.github.io/lyricmp3player/mp3/The Animals - House of the Rising Sun.mp3",
    lrcRaw: `[ti:The House Of The Rising Sun]
[ar:The Animals]
[length:04:30.08]
[Motherland]
[re:正義必勝]
[re:正義必勝]

[00:00.00]The House Of The Rising Sun - The Animals

[00:12.13]There is a house in New Orleans
[00:18.13]They call the Rising Sun
[00:24.38]And it's been the ruin of many a poor boy
[00:30.13]And God I know I'm one
[00:39.87]My mother was a tailor
[00:51.63]She sewed my new blue jeans
[00:57.64]My father was a gamblin' man
[01:04.40]Down in New Orleans
[01:20.13]Now the only thing a gambler needs
[01:25.63]Is a suitcase and trunk
[01:32.37]And the only time he's satisfied
[01:38.63]Is when he's all drunk
[02:24.39]Oh mother tell your children
[02:24.87]Not to do what I have done
[02:25.13]Spend your lives in sin and misery
[02:45.39]In the House of the Rising Sun
[03:00.62]Well, I got one foot on the platform
[03:06.89]The other foot on the train
[03:12.88]I'm goin' back to New Orleans
[03:19.38]To wear that ball and chain
[03:27.90]Well, there is a house in New Orleans
[03:41.38]They call the Rising Sun
[03:46.37]And it's been the ruin of many a poor boy
[03:51.88]And God I know I'm one` 
  },
  {
    id: "song-38",
    title: "The Beatles - Let It Be",
    artist: "Unknown Artist",
    album: "Unknown Album",
    cover: "https://zero-heaven.github.io/lyricmp3player/mp3/The%20Beatles%20-%20Let%20It%20Be.jpg",
    audioUrl: "https://zero-heaven.github.io/lyricmp3player/mp3/The%20Beatles%20-%20Let%20It%20Be.mp3",
    lrcRaw: `[length:04:03.07]
[re:www.megalobiz.com/lrc/maker]
[ve:v1.2.3]
[00:12.40]When I find myself in times of trouble
[00:15.87]Mother Mary comes to me
[00:18.88]Speaking words of wisdom
[00:21.63]Let it be
[00:24.88]And in my hour of darkness
[00:27.87]She is standing right in front of me
[00:31.38]Speaking words of wisdom
[00:34.38]Let it be
[00:37.37]Let it be
[00:39.12]Let it be
[00:40.89]Let it be
[00:42.37]Let it be
[00:44.63]Whisper words of wisdom
[00:47.38]Let it be
[00:50.50]And when the broken hearted
[00:53.75]People living in the world agree
[00:57.76]There will be an answer
[01:00.51]Let it be
[01:04.00]For though they may be parted
[01:07.00]There is still a chance that they will see
[01:11.00]There will be an answer
[01:14.00]Let it be
[01:17.00]Let it be
[01:19.00]Let it be
[01:20.50]Let it be
[01:21.88]Let it be
[01:24.37]There will be an answer
[01:27.12]Let it be
[01:30.88]Let it be
[01:31.98]Let it be
[01:33.48]Let it be
[01:34.99]Let it be
[01:37.73]Whisper words of wisdom
[01:40.98]Let it be
[01:58.23]ADLIB
[02:25.48]Let it be
[02:27.23]Let it be
[02:28.99]Let it be
[02:30.73]Let it be
[02:32.98]Whisper words of wisdom
[02:36.23]Let it be
[02:39.98]And when the night is cloudy
[02:42.99]There is still a light that shines on me
[02:47.48]Shine until tomorrow
[02:50.23]Let it be
[02:53.98]I wake up to the sound of music
[02:57.86]Mother Mary comes to me
[03:01.13]Speaking words of wisdom
[03:04.12]Let it be
[03:07.37]Let it be
[03:09.13]Let it be
[03:10.62]Let it be
[03:12.37]Let it be
[03:14.88]There will be an answer
[03:17.87]Let it be
[03:21.38]Let it be
[03:23.11]Let it be
[03:24.62]Let it be
[03:26.38]Let it be
[03:28.87]There will be an answer
[03:31.87]Let it be
[03:35.38]Let it be
[03:37.12]Let it be
[03:38.63]Let it be
[03:40.62]Let it be
[03:43.12]Whisper words of wisdom
[03:46.13]Let it be` 
  },
  {
    id: "song-39",
    title: "Yesterday",
    artist: "The beatles",
    album: "Unknown Album",
    cover: "https://zero-heaven.github.io/lyricmp3player/mp3/The%20Beatles%20-%20Yesterday.jpg",
    audioUrl: "https://zero-heaven.github.io/lyricmp3player/mp3/The%20Beatles%20-%20Yesterday.mp3",
    lrcRaw: `[ti:Yesterday]
[ar:The beatles]

[00:00.00]Yesterday - The beatles

[00:04.85]Yesterday all my troubles seemed so far away
[00:13.28]Now it looks as though they're here to stay
[00:17.10]Oh I believe in yesterday
[00:22.37]Suddenly
[00:25.60]I'm not half the man I used to be
[00:30.23]There's a shadow hanging over me
[00:34.59]Oh I yesterday came suddenly
[00:39.84]Why she had to go I don't know she wouldn't say
[00:49.86]I said something wrong now I long for yesterday
[00:59.41]Yesterday
[01:02.83]Love was such an easy game to play
[01:07.91]Now I need a place to hide away
[01:11.75]Oh I believe in yesterday
[01:17.26]Why she had to go I don't know she wouldn't say
[01:27.23]I said something wrong now I long for yesterday
[01:37.53]Yesterday love was such an easy game to play
[01:45.36]Now I need a place to hide away
[01:49.06]Oh I believe in yesterday
[01:55.01]Mm mm mm ......` 
  },
  {
    id: "song-40",
    title: "Goodbye to Love",
    artist: "The Carpenter",
    album: "Unknown Album",
    cover: "https://zero-heaven.github.io/lyricmp3player/mp3/The%20Carpenters%20-%20Goodbye%20to%20Love.jpg",
    audioUrl: "https://zero-heaven.github.io/lyricmp3player/mp3/The%20Carpenters%20-%20Goodbye%20to%20Love.mp3",
    lrcRaw: `[ti:Goodbye to Love]
[length:03:59.57]
[ar:The Carpenter]
[by:Sam]
[re:www.megalobiz.com/lrc/maker]
[ve:v1.2.3]
[00:00.00]Goodbye to Love - The Carpenter
[00:00.04]I'll say goodbye to love
[00:05.35]No one ever cared if I should live or die
[00:11.76]Time and time again the chance for love
[00:15.24]has passed me by
[00:17.35]And all I know of love
[00:19.48]is how to live without it
[00:22.67]I just can't seem to find it.
[00:27.72]So I've made my mind up I must live
[00:31.18]my life alone
[00:33.56]And though it's not the easy way
[00:36.21]I guess I've always known
[00:39.15]I'd say goodbye to love.
[00:43.67]There are no tomorrows for this heart of mine
[00:49.80]Surely time will lose these bitter memories
[00:53.78]And I'll find that there is someone to believe in
[00:58.30]And to live for something I could live for.
[01:05.75]All the years of useless search
[01:08.13]Have finally reached an end
[01:11.34]Loneliness and empty days will be my
[01:14.53]only friend
[01:16.66]From this day love is forgotten
[01:19.62]I'll go on as best I can.
[01:49.14]What lies in the future
[01:51.07]is a mystery to us all
[01:54.78]No one can predict the wheel of fortune
[01:58.77]as it falls
[01:59.93]There may come a time when I will see that
[02:03.42]I've been wrong
[02:04.81]But for now this is my song.
[02:09.66]And it's goodbye to love
[02:16.08]I'll say goodbye to love.` 
  },
  {
    id: "song-41",
    title: "Sing",
    artist: "The Carpenters",
    album: "Unknown Album",
    cover: "https://zero-heaven.github.io/lyricmp3player/mp3/The%20Carpenters%20-%20Sing.jpg",
    audioUrl: "https://zero-heaven.github.io/lyricmp3player/mp3/The%20Carpenters%20-%20Sing.mp3",
    lrcRaw: `[ti:Sing]
[ar:The Carpenters]

[00:00.00]Sing - The Carpenters

[00:13.91]Sing, sing a song
[00:19.39]Sing out loud
[00:22.62]Sing out strong
[00:26.94]Sing of good things not bad
[00:33.66]Sing of happy not sad.
[00:40.25]Sing, sing a song
[00:47.19]Make it simple to last
[00:50.17]Your whole life long
[00:54.07]Don't worry that it's not
[00:56.23]Good enough for anyone
[00:59.24]Else to hear
[01:01.73]Just sing, sing a song.
[01:19.51]Sing, sing a song
[01:25.27]Let the world sing along
[01:32.42]Sing of love there could be
[01:38.55]Sing for you and for me.
[01:46.20]Sing, sing a song
[01:53.38]Make it simple to last
[01:56.00]Your whole life long
[01:59.81]Don't worry that it's not
[02:02.40]Good enough for anyone
[02:04.67]Else to hear
[02:07.89]Just sing, sing a song.
[02:21.46]Just sing, sing a song.` 
  },
  {
    id: "song-42",
    title: "This masquerade",
    artist: "The Carpenters",
    album: "Carpenters Collection",
    cover: "https://zero-heaven.github.io/lyricmp3player/mp3/The%20Carpenters%20-%20This%20Masquerade.jpg",
    audioUrl: "https://zero-heaven.github.io/lyricmp3player/mp3/The%20Carpenters%20-%20This%20Masquerade.mp3",
    lrcRaw: `[ti:This masquerade]
[ar:The Carpenters]
[al:Carpenters Collection]
[by:Annie]
[length:04:50]

[00:00.00]The Carpenters
[00:00.00]This masquerade
[00:00.00]Paroles et musique : Leon Russell   1972
[00:00.00] 
[00:23.20]Are we really happy with this lonely game we play,
[00:31.70]Looking for the right words to say ?
[00:40.52]Searching but not finding -- understanding anyway,
[00:48.80]We're lost in this masquerade.
[00:54.87] 
[00:58.13]Both afraid to say we're just too far away
[01:06.55]From being close together from the start.
[01:14.97]We try to talk it over, but the words got in the way
[01:23.07]We're lost inside this lonely game we play.
[01:30.75] 
[01:32.64]Thoughts of leaving disappear each time I see your eyes,
[01:40.50]And no matter how hard I try
[01:49.56]To understand the reason why we carry on this way
[01:57.35]We're lost in this masquerade.
[02:03.12] 
[03:01.78]We try to talk it over, but the words got in the way
[03:09.60]We're lost inside this lonely game we play.
[03:17.54]Thoughts of leaving disappear each time I see your eyes,
[03:26.88]And no matter how hard I try
[03:34.31]To understand the reason why we carry on this way
[03:43.84]We're lost in a masquerade.
[03:52.29]We're lost in a masquerade.
[04:01.59] 
[04:08.42]And we're lost in a masquerade.
[04:13.73]` 
  },
  {
    id: "song-43",
    title: "Top of the world",
    artist: "The Carpenters",
    album: "Now & Then",
    cover: "https://zero-heaven.github.io/lyricmp3player/mp3/The%20Carpenters%20-%20Top%20Of%20The%20World.jpg",
    audioUrl: "https://zero-heaven.github.io/lyricmp3player/mp3/The%20Carpenters%20-%20Top%20Of%20The%20World.mp3",
    lrcRaw: `[ti:Top of the world]
[ar:The Carpenters]
[al:Now & Then]
[by:世界之巔]

[00:00.00]Top Of The World - The Carpenters (1973)

[00:17.37]有種奇妙的感覺迎面而來
[00:17.37]Such a feelin's comin' over me
[00:21.63]所有我見過的東西都非常奇妙
[00:21.63]There is wonder in most everthing I see
[00:27.14]天空萬里情而我眼中閃耀著光芒
[00:27.14]Not a cloud in the sky got the sun in my eyes
[00:32.61]即使是夢我也不會驚訝
[00:32.61]and I won't be surprised if it's a dream

[00:37.92]我所想要這世界的一切
[00:37.92]Everything I want the world to be
[00:42.78]現在對我來說特別的真實
[00:42.78]Is now coming true especially for me
[00:47.88]原因好簡單
[00:47.88]and the reason is clear,
[00:50.61]因為有你在這裡
[00:50.61]It's because you are here
[00:53.49]你是我所見過最接近天堂美夢的人
[00:53.49]You're the nearest thing to heaven that I've seen

[00:57.76]我站在世界之巔，俯瞰萬物
[00:57.76]I'm on the top of the world lookin' down on creation
[01:03.43]我可找到的唯一解釋
[01:03.43]And the only explanation I can find
[01:08.58]是你來了之後
[01:08.58]Is the love that I've found
[01:11.15]帶給我的愛
[01:11.15]ever since you've been around
[01:14.89]你的愛，讓我猶如置身世界之巔的位置
[01:14.89]Your love's put me at the top of the world

[01:24.78]風兒得知我的名字
[01:24.78]Something in the wind has learned my name
[01:29.27]告訴我今後事情將有所改變
[01:29.27]And it's tellin' me that things are not the same
[01:34.48]樹上的綠葉、微風的觸摸
[01:34.48]In the leaves on the trees and the touch of the breeze
[01:39.80]讓我充滿了幸福的愉快感覺
[01:39.80]There's a pleasin' sense of happiness for me

[01:45.40]我的心中只有一個願望
[01:45.40]There is only one wish on my mind
[01:50.04]今天過後，希望我會發現
[01:50.04]When this day is through I hope that I will find
[01:55.21]明天對你和我都是一樣
[01:55.21]that tomorrow will be just the same for you and me
[02:01.00]只要有你在身邊，我就能心想事成
[02:01.00]All I need will be mine if you are here

[02:05.78]我站在世界之巔，俯瞰萬物
[02:05.78]I'm on the top of the world lookin' down on creation
[02:10.90]我可找到的唯一解釋
[02:10.90]And the only explanation I can find
[02:16.00]是你來了之後
[02:16.00]Is the love that I've found
[02:18.61]帶給我的愛
[02:18.61]ever since you've been around
[02:22.00]你的愛，讓我猶如置身世界之巔的位置
[02:22.00]Your love's put me at the top of the world

[02:26.69]我站在世界之巔，俯瞰萬物
[02:26.69]I'm on the top of the world lookin' down on creation
[02:31.62]我可找到的唯一解釋
[02:31.62]And the only explanation I can find
[02:36.40]是你來了之後
[02:36.40]Is the love that I've found
[02:39.28]帶給我的愛
[02:39.28]ever since you've been around
[02:42.59]你的愛，讓我猶如置身世界之巔的位置
[02:42.59]Your love's put me at the top of the world` 
  },
  {
    id: "song-44",
    title: "Yesterday Once More",
    artist: "The Carpenters",
    album: "Now & Then",
    cover: "https://zero-heaven.github.io/lyricmp3player/mp3/The Carpenters - Yesterday Once More.jpg",
    audioUrl: "https://zero-heaven.github.io/lyricmp3player/mp3/The Carpenters - Yesterday Once More.mp3",
    lrcRaw: `[ti:Yesterday Once More]
[ar:The Carpenters]
[al:Now & Then]
[au:John Bettis; Richard Lynn Carpenter]
[length:03:59.70]
[by:Not2Late]
[re:www.megalobiz.com/lrc/maker]
[ve:v1.2.3]
[00:00.10]《昨日重現》
[00:00.10]Yesterday Once More - The Carpenters (1973)
[00:01.57]年輕時候
[00:01.57]When I was young,
[00:03.31]我喜歡聽收音機
[00:03.31]I'd listen to the radio
[00:08.00]等待我最愛的歌
[00:08.00]Waiting for my favorite songs
[00:13.80]一邊聽來一邊唱
[00:13.80]When they played I'd sing along
[00:18.50]心情多歡暢
[00:18.50]It make me smile
[00:25.10]舊日時光多快樂
[00:25.10]Those were such happy times
[00:27.89]轉瞬已消逝
[00:27.89]And not so long ago
[00:31.05]不知失落在何處
[00:31.05]How I wondered where they'd gone
[00:36.22]而如今它們又重現
[00:36.22]But they're back again
[00:39.67]像失散的舊友重逢
[00:39.67]Just like a long lost friend
[00:42.54]我至愛的老歌
[00:42.54]All the songs I love so well
[00:47.71]每段旋律
[00:47.71]Every sha-la-la-la,
[00:51.45]每個音符
[00:51.45]Every Wo-o-wo-o
[00:54.32]仍然動人
[00:54.32]Still shines
[00:59.77]每個迷人的音節
[00:59.77]Every shing-a-ling-a-ling
[01:02.65]重新又響起
[01:02.65]That they're starting to sing,
[01:05.51]感覺多美妙
[01:05.51]so fine

[01:11.17]唱到那段往事
[01:11.17]When they get to the part
[01:13.76]他把她的心傷透
[01:13.76]Where he's breaking her heart
[01:16.91]淚水不禁奪眶而出
[01:16.91]It can really make me cry
[01:21.22]就像從前一樣
[01:21.22]Just like before
[01:27.45]彷彿昨日重現
[01:27.45]It's yesterday once more
[01:30.03](無比惆悵)
[01:30.03](Shoobie-doo, lang, lang)
[01:35.77](無比惆悵)
[01:35.77](Shoobie-doo, lang, lang)

[01:40.08]回首當年情景
[01:40.08]Looking back on how it was
[01:43.52]往事歷歷
[01:43.52]in years gone by
[01:45.82]好時光一去不復
[01:45.82]And the good times that I had
[01:51.56]怎不叫人心傷
[01:51.56]Makes today seem rather sad
[01:56.15]一切都已不再
[01:56.15]So much has changed
[02:03.15]我願唱給他們聽
[02:03.15]It was songs of love
[02:05.74]那一首情歌
[02:05.74]That I would sing to them
[02:08.82]我要記住每一句歌詞
[02:08.82]And I'd memorize each word
[02:13.99]那些熟悉的旋律
[02:13.99]Those old melodies
[02:17.44]依舊打動我的心坎
[02:17.44]still sound so good to me
[02:20.30]時光阻隔 幻化無蹤
[02:20.30]As they melt the years away

[02:25.46]每段旋律
[02:25.46]Every sha-la-la-la,
[02:28.91]每個音符
[02:28.91]Every Wo-o-wo-o,
[02:31.77]依然動人
[02:31.77]still shines
[02:33.21](只有老歌，但好東西)
[02:33.21](Only oldies, but goodies)

[02:37.43]每個迷人的音節
[02:37.43]Every shing-a-ling-a-ling
[02:40.31]重新又響起
[02:40.31]That they're starting to sing
[02:42.89]感覺多美妙
[02:42.89]So fine
[02:48.55]一切最美的回憶
[02:48.55]All my best memorize,
[02:51.42]清晰重現眼前
[02:51.42]come back clearly to me
[02:54.29]有些甚至叫我落淚
[02:54.29]Some can even make me cry
[02:58.59]就像從前一樣
[02:58.59]Just like before
[03:04.82]彷彿昨日重現
[03:04.82]It's yesterday once more
[03:07.39](Shoobie-doo, lang, lang)

[03:11.13]每段旋律
[03:11.13]Every Sha-la-la-la,
[03:14.29]每個音符
[03:14.29]Every Wo-o-wo-o
[03:17.16]依然動人
[03:17.16]still shines
[03:22.61]每個迷人的音節
[03:22.61]Every shing-a-ling-a-ling
[03:25.55]重新又響起
[03:25.55]That they're starting to sing
[03:28.64]如此美好
[03:28.64]So fine

[03:33.43]每段旋律
[03:33.43]Every Sha-la-la-la,
[03:36.88]每個音符
[03:36.88]Every Wo-o-wo-o
[03:39.74]依然動人
[03:39.74]still shines
[03:45.19]每個迷人的音節
[03:45.19]Every shing-a-ling-a-ling
[03:48.35]重新又響起
[03:48.35]That they're starting to sing
[03:51.22]如此美好
[03:51.22]So fine` 
  },
  {
    id: "song-45",
    title: "Dreams",
    artist: "The Cranberries",
    album: "Everybody Else Is Doing It, So Why Can´t We?",
    cover: "https://zero-heaven.github.io/lyricmp3player/mp3/The Cranberries - Dreams.jpg",
    audioUrl: "https://zero-heaven.github.io/lyricmp3player/mp3/The Cranberries - Dreams.mp3",
    lrcRaw: `[ti:Dreams]
[ar:The Cranberries]
[al:Everybody Else Is Doing It, So Why Can´t We?]
[Motherland]
[re:正義必勝]
[re:正義必勝]

[00:00.00]Dreams - The Cranberries  (Bilingual Lrc)

[00:33.53]Oh, my life is changing everyday, 生活每天都在變 
[00:41.47]In every possible way. 變化莫測，各個方面

[00:48.92]And oh, my dreams, 然而我的夢想
[00:52.50]it's never quiet as it seems, 看來不似從前
[00:55.32]Never quiet as it seems. 不似從前

[01:01.30]I know I've felt like this before, 以往也曾有同感
[01:06.63]but now I'm feeling it even more, 現在感覺更強烈
[01:11.22]Because it came from you. 因為它來自你

[01:18.04]And then I open up and see 我敞開心扉，睜大眼睛
[01:20.42]the person falling here is me, 發現自己不知所措
[01:25.60]A different way to be. 究竟何去何從 ......

[01:32.85]Ah, la da ah...
[01:38.64]La...
[01:49.50]I want more imposible to ignore, 我想知道更多,不能裝作不知道
[01:55.31]Imposible to ignore. 裝作不知道

[02:03.92]And they'll come true, 夢想終究會實現
[02:07.03]impossible not to do, 不會迷惘永遠
[02:10.58]Impossible not to do. 迷惘永遠

[02:17.94]And now I tell you openly, 我要大聲對你說 
[02:21.32]you have my heart so don't hurt me. 心裡只有你，請不要傷害我
[02:25.82]You're what I couldn't find. 我已不知所措

[02:31.83]A totally amazing mind, 自己都覺得驚鄂
[02:36.18]so understanding and so kind; 如此溫柔可人
[02:40.81]You're everything to me. 你就是我的全部

[02:48.31]Oh, my life, 生活每天都在變
[02:52.02]Is changing every day,
[02:56.09]In every possible way. 變化莫測，各個方面

[03:02.41]And oh, my dreams, 然而我的夢想
[03:06.78]It's never quiet as it seems, 看來不似從前
[03:10.54]'Cause you're a dream to me, 只因你，踏入我的夢裡
[03:13.34]Dream to me. 踏入我的夢裡

[03:31.79]Ah, da, da da da, da, la...
[03:45.89]Ah, da, da da da, da, la...
[04:00.68]Ah, da, da da da, da, la...
[04:15.26]Ah, da, da da da, da, la...` 
  },
  {
    id: "song-46",
    title: "More Than I Can Say",
    artist: "The Crickets",
    album: "In Style With the Crickets (1960)",
    cover: "https://zero-heaven.github.io/lyricmp3player/mp3/The Crickets - More Than I Can Say.jpg",
    audioUrl: "https://zero-heaven.github.io/lyricmp3player/mp3/The Crickets - More Than I Can Say.mp3",
    lrcRaw: `[ar:The Crickets]
[al:In Style With the Crickets (1960)]
[ti:More Than I Can Say]
[au:Sonny Curtis, Jerry Allison]
[length:02:45.09]
[Motherland]
[re:���q����]
[re:www.megalobiz.com/lrc/maker]
[ve:v1.2.3]

[00:00.00]More Than I Can Say - The Crickets
[00:05.00]
[00:06.52]Wow wow yea yea
[00:11.02]I love you more than I can say (yea yea)
[00:15.52]I'll love you twice as much tomorrow (wow wow)
[00:20.27]Love you more than I can say (yea yea)
[00:25.21]Wow wow yea yea
[00:29.21]I miss you every single day
[00:33.72]Why must my life be filled with sorrow (wow wow)
[00:38.22]I miss you more than I can say (yea yea)
[00:42.71]Don't you know I need you so (wow wow)
[00:47.22]Tell me please I gotta know (wow wow)
[00:51.72]Do you mean to make me cry
[00:56.21]Am I just another guy
[01:00.73]Wow wow yea yea
[01:04.98]I love you more than I can say
[01:09.46]I'll love you twice as much tomorrow (wow wow)
[01:13.96]Love you more than I can say (yea yea)
[01:27.46]I'll love you twice as much tomorrow,(wow wow)
[01:31.97]I love you more than I can say (yea yea)
[01:45.48]Why must my life be filled with sorrow (wow wow)
[01:50.24]I miss you more than I can say (yea yea)
[01:54.96]Don't you know I need you so (wow wow)
[01:59.21]Tell me please I gotta know (wow wow)
[02:03.72]Do you mean to make me cry
[02:08.22]Am I just another guy
[02:12.88]Wow wow yea yea
[02:17.29]I love you more than I can say
[02:21.55]I'll love you twice as much tomorrow (wow wow)
[02:26.31]Love you more than I can say (yea yea)
[02:31.05]Wow wow yea yea` 
  },
  {
    id: "song-47",
    title: "Hotel California",
    artist: "The Eagles",
    album: "Hotel California",
    cover: "https://zero-heaven.github.io/lyricmp3player/mp3/The Eagles - Hotel California.jpg",
    audioUrl: "https://zero-heaven.github.io/lyricmp3player/mp3/The Eagles - Hotel California.mp3",
    lrcRaw: `[ar: The Eagles]
[al: Hotel California]
[ti: Hotel California]

[re: LRC Editor - Android app]
[ve: Version 3.2.6]

[00:00.20]Hotel California - The Eagles  (Bilingual Lrc)
[00:52.59]行駛在昏黑的荒漠公路上,涼風吹過我的頭髮
[00:52.59]On a dark desert highway, cool wind in my hair
[00:58.84]溫馨的大麻香，瀰漫在空氣中
[00:58.84]Warm smell of colitas, rising up through the air
[01:05.50]抬頭遙望遠方，我看到微弱的燈光
[01:05.50]Up ahead in the distance, I saw a shimmering light
[01:11.99]我的頭越來越沉,視線也變得模糊
[01:11.99]My head grew heavy and my sight grew dim
[01:14.99]我不得不停下來過夜
[01:14.99]I had to stop for the night.
[01:18.74]她站在門口那兒招呼我
[01:18.74]There she stood in the doorway;
[01:21.74]我聽到遠處教堂的鐘聲
[01:21.74]I heard the mission bell
[01:25.24]我在心裡對自己說
[01:25.24]And I was thinking to myself
[01:27.49]這裡可能是天堂也可能是地獄
[01:27.49]'This could be heaven or this could be Hell'
[01:32.39]然後她點燃了蠟燭，給我引路
[01:32.39]Then she lit up a candle and she showed me the way
[01:38.85]沿著走廊傳來陣陣說話聲
[01:38.85]There were voices down the corridor,
[01:42.19]我想我聽到他們在說...
[01:42.19]I thought I heard them say
[01:45.85]歡迎來到加州旅館
[01:45.85]Welcome to the Hotel California
[01:51.14]如此美麗的地方
[01:51.14]Such a lovely place (such a lovely place)
[01:54.55]多麼可愛的的面容
[01:54.55]Such a lovely face.
[01:57.64]加州旅館有充足的房間
[01:57.64]Plenty of room at the Hotel California
[02:04.15]一年的任何時候,你都能在這找到房洹
[02:04.15]Any time of year (any time of year) you can find it here
[02:11.79]她的心為珠寶所扭曲,她擁有豪華奔馳車
[02:11.79]Her mind is Tiffany-twisted, she got the Mercedes bends
[02:18.10]她有許多漂亮的小伙子,她稱之為朋友
[02:18.10]She got a lot of pretty, pretty boys, that she calls friends
[02:24.45]他們在庭院裡翩翩起舞，夏日的香汗伶俐
[02:24.45]How they dance in the courtyard, sweet summer sweat
[02:30.69]有些舞是為了回憶,而有些舞是為了忘卻
[02:30.69]Some dance to remember, some dance to forget
[02:37.40]於是我叫來領班
[02:37.40]So I called up the Captain,
[02:41.24]請給我來些酒
[02:41.24]'Please bring me my wine'
[02:43.64]他說我們這不供應列酒,從1969年起。
[02:43.64]He said, 'we haven't had that spirit here since nineteen sixty-nine'
[02:51.14]遠處仍然傳來他們的話語
[02:51.14]And still those voices are calling from far away,
[02:57.49]在半夜把你吵醒
[02:57.49]Wake you up in the middle of the night
[03:00.59]只聽到他們在說...
[03:00.59]Just to hear them say"
[03:03.89]歡迎來到加州旅館
[03:03.89]Welcome to the Hotel California
[03:09.54]如此美麗的地方
[03:09.54]Such a lovely place (such a lovely place)
[03:12.94]如此美麗的地方
[03:12.94]Such a lovely face.
[03:16.09]他們在加州旅館盡情狂歡。
[03:16.09]They livin' it up at the Hotel California
[03:21.94]好得令人吃驚,使你有來到這的藉口
[03:21.94]What a nice surprise (what a nice surprise), bring your alibis
[03:28.84]天花板上鑲嵌著的鏡子
[03:28.84]Mirrors on the ceiling,
[03:32.25]冰鎮著的粉色香檳
[03:32.25]The pink champagne on ice
[03:34.85]她說我們都是這的囚徒 ,但是是我們自願的。
[03:34.85]And she said, 'we are all just prisoners here, of our own device'
[03:41.95]在主人的臥房裡
[03:41.95]And in the master's chambers,
[03:45.10]他們為宴會聚在一起
[03:45.10]They gathered for the feast
[03:48.19]他們彼此間用鋼刀相互砍殺
[03:48.19]They stab it with their steely knives,
[03:50.78]但他們甚至不能殺死野獸！
[03:50.78]But they just can't kill the beast
[03:55.39]我所記得的最後一件事
[03:55.39]Last thing I remember, I was
[03:59.49]是我跑向門口
[03:59.49]Running for the door
[04:02.29]我必須找到來時的路，回到我過去的地方
[04:02.29]I had to find the passage back to the place I was before
[04:08.44]守夜人說放寬心
[04:08.44]'Relax' said the night man,
[04:10.84]我們只是照常接待
[04:10.84]'We are programmed to receive.
[04:14.95]你想什麼時候結帳都可以
[04:14.95]You can check out any time you like,
[04:17.85]但你永遠無法離去！
[04:17.85]But you can never leave!'` 
  },
  {
    id: "song-48",
    title: "All I Have To Do Is Dream",
    artist: "The Everly Brothers",
    album: "Unknown Album",
    cover: "https://zero-heaven.github.io/lyricmp3player/mp3/The Everly Brothers - All I Have To Do Is Dream.jpg",
    audioUrl: "https://zero-heaven.github.io/lyricmp3player/mp3/The Everly Brothers - All I Have To Do Is Dream.mp3",
    lrcRaw: `[ti:All I Have To Do Is Dream]
[ar:The Everly Brothers]
[au:Boudleaux Bryant]
[length:02:20.14]
[Motherland]
[re:正義必勝]
[re:正義必勝]

[00:00.00]All I Have To Do Is Dream - The Everly Brothers

[00:02.53]Dream, dream, dream, dream
[00:07.83]Dream, dream, dream, dream
[00:12.32]When I want you in my arms
[00:16.80]When I want you and all your charms
[00:21.28]Whenever I want you, all I have to do is
[00:26.33]Dream, dream, dream, dream
[00:30.46]When I feel blue in the night
[00:35.22]And I need you to hold me tight
[00:39.71]Whenever I want you, all I have to do is
[00:44.75]Dream
[00:49.24]I can make you mine, taste your lips of wine
[00:53.99]Anytime night or day
[00:58.19]Only trouble is, gee whiz
[01:02.96]I'm dreamin' my life away
[01:07.13]I need you so that I could die
[01:12.17]I love you so and that is why
[01:16.66]Whenever I want you, all I have to do is
[01:21.70]Dream, dream, dream, dream
[01:25.91]Dream
[01:30.39]I can make you mine, taste your lips of wine
[01:35.15]Anytime night or day
[01:39.92]Only trouble is, gee whiz
[01:44.41]I'm dreamin' my life away
[01:48.61]I need you so that I could die
[01:53.37]I love you so and that is why
[01:58.13]Whenever I want you, all I have to do is
[02:02.90]Dream, dream, dream, dream
[02:07.65]Dream, dream, dream, dream` 
  },
  {
    id: "song-49",
    title: "The Knack - My Sharona",
    artist: "Unknown Artist",
    album: "Unknown Album",
    cover: "https://zero-heaven.github.io/lyricmp3player/mp3/The Knack - My Sharona.jpg",
    audioUrl: "https://zero-heaven.github.io/lyricmp3player/mp3/The Knack - My Sharona.mp3",
    lrcRaw: `[00:00.00]My Sharona
[00:13.19]The Knack
[00:18.36]
[00:19.70]Ooh, my little pretty one, my pretty one
[00:22.97]When you gonna give me some time, Sharona
[00:26.21]Ooh, you make my motor run, my motor run
[00:29.49]Got it comin' off o' the line, Sharona
[00:32.68]
[00:32.72]Never gonna stop, give it up, such a dirty mind
[00:36.01]I always get it up for the touch of the younger kind
[00:39.46]My, my, my, aye-aye, whoa!
[00:43.69]M-m-m-my Sharona
[00:45.73]
[00:48.92]Come a little closer, huh, a-will ya, huh?
[00:52.17]Close enough to look in my eyes, Sharona
[00:55.51]Keepin' it a mystery, it gets to me
[00:58.74]Runnin' down the length of my thigh, Sharona
[01:01.85]
[01:02.04]Never gonna stop, give it up, such a dirty mind
[01:05.48]I always get it up for the touch of the younger kind
[01:08.85]My, my, my, aye-aye, whoa!
[01:13.02]M-m-m-my Sharona
[01:16.27]M-m-m-my Sharona
[01:18.52]
[01:57.02]When you gonna give to me, a gift to me
[02:00.36]Is it just a matter of time, Sharona?
[02:03.57]Is it d-d-destiny, d-destiny
[02:06.81]Or is it just a game in my mind, Sharona?
[02:10.06]
[02:10.24]Never gonna stop, give it up, such a dirty mind
[02:13.42]I always get it up for the touch of the younger kind
[02:16.90]My, my, my, aye-aye, whoa!
[02:21.92]M-m-m-m-m-m-m-my, my, my, aye-aye, whoa!
[02:27.70]M-m-m-my Sharona
[02:30.90]M-m-m-my Sharona
[02:34.07]M-m-m-my Sharona
[02:37.32]M-m-m-my Sharona
[02:39.69]
[04:30.10]Ooooooo-ohhh, my Sharona
[04:37.10]Ooooooo-ohhh, my Sharona
[04:43.31]Ooooooo-ohhh, my Sharona` 
  },
  {
    id: "song-50",
    title: "Que Sera, Sera (Whatever Will Be, Will Be)",
    artist: "The Pixies",
    album: "Que Sera, Sera (Whatever Will Be, Will Be)",
    cover: "https://zero-heaven.github.io/lyricmp3player/mp3/The Pixies - Que Sera Sera.jpg",
    audioUrl: "https://zero-heaven.github.io/lyricmp3player/mp3/The Pixies - Que Sera Sera.mp3",
    lrcRaw: `[ar:The Pixies]
[al:Que Sera, Sera (Whatever Will Be, Will Be)]
[ti:Que Sera, Sera (Whatever Will Be, Will Be)]
[au:Raymond B. Evans / Jay Livingston]
[length:03:00.81]
[by:Three Minutes Ed]
[re:www.megalobiz.com/lrc/maker]
[ve:v1.2.3]
[00:11.78]When I was just a little boy當我還是個小孩
[00:17.24]I asked my father, "What will I be?我問父親:"我將來會變成什麼樣子呢?"
[00:23.55]Will I be handsome, will I be rich?""我會變得漂亮嗎?" "我會變得富有嗎?"
[00:28.43]Here's what he said to me她這麼回答我

[00:32.66]"Que sera, sera順著命運的安排
[00:36.68]Whatever will be, will be該來的總會到來
[00:41.84]The future's not ours to see我們無法預知未來
[00:46.43]Que sera, sera順著命運的安排
[00:51.31]What will be, will be"該來的總會到來

[01:03.06]When I grew up and fell in love當我長大後墜入愛河
[01:07.94]I asked my sweetheart, "What lies ahead?我問心上人，未來會如何
[01:14.26]Will we have rainbows day after day?"我們將會度過美好歲月嗎?
[01:19.14]Here's what my sweetheart said他這麼告訴我

[01:23.15]"Que sera, sera順著命運的安排
[01:27.45]Whatever will be, will be該來的總會到來
[01:32.33]The future's not ours to see我們無法預知未來
[01:36.63]Que sera, sera順著命運的安排
[01:41.80]What will be, will be"該來的總會到來

[01:53.57]Now I have children of my own現在我有自己的孩子
[01:58.45]They ask their father, "What will I be?他們問我:"我長大後會成為怎樣的人"
[02:04.47]Will I be pretty, will I be rich?""我會變得帥氣嗎?" "我會變得富有嗎?"
[02:09.64]I tell them tenderly我溫柔地回應他們

[02:13.65]"Que sera, sera順著命運的安排
[02:17.95]Whatever will be, will be該來的總會到來
[02:22.83]The future's not ours to see我們無法預知未來
[02:27.14]Que sera, sera順著命運的安排
[02:32.31]What will be, will be"該來的總會到來
[02:37.19]Que sera, sera順著命運的安排` 
  },
  {
    id: "song-51",
    title: "Only You",
    artist: "The Platters",
    album: "The Platters",
    cover: "https://zero-heaven.github.io/lyricmp3player/mp3/The Platters - Only you.jpg",
    audioUrl: "https://zero-heaven.github.io/lyricmp3player/mp3/The Platters - Only you.mp3",
    lrcRaw: `[ar:The Platters]
[al:The Platters]
[ti:Only You]
[au:Ande Rand / Buck Ram]
[length:02:34.61]
[by:Nothings' Mine 1956]
[re:www.megalobiz.com/lrc/maker]
[ve:v1.2.3]
[00:03.82]Only you can make all this world seem right
[00:16.06]Only you can make the darkness bright
[00:27.83]Only you and you alone can thrill me like you do
[00:40.73]And fill my heart with love for only you
[00:51.64]Only you can make all this change in me
[01:03.68]For it's true, you are my destiny
[01:15.44]When you hold my hand, I understand the magic that you do
[01:27.49]You're my dream come true, my one and only you
[01:38.97]Only you can make all this change in me
[01:51.01]For it's true, you are my destiny
[02:02.77]When you hold my hand, I understand the magic that you do
[02:14.83]You're my dream come true, my one and only you
[02:26.29](One and only you)` 
  },
  {
    id: "song-52",
    title: "Smoke Gets In Your Eyes",
    artist: "The Platters",
    album: "Unknown Album",
    cover: "https://zero-heaven.github.io/lyricmp3player/mp3/The Platters - Smoke Gets In Your Eyes.jpg",
    audioUrl: "https://zero-heaven.github.io/lyricmp3player/mp3/The Platters - Smoke Gets In Your Eyes.mp3",
    lrcRaw: `[ti:Smoke Gets In Your Eyes]
[ar:The Platters]
[Motherland]
[re:正義必勝]
[re:正義必勝]


[00:00.00]Smoke Gets In Your Eyes - The Platters

[00:54.50]They asked me how I knew my true love was true. Oh,
[01:08.50]I of course replied
[01:12.50]"something here inside cannot be denied."
[01:27.50]They said "someday you'll find all who love are blind."
[01:37.50]Oh,When your heart's on fire,
[01:46.50]you must realize smoke gets in your eyes
[02:02.50]So I chaffed them
[02:06.50]and I gaily laughed to think they could doubt my love.
[02:18.50]Yet today my love has flown away, I am without my love.
[02:35.50]Now laughing friends deride tears I cannot hide. Oh,
[02:49.50]So I smile and say
[02:54.50]"when a lovely flame dies, smoke gets in your eyes!"
[03:05.50]Smoke gets in your eyes
[03:09.50]Smoke gets in your eyes` 
  },
  {
    id: "song-53",
    title: "Unchained Melody",
    artist: "The Righteous Brothers",
    album: "Just Once in My Life",
    cover: "https://zero-heaven.github.io/lyricmp3player/mp3/The Righteous Brothers - Unchained Melody.jpg",
    audioUrl: "https://zero-heaven.github.io/lyricmp3player/mp3/The Righteous Brothers - Unchained Melody.mp3",
    lrcRaw: `[ti:Unchained Melody]
[ar:The Righteous Brothers]
[al:Just Once in My Life]
[au:Lyricist:Alex North;Composer:Hy Zaret]
[by:Unlimit Love 1965]

[00:00.00]Unchained Melody - The Righteous Brothers 1965(theme of Movie《Ghost》1990)

[00:00.100]Oh, my love, my darling
[00:11.110]I've hungered for your touch
[00:17.995]Alone, lonely time
[00:28.861]And time goes by so slowly
[00:39.823]and time can do so much
[00:46.810]Are you still mine
[00:55.016]I need your love
[01:05.738]I need your love
[01:12.822]God, speed your love to me

[01:27.177]Lonely rivers flow
[01:30.007]to the sea, to the sea
[01:34.503]To the open arms of the sea
[01:41.875]Lonely river sigh, wait for me, 
[01:46.990]wait for me
[01:49.046]I'll be coming home
[01:52.345]Wait for me

[01:56.457]Oh, my love, my darling
[02:07.089]I've hungered <hungered> for your touch
[02:14.528]Alone, lonely time

[02:25.389]And time goes by so slowly
[02:36.521]and time can do so much
[02:43.358]Are you still mine
[02:54.020]I need your love
[03:01.979]God <God>, speed your love, God speed your love to me` 
  },
  {
    id: "song-54",
    title: "Nothing's Gonna Change My Love for You",
    artist: "Westlife",
    album: "The Love Album Deluxe Edition",
    cover: "https://zero-heaven.github.io/lyricmp3player/mp3/Westlife - Nothing's Gonna Change My Love for You.jpg",
    audioUrl: "https://zero-heaven.github.io/lyricmp3player/mp3/Westlife - Nothing's Gonna Change My Love for You.mp3",
    lrcRaw: `[ti:Nothing's Gonna Change My Love for You]
[ar:Westlife]
[al:The Love Album Deluxe Edition]

[00:00.00]Nothing's Gonna Change My Love for You - Westlife

[00:13.50]If I had to live my life without you near me
[00:18.50]The days would all be empty
[00:23.50]The nights would seem so long
[00:26.50]With you I see forever oh so clearly
[00:31.50]I might have been in love before
[00:36.50]But it never felt this strong
[00:39.50]Our dreams are young and we both know
[00:43.50]They'll take us where we want to go
[00:46.50]Hold me now, touch me now
[00:50.50]I don't want to live without you
[00:54.50]Nothing's gonna change my love for you
[00:58.50]You ought to know by now How much I love you
[01:02.50]One thing you can be sure of
[01:05.50]I'll never ask for more than your love
[01:08.50]Nothing's gonna change my love for you
[01:11.50]You ought to know by now how much I love you
[01:15.50]The world may change my whole life through but
[01:18.50]Nothing gonna change my love for you
[01:25.50]If the road ahead is not so easy
[01:30.50]Our love will lead a way for us
[01:34.50]Like a guiding star
[01:38.50]I'll be there for you if you should need me
[01:43.50]You don't have to change a thing
[01:48.50]I love you just the way you are
[01:51.50]So come with me and share the view
[01:54.50]I'll help you see forever too
[01:58.50]Hold me now, touch me now
[02:01.50]I don't want to live without you
[02:06.50]Nothing's gonna change my love for you
[02:10.50]You ought to know by now How much I love you
[02:14.50]One thing you can be sure of
[02:17.00]I'll never ask for more than your love
[02:20.50]Nothing's gonna change my love for you
[02:24.00]You ought to know by now how much I love you
[02:27.00]The world may change my whole life through but
[02:30.00]Nothing gonna change my love for you
[02:34.00]Nothing's gonna change my love for you
[02:37.00]You ought to know by now how much I love you
[02:41.00]The world may change my whole life through but
[02:43.50]Nothing gonna change my love for you
[03:00.50]Nothing's gonna change my love for you
[03:03.50]You ought to know by now How much I love you
[03:07.50]One thing you can be sure of
[03:11.00]I'll never ask for more than your love
[03:13.50]Nothing's gonna change my love for you
[03:17.00]You ought to know by now how much I love you
[03:20.00]The world may change my whole life through but
[03:24.00]Nothing gonna change my love for you
[03:27.00]Nothing's gonna change my love for you
[03:30.00]You ought to know by now How much I love you
[03:37.00]I'll never ask for more than your love` 
  },
  {
    id: "song-55",
    title: "Careless whisper",
    artist: "Wham!",
    album: "The Age of Innocence",
    cover: "https://zero-heaven.github.io/lyricmp3player/mp3/Wham - Careless Whisper.jpg",
    audioUrl: "https://zero-heaven.github.io/lyricmp3player/mp3/Wham - Careless Whisper.mp3",
    lrcRaw: `[ti: Careless whisper]
[ar: Wham!]
[al: The Age of Innocence]
[by: Freedom of Motherland]
[re: 正義必勝]

[00:00.00]Careless Whisper - Wham!(George Michael)  (Bilingual Lrc)
[00:13.81]Oh oh oh oh oh
[00:25.91]我感到很迷惘（心情十分複雜）
[00:25.91]I feel so unsure
[00:32.33]當我牽著你的手步入舞池
[00:32.33]As I take your hand and lead you to the dance floor
[00:39.34]當音樂戛然而止,你的眼眸閃爍著異樣的目光
[00:39.34]As the music dies, something in your eyes
[00:44.90]深刻地感受到銀幕上充滿悲情的離別
[00:44.90]Calls to mind a silver screen And all its sad good-byes
[00:51.93]我再也不跳舞了
[00:51.93]I'm never gonna dance again
[00:54.41]罪惡感使雙腳跟丟節拍
[00:54.41]Guilty feet have got no rhythm
[00:57.96]雖然掩飾自己非常容易
[00:57.96]Though it's easy to pretend
[01:00.60]但我知道妳不是如此地愚蠢
[01:00.60]I know you're not a fool
[01:03.86]早知道應該向妳坦承
[01:03.86]Should've known better than to cheat a friend
[01:06.92]才不至於落這種下場
[01:06.92]and waste the chance that I'd been given
[01:10.68]因此我無法再與妳共舞
[01:10.68]So I'll never gonna dance again
[01:13.29]像從前一樣
[01:13.29]The way I danced with you
[01:18.88]Oh oh yeah
[01:29.18]就算是時間也無法填補
[01:29.18]Time can never mend
[01:35.34]妳那無心耳語所帶來的空虛
[01:35.34]the careless whispers of a good friend
[01:42.16]對我的心來講
[01:42.16]To the heart and mind,
[01:45.16]無知反而是種救贖
[01:45.16]ignorance is kind
[01:47.85]光明的真相裡找不到半點慰藉
[01:47.85]There's no comfort in the truth
[01:50.99]只剰痛苦與我相隨
[01:50.99]Pain is all you'll find
[01:54.80]我將不再踏出我的步伐
[01:54.80]I'm never gonna dance again
[01:57.21]被枷鎖捆住的雙腳失去了平衡
[01:57.21]Guilty feet have got no rhythm 
[02:01.05]即使偽裝自己並不難
[02:01.05]Though it's easy to pretend
[02:03.63]但仍逃不過妳銳利的雙眸
[02:03.63]I know you're not a fool
[02:06.66]要是早點向妳說實話
[02:06.66]I Should've known better than to cheat a friend 
[02:09.75]事情就不會演變成這樣了
[02:09.75]And waste the chance that I've been given
[02:13.40]所以我將再也 再也無法
[02:13.40]So I'll never gonna dance again
[02:16.09]和妳沉浸在共舞的歡愉中
[02:16.09]The way I danced with you oh oh
[02:24.50]（絕不能沒有妳的愛）
[02:24.50](Never without your love)
[02:44.17]今晚的音樂似乎特別強烈
[02:44.17]Tonight the music seems so loud
[02:47.75]希望能遠離吵雜的人群與妳獨處
[02:47.75]I wish that we could lose this crowd
[02:51.02]這樣也許比較適合
[02:51.02]Maybe it's better this way
[02:54.18]我們將用彼此的話語傷透對方的心
[02:54.18]We'd hurt each other with the things we'd want to say
[02:57.29]我們原本能相處的很美好
[02:57.29]We could have been so good together
[03:00.40]我們原本能讓那一刻成為永恆
[03:00.40]We could have lived this dance forever
[03:03.64]如今只剰我一人站在空蕩的舞池裡
[03:03.64]But no one's gonna dance with me
[03:08.65]請妳別離開我
[03:08.65]Please stay
[03:10.77]我不打算再跳舞了
[03:10.77]And I'm never gonna dance again
[03:13.22]墮落使我的踏出的步伐沒洔站穩
[03:13.22]Guilty feet have got no rhythm
[03:16.80]即使裝得若無其事的樣子很簡單
[03:16.80]Though it's easy to pretend
[03:19.44]但仍舊被妳識破了
[03:19.44]I know you're not a fool
[03:22.55]早知道當初不應欺騙妳
[03:22.55]Should've known better than to cheat a friend
[03:25.68]並且白白費了一個好機會
[03:25.68]And waste the chance that I've been given
[03:29.29]因此陪妳漫步在舞池的那個人
[03:29.29]So I'll never gonna dance again
[03:32.08]將再也不是我了
[03:32.08]The way I danced with you oh oh
[03:37.52]Ah ah ah ah ah
[03:48.70]（如今妳離我而去）只剰寂寞肯讓我傾訴
[03:48.70](Now that you're gone) Now that you're gone
[04:00.99]（如今妳拋下了我）因為我犯了愚蠢的錯誤
[04:00.99](Now that you're gone)What I did's so wrong
[04:06.49]無法赦免的大錯…
[04:06.49]So wrong ..
[04:09.26]因此妳不得不選擇離開我
[04:09.26]That you had to leave me alone
[04:17.88]Da da da da` 
  }
];
