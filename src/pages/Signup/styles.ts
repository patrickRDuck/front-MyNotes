import { styled } from 'styled-components' 
import { IPropsTheme } from '../../styles/theme'
import backgroundImg from '../../assets/background.png'

export const Container = styled.div`
    height: 100vh;

    display: flex;
    align-items: stretch;
`

export const Form = styled.form<IPropsTheme>`
    padding: 0 136px;
    
    flex: 0.4;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    text-align: center;
    
    > h1 {
        font-size: 48px;
        color: ${({theme}) => theme.COLORS.ORANGE};
    }

    > h2 {
        font-size: 24px;
        margin: 48px 0;
    }

    > p {
        font-size: 14px;
        color: ${({theme}) => theme.COLORS.GRAY_100};
    }

    > a {
        margin: 60px 0 25px;

        color: ${({theme}) => theme.COLORS.ORANGE};

    }
`

export const Background = styled.div`
    flex: 1;
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;
    filter: brightness(0.45);
`