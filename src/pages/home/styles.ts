import styled from "styled-components"
import { IPropsTheme } from "../../styles/theme";
import { Link } from 'react-router-dom'

export const Container = styled.div<IPropsTheme>`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-columns: 250px auto;
    grid-template-rows: 105px 128px auto 64px;
    grid-template-areas: 
    "brand header"
    "menu search"
    "menu content"
    "newNote content"
    ;

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
`;

export const Brand = styled.div<IPropsTheme>`
    grid-area: brand;

    display: flex;
    justify-content: center;
    align-items: center;

    border-bottom: 1px solid ${({theme}) => theme.COLORS.BACKGROUND_700};

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};

    > h1 {
        font-size: 24px;
        color: ${({theme}) => theme.COLORS.ORANGE};
    }
`;

export const Menu = styled.ul`
     grid-area: menu;

     padding-top: 64px;
     padding-bottom: 32px;

     height: 430px;
     overflow: scroll;

     &::-webkit-scrollbar-thumb {
          background-color: transparent;
          border-radius: 8px;
     }
     &:hover::-webkit-scrollbar-thumb {
          background-color: ${props => props.theme.COLORS.ORANGE};
     }
     
     background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};

     display: flex;
     flex-direction: column;

     text-align: center;

     > li {
        margin-bottom: 24px;

        &:last-child {
          margin-bottom: 0px;
        }
     }
`;

export const Search = styled.div`
     grid-area: search;

     padding: 64px 64px 0;
     
`;

export const Content = styled.div`
     grid-area: content;

     padding: 0 64px;
     overflow-y: auto;
     
`;

export const NewNote = styled(Link)<IPropsTheme>`
     grid-area: newNote;
     
     background-color: ${({theme}) => theme.COLORS.ORANGE};
     color: ${({theme}) => theme.COLORS.BACKGROUND_900};

     display: flex;
     align-items: center;
     justify-content: center;

     border: none;

     font-size: 15px;

     > svg {
        margin-right: 8px; 
     }
`;