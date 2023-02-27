import React from 'react';
import {useNavigate} from 'react-router-dom';

import {
  HeaderContainer,
  HeaderLogoImg,
  HeaderDiv,
  ProjectDiv,
} from './Header.style';


/** 헤더 컴포넌트 */
function Header() {
  const navigate = useNavigate();

  // click시 이동
  const logoClickHandler = () => {
    navigate('/');
  };

  const ProjectAClickHandler = () => {
    navigate('/ProjectA');
  };

  const ProjectBClickHandler = () => {
    navigate('/ProjectB');
  };

  const ProjectCClickHandler = () => {
    navigate('/ProjectC');
  };

  const ResumeClickHandler = () => {
    navigate('/Resume');
  };

  return (
    <HeaderContainer>
      <HeaderLogoImg
        onClick={logoClickHandler}
        src={process.env.PUBLIC_URL + '/logo192.png'}
      />
      <HeaderDiv>
        <ProjectDiv onClick={ProjectAClickHandler}>ProjectA</ProjectDiv>
        <ProjectDiv onClick={ProjectBClickHandler}>ProjectB</ProjectDiv>
        <ProjectDiv onClick={ProjectCClickHandler}>ProjectC</ProjectDiv>
        <ProjectDiv onClick={ResumeClickHandler}>Resume</ProjectDiv>
      </HeaderDiv>
    </HeaderContainer>
  );
}
export default Header;
