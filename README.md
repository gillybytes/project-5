# Activafy

Activafy is a fitness application that keeps a log of the user's daily/weekly workout routine(s).

Developed and supported by Jinxiang Lin, Gillian Pantaleon, Mark Mosarac, and Wei Chen

Project Status: Prototype Extension

## About

### Product Vision
FOR athletes, hobbyists, and people who are getting started on their fitness journey WHO need to stay on target with their fitness goals, Activafy is a health and fitness application THAT keeps a running log of a user's daily/weekly workout routine(s) UNLIKE other workout apps and fitness trackers, OUR PRODUCT provides customizable workout templates and synchronizes to the user's digital calendar.

### How to Use
1. Download the release to your preferred location.
2. Open the concept-prototype folder.
3. Open *login.html* in the browser of your choice.
4. Click the **Login** button to be brought to the homepage and view other features of the application.


## Product Architecture

### Description
Activafy will be delivered as a web-based application. It will be built using Javascript, primarily with React, and connect to a PostgreSQL database, which will be hosted on Amazon Web Services. We prioritize the following qualities for our software product:
1. **Software compatibility**: Our differentiating factor from the competition is our synchronization feature. Therefore, our application must be compatible with the major digital calendars on the market, e.g. Google Calendar, iCal, Outlook, etc. We want our product to work seamlessly no matter which calendar the user chooses.
2. **Performance**: Second, we prioritize a nonfunctional product characteristic, performance. Activafy must perform relatively well in order for it to be a commercial succerss. The product must be optimized using metrics such as response time, error and request rates, and availability to provide a smooth user experience.
3. **Product lifetime**: Third, we anticpate maintaining our users in the long run. We will need to create regular product revisions, and therefore, need an evolvable architecture. It must be able to adapt and accommodate new features and technologies.

### Architecture Diagram
![Diagram](https://user-images.githubusercontent.com/78502763/112689887-42414100-8e51-11eb-8fba-290bfef65005.png)

