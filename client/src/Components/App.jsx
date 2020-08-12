import React from 'react';
import axios from 'axios';
import styles from '../Styles/App.css';
import Stars from './Stars.jsx';
import RatingsContainer from './RatingsContainer.jsx';
import Reviews from './Reviews.jsx';

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      currentHouse: 59, // Devonte
      users: [],
      houses: [],
      reviews: [],
      comments: []
    }
    this.getAllData = this.getAllData.bind(this);
    this.filterReviews = this.filterReviews.bind(this);
    this.rdm = this.rdm.bind(this);
  }

  rdm (min, max) {
    return Math.ceil(Math.random() * (max - min)) + min;
  };

  getAllData() {
    axios.all([
      axios
        .get("/reviews/users")
        .then((users) => {
          this.setState({ users: users.data });
        })
        .catch((err) => {
          console.log(err);
        }),

      axios
        .get("/reviews/comments")
        .then((comments) => {
          this.setState({ comments: comments.data });
        })
        .catch((err) => {
          console.log(err);
        }),

      axios
        .get("/reviews/houses")
        .then((houses) => {
          this.setState({ houses: houses.data });
        })
        .catch((err) => {
          console.log(err);
        }),

      axios
        .get("/reviews")
        .then((reviews) => {
          this.setState({ reviews: reviews.data });
        })
        .catch((err) => {
          console.log(err);
        })
    ]);
  }

  componentDidMount () {
    this.setState({currentHouse: this.rdm(1, 100)})
    this.getAllData()

  }

  filterReviews() {
    let reviewsCopy = this.state.reviews.filter((review) => {
      if (review.houseId === this.state.currentHouse) {
        return review
      }
    })
    return reviewsCopy;
  }

  render () {
    return (
      // pass props to designated components
      <div className={styles.reviewSection}>
        <hr className={styles.hor} />
        <Stars reviews={this.filterReviews()} currentHouse={this.state.currentHouse} />
        <RatingsContainer reviews={this.filterReviews()} currentHouse={this.state.currentHouse}/>
        <Reviews users={this.state.users} reviews={this.filterReviews()} currentHouse={this.state.currentHouse}/>
        <button className={styles.showButton}>Show all {this.filterReviews().length} reviews</button>
        <hr className={styles.hor} />
      </div>
    );
  }
};

export default App;

