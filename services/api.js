const api = [
    {
        id: 0,
        video: require('../assets/videos/01.mp4'),
        poster: require('../assets/poster/01.jpg'),
        user: {
            username: 'amir_suhel',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            music: 'random music 01',
            avatar: require('../assets/avatar/01.jpg')
        },
        count: {
            like: '1.1M',
            comment: '4080',
            share: '200'
        }
    },
    {
        id: 1,
        video: require('../assets/videos/02.mp4'),
        poster: require('../assets/poster/02.jpg'),
        user: {
            username: 'saddam_hussain',
            description: 'Lorem Ipsum is simply dummy text of the printing  industry.',
            music: 'random music 02',
            avatar: require('../assets/avatar/02.jpg')
        },
        count: {
            like: '1.2M',
            comment: '4080',
            share: '200'
        }
    },
]

export default api