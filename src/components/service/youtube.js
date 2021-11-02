class Youtube {
  constructor(key) {
    this.key = key;
    this.getRequestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
  }
  async search(search) {
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${search}&videoDuration=short&type=video&key=${this.key}`,
        this.getRequestOptions
      );
      const result_1 = await response.json();
      return result_1.items.map(obj => ({ ...obj, id: obj.id.videoId }));
    } catch (error) {
      return console.log('error', error);
    }
  }
  async mostPopular() {
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&regionCode=kr&videoCategoryId=10&key=${this.key}`,
        this.getRequestOptions
      );
      return await response.json();
    } catch (error) {
      return console.log('error', error);
    }
  }
}

export default Youtube;
