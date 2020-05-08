import styled from 'styled-components';

// const Font = styled('font')`
//   font-family: 'Trip Sans', Arial, sans-serif !important;
//   font-size: 14px;
// `;

// reviews
const Header2 = styled.h2`
  border-bottom: 1px solid #D3D3D3;
  font-family: 'Trip Sans', Arial, sans-serif !important;
  font-size: 28px;
  color: #000a12;
`;

// <p> tag
const P = styled.p`
  font-family: 'Trip Sans', Arial, sans-serif !important;
  font-size: 14px;
  font-weight: 700;
  color: rgb(0, 10, 18);
`;

// checkbox, radio
const Label = styled.label`
  font-family: 'Trip Sans', Arial, sans-serif !important;
  font-size: 14px;
  color: rgb(0, 0, 0)
`;

// number
const Span = styled.span`
  font-family: 'Trip Sans', Arial, sans-serif !important;
  font-size: 14px;
  color: rgb(118, 118, 118);
`;

// half-circle
const HalfCircle = styled.div`
  display: inline-block;
  background-color: #00aa6c;
  height: 16px;
  width: 8px;
  -moz-border-radius: 16px 0 0 16px;
  border-radius: 16px 0 0 16px;
`;

// full-circle
const FullCircle = styled.div`
  display: inline-block;
  background-color: #00aa6c;
  height: 16px;
  width: 16px;
  -webkit-border-radius: 8px;
  -moz-border-radius: 8px;
`;

// transparent-circle
const TransparentCircle = styled.div`
  display: inline-block;
  border: 1px solid #00aa6c;
  height: 14px;
  width: 14px;
  -webkit-border-radius: 7px;
  -moz-border-radius: 7px;
`;

export {
  FullCircle,
  HalfCircle,
  Header2,
  Label,
  P,
  Span,
  TransparentCircle,
};
