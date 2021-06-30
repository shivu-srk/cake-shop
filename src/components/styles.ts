import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
`;

export const Title = styled.div`
    font-size: 22px;
    font-weight: 600;
    color: #fb4054;
    font-family: cursive;
`;

export const Row = styled.div`
    display: flex;
    align-items: center;
`;

export const Image = styled.img`
    object-fit: scale-down;
    height: 35px;
    margin-right: 10px;
`;

export const SubTitle = styled.div`
    font-size: 18px;
    font-weight: 500;
    font-family: cursive;
    margin-top: 25px;
`;