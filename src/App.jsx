import { Container } from '@mui/material';
import Searcher from './components/Searcher';
import { useEffect, useState } from "react";
import getGithubUser from './services/users';
import UserCard from './containers/UserCard';

function App() {
  const [inputUser, setInputUser] = useState('octocat');
  const [userState, setUserState] = useState('userState');
  const [notFound, setNotFound] = useState(false);

  const gettingUser = async (user) => {
    const userResponse = await getGithubUser(user);

    if (userState === 'octocat'){
      localStorage.setItem('octocat', userResponse);
    }

    if (userResponse.message === 'Not Found'){
      const { octocat } = localStorage;
      setInputUser(octocat);
      setNotFound(true);
    } else {
      setUserState(userResponse);
      setNotFound(false);
    }
  }

  console.log(userState);

  useEffect(() => {
    gettingUser(inputUser);
  },[inputUser])

  return (
    <div className="App">
      <Container
        sx={{
          background: 'whitesmoke',
          width: '80vw',
          height: '500px',
          borderRadius: '16px',
          marginTop: '40px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <Searcher 
          inputUser={inputUser} 
          setInputUser={setInputUser} 
        />
        <UserCard userState={userState} />
      </Container>
    </div>
  )
}

export default App;
