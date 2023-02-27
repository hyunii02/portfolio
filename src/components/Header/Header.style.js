// styled Component
import styled from 'styled-components';

// Header
export const HeaderContainer = styled.div`
  position: sticky;
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  height: 3.5rem;
  width: calc(100% - 1rem);
  z-index: 9;
  top: 0;
`;

// Header Img
export const HeaderLogoImg = styled.img`
  left: 0.5rem;
  top: 0.5rem;
  height: 100%;
  cursor: pointer;
`;


// HeaderDiv
export const HeaderDiv = styled.div`
  display: flex;
`;

export const ProjectDiv = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin: 1.5rem;
  cursor: pointer;
`;
