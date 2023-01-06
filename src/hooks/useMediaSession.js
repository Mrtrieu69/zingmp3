const useMediaSession = (currentSong, audioEl, onNext, onPrev) => {
    if ('mediaSession' in navigator) {
        navigator.mediaSession.metadata = new MediaMetadata({
            title: currentSong.name,
            artist: currentSong.artists,
            artwork: [
                {
                    src: currentSong.thumb,
                    sizes: '512x512',
                    type: 'image/webp',
                },
            ],
        });
    }

    const actionHandlers = [
        [
            'play',
            () => {
                audioEl.play();
            },
        ],
        [
            'pause',
            () => {
                audioEl.pause();
            },
        ],
        [
            'previoustrack',
            () => {
                onPrev();
            },
        ],
        [
            'nexttrack',
            () => {
                onNext();
            },
        ],
        [
            'seekto',
            (details) => {
                audioEl.currentTime = details.seekTime;
            },
        ],
    ];

    for (const [action, handler] of actionHandlers) {
        try {
            navigator.mediaSession.setActionHandler(action, handler);
        } catch (error) {
            console.log(`The media session action "${action}" is not supported yet.`);
        }
    }
};

export default useMediaSession;
