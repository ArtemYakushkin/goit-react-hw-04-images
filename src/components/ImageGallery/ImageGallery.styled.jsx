import styled from 'styled-components';

export const ContainerGallery = styled.div`
  max-width: 1240px;
  padding: 110px 20px 0 20px;
  margin: 0 auto;
`;

export const ListGallery = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
