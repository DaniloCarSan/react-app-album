import styled from 'styled-components';

export const Container = styled.div`
    padding: 60px;
    height: 100vh;
`;

export const Header = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    height: 60px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
    text-transform: uppercase;
`;

export const Content = styled.div`
    margin-top: 30px;
    display: grid;
    background-color: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const Album = styled.div`
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

export const AlbumTitle = styled.div`
    text-transform: capitalize;
    font-size: 20px;
`;