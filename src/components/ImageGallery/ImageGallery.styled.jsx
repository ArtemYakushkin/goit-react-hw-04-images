import styled from "styled-components";

export const ContainerGallery = styled.div`
    max-width: 1240px;
    padding: 0 20px;
    margin: 0 auto;
`;

export const ListGallery = styled.ul`
   list-style: none;
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   grid-gap: 15px;
`;