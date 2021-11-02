import React, { memo } from 'react';
import styles from '../video_item/video_item.module.css';

const VideoItem = memo(({ display, video, onClickVideo }) => {
  console.log('VIdeoItem');
  const displayType = display === 'list' ? styles.list : styles.grid;
  const handleClick = () => {
    onClickVideo(video);
  };
  return (
    <li className={`${styles.container} ${displayType}`} onClick={handleClick}>
      <div className={styles.video}>
        <img
          className={styles.thumbnail}
          src={video.snippet.thumbnails.default.url}
          alt="video thumbnail"
        />
        <div className={styles.metadata}>
          <p className={styles.title}>{video.snippet.title}</p>
          <p className={styles.channel}>{video.snippet.channelTitle}</p>
        </div>
      </div>
    </li>
  );
});

export default VideoItem;
