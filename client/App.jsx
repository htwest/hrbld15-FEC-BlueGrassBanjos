/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
/* eslint-disable no-console */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
/* eslint-disable no-unused-vars */
import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';
import Overview from './productOverview/displayOverview';
// import ReviewsComponent from './components/reviews/ReviewsComponent';
import QandA from './components/QandA/QandA';
import Requests from './requests';
import RelatedProducts from './components/RelatedProducts/RelatedProducts';
import ReviewsComponent from './components/reviews/ReviewsComponent';

import logo from './components/IconsandImages/FEClogo.png';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: this.props.match.params.id,
      reviewsData: {},
    };
  }

  componentDidMount() {
    // Requests.default.getReviews(18201, (err, data) => {
    //   if (err) {
    //     console.log(err);
    //   } else {
    //     this.setState({
    //       reviewsData: data.data,
    //     });
    //   }
    // });
  }

  render() {
    const prod = this.state;
    return (
      <div>
        <div className="container-fluid logo-border">
          <img src={logo} alt="logo" className="col logo" />
          <a href="#Overview" className="col-1 pt-5 Overview-link">Overview</a>
          <a href="#RelatedProducts" className="col-2 pt-5 Related-Products-link">Related Products</a>
          <a href="#QandA" className="col-2 pt-5 QandA-link">Question and Answers</a>
          <a href="#ReviewsComponent" className="col-2 pt-5 Reviews-link">Ratings and Reviews</a>
        </div>
        <div className="component-body">
          <a id="Overview">
            <Overview product={prod.product} />
          </a>
          <a id="RelatedProducts">
            <RelatedProducts selectedProduct={this.state.product} />
          </a>
          <a id="QandA">
            <QandA productId={prod.product} />
          </a>
          <a id="ReviewsComponent">
            <ReviewsComponent reviewsData={this.state.reviewsData} />
          </a>
          <div className="container-fluid footer">
            <div className="footer-text">
              Copywrite: BLUEGRASS BANJOS!!!!! @2021
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
