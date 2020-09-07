/* eslint-disable no-console */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/extensions */
import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Carousel from './Carousel.jsx';
import Header from './Header.jsx';
import NavButtons from './NavButtons.jsx';
import Modal from './Modal.jsx';

const HeadingWrapper = styled.div`
  align-items: center;
  background-color: rgb(247, 247, 247);
  display: flex;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  justify-content: space-between;
  padding-bottom: 24px;
`;

const InnerWrapper = styled.div`
  background-color: inherit;
  display: block;
  height: 100%;
  width: 100%;
`;

const MiddleWrapper = styled.div`
  padding-left: 80px;
  padding-right: 80px;
`;

const OuterDiv = styled.div`
  display: flex;
  background-color: rgb(247, 247, 247);
  border-bottom: 1px solid rgb(221, 221, 221);
  display: block;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;
  margin: 0;
  padding: 0;
`;

const OuterWrapper = styled.div`
  margin-right: auto;
  margin-left: auto;
  padding-bottom: 40px;
  padding-top: 40px;
  max-width:1280px;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      suggestedListings: [],
      isLoading: true,
      renderedListings: [],
      modalTriggered: false,
      wasLiked: false,
    };
    this.getListings = this.getListings.bind(this);
    this.renderPage = this.renderPage.bind(this);
    this.renderModal = this.renderModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.renderLike = this.renderLike.bind(this);
  }

  componentDidMount() {
    this.getListings();
  }

  getListings() {
    // original axios get request to mongodb

    // axios.get('/suggestedListings')
    //   .then((response) => {
    //     const suggestedListings = response.data;
    //     console.log(suggestedListings);
    //     this.setState({ suggestedListings, isLoading: false });
    //     this.renderPage(1);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // my get request to postgreSQL database

    axios.get('/listing')
      .then((response) => {
        const suggestedListings = [];
        for (let i = 0; i < response.data.rows.length; i += 1) {
          const listing = response.data.rows[i];
          const newDescription = listing.descrip.slice(1, listing.descrip.length - 1);
          const newRoomType = listing.type_of_room.slice(1, listing.type_of_room.length - 1);
          const newImage = listing.img.slice(1, listing.img.length - 1);
          const newListingFormat = {
            avgRating: listing.avg_rating,
            description: newDescription,
            image: newImage,
            numberOfRatings: listing.number_of_ratings,
            rate: listing.price,
            superhost: listing.superhost,
            wasLiked: listing.was_liked,
            id: listing.id,
          };
          if (listing.number_of_beds === 1) {
            newListingFormat.title = `${newRoomType} · ${listing.number_of_beds} bed`;
          } else {
            newListingFormat.title = `${newRoomType} · ${listing.number_of_beds} beds`;
          }
          suggestedListings.push(newListingFormat);
        }
        this.setState({
          suggestedListings,
          isLoading: false,
        });
        this.renderPage(1);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  hideModal() {
    this.setState({ modalTriggered: false });
  }

  renderModal() {
    this.setState({ modalTriggered: true });
  }

  renderLike() {
    this.setState({ wasLiked: true });
  }

  renderPage(page) {
    if (page === 1) {
      const firstPage = this.state.suggestedListings.slice(0, 4);
      this.setState({ renderedListings: firstPage });
    } else if (page === 2) {
      const secondPage = this.state.suggestedListings.slice(4, 8);
      this.setState({ renderedListings: secondPage });
    } else if (page === 3) {
      const thirdPage = this.state.suggestedListings.slice(8, 12);
      this.setState({ renderedListings: thirdPage });
    }
  }

  render() {
    if (this.state.isLoading) {
      return (<div> . . .</div>);
    }
    return (
      <OuterDiv>
        {this.state.modalTriggered ? (
          <Modal hideModal={this.hideModal} renderLike={this.renderLike} />
        )
          : null}
        <OuterWrapper>
          <MiddleWrapper>
            <HeadingWrapper>
              <Header />
              <NavButtons renderPage={this.renderPage} />
            </HeadingWrapper>
            <Carousel
              carousel={this.state.renderedListings}
              modal={this.renderModal}
              liked={this.state.wasLiked}
            />
          </MiddleWrapper>
        </OuterWrapper>
      </OuterDiv>
    );
  }
}

export default App;
