import _ from 'lodash'
import React, { Component } from 'react';
import {connect} from 'react-redux';
import { fetchPosts } from '../actions';
import { Link } from 'react-router-dom';

class PostsIndex extends Component {
  componentDidMount(){
    this.props.fetchPosts();
  }

  renderPosts(){
      return _.map(this.props.posts, post => { //We use _.map because this.props.posts is an object not an array.
          return (
              <li className="list-group-item" key={post.title}>
                <Link to={`/posts/${post.id}`}>{post.title}</Link>&nbsp;
              </li>
          );
      }); 
  }

  render() {
    return(
      <div>
        <div className="text-xs-right">
            <Link className="btn btn-primary" to="/posts/new">
                Add a Post
            </Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
            {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state){
    return {posts: state.posts};
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);