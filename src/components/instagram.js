import React, { Component } from 'react';

class Instagram extends Component {
  state = {
    data: [],
    error: false
  }
  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts = async () => {
    const url = `https://api.instagram.com/v1/users/self/media/recent/?access_token=${process.env.INSTAGRAM_ACCESS_TOKEN}`;
    try {
      const response = await fetch(url);
      const json = await response.json();
      this.setState({
        data: [...json.data]
      })

    }catch(err){
      console.warn(err);
      this.setState({
        error: true
      })
    }
  }

  render() {
    const { data, error } = this.state;
    return (
      <section>
        <div className="container">
          <h2>See me on Instagram</h2>
          <div id="instafeed" className="instafeed is-visible">
            {data.map(post => {
              return (
                <a href={post.link} key={post.id}>
                  <img src={post.images.standard_resolution.url} alt={post.caption.text}/>
                </a>
              )
            })}
            {error && showError()}
          </div>
        </div>
      </section>
    );
  }
}

export default Instagram;


const showError = () => <h3>Unfortunately there has been an error getting the posts from Instagram...</h3>