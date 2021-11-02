import { useCallback, useEffect, useState } from 'react';
import SearchHeader from './components/header/searchHeader';
import VideoList from './components/video_list/video_list';
import VideoDetail from './components/video_detail/video_detail';
import styles from './app.module.css';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const onSearch = useCallback(
    query => {
      setSelectedVideo(null);
      youtube.search(query).then(items => {
        setVideos(items);
      });
    },
    [youtube]
  );
  const onClickVideo = useCallback(
    video => {
      setSelectedVideo(video);
    },
    [youtube]
  );
  useEffect(() => {
    youtube.mostPopular().then(results => setVideos(results.items));
  }, [youtube]);

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={onSearch} />
      <section className={styles.content}>
        {selectedVideo && (
          <div className={styles.detail}>
            <VideoDetail selectedVideo={selectedVideo} />
          </div>
        )}
        <div className={styles.list}>
          <VideoList
            key={videos.id}
            videos={videos}
            onClickVideo={onClickVideo}
            display={selectedVideo ? 'list' : 'grid'}
          />
        </div>
      </section>
    </div>
  );
}

export default App;
