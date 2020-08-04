import _ from 'underscore';
import BASE64 from 'crypto-js/enc-base64';
import PropTypes from 'prop-types';
import React from 'react';
import SHA256 from 'crypto-js/sha256';
import styled from 'styled-components';
import UTF16 from 'crypto-js/enc-utf16';

const ReviewsFlexCol = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Trip Sans', Arial, sans-serif !important;
`;

const ReviewFlexItem = styled.div`
  background-color: rgb(255, 255, 255);
  margin-bottom: ${(props) => props.marginBottom || '12px'};
`;

const ProfileFlexRow = styled.div`
  align-content: flex-start;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: ${({ marginTopAndBottom }) => `${marginTopAndBottom}px ${marginTopAndBottom * 1.5}px ${marginTopAndBottom}px ${marginTopAndBottom * 1.5}px` || '12px 18px 12px 18px'};
`;

const ProfileImg = styled.img.attrs((props) => ({
  alt: props.alt,
  src: props.src,
}))`
  border-radius: 50%;
  height: 45px;
  width: 45px;
`;

const ProfileUserFlexCol = styled.div`
  align-content: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 12px;
`;

const UsernameFlexRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-size: 14px;
  line-height: 18px;
`;

const UsernameAnchor = styled.a.attrs((props) => ({
  href: props.href,
}))`
  color: rgb(0, 0, 0);
  font-weight: 700;
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
`;

const DateOfReviewSpan = styled.span`
  color: rgb(71, 71, 71);
`;

const UserLocationFlexRow = styled.span`
  color: rgb(140, 140, 140);
  display: flex;
  flex-direction: row;
  font-size: 12px;
  line-height: 16px;
`;

const MapMarkerImg = styled.img`
  height: 16px;
`;

const ReportFollowFlexRowReversed = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: row-reverse;
  flex-grow: 1;
  justify-content: flex-start;
  margin-left: 12px;
`;

const ReportOrFollowButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  text-decoration: none;
`;

const ReportFollowFlexCol = styled.div`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
`;

const MenuFlexCol = styled.div`
  box-shadow: 0 4px 8px 0 rgb(140, 140, 140);, 0 6px 20px 0 rgb(140, 140, 140);
  display: flex;
  flex-direction: column;
`;

const MenuItemAnchor = styled.a.attrs((props) => ({
  href: props.href,
}))`
  color: rgb(140, 140, 140);
  font-size: 14px;
  margin: 4px 6px 4px 6px;
  text-decoration: none;
  :hover {
    color: #000000;
  }
`;

const NumContributionsSpan = styled.span`
  font-weight: 700;
`;

const NumHelpfulVotesSpan = styled(NumContributionsSpan)``;

const ReviewDetailsFlexCol = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${({ marginTopAndBottom }) => `${marginTopAndBottom}px ${marginTopAndBottom * 1.5}px ${marginTopAndBottom}px ${marginTopAndBottom * 1.5}px` || '12px 18px 12px 18px'};
`;

const RatingFlexRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const RatingFullSpan = styled.span`
  background-color: #00aa6c;
  border-radius: 50%;
  height: 16px;
  display: inline-block;
  margin-left: 1px;
  width: 16px;
`;

const RatingEmptySpan = styled.span`
  background-color: #FFFFFF;
  border: 2px solid #00aa6c;
  border-radius: 50%;
  display: inline-block;
  height: 12px;
  margin-left: 1px;
  width: 12px;
`;

const TitleSpan = styled.span`
  font-size: 18px;
  font-weight: 700;
  line-height: 22px;
  margin-top: 6px;
`;

const ReviewDescriptionQ = styled.q`
  color: #474747;
  // display: inline;
  font-size: 16px;
  line-height: 20px;
  margin-top: 6px;
  overflow-wrap: break-word;
`;

const DateSpan = styled.span`
  color: #000000;
  // display:block;
  font-size: 14px;
  height: 18px;
  line-height: 18px;
  margin-top: 12px;
`;

const DateOfExperienceSpan = styled.span`
  // display: inline;
  font-weight: 700;
`;

const TripTypeSpan = styled(DateOfExperienceSpan)`
  // display: inline;
  font-weight: 700;
`;

const HelpfulVotesSpan = styled.span`
  color: #8c8c8c;
  font-size: 12px;
  line-height: 16px;
  margin-top: 12px;
  padding: 3px 0;
`;

const HelpfulButton = styled.button`
  background-color: transparent;
  border: none;
  color: #000000;
  cursor: pointer;
  font-size: 12px;
  font-weight: 700;
  height: 20px;
  line-height: 20px;
  margin-top: 12px;
  outline: none;
  text-decoration: none;
  :hover {
    text-decoration:underline;
  }
`;

const ShareButton = styled(HelpfulButton)``;

export default class ReviewList extends React.Component {
  constructor(props) {
    super(props);

    const { reviews } = this.props;
    const tracklHelpfulAndReportFollow = {};

    if (Array.isArray(reviews)) {
      for (let i = 0; i < reviews.length; i += 1) {
        const { publicReviewId } = reviews[i];

        tracklHelpfulAndReportFollow[publicReviewId] = {
          isHelpful: 0,
          isReportFollowedClicked: false,
        };
      }
    }

    this.state = {
      tracklHelpfulAndReportFollow,
    };

    this.handleReportFollowClick = this.handleReportFollowClick.bind(this);
    this.updateHelpful = this.updateHelpful.bind(this);
  }

  handleReportFollowClick(event) {
    const { value } = event.target; // value: String
    const publicReviewId = event.target.getAttribute('data-public-review-id');
    const { tracklHelpfulAndReportFollow } = this.state;
    tracklHelpfulAndReportFollow[publicReviewId].isReportFollowedClicked = value === 'false' ? true : false;

    this.setState({
      tracklHelpfulAndReportFollow,
    });
  }

  updateHelpful(event) {
    const { value } = event.target;
    const num = Number.parseInt(value, 10);
    const publicListingId = event.target.getAttribute('data-public-listing-id');
    const publicReviewId = event.target.getAttribute('data-public-review-id');
    const { tracklHelpfulAndReportFollow } = this.state;
    const { updateHelpful } = this.props;

    if (num === 1) {
      tracklHelpfulAndReportFollow[publicReviewId].isHelpful -= 1;

      updateHelpful({
        publicListingId,
        publicReviewId,
        operand: -1,
      });
    } else if (num === 0) {
      tracklHelpfulAndReportFollow[publicReviewId].isHelpful += 1;

      updateHelpful({
        publicListingId,
        publicReviewId,
        operand: 1,
      });
    }

    this.setState({
      tracklHelpfulAndReportFollow,
    });
  }

  render() {
    const { reviews } = this.props;
    const { tracklHelpfulAndReportFollow } = this.state;
    return reviews.length ? (
      <ReviewsFlexCol>
        {reviews.map(({
          publicReviewId,
          publicListingId,
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
          <ReviewFlexItem key={publicReviewId} marginBottom="12px">
            <ProfileFlexRow marginTopAndBottom={12}>
              <a href="">
                <ProfileImg
                  alt=""
                  src="http://www.newdesignfile.com/postpic/2014/07/generic-profile-avatar_352864.jpg"
                />
              </a>
              <ProfileUserFlexCol>
                <UsernameFlexRow>
                  <UsernameAnchor href="">{username}</UsernameAnchor>
                  <DateOfReviewSpan>
                    &nbsp;wrote a review&nbsp;
                    {dateOfReview}
                  </DateOfReviewSpan>
                </UsernameFlexRow>
                <UserLocationFlexRow>
                  <MapMarkerImg
                    alt=""
                    src="https://developers.google.com/maps/images/lhimages/api/icon_placesapi.svg"
                  />
                  <span>
                    {location}
                    &nbsp;&#8226;&nbsp;
                    <NumContributionsSpan>{contributions}</NumContributionsSpan>
                    &nbsp;contribution
                    {contributions > 1 ? 's' : ''}
                    &nbsp;&#8226;&nbsp;
                    <NumHelpfulVotesSpan>{helpful}</NumHelpfulVotesSpan>
                    &nbsp;helpful vote
                    {helpful > 1 ? 's' : ''}
                  </span>
                </UserLocationFlexRow>
              </ProfileUserFlexCol>

              <ReportFollowFlexRowReversed>
                <ReportFollowFlexCol>
                  <ReportOrFollowButton 
                    name="reportFollowButton"
                    value={tracklHelpfulAndReportFollow[publicReviewId].isReportFollowedClicked}
                    data-public-review-id={publicReviewId}
                    onClick={this.handleReportFollowClick}
                  >
                    &#8226;
                    &#8226;
                    &#8226;
                  </ReportOrFollowButton>
                  {
                    tracklHelpfulAndReportFollow[publicReviewId].isReportFollowedClicked
                      ? (
                        <MenuFlexCol>
                          <MenuItemAnchor href="">Report this</MenuItemAnchor>
                          <MenuItemAnchor href="">Follow</MenuItemAnchor>
                        </MenuFlexCol>
                      )
                      : ''
                    }
                </ReportFollowFlexCol>
              </ReportFollowFlexRowReversed>
            </ProfileFlexRow>

            <ReviewDetailsFlexCol marginTopAndBottom={12}>
              <RatingFlexRow>
                {// Full rating circle
                _.range(0, rating).map((element) => (
                  <RatingFullSpan
                    key={
                      SHA256(
                        (element / 2)
                        + dateOfTrip
                        + username
                        + dateOfReview
                        + element,
                      ).toString(BASE64)
                    }
                  />
                ))
                }
                {// Empty rating circle
                _.range(0, rating - 5).map((element) => (
                  <RatingEmptySpan
                    key={
                      SHA256(
                        element
                        + dateOfReview
                        + username
                        + dateOfTrip
                        + (element / 3),
                      ).toString(UTF16)
                    }
                  />
                ))
                }
              </RatingFlexRow>
              <TitleSpan>{title}</TitleSpan>
              <ReviewDescriptionQ>{review}</ReviewDescriptionQ>
              <DateSpan>
                <DateOfExperienceSpan>Date of experience:&nbsp;</DateOfExperienceSpan>
                {dateOfTrip}
              </DateSpan>
              <DateSpan>
                <TripTypeSpan>Trip type:&nbsp;</TripTypeSpan>
                {tripType}
              </DateSpan>
              <HelpfulVotesSpan>
                {helpful}
                &nbsp;Helpful Vote
                {helpful > 1 ? 's' : ''}
              </HelpfulVotesSpan>
              <span>
                <HelpfulButton
                  data-public-listing-id={publicListingId}
                  data-public-review-id={publicReviewId}s
                  name="helpfulButton"
                  value={tracklHelpfulAndReportFollow[publicReviewId].isHelpful}
                  onClick={this.updateHelpful}
                >
                  👍 Helpful
                </HelpfulButton>
                <ShareButton>✉️ Share</ShareButton>
              </span>
            </ReviewDetailsFlexCol>

          </ReviewFlexItem>
        ))}
      </ReviewsFlexCol>
    ) : (<p>Could not find reviews</p>);
  }
}

ReviewList.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
  updateHelpful: PropTypes.func.isRequired,
};
