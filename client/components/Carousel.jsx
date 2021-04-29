/* eslint-disable arrow-body-style */
import React from 'react';
import styled from 'styled-components';
import Description from './Description.jsx';
import Header from './Header.jsx';
import Images from './Images.jsx';
import Listing from './Listing.jsx';
import NightlyRate from './NightlyRate.jsx';
import Rating from './Rating.jsx';

const Item = styled.li`
  margin: 0px 2px;
  max-width: 25%;
  flex: 0 0 25%;
  // added some picture size adjustments because they were overlapping
  min-width: 260px;
`;

const List = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  margin: 0;
  max-width: inherit;
  overflow: hidden;
  padding: 0;
`;

const Wrapper = styled.div`
  background-color: rgb(247, 247, 247);
  display: flex;
  padding 0;
  max-width: 1120px;
`;

const Carousel = (props) => (
  <Wrapper>
    <List>
      {props.carousel.map((listing) => {
        // console.log(listing.superhost);
        // console.log(props.modal);
        return (
          <Item>
            <Images graphics={listing} modal={props.modal} liked={props.liked} />
            <Rating rating={listing} />
            <Listing listing={listing} />
            <Description description={listing} />
            <NightlyRate rate={listing} />
          </Item>
        );
      })}
    </List>
  </Wrapper>
);

export default Carousel;
