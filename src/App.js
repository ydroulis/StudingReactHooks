import logo from './logo.svg';
import './App.css';
// import { Effect } from './components/Effect';
import { Hooks } from './components/Hooks';
import { PostsProvider } from './contexts/PostsProvider';
import { CounterProvider } from './contexts/CounterProvider';
import { AnotherCustomHook } from './components/AnotherCustomHook';
import { Posts } from './components/Posts';
import { CustomHook } from './components/CustomHook';
import { Callback } from './components/Callback';
import { Ref } from './components/Ref';
import { Context } from './components/Context';
import { Reducer } from './components/Reducer';
import { OtherCustomHook } from './components/OtherCustomHook';
import { LastCustomHook } from './components/LastCustomHook';
import { ErrorBoundariesExample } from './components/ErrorBoundariesExample';
import { Compound } from './components/Compound';
import { CodeSplitting } from './components/CodeSplitting';

function App() {
  return (
    <CounterProvider>
      <PostsProvider>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            <Hooks>
              {/* <Effect />
          <Callback /> */}
              {/* <Ref /> */}
              {/* <Context /> */}
              {/* <Reducer /> */}
              {/* <CustomHook /> */}
              {/* <Posts /> */}
              {/* <AnotherCustomHook /> */}
              {/* <OtherCustomHook /> */}
              {/* <LastCustomHook /> */}
              {/* <ErrorBoundariesExample /> */}
              {/* <Compound /> */}
              <CodeSplitting />
            </Hooks>
          </header>
        </div>
      </PostsProvider>
    </CounterProvider>
  );
}

export default App;
