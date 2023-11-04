import styled from "styled-components";
import { IPropsTheme } from "../../styles/theme.ts";
import { Link } from 'react-router-dom'

export const Container = styled.header<IPropsTheme>`
    grid-area: header;

    height: 105px;
    width: 100%;

    border-bottom: solid 1px ${props => props.theme.COLORS.BACKGROUND_700};

    display: flex;
    justify-content: space-between;

    padding: 0 80px;
`

export const Profile = styled(Link)<IPropsTheme>`
    display: flex;
    align-items: center;

    > img {
        width: 56px;
        height: 56px;
        border-radius: 50%;
    }

    > div {
        display: flex;
        flex-direction: column;
        margin-left: 16px;
        line-height: 24px;

        span {
            font-size: 14px;
            color: ${({theme}) => theme.COLORS.GRAY_100};
        }

        strong {
            font-size: 18px;
            color: ${({theme}) => theme.COLORS.WHITE};
        }
    }
`

export const Logout = styled.button<IPropsTheme>`
    border: none;
    background: none;

    > svg {
        color: ${props => props.theme.COLORS.ORANGE};
        font-size: 36px;
    }
`