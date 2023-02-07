# BenArmstrongs-Wealther-Dashboard-ServerSide-APIs

## Your Task
Third-party APIs allow developers to access their data and functionality by making requests with specific parameters to a URL. Developers are often tasked with retrieving data from another application's API and using it in the context of their own. Your challenge is to build a weather dashboard that will run in the browser and feature dynamically updated HTML and CSS.

Use the [5 Day Weather Forecast](https://openweathermap.org/forecast5) to retrieve weather data for cities. The base URL should look like the following: `https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}`. After registering for a new API key, you may need to wait up to 2 hours for that API key to activate.

**Hint**: Using the 5 Day Weather Forecast API, you'll notice that you will need to pass in coordinates instead of just a city name. Using the OpenWeatherMap APIs, how could we retrieve geographical coordinates given a city name?

You will use `localStorage` to store any persistent data. For more information on how to work with the OpenWeather API, refer to the [Full-Stack Blog on how to use API keys](https://coding-boot-camp.github.io/full-stack/apis/how-to-use-api-keys).

## User Story
AS A traveler
I WANT to see the weather outlook for multiple cities
SO THAT I can plan a trip accordingly

## Acceptance Criteria
GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the wind speed
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city

## Mock-Up
The following image shows the web application's appearance and functionality:

![The weather app includes a search option, a list of cities, and a five-day forecast and current weather conditions for Atlanta.](./assets/images/06-server-side-apis-homework-demo.png)

## Grading Requirements
* Uses the OpenWeather API to retrieve weather data.
* Uses `localStorage` to store persistent data.
* Application deployed at live URL.
* Application loads with no errors.
* Application GitHub URL submitted.
* GitHub repository that contains application code.
* Application user experience is intuitive and easy to navigate.
* Application user interface style is clean and polished.
* Application resembles the mock-up functionality provided in the Challenge instructions.
* Repository has a unique name.
* Repository follows best practices for file structure and naming conventions.
* Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.
* Repository contains multiple descriptive commit messages.
* Repository contains quality readme file with description, screenshot, and link to deployed application.

## What I Learned
We had a great introduction to Server Side API's this week expanding on last weeks Third Party API's. 

## What Problems Did we Solve?
I had to create a HTML, CSS, JavaScript and README file from scratch along with intergrating the 'Open Weather' API into the application. 
  
# Installation

N/A

# Usage
To use and view this challenge please use this the following link to access the deployed website: "https://benarmstrong81.github.io/BenArmstrongs-Wealther-Dashboard-ServerSide-APIs/" 

Using JavaScript, when a user enters their city the current weather and 5 day forecast will automatically update. The previously searched cities will also display on the left ensuring quick and easy access.
The following image shows the web application's appearance:

![My Web Development Portfolio webpage includes a navigation bar, a professional head shot image, multiple links (placeholders at this stage) to projects completed within the UniSA Full Stack Web Development course, and working links to contact me - even download an updated resume.](./assets/images/Bens-WeatherApp-Deployed-ScreenShot.png)

# Credits
With special thanks to the UniSA Full Stack Web Development Class.

# License

Please refer to the LICENSE in the repo.