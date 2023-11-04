import styled from "styled-components";
import { IPropsTheme } from "../../styles/theme";

export const Container = styled.button<IPropsTheme>`
    width: 100%;
    height: 56px;
    border: 0;
    padding: 0 16px;
    margin-top: 16px;
    border-radius: 10px;
    font-weight: 500;

    &:disabled {
       opacity: 0.5;
    }

    background-color: ${({theme}) => theme.COLORS.ORANGE};
    color: ${({theme}) => theme.COLORS.BACKGROUND_800};
`