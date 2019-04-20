---
draft: false
featured: true
keywords: ["credera", "react", "weather app"]
Lastmod: 2019-04-15
publishDate: 2019-03-13
weight: 0
client: {
    avatar: "/images/pansky.jpg",
    caption: "Screenshot of the final product",
    name: "William Pansky",
    description: "Simple weather app using create-react-app in CodeSandbox.",
    location: "Dallas, TX",
    url: "https://4jy1vkw049.codesandbox.io/"
}
project: {
    category: "Case study",
    employer: "William Pansky",
    image: "/projects/react-weather-app/react-weather-app.jpg",
    lead: "Coming off the heels of an enterprise Vue app, I wanted to familiarize myself with React. So I put together a simple weather application using create-react-app and Weatherbit.io API.",
    name: "react-weather-app-exercise",
    summary: "Simple weather app using create-react-app in CodeSandbox ...",
    tag: "create-react-app",
    thumbnail: "/projects/react-weather-app/_thumb.jpg",
    title: "Getting familiar with React by building a weather app",
    url: "https://github.com/williampansky/react-weather-app-exercise"
}
---

## Assignment
Develop a weather application with the following specifications:

- It should show the 5-day weather forecast for Dallas, TX.
- Your application should utilize ReactJS (usage of boilerplates such as Create React App are encouraged).
- You should be able to toggle between Fahrenheit and Celsius.
- It should match the provided comp as closely as possible on desktop.
- We do not provide a mobile mockup as you will determine how that functions on your own.
- Icons should correspond to proper weather conditions.
- It should be responsive, rendering appropriately on tablet, and handheld form factors.
- Your application may use any open weather API.
- Your application should showcase one animation technique of your choosing in order to give the application some life.
- _(Optional)_ Allow for user input to change location of forecast (city, state, or zip)

## Development process

### From comp to code

![Analyzing the comp & grabbing base styles](/projects/react-weather-app/comp-to-code-analyze.jpg)

1. Background gradient
2. Cloud SVGs
    - Combined-shape 1 & 2
3. Background image
4. Base icons
    - `cloud-drizzle-sun-alt.svg`
    - `cloud-lightning.svg`
    - `cloud-sun.svg`
    - `cloud-drizzle-alt.svg`
5. Base styles for components
    - App width & height
        - app max-width: `670px`
        - graphic max-height: `368px`
        - creates an app dimension of: `670 x ~569px`
    - Font sizes & weights
    - Icon sizes
6. Base colors
    - Light blue `#65aed5`
    - Light black `#4a4a4a`
    - Light gray `#d8d8d8`

#### WCAG adjustment

> Web Content Accessibility Guidelines (WCAG 2) level AA requires a contrast ratio of at least 4.5:1 for normal text.

Here, the light blue of the graphic acts as the background for our information about today’s weather, which is also rendered in light blue text.

Being that this is an application available for anyone to use, I wanted to check the contrast of those two items.

![Parent components](/projects/react-weather-app/comp-to-code-wcag.jpg)

I had a hunch it would fail, and I was correct. The text, `#65aed5`, rendered on the background, `#d7f9ff`, returns a contrast ratio of only 2.22. Therefore, changing the text color to a darker variation of blue, `#2175a6`, brings our contrast up to 4.58.

![Parent components](/projects/react-weather-app/comp-to-code-wcag-fixed.jpg)

### Methodology

#### Parent components

![Parent components](/projects/react-weather-app/comp-to-code-parents.jpg)

1. `TheApp.jsx` (wrapper)
2. `TheLocation.jsx`
    - Icon & text
3. `TheDayToday.jsx`
    - Numerical degrees
    - Conditional icon
    - Conditional description
4. `TheDegreeSwitcher.jsx`
    - Form element
    - Label & Input elements
5. `TheMainGraphic.jsx`
    - Background image
6. `AppDay.jsx`
    - Abbreviated day name
    - Conditional icon
    - Numerical degrees

#### Child components

![Child components](/projects/react-weather-app/comp-to-code-children.jpg)

1. `AppIcon.jsx`
    - SVG
2. `AppLabel.jsx`
    - Consistent formatting
3. `AppTooltip.jsx`
    - Popup information
4. `LoaderIcon.jsx`
    - Used in loading states

#### Naming convention

I love [Vue’s styleguide](https://vuejs.org/v2/style-guide). It’s a set of rules, separated by recommended priorities, to help enforce best practices when developing a Vue app.

I took a few snippets of that for my React app here.

##### Single-file component filename casing
> Filenames of single-file components should either be always PascalCase or always kebab-case.

[[Strongly Recommended]](https://vuejs.org/v2/style-guide/#Single-file-component-filename-casing-strongly-recommended) "PascalCase works best with autocompletion in code editors, as it’s consistent with how we reference components in JS(X) and templates, wherever possible. However, mixed case filenames can sometimes create issues on case-insensitive file systems, which is why kebab-case is also perfectly acceptable."

```bad
components/
|- mycomponent.vue
components/
|- myComponent.vue
```

```good
components/
|- MyComponent.vue
components/
|- my-component.vue
```

##### Base component names
> Base components (a.k.a. presentational, dumb, or pure components) that apply app-specific styling and conventions should all begin with a specific prefix, such as `Base`, `App`, or `V`.

[[Strongly Recommended]](https://vuejs.org/v2/style-guide/#Base-component-names-strongly-recommended) "These components lay the foundation for consistent styling and behavior in your application. They may only contain: HTML elements, other base components, and 3rd-party UI components. But they’ll **never** contain global state (e.g. from a Vuex store)."

```bad
components/
|- MyButton.vue
|- VueTable.vue
|- Icon.vue
```

```good
components/
|- AppButton.vue
|- AppTable.vue
|- AppIcon.vue
```

So, for the instances of our app:

```good
|- TheDayToday.jsx
|  |- Single instance component to display only information
      related to the current date (today).
|- AppDay.jsx
|  |- Multi-use component, nested inside of an array.map loop
      to display the upcoming five-day forecast.
```

#### File structure

Expanding off the base of create-react-app, I created the following file architecture for the app.

```treeview
|-- public/
|	|-- media/
|	|	|-- cloud-drizzle-sun.svg
|	|	|-- cloud-drizzle.svg
|	|	|-- cloud-lightning-moon.svg
|	|	|-- …
|	|
|	|-- index.html
|-- src/
|	|-- components/
|	|	|-- AppDay.jsx
|	|	|-- AppIcon.jsx
|	|	|-- AppLabel.jsx
|	|	|-- AppTooltip.jsx
|	|	|-- LoaderIcon.jsx
|	|	|-- TheDayToday.jsx
|	|	|-- TheDegreeSwitcher.jsx
|	|	|-- TheLocation.jsx
|	|	|-- TheMainGraphic.jsx
|	|
|	|-- static/
|	|-- static/
|	|	|-- api-test-celcius.json
|	|	|-- api-test.json
|	|
|	|-- styles/
|	|-- styles/
|	|	|-- animation.css
|	|	|-- styles.css
|	|	|-- styles.js
|	|
|	|-- utils/
|	|-- vendor/
|	|-- App.jsx
|	|-- api.js
|	|-- index.js
|-- README.md
|-- package.json
```

### Tools & dependencies

|Package|Description|
|:---|:---|
|`react v16.8.0`, `react-dom v16.8.0`, `react-scripts v2.0.3`|Base packages shipped with create-react-app within CodeSandbox.io|
|`axios v0.18.0`|Promise based HTTP client for the browser & node.js|
|`date-fns v1.30.1`|Comprehensive & consistent toolset for manipulating JavaScript dates|
|`lodash v4.17.11`|A modern JavaScript utility library delivering modularity, performance, & extras|
|`react-countup v4.1.1`|Lightweight React component; used to quickly create numerical animations|
|`react-inlinesvg v0.8.4`|Load SVGs with an XHR request and then embed them in the document|
|`react-responsive v6.1.1`|The best supported, easiest to use react media query module|
|`react-transition-group v2.5.3`|Components for managing states (including mounting and unmounting) over time|
|`styled-components v4.1.3`|The best bits of ES6 and CSS to style your apps without stress|
|`use-persisted-state v0.3.0`|Custom React Hook that provides a multi-tab/browser shared & persistent state|

## Challenges

### Developing the application

#### Displaying conditional icons

The app requires that icons, _"... correspond to proper weather conditions."_

Considering there are a possible **38** different codes coming down from the API, and that we currently only have **four (4)** icons available, a solution was required to ensure an icon is displayed on the frontend regardless of the `response.data.weather.code` value.

My solution was a helper function that takes in a number parameter and returns a filename string, depending on the group which the param belonged to.


```jsx
export const getIcon = code => {
    const icons = {
        cloudDrizzle: 'cloud-drizzle-sun',
        cloudDrizzleSun: 'cloud-drizzle-sun',
        cloudLightning: 'cloud-lightning',
        cloudSun: 'cloud-sun'
    };

    const groups = {
        drizzle: [300, 301, 302],
        general: [800, 801, 802, 803, 804, 900],
        hazards: [700, 711, 721, 731, 741, 751],
        rain: [500, 501, 502, 511, 520, 521, 522],
        snow: [600, 601, 602, 610, 611, 612, 621, 622, 623],
        thunderstorms: [200, 201, 202, 230, 231, 232, 233]
    };

    if (groups.drizzle.includes(code)) return icons.cloudDrizzle;
    else if (groups.general.includes(code)) return icons.cloudSun;
    else if (groups.hazards.includes(code)) return icons.cloudSun;
    else if (groups.rain.includes(code)) return icons.cloudDrizzle;
    else if (groups.snow.includes(code)) return icons.cloudDrizzle;
    else if (groups.thunderstorms.includes(code)) return icons.cloudLightning;
    else return icons.cloudSun;
};
```

Basically, I defined an `{icons}` object that contained key/value pairs of our available icon SVGs. I then constructed a `{groups}` object which contained child arrays that represent high-level definitions of weather conditions; such as `drizzle` or `snow`.

Now, using a `switch` statement here would be ideal—however, it could be hacky and abusive of the way `case` is evaluated (as our conditional relies on `array.includes()`). Therefore, I crafted an incredibly ugly `if/else` chain to determine the return output from our function. Some examples this in use are:

```jsx
getIcon(300); // @returns 'cloud-drizzle-sun'
getIcon(802); // @returns 'cloud-sun'
getIcon(511); // @returns 'cloud-drizzle-sun'
getIcon(233); // @returns 'cloud-lightning'
```

#### Switching between degrees

Handling the functionality to switch between Fahrenheit and Celsius proved particularly difficult.

First, I needed to work with `use-persisted-state` library to retrieve and store both types of JSON strings from the API—however with the package being relatively new, their example only cited working with a single data set.

```jsx
// before celcius integration
const useWeatherState = createPersistedState('api');
const [api, setData] = useWeatherState();

// after celcius integration
const useWeatherState = createPersistedState('api'),
      useWeatherStateC = createPersistedState('apiC');
const [api, setDataF] = useWeatherState(),
      [apiC, setDataC] = useWeatherStateC();
```

Next, I needed to find a way to swap between using `api` and `apiC` as dynamic parent objects to pass down the data. My first try revolved around setting up a conditional check and a two mutable `let` declarations:

```jsx
let api;
const selection = localStorage.getItem('degrees');
if (selection === 'F') api = apiF;
else if (selection === 'C') api = apiC;
else api = apiF;

let state = {
    cityName: api.city_name,
    stateCode: api.state_code,
    today: {
        temp: api.data[0].temp,
        date: api.data[0].valid_date,
        conditions: api.data[0]
    }
    // etc...
};
```

This worked on page refresh, however it did not dynamically through a `handleDegreesChange(event)` function. Therefore, I needed to take a different approach.

I recalled the section from the React docs on [_Lifting State Up_](https://reactjs.org/docs/lifting-state-up.html), which presents the idea of sharing state, _"...by moving it up to the closest common ancestor of the components that need it."_

This also lit my brain light bulb to realize I needed to be using `setState()` in this scenario to swap the root data the React way instead of my silly let conditional. You'd think this would all be obvious—however, I am a novice in React; having spent the entire time of my last enterprise app development in a Vue environment.

```jsx
// index.js
import AppRoot from './App';
function App() {
    // omitted...
    return <AppRoot data={api} dataC={apiC} />;
}
```

CodeSandbox's `create-react-app` boilerplate sets up a root functional component declaration for our project, aptly titled function app().

My project's source-of-truth parent component is imported as `TheApp.jsx` and then returned with two prop attributes: `data` (for our base/Fahrenheit api data) and `dataC` for our metric Celsius api data. So we pass those on down into our TheApp.jsx component, thus creating a single path via a single `data` state:

```jsx
class TheApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: '',
        };
    }
    // ...
    setCelsius() {
        this.setState({
            data: this.props.dataC, units: 'm/s'
        });
    }

    setFahrenheit() {
        this.setState({
            data: this.props.data, units: 'mph'
        });
    }
```

#### Optional opt-out

While the assignment made mention of an optional location-changing feature, I decided to not head down that road.

Reason being that without access to a plethora of vector graphics that follow the same aesthetic—the graphic change would feel so abrasive and disruptive.

### Responsive design & functionality

#### Designing the layout

- Responsive goals
    - Keep it simple
    - Only vertical scrolling _(i.e. no horizontal bugs)_
    - One feature functionality
    - Adjust for landscape

![Responsive design & functionality](/projects/react-weather-app/responsive-design.jpg)
![Responsive design & functionality](/projects/react-weather-app/responsive-design-landscape.jpg)

#### Working with native browser bars

`'100vh' !== '100vh'` — The browser control bar takes up what is considered `vh`.

![Responsive design & functionality](/projects/react-weather-app/responsive-design-100vh.jpg)

Nifty way to create new `100vh` — Targeting a non-specific CSS property on the HTML element, such as `perspective: 100vh`, then:

```js
parseFloat(
    getComputedStyle(document.documentElement).perspective
) - document.documentElement.clientHeight;
```

This takes in `100vh` of the HTML element, then subtracts the `clientHeight` of the current viewport; which gets us our _actual_ `100vh` on the fly.

### API integration & state management

Coming off the heels of a data/api-driven Vue app, a serious hurdle I found myself struggling to get over was how to work with an Api and handle central state management in React. `Vuex`, Vue's solution to a store, made mutating central state a breeze.

_However_, I decided to move forward without the use of Redux, Mobx, or any of the other React libraries out there for handling state—the concept for this app was so simple, that such integrations would be overkill.

That’s where the `use-persisted-state` package comes in. It’s a library that allowed me to store my API responses into `localStorage`; replacing `useState()` with `createPersistedState()`, and alleviating the need to write custom functions to `get`, `set`, `JSON.parse()`, and `JSON.stringify()`.

Using the axios package, we’re able to easily handle our XHR requests. I chose axios due to the library’s use of `Promises` (allowing for simpler `async/await` functions), it automatically transforms `JSON` responses, and because it’s overall size (`~112kb`).

Let’s take a look inside `src/api.js`.

```jsx
import axios from 'axios';

const api = {
    endpoint: 'https://api.weatherbit.io/v2.0/forecast/daily',
    key: '*************************',
    city: 'Dallas,TX',
    lat: '32.7766642',
    lon: '-96.7969879',
    days: 6
};

export default axios.create({
    baseURL: api.endpoint,
    params: {
        key: api.key,
        city: api.city,
        days: api.days
    }
});
```

Here we imported our module, created an `{api}` object to house our request parameters, and exported an instance of `axios.create()` for use in our application.

From there, we can import our `axios.create()` instance into `src/index.js` and create a function, `fetchData()`, that will initialize the request when invoked.

Inside `fetchData()` we create two variable constants: `result` & `resultCelcius`. These act as our conduits, awaiting successful responses from the XHR request before handing those off to `use-persisted-state`.

```jsx
// ...
import Api from './api';
// ...
function App() {
    // ...
    const fetchData = async () => {
        const result = await Api.get('?units=I');
        const resultCelcius = await Api.get();

        if (result.status_code !== 429) {
            console.log(result.data);
            setDataF(result.data);
        }

        if (resultCelcius.status_code !== 429) {
            console.log(resultCelcius.data);
            setDataC(resultCelcius.data);
        }
    };
// ...
```

Our data is then set to `localStorage`.

```jsx
function App() {
    // ...
    const useWeatherState = createPersistedState('api'),
          useWeatherStateC = createPersistedState('apiC');
    const [api, setDataF] = useWeatherState(),
          [apiC, setDataC] = useWeatherStateC();
    // ...
```

With that all set up, we can then set up a useEffect hook and run two conditionals, if need be:

1. Check if `api` or `apiC` exist, both of which are connected to our `localStorage`.
    - If one of the two, or neither, exist—call `fetchData()`;
2. If `refreshAPI()` returns `true`—call `fetchData()`;
    - (We’ll circle back to this function soon)

```jsx
useEffect(() => {
    if (!api || !apiC) fetchData();
    if (refreshApi() === true) fetchData();
}, []);
```

Checking if `api` or `apiC` exist also coincides with showing an instance of our `<LoaderIcon />` component.

The app shouldn’t render anything other than our loading spinner until both `api` and `apiC` can be tapped for their JSON strings.

```jsx
if (!api || !apiC)
    return (
        <AppLoading>
            <LoaderIcon />
        </AppLoading>
    );
else return <TheApp data={api} dataC={apiC} time={humanReadable} />;
```

### API response

Using weatherbit.io as my free API source; the response from their service call to 16 Day Weather Forecast API _(1 day interval)_ is as follows.

_Note that ellipses are used to vertically truncate the response to fit our needs here._

```json
{ "data": [{  
    "valid_date":"2017-04-01",
    ...
    "wind_spd":6.4,
    ...
    "max_temp":23,
    "min_temp":26,
    ...
    "pop":0,
    "weather":{  
        "icon":"c04d",
        "code":"804",
        "description":"Overcast clouds"
    },
    ...
    "clouds":100,
    ...
    }, ...],
    "city_name":"Raleigh",
    ...
    "country_code":"US",
    "state_code":"NC"
}
```

Now, originally, I had opted for weatherbit’s 5 Day Weather Forecast API _(3 hour interval)_ call.

Reading the response and selecting the correct index for the next weekday was initially confusing. The response returns an `array` (`response.data.data`) length of 39. Initially, when passing data into my `AppDay` component props, I went with the following:

```jsx
// omitted...
<Week>
    <AppDay day={api.data[1].timestamp_utc} />
    <AppDay day={api.data[2].timestamp_utc} />
    <AppDay day={api.data[3].timestamp_utc} />
    <AppDay day={api.data[4].timestamp_utc} />
    <AppDay day={api.data[5].timestamp_utc} />
</Week>
// etc...
```

My thought was, _"Okay. Today is obviously going to be `api.data[0]`, so the next likely sequence would be `[1]`, `[2]`, `[3]`_, and so on. It didn't initially occur to me why the data child array would contain 39 entries _(haha, silly me...)_.

The length comes due to the endpoint returning 3-hour intervals for daily weather. So, depending on the time you ping it'll return a different response length.

So, to resolve this, I opted for using the 16-day/daily forecast endpoint. Now each entry is a single day, therefore my <Week /> styled.component can be structured like I had originally anticipated.

Despite all this, I eventually refactored my <AppDay /> component calls into a `array.map()` loop—which presents a cleaner source code:

```jsx
const data = this.state.data;
const week = _.get(data, 'data', []).slice(1);

<Week>
    {week.map((data, i) => (
        <AppDay
            key={i}
            day={data.valid_date}
            degrees={data.temp}
            icon={getIcon(data.weather.code)}
            tooltip={data.valid_date}
        />
    ))}
</Week>;
```

### Limiting API calls

A free plan from weatherbit.io allows for 1,000 calls/day; therefore I needed a way to limit the number of calls I make.

Since CodeSandbox can refresh your project's frontend view on the fly, not creating a limiting function could (and did, haha) send my requests through the roof.

I did some Google-foo _(read: StackOverflow)_ and came up with the following function:

```jsx
const refreshApi = () => {
    const HOUR = 1000 * 60 * 60;
    const THREEHOURS = HOUR * 3;
    let threeHoursAgo = Date.now() - THREEHOURS;

    let token = localStorage.getItem('token');
    if (!token) localStorage.setItem('token', new Date());

    token = localStorage.getItem('token');
    let minutes = differenceInMinutes(token, threeHoursAgo);

    if (minutes < 0) {
        localStorage.removeItem('token');
        return true;
    } else {
        console.log('Minutes until Api refresh:', minutes);
        return false;
    }
};
```

This little guy simply constructs a 3-hour variable, `THREEHOURS`, and a variable, `threeHoursAgo`, that subtracts that from `Date.now()`. It uses `threeHoursAgo` in conjunction with a `localStorage` token to return a boolean. If the boolean returns true, we'll refresh our API call:

```jsx
useEffect(() => {
    if (refreshApi() === true) fetchData();
}, []);
```

## Features & enhancements

### Time-of-day

![Morning, afternoon, evening](/projects/react-weather-app/timeofday.gif)

### Weather effects

![Morning, afternoon, evening](/projects/react-weather-app/weatherfx.gif)

## Demo

To view a demo of the app, [click here](https://4jy1vkw049.codesandbox.io/).

<!-- LINKS -->
[axios]: https://github.com/axios/axios
[weatherbit]: https://rapidapi.com/weatherbit/api/weather?endpoint=59333c51e4b05d38a42ea925
[provided comp]: https://app.zeplin.io/project/5ba1b47aa324513a320e49d4/screen/5ba1b49bc3a9c758ba001261
[create-react-app]: https://github.com/facebook/create-react-app
[codesandbox]: https://codesandbox.io
[styled-components]: https://www.styled-components.com/
[mobx]: https://github.com/mobxjs/mobx
[codesandbox]: https://codesandbox.io
[use-persisted-state]: https://github.com/donavon/use-persisted-state
