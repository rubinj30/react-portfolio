# Portfolio Site
I started building this out over two years ago, paused and am just getting back to it. There is still A LOT to update, include cleaning up the code quality and organization. 

### Idea
Originally, I wanted to build a new portfolio site and do so quickly. I wanted it to be a gateway to see my personal projects, but figured I'd at least make it in React. After spending too much time on simple stuff while flip-flopping on a style, I decided to keep the style simple. While googling around for something to spark my imagination, it struck me that I should just make a google-like front-end clone. It could act as wireframes and would definitely stand out. Once I decided this, I just kept going with the idea and decided to make it its own full stack project, complete with a functional search that would allow one to search through my entire site. It would also allow me to show off skills without hoping someone clicks on a certain project that I have listed. I could make it big enough to create some modular features but not require time spent testing out different transitions or going back and forth on CSS layouts.

### Current State of the Portfolio and Plans for Future
For now, it is only a React front-end app (in the `/client` directory), with an Express server that is not doing much. The projects are all in a JSON blob that will eventually be the data stored in a database. It is a work in progress, but here is what I hope to add in the future:

1. Setting up a database. This data will be anything I want to be searchable and/or editable.
2. Retrieve repositories data from GitHub APIs, and then pulling in the Languages used breakdown from a separate GitHub API, all to be used in the search results
3. Switch to use React-Testing-Library to cover remaining uncovered lines of tests
   
### Bugs
1. Should be able to tab thru options on search dropdown and PagesDropdown
2. Review on Windows
3. Spacing for items in header on mobile

# Tools
Styling - [styled-components](https://www.styled-components.com/) 

Routing - [react-router v5](reactrouter.com)

Test runner - [Jest](https://jestjs.io)

Linting - [ESLint](eslint.org)

Formatting - [Prettier](prettier.io)

Pre-commit Hook - [husky](https://github.com/typicode/husky#readme)

Ensure committed code changes are linted/formatted - [lint-staged](https://github.com/okonet/lint-staged)
