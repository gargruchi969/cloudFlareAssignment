import { Router } from "@reach/router";
import './App.css';
import Posts from './components/posts'
import CreatePost from './components/createpost'

function App() {
  const username = getUsername() || 'ruchi.garg';
  console.log(username);
  if (!username) {
    return null;
  }
  return (
    <Router>
      <Posts path="/" username={username} />
      <CreatePost path="/posts/create" username={username} />
    </Router>
  );
}

function getUsername() {
  console.log(window.location.href);
  const currentUrl = new URL(window.location.href);
  const searchParams = currentUrl.searchParams;
  return searchParams && searchParams.get('username');
}
export default App;