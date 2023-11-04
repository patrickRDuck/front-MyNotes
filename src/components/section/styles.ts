import styled from "styled-components";
import { IPropsTheme } from "../../styles/theme";

export const Container = styled.section<IPropsTheme>`
    margin: 28px 0;

    > h2 {
        border-bottom: 1px solid ${props => props.theme.COLORS.BACKGROUND_700};

        padding-bottom: 16px;
        margin-bottom: 28px;

        color: ${props => props.theme.COLORS.GRAY_100};
        font-size: 20px;
        font-weight: 400;
    }
`