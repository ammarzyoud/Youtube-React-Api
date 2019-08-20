import React, { Component } from 'react';
import SearchBar from './components/searchbar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/ListOfVideos';
import VideoDetail from './components/VideoDetails';

const API_KEY = 'AIzaSyDKYj63G3Y-_PXbtZxz4ENHGtQgZ67-uw4';


class App extends Component {
  constructor(props){
    super(props);

    this.state = { 
        videos: [],
        selectedVideo: null
    };
    this.videoSearch("hello");
}


videoSearch(searchTerm) {
  YTSearch({key: API_KEY, term: searchTerm}, (data) => {
      this.setState({ 
          videos: data,
          selectedVideo: data[0]
      });
  });
}


  render() {
    return (
      <div>
        <SearchBar onSearchChangeTerm={searchTerm => this.videoSearch(searchTerm)}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList 
          onVideoSelect={userSelected => this.setState({selectedVideo: userSelected})}
          videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
