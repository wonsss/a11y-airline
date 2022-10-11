import { SlideItemProps } from './type';
import styled, { css } from 'styled-components';

const SlideItem = ({
  id,
  location,
  seat,
  price,
  image,
  href,
  width,
}: SlideItemProps & { width: number }) => {
  return (
    <Wrapper data-id={id} width={width}>
      <a href={href}>
        <BgImg src={image} />
        <Description>
          <MainText>{location}</MainText>
          <SubText>{seat}</SubText>
          <EmphasisText>{price}</EmphasisText>
        </Description>
      </a>
    </Wrapper>
  );
};

export default SlideItem;

const Wrapper = styled.li<{ width: number }>`
  ${({ width }) => css`
    min-width: ${width}px;
    display: list-item;
    position: relative;
    font-size: 1rem;
  `}
`;

const BgImg = styled.img`
  width: 100%;
  height: 100%;
  vertical-align: top;
`;

const Description = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  overflow: hidden;
  color: #000;
  padding: 20px;
  box-sizing: border-box;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const MainText = styled.p`
  font-weight: 700;
  margin-bottom: 10px;
  word-wrap: break-word;
  line-height: 1.5;
`;

const SubText = styled.p`
  margin-bottom: 7px;
`;

const EmphasisText = styled.p`
  font-weight: 700;
  text-shadow: -0.5px 0 #fff, 0 0.5px #fff, 0.5px 0 #fff, 0 -0.5px #fff;
`;