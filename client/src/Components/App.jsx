import React from "react";
import axios from "axios";
import styles from "../Styles/App.css";
import Stars from "./Stars.jsx";
import RatingsContainer from "./RatingsContainer.jsx";
import Reviews from "./Reviews.jsx";
import PopUp from "./PopUp.jsx";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      popUp: false,
      currentHouse: 59, // Devonte
      users: [],
      houses: [],
      reviews: [],
      comments: [],
    };
    this.getAllData = this.getAllData.bind(this);
    this.filterReviews = this.filterReviews.bind(this);
    this.rdm = this.rdm.bind(this);
    this.setPopUp = this.setPopUp.bind(this);
    this.closePopUp = this.closePopUp.bind(this);
  }

  rdm(min, max) {
    return Math.ceil(Math.random() * (max - min)) + min;
  }

  getAllData() {
    axios
      .get("/reviews/users")
      .then((users) => this.setState({ users: users.data }));
    axios
      .get("/reviews/comments")
      .then((comments) => this.setState({ comments: comments.data }));
    axios
      .get("/reviews/houses")
      .then((houses) => this.setState({ houses: houses.data }));
    axios
      .get("/reviews")
      .then((reviews) => this.setState({ reviews: reviews.data }))
      .catch();
  }

  componentDidMount() {
    this.setState({ currentHouse: this.rdm(1, 100) });
    this.getAllData();
  }

  filterReviews() {
    let reviewsCopy = this.state.reviews.filter((review) => {
      if (review.houseId === this.state.currentHouse) {
        return review;
      }
    });
    return reviewsCopy;
  }

  setPopUp() {
    this.setState({ popUp: true });
  }

  closePopUp() {
    this.setState({ popUp: false });
  }

  render() {

    if (this.state.popUp) {
      document.body.style.overflow = "hidden";
      document.body.style.background = "rgba(0, 0, 0, 0.5)";

    } else {
      document.body.style.overflow = "auto";
      document.body.style.background = "rgba(0, 0, 0, 0)";
    }

    return (
      <div className={styles.reviewSection}>
        <Stars
          popUp={this.state.pop}
          reviews={this.filterReviews()}
          currentHouse={this.state.currentHouse}
        />

        <RatingsContainer
          reviews={this.filterReviews()}
          currentHouse={this.state.currentHouse}
        />

        <Reviews
          popUp={this.state.popUp}
          users={this.state.users}
          reviews={this.filterReviews()}
          currentHouse={this.state.currentHouse}
        />

        <button
          onClick={this.setPopUp}
          className={this.state.popUp ? styles.showButtonPopUp : styles.showButton}
        >
          Show all {this.filterReviews().length} reviews
        </button>

        {this.state.popUp ? (
          <PopUp
            comments={this.state.comments}
            className={styles.modal}
            users={this.state.users}
            closePopUp={this.closePopUp}
            show={this.state.popUp}
            reviews={this.filterReviews()}
            currentHouse={this.state.currentHouse}
          />
        ) : null}
      </div>
    );
  }
}

export default App;
