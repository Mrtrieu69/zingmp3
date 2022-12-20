import { getRandomId } from '../../utils';

export const FAVORITE_SONGS = [];

export const PLAYLISTS = {
    'world-music': {
        name: 'World music',
        image: 'url("/images/album/album2.webp")',
        bgImage: '/images/album/album2.webp',
        updated: '10/10/2022',
        isLike: true,
        artists: 'Dua Lipa, LISA, BIGBANG, Егор Крид',
        subTitle: 'Zing mp3',
        likes: '168k',
        path: '/album/world-music',
        type: 'world-music',
        list: [
            {
                id: getRandomId(),
                type: 'world-music',
                name: 'New rulers',
                artists: 'Dua Lipa',
                duration: 209,
                time: '3:29',
                isLike: false,
                image: '/images/songs/world-music/new-rulers.webp',
                thumb: '/images/songs/world-music/new-rulers-480x480.webp',
                url: '/music/world-music/new-rulers.mp3',
            },
            {
                id: getRandomId(),
                type: 'world-music',
                name: 'Bad guy',
                artists: 'Billie Eilish',
                duration: 194,
                time: '3:14',
                isLike: false,
                image: '/images/songs/world-music/bad-guy.webp',
                thumb: '/images/songs/world-music/bad-guy-480x480.webp',
                url: '/music/world-music/bad-guy.mp3',
            },
            {
                id: getRandomId(),
                type: 'world-music',
                name: 'IDGAF',
                artists: 'Dua Lipa',
                duration: 218,
                time: '3:38',
                isLike: false,
                image: '/images/songs/world-music/idgaf.webp',
                thumb: '/images/songs/world-music/idgaf-480x480.webp',
                url: '/music/world-music/idgaf.mp3',
            },
            {
                id: getRandomId(),
                type: 'world-music',
                name: 'Problem',
                artists: 'Ariana Grande ft. Iggy Azalea',
                duration: 194,
                time: '3:14',
                isLike: false,
                image: '/images/songs/world-music/problem.webp',
                thumb: '/images/songs/world-music/problem-480x480.webp',
                url: '/music/world-music/problem.mp3',
            },
            {
                id: getRandomId(),
                type: 'world-music',
                name: '7 rings',
                artists: 'Arian Grande',
                duration: 178,
                time: '2:58',
                isLike: false,
                image: '/images/songs/world-music/7-rings.webp',
                thumb: '/images/songs/world-music/7-rings-480x480.webp',
                url: '/music/world-music/7-rings.mp3',
            },
            {
                id: getRandomId(),
                type: 'world-music',
                name: "Don't let me down",
                artists: 'The Chainsmokers',
                duration: 211,
                time: '3:31',
                isLike: false,
                image: '/images/songs/world-music/do-not-let-me-down.webp',
                thumb: '/images/songs/world-music/do-not-let-me-down-480x480.webp',
                url: '/music/world-music/do-not-let-me-down.mp3',
            },
            {
                id: getRandomId(),
                type: 'world-music',
                name: 'Friends',
                artists: 'Anne-Marie',
                duration: 202,
                time: '3:22',
                isLike: false,
                image: '/images/songs/world-music/friends.webp',
                thumb: '/images/songs/world-music/friends-480x480.webp',
                url: '/music/world-music/friends.mp3',
            },
            {
                id: getRandomId(),
                type: 'world-music',
                name: "Let's not fall in love",
                artists: 'BIGBANG',
                duration: 211,
                time: '3:31',
                isLike: false,
                image: '/images/songs/world-music/let-is-not-fall-in-love.webp',
                thumb: '/images/songs/world-music/let-is-not-fall-in-love-480x480.webp',
                url: '/music/world-music/let-is-not-fall-in-love.mp3',
            },
            {
                id: getRandomId(),
                type: 'world-music',
                name: 'Light switch',
                artists: 'Charlie Puth',
                duration: 185,
                time: '3:05',
                isLike: false,
                image: '/images/songs/world-music/light-switch.webp',
                thumb: '/images/songs/world-music/light-switch-480x480.webp',
                url: '/music/world-music/light-switch.mp3',
            },
            {
                id: getRandomId(),
                type: 'world-music',
                name: 'Loser',
                artists: 'BIGBANG',
                duration: 219,
                time: '3:39',
                isLike: false,
                image: '/images/songs/world-music/loser.webp',
                thumb: '/images/songs/world-music/loser-480x480.webp',
                url: '/music/world-music/loser.mp3',
            },
            {
                id: getRandomId(),
                type: 'world-music',
                name: 'Money',
                artists: 'LISA',
                duration: 168,
                time: '2:48',
                isLike: false,
                image: '/images/songs/world-music/money.webp',
                thumb: '/images/songs/world-music/money-480x480.webp',
                url: '/music/world-music/money.mp3',
            },
            {
                id: getRandomId(),
                type: 'world-music',
                name: 'Typa girl',
                artists: 'BLACKPINK',
                duration: 179,
                time: '2:59',
                isLike: false,
                image: '/images/songs/world-music/typa-girl.webp',
                thumb: '/images/songs/world-music/typa-girl-480x480.webp',
                url: '/music/world-music/typa-girl.mp3',
            },
            {
                id: getRandomId(),
                type: 'world-music',
                name: 'Время не пришло',
                artists: 'Егор Крид',
                duration: 196,
                time: '3:16',
                isLike: false,
                image: '/images/songs/world-music/время-не-пришло.webp',
                thumb: '/images/songs/world-music/время-не-пришло-480x480.webp',
                url: '/music/world-music/время-не-пришло.mp3',
            },
            {
                id: getRandomId(),
                type: 'world-music',
                name: 'Мокрые кроссы',
                artists: 'Тима Белорусских',
                duration: 197,
                time: '3:17',
                isLike: false,
                image: '/images/songs/world-music/мокрые-кроссы.webp',
                thumb: '/images/songs/world-music/мокрые-кроссы-480x480.webp',
                url: '/music/world-music/мокрые-кроссы.mp3',
            },
            {
                id: getRandomId(),
                type: 'world-music',
                name: 'Улети',
                artists: 'T-Fest',
                duration: 209,
                time: '3:29',
                isLike: false,
                image: '/images/songs/world-music/улети.webp',
                thumb: '/images/songs/world-music/улети-480x480.webp',
                url: '/music/world-music/улети.mp3',
            },
            {
                id: getRandomId(),
                type: 'world-music',
                name: 'Timber',
                artists: 'Pitbull',
                duration: 204,
                time: '3:24',
                isLike: false,
                image: '/images/songs/world-music/timber.webp',
                thumb: '/images/songs/world-music/timber-480x480.webp',
                url: '/music/world-music/timber.mp3',
            },
            {
                id: getRandomId(),
                type: 'world-music',
                name: 'The nights',
                artists: 'City version',
                duration: 173,
                time: '2:53',
                isLike: false,
                image: '/images/songs/world-music/the-nights.webp',
                thumb: '/images/songs/world-music/the-nights-480x480.webp',
                url: '/music/world-music/the-nights.mp3',
            },
            {
                id: getRandomId(),
                type: 'world-music',
                name: 'Summer',
                artists: 'Calvin Harris',
                duration: 223,
                time: '3:43',
                isLike: false,
                image: '/images/songs/world-music/summer.webp',
                thumb: '/images/songs/world-music/summer-480x480.webp',
                url: '/music/world-music/summer.mp3',
            },
            {
                id: getRandomId(),
                type: 'world-music',
                name: 'Positions',
                artists: 'Ariana Grande',
                duration: 185,
                time: '3:05',
                isLike: false,
                image: '/images/songs/world-music/positions.webp',
                thumb: '/images/songs/world-music/positions-480x480.webp',
                url: '/music/world-music/positions.mp3',
            },
            {
                id: getRandomId(),
                type: 'world-music',
                name: 'Love is gone',
                artists: 'SLANDER',
                duration: 177,
                time: '2:57',
                isLike: false,
                image: '/images/songs/world-music/love-is-gone.webp',
                thumb: '/images/songs/world-music/love-is-gone-480x480.webp',
                url: '/music/world-music/love-is-gone.mp3',
            },
        ],
        participants: [
            { name: 'Dua Lipa', followers: '311k', image: '/images/album/artists/dua-lipa.webp' },
            { name: 'Arina Grande', followers: '122k', image: '/images/album/artists/ariana-grande.webp' },
            { name: 'BIGBANG', followers: '419k', image: '/images/album/artists/bigbang.webp' },
            { name: 'Lisa', followers: '198k', image: '/images/album/artists/lisa.webp' },
            { name: 'Billie Eilish', followers: '291k', image: '/images/album/artists/billie-eilish.webp' },
        ],
    },
    'playlist-chill': {
        name: 'Playlist này chill phết',
        image: 'url("/images/album/album1.webp")',
        bgImage: '/images/album/album1.webp',
        updated: '25/10/2022',
        isLike: true,
        artists: 'Kha, 14 Casper, GREY',
        subTitle: 'Zing mp3',
        likes: '64k',
        path: '/album/playlist-chill',
        type: 'playlist-chill',
        list: [
            {
                id: getRandomId(),
                type: 'playlist-chill',
                name: 'Vì mẹ anh bắt chia tay',
                artists: 'Miu Lê, Karik, Châu Đăng Khoa',
                duration: 262,
                time: '4:22',
                isLike: false,
                image: '/images/songs/playlist-chill/vi-me-anh-bat-chia-tay.webp',
                thumb: '/images/songs/playlist-chill/vi-me-anh-bat-chia-tay-480x480.webp',
                url: '/music/playlist-chill/vi-me-anh-bat-chia-tay.mp3',
            },
            {
                id: getRandomId(),
                type: 'playlist-chill',
                name: 'Waiting for you',
                artists: 'MONO, Onionn',
                duration: 266,
                time: '4:26',
                isLike: false,
                image: '/images/songs/playlist-chill/waiting-for-you.webp',
                thumb: '/images/songs/playlist-chill/waiting-for-you-480x480.webp',
                url: '/music/playlist-chill/waiting-for-you.mp3',
            },
            {
                id: getRandomId(),
                type: 'playlist-chill',
                name: 'Từ thích thích thành thương thương',
                artists: 'AMEE, Hoàng dũng',
                duration: 204,
                time: '3:24',
                isLike: false,
                image: '/images/songs/playlist-chill/tu-thich-thich-thanh-thuong-thuong.webp',
                thumb: '/images/songs/playlist-chill/tu-thich-thich-thanh-thuong-thuong-480x480.webp',
                url: '/music/playlist-chill/tu-thich-thich-thanh-thuong-thuong.mp3',
            },
            {
                id: getRandomId(),
                type: 'playlist-chill',
                name: 'Một người nhẹ nhàng hơn',
                artists: 'Trang, Tiên Tiên',
                duration: 241,
                time: '4:01',
                isLike: false,
                image: '/images/songs/playlist-chill/mot-nguoi-nhe-nhang-hon.webp',
                thumb: '/images/songs/playlist-chill/mot-nguoi-nhe-nhang-hon-480x480.webp',
                url: '/music/playlist-chill/mot-nguoi-nhe-nhang-hon.mp3',
            },
            {
                id: getRandomId(),
                type: 'playlist-chill',
                name: 'Em bỏ hút thuốc chưa?',
                artists: 'Bích Phương',
                duration: 231,
                time: '3:51',
                isLike: false,
                image: '/images/songs/playlist-chill/em-bo-hut-thuoc-chua.webp',
                thumb: '/images/songs/playlist-chill/em-bo-hut-thuoc-chua-480x480.webp',
                url: '/music/playlist-chill/em-bo-hut-thuoc-chua.mp3',
            },
            {
                id: getRandomId(),
                type: 'playlist-chill',
                name: 'Replay trên con Guây',
                artists: 'Phúc Du, Đan Ni',
                duration: 222,
                time: '3:42',
                isLike: false,
                image: '/images/songs/playlist-chill/replay-tren-con-guay.webp',
                thumb: '/images/songs/playlist-chill/replay-tren-con-guay-480x480.webp',
                url: '/music/playlist-chill/replay-tren-con-guay.mp3',
            },
            {
                id: getRandomId(),
                type: 'playlist-chill',
                name: 'Chuyện rằng',
                artists: 'Thịnh Suy',
                duration: 288,
                time: '4:48',
                isLike: false,
                image: '/images/songs/playlist-chill/chuyen-rang.webp',
                thumb: '/images/songs/playlist-chill/chuyen-rang-480x480.webp',
                url: '/music/playlist-chill/chuyen-rang.mp3',
            },
            {
                id: getRandomId(),
                type: 'playlist-chill',
                name: 'Vài câu nói có khiến người thay đổi',
                artists: 'GREY D, tlinh',
                duration: 226,
                time: '3:46',
                isLike: false,
                image: '/images/songs/playlist-chill/vaicaunoicokhiennguoithaydoi.webp',
                thumb: '/images/songs/playlist-chill/vaicaunoicokhiennguoithaydoi-480x480.webp',
                url: '/music/playlist-chill/vaicaunoicokhiennguoithaydoi.mp3',
            },
            {
                id: getRandomId(),
                type: 'playlist-chill',
                name: 'xích thêm chút nữa',
                artists: 'GREY D, tlinh',
                duration: 201,
                time: '3:21',
                isLike: false,
                image: '/images/songs/playlist-chill/xich-them-chut-nua.webp',
                thumb: '/images/songs/playlist-chill/xich-them-chut-nua-480x480.webp',
                url: '/music/playlist-chill/xich-them-chut-nua.mp3',
            },
            {
                id: getRandomId(),
                type: 'playlist-chill',
                name: 'Giấc mơ đẹp',
                artists: 'Nguyễn Trọng Tài',
                duration: 187,
                time: '3:07',
                isLike: false,
                image: '/images/songs/playlist-chill/giac-mo-dep.webp',
                thumb: '/images/songs/playlist-chill/giac-mo-dep-480x480.webp',
                url: '/music/playlist-chill/giac-mo-dep.mp3',
            },
            {
                id: getRandomId(),
                type: 'playlist-chill',
                name: 'Ngã tư không đèn',
                artists: 'Trang, Khoa Vũ',
                duration: 218,
                time: '3:38',
                isLike: false,
                image: '/images/songs/playlist-chill/nga-tu-khong-den.webp',
                thumb: '/images/songs/playlist-chill/nga-tu-khong-den-480x480.webp',
                url: '/music/playlist-chill/nga-tu-khong-den.mp3',
            },
            {
                id: getRandomId(),
                type: 'playlist-chill',
                name: 'Tình yêu ngủ quên',
                artists: 'Hoàng Tôn, LyHan',
                duration: 176,
                time: '2:54',
                isLike: false,
                image: '/images/songs/playlist-chill/tinh-yeu-ngu-quen.webp',
                thumb: '/images/songs/playlist-chill/tinh-yeu-ngu-quen-480x480.webp',
                url: '/music/playlist-chill/tinh-yeu-ngu-quen.mp3',
            },
            {
                id: getRandomId(),
                type: 'playlist-chill',
                name: 'Chạy khỏi thế giới này',
                artists: 'Da LAB, Phương Ly',
                duration: 255,
                time: '4:15',
                isLike: false,
                image: '/images/songs/playlist-chill/chay-khoi-the-gioi-nay.webp',
                thumb: '/images/songs/playlist-chill/chay-khoi-the-gioi-nay-480x480.webp',
                url: '/music/playlist-chill/chay-khoi-the-gioi-nay.mp3',
            },
            {
                id: getRandomId(),
                type: 'playlist-chill',
                name: 'Ánh sao và bầu trời',
                artists: 'T.R.I',
                duration: 261,
                time: '4:21',
                isLike: false,
                image: '/images/songs/playlist-chill/anh-sao-va-bau-troi.webp',
                thumb: '/images/songs/playlist-chill/anh-sao-va-bau-troi-480x480.webp',
                url: '/music/playlist-chill/anh-sao-va-bau-troi.mp3',
            },
            {
                id: getRandomId(),
                type: 'playlist-chill',
                name: 'Mặt mộc (Aucostic version)',
                artists: 'Phạm Nguyên Ngọc, Vân Anh',
                duration: 204,
                time: '3:24',
                isLike: false,
                image: '/images/songs/playlist-chill/mat-moc.webp',
                thumb: '/images/songs/playlist-chill/mat-moc-480x480.webp',
                url: '/music/playlist-chill/mat-moc.mp3',
            },
            {
                id: getRandomId(),
                type: 'playlist-chill',
                name: 'Có hẹn với thanh xuân',
                artists: 'Suni Hạ Linh, Hoàng Dũng',
                duration: 222,
                time: '3:42',
                isLike: false,
                image: '/images/songs/playlist-chill/co-hen-voi-thanh-xuan.webp',
                thumb: '/images/songs/playlist-chill/co-hen-voi-thanh-xuan-480x480.webp',
                url: '/music/playlist-chill/co-hen-voi-thanh-xuan.mp3',
            },
            {
                id: getRandomId(),
                type: 'playlist-chill',
                name: 'Tìm',
                artists: 'Orange',
                duration: 229,
                time: '3:49',
                isLike: false,
                image: '/images/songs/playlist-chill/tim.webp',
                thumb: '/images/songs/playlist-chill/tim-480x480.webp',
                url: '/music/playlist-chill/tim.mp3',
            },
            {
                id: getRandomId(),
                type: 'playlist-chill',
                name: 'Lạc vào trong mơ',
                artists: 'SimmonC, WUY',
                duration: 173,
                time: '2:53',
                isLike: false,
                image: '/images/songs/playlist-chill/lac-vao-trong-mo.webp',
                thumb: '/images/songs/playlist-chill/lac-vao-trong-mo-480x480.webp',
                url: '/music/playlist-chill/lac-vao-trong-mo.mp3',
            },
            {
                id: getRandomId(),
                type: 'playlist-chill',
                name: 'Phải lòng anh',
                artists: 'MIN',
                duration: 234,
                time: '3:54',
                isLike: false,
                image: '/images/songs/playlist-chill/phai-long-anh.webp',
                thumb: '/images/songs/playlist-chill/phai-long-anh-480x480.webp',
                url: '/music/playlist-chill/phai-long-anh.mp3',
            },
            {
                id: getRandomId(),
                type: 'playlist-chill',
                name: 'Đôi mươi',
                artists: 'Hoàng DŨng',
                duration: 261,
                time: '4:21',
                isLike: false,
                image: '/images/songs/playlist-chill/doi-muoi.webp',
                thumb: '/images/songs/playlist-chill/doi-muoi-480x480.webp',
                url: '/music/playlist-chill/doi-muoi.mp3',
            },
            {
                id: getRandomId(),
                type: 'playlist-chill',
                name: 'Đứa nào làm em buồn?',
                artists: 'Phúc Du, Hoàng Dũng',
                duration: 252,
                time: '4:12',
                isLike: false,
                image: '/images/songs/playlist-chill/dua-nao-lam-em-buon.webp',
                thumb: '/images/songs/playlist-chill/dua-nao-lam-em-buon-480x480.webp',
                url: '/music/playlist-chill/dua-nao-lam-em-buon.mp3',
            },
            {
                id: getRandomId(),
                type: 'playlist-chill',
                name: 'Nước mắt em lau',
                artists: 'Da LAB, Tóc Tiên',
                duration: 286,
                time: '4:46',
                isLike: false,
                image: '/images/songs/playlist-chill/nuoc-mat-em-lau-bang-tinh-yeu-moi.webp',
                thumb: '/images/songs/playlist-chill/nuoc-mat-em-lau-bang-tinh-yeu-moi-480x480.webp',
                url: '/music/playlist-chill/nuoc-mat-em-lau-bang-tinh-yeu-moi.mp3',
            },
            {
                id: getRandomId(),
                type: 'playlist-chill',
                name: 'Khác biệt to lớn hơn',
                artists: 'Trịnh Thăng Bình',
                duration: 253,
                time: '4:13',
                isLike: false,
                image: '/images/songs/playlist-chill/khac-biet-to-lon-hon.webp',
                thumb: '/images/songs/playlist-chill/khac-biet-to-lon-hon-480x480.webp',
                url: '/music/playlist-chill/khac-biet-to-lon-hon.mp3',
            },
            {
                id: getRandomId(),
                type: 'playlist-chill',
                name: 'Thích em hơi nhiều',
                artists: 'Hoàng Dũng',
                duration: 205,
                time: '3:25',
                isLike: false,
                image: '/images/songs/playlist-chill/thich-em-hoi-nhieu.webp',
                thumb: '/images/songs/playlist-chill/thich-em-hoi-nhieu-480x480.webp',
                url: '/music/playlist-chill/thich-em-hoi-nhieu.mp3',
            },
            {
                id: getRandomId(),
                type: 'playlist-chill',
                name: 'Anh mơ',
                artists: 'Đức trường, BMZ',
                duration: 201,
                time: '3:21',
                isLike: false,
                image: '/images/songs/playlist-chill/anh-mo.webp',
                thumb: '/images/songs/playlist-chill/anh-mo-480x480.webp',
                url: '/music/playlist-chill/anh-mo.mp3',
            },
        ],
        participants: [
            { name: 'Phúc Du', followers: '9k', image: '/images/album/artists/phuc-du.webp' },
            { name: 'Tlinh', followers: '21k', image: '/images/album/artists/tlinh.webp' },
            { name: 'Thịnh Suy', followers: '46k', image: '/images/album/artists/thinh-suy.webp' },
            { name: 'GRAY D', followers: '19k', image: '/images/album/artists/gray-d.webp' },
        ],
    },
    'chill-hits': {
        name: 'Chill hits',
        image: 'url("/images/album/album3.webp")',
        bgImage: '/images/album/album3.webp',
        updated: '29/10/2022',
        isLike: true,
        artists: 'Kha, Bích Phương, Phương Ly, Hoàng Dũng',
        subTitle: 'Zing mp3',
        likes: '102k',
        path: '/album/chill-hits',
        type: 'chill-hits',
        list: [
            {
                id: getRandomId(),
                type: 'chill-hits',
                name: 'Trời giấu trời mang đi (solo vesion)',
                artists: 'AMEE',
                duration: 254,
                time: '4:14',
                isLike: false,
                image: '/images/songs/chill-hits/troi-dau-troi-mang-di.webp',
                thumb: '/images/songs/chill-hits/troi-dau-troi-mang-di-480x480.webp',
                url: '/music/chill-hits/troi-giau-troi-mang-di.mp3',
            },
            {
                id: getRandomId(),
                type: 'chill-hits',
                name: 'Em là hoàng hôn',
                artists: 'Vang, Cloud 5',
                duration: 223,
                time: '3:43',
                isLike: false,
                image: '/images/songs/chill-hits/em-la-hoang-hon.webp',
                thumb: '/images/songs/chill-hits/em-la-hoang-hon-480x480.webp',
                url: '/music/chill-hits/em-la-hoang-hon.mp3',
            },
            {
                id: getRandomId(),
                type: 'chill-hits',
                name: 'Vì yêu cứ đâm đầu',
                artists: 'Min, Đen, Justatee',
                duration: 231,
                time: '3:51',
                isLike: false,
                image: '/images/songs/chill-hits/vi-yeu-cu-dam-dau.webp',
                thumb: '/images/songs/chill-hits/vi-yeu-cu-dam-dau-480x480.webp',
                url: '/music/chill-hits/vi-yeu-cu-dam-dau.mp3',
            },
            {
                id: getRandomId(),
                type: 'chill-hits',
                name: 'Anh à',
                artists: 'Juky San, Thịnh Suy',
                duration: 246,
                time: '4:06',
                isLike: false,
                image: '/images/songs/chill-hits/anh-a.webp',
                thumb: '/images/songs/chill-hits/anh-a-480x480.webp',
                url: '/music/chill-hits/anh-a.mp3',
            },
            {
                id: getRandomId(),
                type: 'chill-hits',
                name: 'Cần gì hơn',
                artists: 'Tiên Tiên, Justatee',
                duration: 207,
                time: '3:27',
                isLike: false,
                image: '/images/songs/chill-hits/can-gi-hon.webp',
                thumb: '/images/songs/chill-hits/can-gi-hon-480x480.webp',
                url: '/music/chill-hits/can-gi-hon.mp3',
            },
            {
                id: getRandomId(),
                type: 'chill-hits',
                name: 'Có em chờ',
                artists: 'MIN, Mr.A',
                duration: 234,
                time: '3:54',
                isLike: false,
                image: '/images/songs/chill-hits/co-em-cho.webp',
                thumb: '/images/songs/chill-hits/co-em-cho-480x480.webp',
                url: '/music/chill-hits/co-em-cho.mp3',
            },
            {
                id: getRandomId(),
                type: 'chill-hits',
                name: 'Em tạm đi vắng khi anh thức',
                artists: 'Phùng Khánh Linh',
                duration: 273,
                time: '4:33',
                isLike: false,
                image: '/images/songs/chill-hits/em-tam-di-vang-khi-anh-thuc-giac.webp',
                thumb: '/images/songs/chill-hits/em-tam-di-vang-khi-anh-thuc-giac-480x480.webp',
                url: '/music/chill-hits/em-tam-di-vang-khi-anh-thuc-giac.mp3',
            },
            {
                id: getRandomId(),
                type: 'chill-hits',
                name: 'Có em',
                artists: 'Madihu, Low G',
                duration: 219,
                time: '3:39',
                isLike: false,
                image: '/images/songs/chill-hits/co-em.webp',
                thumb: '/images/songs/chill-hits/co-em-480x480.webp',
                url: '/music/chill-hits/co-em.mp3',
            },
            {
                id: getRandomId(),
                type: 'chill-hits',
                name: 'tiny love',
                artists: 'Thịnh Suy',
                duration: 158,
                time: '2:38',
                isLike: false,
                image: '/images/songs/chill-hits/tiny-love.webp',
                thumb: '/images/songs/chill-hits/tiny-love-480x480.webp',
                url: '/music/chill-hits/tiny-love.mp3',
            },
            {
                id: getRandomId(),
                type: 'chill-hits',
                name: 'Chuyện đôi ta (Lofi Mix)',
                artists: 'Emcee L (Da LAB)',
                duration: 204,
                time: '3:24',
                isLike: false,
                image: '/images/songs/chill-hits/chuyen-doi-ta.webp',
                thumb: '/images/songs/chill-hits/chuyen-doi-ta-480x480.webp',
                url: '/music/chill-hits/chuyen-doi-ta.mp3',
            },
            {
                id: getRandomId(),
                type: 'chill-hits',
                name: 'Chiếc hộp',
                artists: 'Bích Phương',
                duration: 216,
                time: '3:36',
                isLike: false,
                image: '/images/songs/chill-hits/chiec-hop.webp',
                thumb: '/images/songs/chill-hits/chiec-hop-480x480.webp',
                url: '/music/chill-hits/chiec-hop.mp3',
            },
            {
                id: getRandomId(),
                type: 'chill-hits',
                name: 'Đã lỡ yêu em nhiều',
                artists: 'JustaTee',
                duration: 261,
                time: '4:21',
                isLike: false,
                image: '/images/songs/chill-hits/da-lo-yeu-em-nhieu.webp',
                thumb: '/images/songs/chill-hits/da-lo-yeu-em-nhieu-480x480.webp',
                url: '/music/chill-hits/da-lo-yeu-em-nhieu.mp3',
            },
            {
                id: getRandomId(),
                type: 'chill-hits',
                name: 'Mình anh nơi này',
                artists: 'NIT, Sing',
                duration: 307,
                time: '5:07',
                isLike: false,
                image: '/images/songs/chill-hits/minh-anh-noi-nay.webp',
                thumb: '/images/songs/chill-hits/minh-anh-noi-nay-480x480.webp',
                url: '/music/chill-hits/minh-anh-noi-nay.mp3',
            },
            {
                id: getRandomId(),
                type: 'chill-hits',
                name: 'MISSING YOU',
                artists: 'Vũ Thanh Vân',
                duration: 244,
                time: '4:04',
                isLike: false,
                image: '/images/songs/chill-hits/missing-you.webp',
                thumb: '/images/songs/chill-hits/missing-you-480x480.webp',
                url: '/music/chill-hits/missing-you.mp3',
            },
            {
                id: getRandomId(),
                type: 'chill-hits',
                name: 'Ném câu yêu vào trong không trung',
                artists: 'Hoàng Dũng',
                duration: 236,
                time: '3:56',
                isLike: false,
                image: '/images/songs/chill-hits/nem-cau-yeu-vao-trong-khong-trung.webp',
                thumb: '/images/songs/chill-hits/nem-cau-yeu-vao-trong-khong-trung-480x480.webp',
                url: '/music/chill-hits/nem-cau-yeu-vao-trong-khong-trung.mp3',
            },
            {
                id: getRandomId(),
                type: 'chill-hits',
                name: 'Chạy khỏi thế giới này',
                artists: 'Da LAB, Phương Ly',
                duration: 255,
                time: '4:15',
                isLike: false,
                image: '/images/songs/chill-hits/chay-khoi-the-gioi-nay.webp',
                thumb: '/images/songs/chill-hits/chay-khoi-the-gioi-nay-480x480.webp',
                url: '/music/chill-hits/chay-khoi-the-gioi-nay.mp3',
            },
            {
                id: getRandomId(),
                type: 'chill-hits',
                name: 'Câu trả lời',
                artists: 'Tiên Tiên, Trang',
                duration: 167,
                time: '2:47',
                isLike: false,
                image: '/images/songs/chill-hits/cau-tra-loi.webp',
                thumb: '/images/songs/chill-hits/cau-tra-loi-480x480.webp',
                url: '/music/chill-hits/cau-tra-loi.mp3',
            },
            {
                id: getRandomId(),
                type: 'chill-hits',
                name: 'Em thích',
                artists: 'Sean, Lửa',
                duration: 176,
                time: '2:56',
                isLike: false,
                image: '/images/songs/chill-hits/em-thich.webp',
                thumb: '/images/songs/chill-hits/em-thich-480x480.webp',
                url: '/music/chill-hits/em-thich.mp3',
            },
            {
                id: getRandomId(),
                type: 'chill-hits',
                name: 'Từ chối nhẹ nhàng thôi',
                artists: 'Bích Phương, Phúc Du',
                duration: 226,
                time: '3:46',
                isLike: false,
                image: '/images/songs/chill-hits/tu-choi-nhe-nhang-thoi.webp',
                thumb: '/images/songs/chill-hits/tu-choi-nhe-nhang-thoi-480x480.webp',
                url: '/music/chill-hits/tu-choi-nhe-nhang-thoi.mp3',
            },
            {
                id: getRandomId(),
                type: 'chill-hits',
                name: 'Vẫn nhớ',
                artists: 'SOOBIN',
                duration: 192,
                time: '3:12',
                isLike: false,
                image: '/images/songs/chill-hits/van-nho.webp',
                thumb: '/images/songs/chill-hits/van-nho-480x480.webp',
                url: '/music/chill-hits/van-nho.mp3',
            },
            {
                id: getRandomId(),
                type: 'chill-hits',
                name: 'Nằm ngủ em ru',
                artists: 'Bích Phương',
                duration: 255,
                time: '4:15',
                isLike: false,
                image: '/images/songs/chill-hits/nam-ngu-em-ru.webp',
                thumb: '/images/songs/chill-hits/nam-ngu-em-ru-480x480.webp',
                url: '/music/chill-hits/nam-ngu-em-ru.mp3',
            },
            {
                id: getRandomId(),
                type: 'chill-hits',
                name: 'HongKong1',
                artists: 'Nguyễn Trọng Tài, San Ji',
                duration: null,
                time: '',
                isLike: false,
                image: '/images/songs/chill-hits/hong-kong.webp',
                thumb: '/images/songs/chill-hits/hong-kong-480x480.webp',
                url: '/music/chill-hits/hong-kong.mp3',
            },
            {
                id: getRandomId(),
                type: 'chill-hits',
                name: 'Anh là ai',
                artists: 'Phương Ly',
                duration: 257,
                time: '4:17',
                isLike: false,
                image: '/images/songs/chill-hits/anh-la-ai.webp',
                thumb: '/images/songs/chill-hits/anh-la-ai-480x480.webp',
                url: '/music/chill-hits/anh-la-ai.mp3',
            },
            {
                id: getRandomId(),
                type: 'chill-hits',
                name: 'Phố cũ còn anh',
                artists: 'Quinn, Chilly',
                duration: 234,
                time: '3:54',
                isLike: false,
                image: '/images/songs/chill-hits/pho-cu-con-anh.webp',
                thumb: '/images/songs/chill-hits/pho-cu-con-anh-480x480.webp',
                url: '/music/chill-hits/pho-cu-con-anh.mp3',
            },
            {
                id: getRandomId(),
                type: 'chill-hits',
                name: 'Tình đẹp đến mấy cũng tàn',
                artists: 'Như Việt, ACV',
                duration: 263,
                time: '4:23',
                isLike: false,
                image: '/images/songs/chill-hits/tinh-dep-den-may-cung-tan.webp',
                thumb: '/images/songs/chill-hits/tinh-dep-den-may-cung-tan-480x480.webp',
                url: '/music/chill-hits/tinh-dep-den-may-cung-tan.mp3',
            },
        ],
        participants: [
            { name: 'Min', followers: '312k', image: '/images/album/artists/min.webp' },
            { name: 'Mr.A', followers: '12k', image: '/images/album/artists/mr-a.webp' },
            { name: 'Hoang Dung', followers: '79k', image: '/images/album/artists/hoang-dung.webp' },
            { name: 'Suni Ha Linh', followers: '191k', image: '/images/album/artists/suni-ha-linh.webp' },
        ],
    },
};
