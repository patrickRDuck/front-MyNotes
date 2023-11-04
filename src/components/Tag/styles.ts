import styled from "styled-components";
import { IPropsTheme } from "../../styles/theme";

export const Container = styled.span<IPropsTheme>`
    font-size: 13px;
    color: ${props => props.theme.COLORS.BACKGROUND_900};
    background-color: ${props => props.theme.COLORS.ORANGE};

    padding: 5px 14px;
    border-radius: 5px;
    margin-right: 6px;
`