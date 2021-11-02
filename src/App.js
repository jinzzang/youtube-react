import { useEffect, useState } from 'react';
import SearchHeader from './components/header/searchHeader';
import VideoList from './components/video_list/video_list';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const onSearch = query => {
    youtube.search(query).then(items => setVideos(items));
  };
  useEffect(() => {
    youtube.mostPopular().then(results => setVideos(results.items));
  }, []);

  return (
    <>
      <SearchHeader onSearch={onSearch} />
      <VideoList key={videos.id} videos={videos} />
    </>
  );
}

export default App;
