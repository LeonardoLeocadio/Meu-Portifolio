import styled from 'styled-components';
import Avatar from "../../../../assets/images/Foto LinkedIn.jpeg";

const StyledHero = styled.div`
  background-color: black ;
`;

const Styledimg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;
const Hero = () => {
  return (
    <StyledHero>
      Olá
      <Styledimg src={Avatar} />
    </StyledHero>
  );
};

export default Hero;