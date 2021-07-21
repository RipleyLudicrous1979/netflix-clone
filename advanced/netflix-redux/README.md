# Learn Redux by Building Netflix.

<img src="../../md-images/learning-react-by-building-netflix.png" alt="learn-react-by-building-netflix"/>

> Click :star: if you like the project. Pull Request are highly appreciated :heart:

I'm Hiep. I work as a full-time software engineer. Most of my open-source projects are focused on one thing - to help people learn 📚. 

The repository helps you learn Redux by buiding Netflix. It means that you are learning Redux by building a real-life project. I will explain concepts in details. This post is the second part in my series and it is suitable for beginners.

My post is about __Learn Redux By Building Netflix__ on Dev.to: https://dev.to/hieptl/learn-react-redux-by-building-netflix-bd5

> If you feel the repository is useful, please help me share the post and give me a Github :star:. It will make me feel motivation to work even harder. I will try to make many open sources and share to the community.
>

## __Preface__

This course will help you to learn Redux by building Netflix. It means that you are learning by doing a real-life project.

## __Table of Contents__
| No. | Topics |
| --- | --------- |
|0  | [How to Run the Project.](#how-to-run-the-project) |
|1  | [Live Demo.](#live-demo) |
|2  | [Introduction about the Creator.](#introduction-about-the-creator) |
|2.1  | [&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Greenwich University.](#greenwich-university) |
|2.2  | [&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hitachi Vantara Vietnam.](#hitachi-vantara-vietnam) |
|3  | [Prequisites.](#prequisites) |
|3.1  | [&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Softwares.](#softwares) |
|3.2  | [&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Technical Skills.](#technical-skills) |
|3.3  | [&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Materials.](#materials) |
|4  | [Purposes of the Course.](#purposes-of-the-course) |
|4.1  | [&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Final Project.](#final-project) |
|4.2  | [&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Job.](#job) |
|5  | [Redux.](#redux) |
|5.1  | [&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;What.](#what) |
|5.1.1  | [&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Core Principles.](#core-principles) |
|5.1.1  | [&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Disadvantages.](#disadvantages) |
|5.2  | [&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Why.](#why) |
|5.3  | [&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;How.](#how) |
|5.4  | [&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;When.](#when) |(#useful-resources-to-learn-react) |
|6  | [Apply Redux to Netflix.](#apply-redux-to-netflix) |
|7  | [Conclusion.](#conclusion) |
|8  | [References.](#references) |

## __Table of Images.__
| No. | Topics |
| --- | --------- |
|1  | [Figure 1: Redux.](#figure1) |
|2  | [Figure 2: Apply Redux to Netflix.](#figure2) |

<a id="how-to-run-the-project"></a>
## __0. How to Run the Project.__

- Step 1: Clone the project by using git clone or download the zip file.

- Step 2: Open "terminal" / "cmd" / "gitbash" and change directory to "netflix-clone" and run "npm install" to install dependencies.

- Step 3: Run "npm start" to run the fron-end project.

<a id="live-demo"></a>
## __1. Live Demo.__

- https://s46s9.csb.app/

<a id="introduction-about-the-creator"></a>
## __2. Introduction about the Creator.__

<a id="greenwich-university"></a>
### __2.1. Greenwich University.__

- Valedictorian.

- GPA 4.0 / 4.0.

- Machine Learning paper - Recommendation System - IEEE/ICACT2020.

- Co-Founder / Mentor IT club.

<a id="hitachi-vantara-vietnam"></a>
### __2.2. Hitachi Vantara Vietnam.__

- Employee of the year.

- Second prize - innovation contest.

- Techlead - HN branch.

- One of CoE Leaders (Center of Excellence).

<a id="prequisites"></a>
## __3. Prequisites.__

<a id="softwares"></a>
### __3.1. Softwares.__

- Install NodeJS.

- An IDE or a text editor (VSCode, Intellij, Webstorm, etc).

<a id="technical-skills"></a>
### __3.2. Technical Skills.__

- Basic programming skill.

- Basic HTML, CSS, JS skills.

- Basic React skill.

<a id="materials"></a>
### __3.3. Materials.__

- Html, css, js (source code) was prepared because I want to focus on React and share knowledge about React. Building html and css from scratch would take a lot of time.

- README.md (the md file will contain everything about the course).

- Netflix data will be used to import to Firebase. In this course, we use Firebase as our back-end service.

<a id="purposes-of-the-course"></a>
## __4. Purposes of the Course.__

<a id="final-project"></a>
### __4.1. Final Project.__

- The course would help you have understanding about React.

- You could build the final project with end-to-end solution (front-end solution using React and back-end solution using Firebase).

<a id="job"></a>
### __4.2. Job.__

- After finishing the course, you could get a job with fresher / junior position.

<a id="redux"></a>
## __5. Redux.__

<a id="figure1"></a>
<img src="../../md-images/redux-architecture.gif" alt="redux" width="666"/>

Figure 1. Redux.

<a id="what"></a>
### __5.1 What.__

- Redux is a predictable state container for JavaScript apps based on the Flux design pattern. Redux can be used together with React, or with any other view library. It is tiny (about 2kB) and has no dependencies.

- Redux follows three fundamental principles:

<a id="core-principles"></a>
#### __5.1.1 Core Principles.__

- __Single source of truth:__ The state of your whole application is stored in an object tree within a single store. The single state tree makes it easier to keep track of changes over time and debug or inspect the application.

- __State is read-only:__ The only way to change the state is to emit an action, an object describing what happened. This ensures that neither the views nor the network callbacks will ever write directly to the state.

- __Changes are made with pure functions:__ To specify how the state tree is transformed by actions, you write reducers. Reducers are just pure functions that take the previous state and an action as parameters, and return the next state.

<a id="disadvantages"></a>
#### __5.1.2 Disadvantages.__

- __You will need to learn to avoid mutations:__ Flux is un-opinionated about mutating data, but Redux doesn't like mutations and many packages complementary to Redux assume you never mutate the state. You can enforce this with dev-only packages like redux-immutable-state-invariant, Immutable.js, or instructing your team to write non-mutating code.

- __You're going to have to carefully pick your packages:__ While Flux explicitly doesn't try to solve problems such as undo/redo, persistence, or forms, Redux has extension points such as middleware and store enhancers, and it has spawned a rich ecosystem.

- __There is no nice Flow integration yet:__ Flux currently lets you do very impressive static type checks which Redux doesn't support yet.

<a id="why"></a>
### __5.2 Why.__

- Redux allows you to manage your app’s state in a single place and keep changes in your app more predictable and traceable. It makes it easier to reason about changes occurring in your app.

<a id="how"></a>
### __5.3 How.__

- Create __actions__. An action is a plain JavaScript object that has a type field. You can think of an action as an event that describes something that happened in the application. The type field should be a string that gives this action a descriptive name, like "todos/todoAdded". We usually write that type string like "domain/eventName", where the first part is the feature or category that this action belongs to, and the second part is the specific thing that happened. An action object can have other fields with additional information about what happened. By convention, we put that information in a field called payload.

- Create __reducers__. A reducer is a function that receives the current state and an action object, decides how to update the state if necessary, and returns the new state: (state, action) => newState. You can think of a reducer as an event listener which handles events based on the received action (event) type.

- Create __store__. The current Redux application state lives in an object called the store .

- The Redux store has a method called __dispatch__. The only way to update the state is to call store.dispatch() and pass in an action object. The store will run its reducer function and save the new state value inside, and we can call getState() to retrieve the updated value.

- __Selectors__ are functions that know how to extract specific pieces of information from a store state value. As an application grows bigger, this can help avoid repeating logic as different parts of the app need to read the same data

<a id="when"></a>
### __5.4 When.__

- One simple answer to this question is you will realize for yourself when you need Redux. If you’re still confused as to whether you need it, you don’t. This usually happens when your app grows to the scale where managing app state becomes a hassle; and you start looking out for making it easy and simple.

<a id="apply-redux-to-netflix"></a>
## __6. Apply Redux to Netflix.__

<a id="figure2"></a>
<img src="../../md-images/netflix-loading-indicator.png" alt="redux" width="666"/>

Figure 2. Apply Redux to Netflix.

In order to understand about Redux, we will apply Redux to our Netflix application. Redux should be used to manage global state in our application. For this reason, we will use Redux to manage state of __Loading__ component because __Loading__ component could be shared in our application.

Step 1: Create __Loading__ component in __components/loading__ folder. 

```js
function Loading() {
  return (
    <div className="lds-roller">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default Loading;
```

Step 2: Update styling for __Loading__ component by add css to __index.css__ file.

```js
...

.lds-roller {
  display: inline-block;
  position: fixed;
  top: 50%;
  left: 50%;
  width: 80px;
  height: 80px;
}
.lds-roller div {
  animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  transform-origin: 40px 40px;
}
.lds-roller div:after {
  content: " ";
  display: block;
  position: absolute;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #fff;
  margin: -4px 0 0 -4px;
}
.lds-roller div:nth-child(1) {
  animation-delay: -0.036s;
}
.lds-roller div:nth-child(1):after {
  top: 63px;
  left: 63px;
}
.lds-roller div:nth-child(2) {
  animation-delay: -0.072s;
}
.lds-roller div:nth-child(2):after {
  top: 68px;
  left: 56px;
}
.lds-roller div:nth-child(3) {
  animation-delay: -0.108s;
}
.lds-roller div:nth-child(3):after {
  top: 71px;
  left: 48px;
}
.lds-roller div:nth-child(4) {
  animation-delay: -0.144s;
}
.lds-roller div:nth-child(4):after {
  top: 72px;
  left: 40px;
}
.lds-roller div:nth-child(5) {
  animation-delay: -0.18s;
}
.lds-roller div:nth-child(5):after {
  top: 71px;
  left: 32px;
}
.lds-roller div:nth-child(6) {
  animation-delay: -0.216s;
}
.lds-roller div:nth-child(6):after {
  top: 68px;
  left: 24px;
}
.lds-roller div:nth-child(7) {
  animation-delay: -0.252s;
}
.lds-roller div:nth-child(7):after {
  top: 63px;
  left: 17px;
}
.lds-roller div:nth-child(8) {
  animation-delay: -0.288s;
}
.lds-roller div:nth-child(8):after {
  top: 56px;
  left: 12px;
}
@keyframes lds-roller {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
```

- Step 3: Create __src/actions__ folder to store different actions in our application.

- Step 4: As mentioned before, we need to manage state of __Loading__ component. For this reason, __LoadingActions.js__ will be created in __src/actions__ folder.

```js
export const SHOW_LOADING = "SHOW_LOADING";
export const HIDE_LOADING = "HIDE_LOADING";
```

> 1st NOTE
>
> - In this case, we define two actions. The first action will be used to update the state and then __Loading__ component will be shown.
>
> - The second action will be used to udpate the state and hide __Loading__ component.
>

- Step 5: Create __src/reducers__ folder to store different actions in our application.

- Step 6: Create __LoadingReducer.js__ inside __src/reducers__ folder. It will act as a reducer to update the state of __Loading__ componnent by following the given action. 

```js
// import action types.
import * as loadingActionTypes from "../actions/LoadingActions";

// initial state.
const initialState = {
  isShown: false
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case loadingActionTypes.SHOW_LOADING:
      return {
        isShown: true
      };
    case loadingActionTypes.HIDE_LOADING:
      return {
        isShown: false
      };
    default:
      return state;
  }
}
```

> 2nd NOTE
>
> - We need to import the action types because the reducer will update the state by following the given action types. 
>
> - We define the initial state for our loading reducer. In this case, __isShown: false__ determines that __Loading__ component will be hidden by default.
>
> - Reducer is just a pure function that accepts initialState as the first parameter and the action as the second parameter.
>
> - In fact, we will have many reducers in our application. Therefore, the best practice is to combine all reducers into a single reducer. 

- Step 7: create __index.js__ file inside __src/reducers__ folder. This file will be used to combine all reducers in our application. 

```js
// import other reducers.
import loading from "./LoadingReducer";
// import combine reducers.
import { combineReducers } from "@reduxjs/toolkit";

export default combineReducers({
  loading
});
```

> 3rd NOTE:
>
> - We import __loading__ reducer. We can import many reducers to combine when our application is scaling.
>
> - __combineReducers__ will be used to combine different reducers.
>
> - we export the result from __combineReducers__ as the root reducer.

- Step 8: Create __store.js__ in __src__ folder. This file will be used to create the global store. 

```js
// import create store.
import { createStore } from "@reduxjs/toolkit";
// import root reducer.
import rootReducer from "./reducers";

export default createStore(rootReducer);
```

> 4th NOTE:
>
> - We import the root reducer.
> 
> - __createStore__ is used to create the global store. It accepts the root reducer as the first parameter.
>
> - It is time to make our store be shared across the application.
>

- Step 9: Upate the __index.js__ with the following code:

```js
/**
 * Github: https://github.com/hieptl/netflix-clone.
 * Dev.to: https://dev.to/hieptl/learn-react-by-building-netflix-1127
 */
import { StrictMode } from "react";
import ReactDOM from "react-dom";
// import provider to provide the store globally.
import { Provider } from "react-redux";
// import App component.
import App from "./App";
// import the root store.
import store from "./store";
// replace App component to the root document.
const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>,
  rootElement
);
```

> 5th NOTE:
>
> - We import the created store and make it be global by using __Provider__.
>
> - We need to get the state from the store and show __Loading__ component as needed.
> 

- Step 10: Update the __App.js__ file with the following code:

```js
/**
 * Github: https://github.com/hieptl/netflix-clone.
 * Dev.to: https://dev.to/hieptl/learn-react-by-building-netflix-1127
 */
// import react router dom.
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import custom components.
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Loading from "./components/loading/Loading";
// import global styling.
import "./index.css";
// import use selector to get state from the store.
import { useSelector } from "react-redux";
// create App components.
function App() {
  const loading = useSelector((state) => state.loading);
  return (
    <>
      <Router>
        <Switch>
          {/* Home Route */}
          <Route exact path="/">
            <Home />
          </Route>
          {/* End Home Route */}
          {/* Login Route */}
          <Route exact path="/login">
            <Login />
          </Route>
          {/* End Login Route */}
        </Switch>
      </Router>
      {loading && loading.isShown && <Loading />}
    </>
  );
}
// export App component.
export default App;
```

> 6th NOTE: 
>
> - In order to get the state from the store, we need to use __useSelector__.
> 
> - We can imagine that our store is just a big json object. 
>
> ```js
> {
>   loading: {
>     isShown: false
>   }
> }
> ```
>
> - That's why we write __const loading = useSelector((state) => state.loading);__ to get the loading state.
>
> - In this case, we apply conditional rendering to show / hide __Loaidng__ component based on the value of __loading.isShown__. It means that __Loading__ component will be shown when __loading.isShown__ is equal to true and vice versa.
>
> - The last but not least, we need to know how to dispatch actions to show / hide __Loading__ component such as showing __Loaidng__ component when fetching data from the server.

- Step 11: Update __Row__ component with the following code:

```js
/**
 * Github: https://github.com/hieptl/netflix-clone.
 * Dev.to: https://dev.to/hieptl/learn-react-by-building-netflix-1127
 */
// import react.
import { useEffect, useState } from "react";
// import firebase database.
import { firebaseDatabase } from "../../firebase/firebase";
// import use dispatch to dispatch action to the store.
import { useDispatch } from "react-redux";
// import action types.
import * as loadingActionTypes from "../../actions/LoadingActions";
/**
 * create Row component.
 * @param {*} props which are passed to the Row component.
 */
function Row(props) {
  // create "movies" state to store list of movies from Firebase.
  const [movies, setMovies] = useState([]);
  // get props.
  const { title, movieType } = props;
  // leafRoot to get data from Firebase.
  const leafRoot = "movies";

  const dispatch = useDispatch();

  /**
   * fetch movies from Firebase when getting "movieType" prop.
   */
  useEffect(() => {
    fetchMovies(movieType);
  }, [movieType]);

  /**
   * fetch movies from Firebase.
   * @param {*} movieType which is used to get movies from Firebase.
   */
  const fetchMovies = (movieType) => {
    dispatch({ type: loadingActionTypes.SHOW_LOADING });
    const movieRef = firebaseDatabase.ref(`${leafRoot}/${movieType}`);
    movieRef.on("value", (snapshot) => {
      const movies = snapshot.val();
      if (movies && movies.length !== 0) {
        // update "movies" state after getting movies from Firebase.
        setMovies(() => movies);
        dispatch({ type: loadingActionTypes.HIDE_LOADING });
      }
    });
  };

  return (
    <div className="row">
      {/* Title */}
      <h2>{title}</h2>
      {/* End Title */}
      {/* List of Movies */}
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className="row__poster row__posterLarge"
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            alt={movie.original_name}
          />
        ))}
      </div>
      {/* End List of Movies */}
    </div>
  );
}
// export Row component.
export default Row;
```
> FINAL NOTE:
>
> - We import __useDispatch__ to dispatch actions to the store.
>
> - __dispatch__ accepts an object as the parameter, the object will have __type__ to indicate the actions's type and __payload__ to specify the action's body (if any).
>
> - In this case, we dispatch the action to show / hide __Loading__ component when fetching data from Firebase. 

<a id="conclusion"></a>
## __Conclusion__

In this course, we have learn about Redux by building Netflix. I hope that you can apply Redux to your projects. If you feel the projects is useful, please help me share it to the community and give me Github :star:

<a id="references"></a>
## __References__

[1]. https://redux.js.org/

