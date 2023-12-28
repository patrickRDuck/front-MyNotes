import styled from "styled-components";
import { IPropsTheme } from "../../styles/theme";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    
    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas: 
    "header"
    "content";

    > main {
       grid-area: content;
       overflow-y: auto;
       
       .tags {
           display: grid;
           grid-template-columns: 49% 50%;
           gap: 13px;
       }
    }

`

export const Form = styled.div<IPropsTheme>`
    max-width: 550px;
    margin: 38px auto;

    > header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        margin-bottom: 36px;

        button {
            font-size: 20px;
            margin-bottom: -10px;
        }
    }
`