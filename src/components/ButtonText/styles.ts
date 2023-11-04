import styled from "styled-components";
import { IPropsTheme } from "../../styles/theme";

interface IProps extends IPropsTheme {
    $isactive: string
}

export const Container = styled.button<IProps>`
    border: 1px solid transparent;
    background: none;

    width: fit-content;
    height: fit-content;

    color: ${({theme, $isactive}) => JSON.parse($isactive) ? theme.COLORS.ORANGE : theme.COLORS.GRAY_100};
    font-size: 16px;

    transition: all 250ms ease-out;

    &:hover {
        border-bottom: 1px solid ${({theme, $isactive}) => JSON.parse($isactive) ? theme.COLORS.ORANGE : theme.COLORS.GRAY_100};
    }
`