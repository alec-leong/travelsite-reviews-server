import React from 'react';
import styled from 'styled-components';

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
  /* define border */
  border-top: 2px solid black;
  border-bottom: 2px solid black;
  border-left: 2px solid black;
  border-right: 2px solid black;

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

// const ReportFollowRowReversed = styled.div`
// /* Fill the Remaining Horizontal Space (Width) in Flexbox. */
// flex-grow: 1;
// `;

const ReportFollowRowReversed = styled.div`
border-top: 2px solid black;
border-bottom: 2px solid black;
border-left: 2px solid black;
border-right: 2px solid black;
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
border-top: 2px solid black;
border-bottom: 2px solid black;
border-left: 2px solid black;
border-right: 2px solid black;
  display: flex;
  flex-direction: column;
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

// const FlexBox = () => (
//   <ReviewsContainer>
//     <Review marginBottom="12px">
//       <Profile marginTopAndBottom={12}>
//         {/* <ProfileImgContainer> */}
//         <a href=""><ProfileImg alt="" src="http://www.newdesignfile.com/postpic/2014/07/generic-profile-avatar_352864.jpg" /></a>
//         {/* </ProfileImgContainer> */}

//         <ProfileUserContainer>
//           <UsernameContainer>
//             <Username href="">RojoPanda18</Username>
//             <DateOfReview>&nbsp;wrote a review Jul 9</DateOfReview>
//           </UsernameContainer>
//           <UserLocation>
//             <MapMarkerImg alt="" src="https://developers.google.com/maps/images/lhimages/api/icon_placesapi.svg" />
//             San Diego, California &#8226; 41 contributions &#8226; 3 helpful votes
//           </UserLocation>
//         </ProfileUserContainer>
//         <ReportFollowRowReversed>
//           <Circle />
//           <Circle />
//           <Circle />
//         </ReportFollowRowReversed>
//       </Profile>

//     </Review>
//   </ReviewsContainer>
// );

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


export default class FlexBox extends React.Component {
  // state = { 
  //   isReportFollowedClicked: false,
  //   helpful: 1,
  // }

  // handleReportFollowClick = () => this.setState({ isReportFollowedClicked: !this.state.isReportFollowedClicked })
  // incrementHelpful = () => this.setState({ helpful: this.state.helpful + 1 });
  constructor(props) {
    super(props);

    this.state = {
      isReportFollowedClicked: false,
      helpful: 1,
    };

    this.handleReportFollowClick = this.handleReportFollowClick.bind(this);
    this.incrementHelpful = this.incrementHelpful.bind(this);
  }

  handleReportFollowClick() {
    this.setState({
      isReportFollowedClicked: !this.state.isReportFollowedClicked,
    });
  }

  incrementHelpful() {
    this.setState({ helpful: this.state.helpful + 1 });
  }

  render() {
    return (
      <ReviewsContainer>
        <Review marginBottom="12px">

          <Profile marginTopAndBottom={12}>
            <a href=""><ProfileImg alt="" src="http://www.newdesignfile.com/postpic/2014/07/generic-profile-avatar_352864.jpg" /></a>    
            <ProfileUserContainer>
              <UsernameContainer>
                <Username href="">RojoPanda18</Username>
                <DateOfReview>&nbsp;wrote a review Jul 9</DateOfReview>
              </UsernameContainer>
              <UserLocation>
                <MapMarkerImg alt="" src="https://developers.google.com/maps/images/lhimages/api/icon_placesapi.svg" />
                <span>San Diego, California &#8226; <SpanNumContributions>41</SpanNumContributions> contributions &#8226; <SpanNumHelpfulVotes>3</SpanNumHelpfulVotes> helpful votes</span>
              </UserLocation>
            </ProfileUserContainer>

            <ReportFollowRowReversed>
              <ReportFollowColumn>
                <ReportOrFollowButton onClick={this.handleReportFollowClick}>
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
              <SpanRatingFilled /><SpanRatingEmpty />
            </RatingRowFlex>
            <SpanTitle>Good for one-time visit</SpanTitle>
            <QReviewDescription>I think my wife enjoyed this more than I did, but I did get free ice cream at the end, so who's complaining. Great time, good for pictures.</QReviewDescription>
            <SpanDate><SpanDateOfExperience>Date of Experience:</SpanDateOfExperience> January 2020</SpanDate>
            <SpanHelpfulVotes>{this.state.helpful} Helpful Vote</SpanHelpfulVotes>
            <span><ButtonHelpful onClick={this.incrementHelpful}>👍 Helpful</ButtonHelpful><ButtonShare>✉️ Share</ButtonShare></span>
          </InfoColFlex>

        </Review>
      </ReviewsContainer>
    )
  }
}
