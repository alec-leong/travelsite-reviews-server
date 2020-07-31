import React from 'react';
import styled from 'styled-components';
import _ from 'underscore';

const ReviewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Trip Sans', Arial, sans-serif !important;
`;

const Review = styled.div`
  background-color: rgb(255, 255, 255);
  margin-bottom: ${(props) => props.marginBottom || '12px'};
`;

const Profile = styled.div`
  justify-content: flex-start;
  align-content: flex-start;
  display: flex;
  flex-direction: row;
  margin: ${({ marginTopAndBottom }) => `${marginTopAndBottom}px ${marginTopAndBottom * 1.5}px ${marginTopAndBottom}px ${marginTopAndBottom * 1.5}px` || '12px 18px 12px 18px'};
`;

const ProfileImg = styled.img.attrs((props) => ({
  alt: props.alt,
  src: props.src,
}))`
  height: 45px;
  width: 45px;
  border-radius: 50%;
`;

const ProfileUserContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: flex-start;
  margin-left: 12px;
`;

const UsernameContainer = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 14px;
  line-height: 18px;
  flex-wrap: wrap;
`;

const Username = styled.a.attrs((props) => ({
  href: props.href,
}))`
  color: rgb(0, 0, 0);
  font-weight: 700;
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
`;

const DateOfReview = styled.span`
  color: rgb(71, 71, 71);
`;

const UserLocation = styled.span`
  display: flex;
  flex-direction: row;
  color: rgb(140, 140, 140);
  font-size: 12px;
  line-height: 16px;
`;

const MapMarkerImg = styled.img`
  height: 16px;
`;

const ReportFollowRowReversed = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-start;
  flex-grow: 1;
  align-items: flex-start;
  margin-left: 12px;

`;


const ReportOrFollowButton = styled.button`
  background-color: transparent;
  text-decoration: none;
  border: none;
  cursor: pointer;
  outline: none;
`;

const ReportFollowColumn = styled.div`
display: flex;
flex-direction: column;
align-items: flex-end;

`;

const Circle = styled.span`
  height: 4px;
  width: 4px;
  background-color: rgb(0, 0, 0);
  border-radius: 50%;
  display: inline-block;
  margin-left: 1px;
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 8px 0 rgb(140, 140, 140);, 0 6px 20px 0 rgb(140, 140, 140);;

`;

const MenuItem = styled.a.attrs((props) => ({
  href: props.href,
}))`

font-size: 14px;
text-decoration: none;
color: rgb(140, 140, 140);
:hover {
  color: #000000;
}
`;

const SpanNumContributions = styled.span`
  font-weight: 700;
`;

const SpanNumHelpfulVotes = styled(SpanNumContributions)``;


const InfoColFlex = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${({ marginTopAndBottom }) => `${marginTopAndBottom}px ${marginTopAndBottom * 1.5}px ${marginTopAndBottom}px ${marginTopAndBottom * 1.5}px` || '12px 18px 12px 18px'};
`;

const RatingRowFlex = styled.div`
  display: flex;
  flex-direction: row;
`;

const SpanRatingFilled = styled.span`
  height: 16px;
  width: 16px;
  background-color: #00aa6c;
  border-radius: 50%;
  display: inline-block;
  margin-left: 1px;
`;

const SpanRatingEmpty = styled.span`
  height: 12px;
  width: 12px;
  background-color: #FFFFFF;
  border: 2px solid #00aa6c;
  border-radius: 50%;
  display: inline-block;
  margin-left: 1px;
`;

const SpanTitle = styled.span`
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  margin-top:6px;
`;

const QReviewDescription  = styled.q`
  color: #474747;
  font-size: 16px;
  line-height: 20px;
  // display: inline;
  overflow-wrap:break-word;
  margin-top:6px;

`;

const SpanDate = styled.span`
  color: #000000;
  // display:block;
  font-size:14px;
  height:18px;
  line-height:18px;
  margin-top:12px;
`;

const SpanDateOfExperience = styled.span`
  // display: inline;
  font-weight: 700;
`;

const SpanTripType = styled(SpanDateOfExperience)`
  // display: inline;
  font-weight: 700;
`;

const SpanHelpfulVotes = styled.span`
  padding: 3px 0;
  font-size: 12px;
  line-height: 16px;
  color: #8c8c8c;
  margin-top:12px;
`;

const SpanHelpFulShare = styled.span`
  color:rgb(0, 0, 0);
  cursor:pointer;
  font-size:12px;
  font-weight:700;
  height:20px;
  line-height:20px;
  text-decoration-color:rgb(0, 0, 0);
  text-decoration-line:none;
  text-decoration-style:solid;
  margin-top:12px;

`;

const ButtonHelpful = styled.button`
color: #000000;
cursor:pointer;
font-size:12px;
font-weight:700;
height:20px;
line-height:20px;
margin-top:12px;
text-decoration: none;
border: none;
cursor: pointer;
outline: none;
background-color: transparent;
:hover {
  text-decoration:underline;

}
`;

const ButtonShare = styled(ButtonHelpful)``;

import AES from 'crypto-js/aes';
import SHA256 from 'crypto-js/sha256';
import BASE64 from 'crypto-js/enc-base64';
import UTF16 from 'crypto-js/enc-utf16';
import dotenv from 'dotenv';

dotenv.config();

const key = process.env.REVIEW_LIST_KEY || '';

export default class FlexBox extends React.Component {
  constructor(props) {
    super(props);

    // const monitorHelpfulAndReportFollow = {};
    // for (let i = 0; i < this.props.reviews.length; i += 1) {
    //   monitorHelpfulAndReportFollow[AES.encrypt(`${_id[1]}`, key).toString()] = {
    //     isHelpful: 0, // Possible values: 0, 1.
    //     isReportFollowedClicked: false, // Possible values: true, false.
    //   };
    // }

    this.state = {
      isReportFollowedClicked: false,
      // monitorHelpfulAndReportFollow,
    };

    this.handleReportFollowClick = this.handleReportFollowClick.bind(this);
  }

  handleReportFollowClick() {
    this.setState({
      isReportFollowedClicked: !this.state.isReportFollowedClicked,
    });
  }


  render() {
    const { reviews } = this.props;

    return reviews.length ? (
      <ReviewsContainer>
        {reviews.map(({
          _id,
          username,
          location,
          contributions,
          rating,
          title,
          review,
          dateOfReview,
          dateOfTrip,
          tripType,
          helpful,
        }) => (
        <Review key={SHA256(dateOfTrip + username + _id + dateOfReview).toString()} marginBottom="12px">
          <Profile marginTopAndBottom={12}>
            <a href=""><ProfileImg alt="" src="http://www.newdesignfile.com/postpic/2014/07/generic-profile-avatar_352864.jpg" /></a>    
            <ProfileUserContainer>
              <UsernameContainer>
                <Username href="">{username}</Username>
                <DateOfReview>&nbsp;wrote a review {dateOfReview}</DateOfReview>
              </UsernameContainer>
              <UserLocation>
                <MapMarkerImg alt="" src="https://developers.google.com/maps/images/lhimages/api/icon_placesapi.svg" />
                <span>{location} &#8226; <SpanNumContributions>{contributions}</SpanNumContributions> contribution{contributions > 1 ? 's' : ''} &#8226; <SpanNumHelpfulVotes>{helpful}</SpanNumHelpfulVotes> helpful vote{helpful > 1 ? 's' : ''}</span>
              </UserLocation>
            </ProfileUserContainer>

            <ReportFollowRowReversed>
              <ReportFollowColumn>
                <ReportOrFollowButton name="reportFollowButton" onClick={this.handleReportFollowClick}>
                  <Circle />
                  <Circle />
                  <Circle />
                </ReportOrFollowButton>
                {
                  this.state.isReportFollowedClicked
                    ? <Menu>
                        <MenuItem href="">Report this</MenuItem>
                        <MenuItem href="">Follow</MenuItem>
                      </Menu>
                    : ''
                  }
              </ReportFollowColumn>
            </ReportFollowRowReversed>
          </Profile>

          <InfoColFlex marginTopAndBottom={12}>
            <RatingRowFlex>
              {// Full rating circle
              _.range(0, rating).map((element) => (
                <SpanRatingFilled key={SHA256((element / 2) + dateOfTrip + username + dateOfReview + element).toString(BASE64)}/>
              ))}
              {// Empty rating circle
              _.range(0, rating - 5).map((element) => (
                <SpanRatingEmpty key={SHA256(element + dateOfReview + username + dateOfTrip + (element / 3)).toString(UTF16)}/>
              ))}
            </RatingRowFlex>
            <SpanTitle>{title}</SpanTitle>
            <QReviewDescription>{review}</QReviewDescription>
            <SpanDate><SpanDateOfExperience>Date of experience:</SpanDateOfExperience> {dateOfTrip}</SpanDate>
            <SpanDate><SpanTripType>Trip type:</SpanTripType> {tripType}</SpanDate>
              <SpanHelpfulVotes>{helpful} Helpful Vote{helpful > 1 ? 's' : ''}</SpanHelpfulVotes>
            <span><ButtonHelpful data-parent-id={_id[0]} data-child-id={_id[1]} name="helpfulButton" onClick={this.props.updateHelpful} >👍 Helpful</ButtonHelpful><ButtonShare>✉️ Share</ButtonShare></span>
          </InfoColFlex>

        </Review>
        ))}
      </ReviewsContainer>
    ) : (<p>Could not load reviews</p>)
  }
}
