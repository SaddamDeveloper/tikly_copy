import React from  'react'
import styled from  'styled-components/native'
import {Video} from 'expo-av'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

const Poster = styled.ImageBackground`
    height: 100%
`
const Play = styled(Video)`
    height: 100%;
`
const VideoPlayer = ({video, poster, isPlay}) => {
    const videos = React.useRef(null);
    const [status, setStatus] = React.useState({});
    return isPlay ? (
        <TouchableWithoutFeedback onPress={() =>
            status.isPlaying ? videos.current.pauseAsync() : videos.current.playAsync()
          }>
            <Play
                ref={videos}
                rate={1.0}
                volume={1.0}
                isMuted={false}
                shouldPlay
                isLooping
                useNativeControls={false}
                posterSource={poster}
                source={video}
                resizeMode='cover'
                onPlaybackStatusUpdate={status => setStatus(() => status)}
            />
        </TouchableWithoutFeedback>
    ) : (<Poster source={poster} />)
}

export default VideoPlayer