import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

function SignInPage({ signOut, user }) {
    return (
        <>
            <h1>Hello {user.username}</h1>
            <button onClick={signOut}>Sign out</button>
        </>
    );
}

export default withAuthenticator(SignInPage);
