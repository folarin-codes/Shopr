import { fireEvent, render } from "@testing-library/react-native";

import SignIn from '../sign-in';


const renderSignInComponent =  ()=>{
    return render(<SignIn/>);

} 

describe('Test the sign in component', ()=>{

    test('The component is visible', () => 
        { 

        const SignInComponent = renderSignInComponent()

        const page = SignInComponent.getByTestId('main-view')

        expect(page).toBeVisible()
    })


    test('check for invalid email address',async ()=>{

        const SignInComponent = renderSignInComponent()
        const emailInput = SignInComponent.getByPlaceholderText("Enter your email address")
        const button = SignInComponent.getByTestId('login')

        fireEvent.changeText(emailInput, "sunfydyddy")
        fireEvent(emailInput, 'blur')
        fireEvent.press(button)

        const errorMessage = await SignInComponent.findByText("Please enter a valid email address")

        expect(errorMessage).toBeVisible()
        expect(button).toBeDisabled()
    })

    test('check for valid mail ', async()=>{

        const SignInComponent = renderSignInComponent()

        const emailInput = SignInComponent.getByPlaceholderText("Enter your email address")
        const button = SignInComponent.getByTestId('login')

        fireEvent.changeText(emailInput, "suberufolarin@gmail.com")
        fireEvent(emailInput, 'blur')
        fireEvent.press(button)

        const errorMessage =  SignInComponent.queryByText("Please enter a valid email address")

        expect(errorMessage).toBeFalsy()
        expect(button).toBeDisabled()


    })


    test('check for less than 8 character password ', async()=>{


        const SignInComponent = renderSignInComponent()

        const passwordInput = SignInComponent.getByPlaceholderText('Enter Password')

        const button = SignInComponent.getByTestId('login')

        fireEvent.changeText(passwordInput, 'd6sudb')

        fireEvent(passwordInput, 'blur')

        fireEvent.press(button)

        const errorMessage = await SignInComponent.findByText('Password must be at least 8 characters')

        expect(errorMessage).toBeVisible()
        expect(button).toBeDisabled()

    })

    test('check for valid password', async()=>{


        const SignInComponent = renderSignInComponent()

        const passwordInput = SignInComponent.getByPlaceholderText('Enter Password')

        const button = SignInComponent.getByTestId('login')

        fireEvent.changeText(passwordInput, 'Folarinjcd0#')

        fireEvent(passwordInput, 'blur')

        fireEvent.press(button)

        const errorMessage1 =  SignInComponent.queryByText("Please enter a valid email address")
        const errorMessage2 =  SignInComponent.queryByText("Password is too long for remembrance")
        const errorMessage3 =  SignInComponent.queryByText("Password must contain at least one uppercase letter")
        const errorMessage4 =  SignInComponent.queryByText("Password must contain at least one lowercase letter")
        const errorMessage5 =  SignInComponent.queryByText("Password must contain at least one number")
        const errorMessage6 =  SignInComponent.queryByText("Password must contain at least one special character")

        expect(errorMessage1).toBeFalsy();
        expect(errorMessage2).toBeFalsy();
        expect(errorMessage3).toBeFalsy();
        expect(errorMessage4).toBeFalsy();
        expect(errorMessage5).toBeFalsy();
        expect(errorMessage6).toBeFalsy();
        expect(button).toBeDisabled()

    })

    test('test for valid email and password', async()=>{

        const SignInComponent = renderSignInComponent()

        const passwordInput = SignInComponent.getByPlaceholderText('Enter Password')
        const emailInput = SignInComponent.getByPlaceholderText('Enter your email address')

        const button = SignInComponent.getByTestId('login')

        fireEvent.changeText(emailInput, 'suberufolarin@gmail.com')

        fireEvent(emailInput, 'blur')

        fireEvent.changeText(passwordInput, 'Folarinjcd0#')

        fireEvent(passwordInput, 'blur')

        fireEvent.press(button)

        expect(button).toBeEnabled()



    })


})