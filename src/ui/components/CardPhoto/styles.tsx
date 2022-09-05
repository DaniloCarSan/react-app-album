import styled from "styled-components";

export const Container = styled.div`
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 10px;
    text-align: center;
    &:hover {
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
        cursor: pointer;
    }
`;

export const Title = styled.p`
    font-weight: bold;
    font-size: 12px;
`;

export const Image = styled.img`
    width: 150px;
    height: 150px;
`;
