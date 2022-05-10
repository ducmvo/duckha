import Button from '@components/Button'
import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: 100vh;
`

export const FormWrap = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0 0 150px 0;
`

export const FormTitle = styled.h1`
    font-size: min(3rem, 9vw);
    margin-bottom: 1rem;
`

export const FormContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media screen and (max-width: 480px) {
        padding: 10px;
    }
`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const FormLabel = styled.label`
    font-size: min(6vw, 1.5rem);
    margin-top: 15px;
    text-align: center;
`
export const FormInput = styled.input`
    width: 100%;
    min-width: 250px;

    margin: 0.5rem 0;
    padding: 0.3rem 0.3rem;
    font-size: 1.5rem;
    border: 1px solid ${({ theme }) => theme.colors.text};

    &:focus {
        outline-color: ${({ theme }) => theme.colors.text};
    }
`
export const FormButton = styled(Button)``

export const Text = styled.span`
    text-align: center;
    margin-top: 24px;
    color: #fff;
    font-size: 14px;
`

export const NotFound = styled.div`
    font-size: 1rem;
    text-align: center;
    margin: 10;
    color: salmon;
`

export const RSVPInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
    background: inherit;
`

export const RSVPTitle = styled.div`
    font-size: min(2.5rem, 15vw);
    font-family: 'Ballet';
    padding: 0.2rem;
    background: inherit;
`

export const RSVPContent = styled.div`
    font-family: 'URWGothic';
    letter-spacing: 0.1rem;
    font-size: min(1rem, 5vw);
    padding-bottom: 0.2rem;
    text-transform: uppercase;
    text-align: center;
    background: inherit;
`

export const GuestAttendanceForm = styled.form`
    display: flex;
    flex-direction: column;
    font-size: min(1.2rem, 8vw);
`
export const GuestName = styled.div`
    text-transform: uppercase;
`
export const AttendLabel = styled.div`
    margin: 1rem 0rem;
`
export const InputLabel = styled.label`
    cursor: pointer;
`
export const GuestInput = styled.input`
    margin: 0.5rem 0;
    padding: 0.3rem 0.3rem;
    font-size: min(1rem, 10vw);
    border: 1px solid ${({ theme }) => theme.colors.text};
    &:focus {
        outline-color: ${({ theme }) => theme.colors.text};
    }
    /* &[type='radio']:checked:before {
        content: '';
        display: block;
        position: relative;
        top: 0px;
        left: 0px;
        width: 13px;
        height: 13px;
        border-radius: 100%;
        background: grey;
    } */
`
export const GuestInputTextArea = styled.textarea`
    margin: 0.5rem 0;
    padding: 0.3rem 0.3rem;
    font-size: min(1rem, 10vw);
    border: 1px solid ${({ theme }) => theme.colors.text};
    &:focus {
        outline-color: ${({ theme }) => theme.colors.text};
    }
`
export const GuestInputText = styled.span`
    padding-left: 0.5rem;
`
export const Companions = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 1rem;
`

export const DressCode = styled.div``

export const Message = styled.div`
    color: white;
    height: 50px;
    padding: 0.7rem;
    text-align: center;
    width: min(300px, 80vh);
    font-family: 'URWGothic';
    font-size: 0.8rem;
    text-transform: uppercase;
    background-color: ${({ theme, error }: { theme: any; error: boolean }) =>
        error ? theme.colors.primary : theme.colors.green};
`
