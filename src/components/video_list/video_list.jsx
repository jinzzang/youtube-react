import React, { memo } from 'react';
import VideoItem from '../video_item/video_item';
import styles from '../video_list/video_list.module.css';

const VideoList = memo(({ videos, onClickVideo, display }) => {
  return (
    <ul className={styles.videos}>
      {videos.map(video => (
        <VideoItem
          key={video.id}
          video={video}
          onClickVideo={onClickVideo}
          display={display}
        />
      ))}
    </ul>
  );
});

export default VideoList;
