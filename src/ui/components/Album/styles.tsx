import styled from 'styled-components';

export const Container = styled.div`
    padding: 25px;
    border-bottom: 1px solid #eee;
    transition: all 0.2s ease-in-out;
   
    flex-direction: row;
    display: flex;

    &:hover {
        background-color: #eee;
        cursor: pointer;
    }
`;

export const Order = styled.div`
    font-size: 20px;
    margin-right: 20px;
`;

export const Title = styled.div`
    text-transform: capitalize;
    font-size: 20px;
`;