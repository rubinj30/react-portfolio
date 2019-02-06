# Portfolio Site

### Idea

Originally, I wanted to build a new portfolio site and do so quickly. I wanted it to be a gateway to see my personal projects, but figured I'd at least make it in React. After spending too much time on simple stuff while flip-flopping on a style, I decided to keep the style simple. While googling around for something to spark my imagination, it struck me that I should just make a google-like front-end clone. It could act as wireframes and would definitely stand out. Once I decided this, I just kept going with the idea and decided to make it its own full stack project, complete with a functional search that would allow one to search through my entire site. It would also allow me to show off skills without hoping someone clicks on a certain project that I have listed. I could make it big enough to create some modular features but not require time spent testing out different transitions or going back and forth on CSS layouts.

### Current State of the Portfolio and Plans for Future

For now, it is only a React (with CRA) front-end. The projects are all in a JSON blob that will eventually be the data stored in a database. It is a work in progress, but here is what I hope to add in the near future:

1. More modular features
2. The "data" in SQL or Mongo database. This data will be anything I want to be searchable and/or editable.
3. Add an admin panel or even a CMS that I can update these projects through.
4. GraphQL with Apollo Client - I've done a lot of work with Apollo queries and mutations, but want to be more familiar with writing GraphQL resolvers and testing them
5. Fully-functional Search feature that will return different results after each key press based on the input text matching keywords associated with each project
6. Fully cover the project with effective unit tests and integration tests
7. Voice to text for search... just because Google has it