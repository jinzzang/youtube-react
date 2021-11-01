import { useEffect, useState } from 'react';
import styles from './app.module.css';
import SearchHeader from './components/header/searchHeader';
import VideoList from './components/video_list/video_list';

function App() {
  const [videos, setVideos] = useState([]);
  const onSearch = search => {
    let requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${search}&videoDuration=short&type=video&key=AIzaSyD5luv3MGZ52AEm-UqIoLbWqgGliKn5WxY`,
      requestOptions
    )
      .then(response => response.json())
      .then(result => result.items.map(obj => ({ ...obj, id: obj.id.videoId })))
      .then(items => setVideos(items))
      .catch(error => console.log('error', error));
  };
  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      'https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&regionCode=kr&videoCategoryId=10&key=AIzaSyAKdTlM9EeVuM6dfoE2_wZEwCUYEiDYJqU',
      requestOptions
    )
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  }, []);

  return (
    <>
      <SearchHeader onSearch={onSearch} />
      <VideoList key={videos.id} videos={videos} />
    </>
  );
}

export default App;
