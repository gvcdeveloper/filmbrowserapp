# Film Browser App

This client browser app allows you to find a movie in three (or more) genres (Horror, Drama and Animation as an example).

## Structure

- **.storybook/**: The full storybook project.
- **src/**
  - **assets/**
  - **mocks/**
  - **components/**: Components ideally agnostic (it means that could be taken outside this business and reused)
  - **pages/**: Each component page represent a scenario/feature.
  - **redux/**: State management.
  - **services/**: This layers handles API requests.
  - **styles/**
  - **utils/**
- **package.json**
- **.env**
- **tsconfig.json**
- **vite.config.ts**
- **README.md**

## Get Started

1. Clone the respository:
   ```bash
   git clone https://github.com/gvcdeveloper/filmbrowserapp.git
   ```
2. run:
   ```bash
   yarn install && yarn dev
   ```
   OR (for build)
   ```bash
   yarn install && yarn build
   ```
3. If you want to run storybook
   ```bash
    yarn storybook
   ```
4. Generate your OWN API KEY and TOKEN in:
   https://developer.themoviedb.org/docs/authentication-application

5. Create your own `.env.local` and put those keys there.

## ENV

Create your own `.env.local`

```bash
VITE_TMDB_API_URL_BASE=https://api.themoviedb.org
VITE_GENRES=Horror,Drama,Animation
```

If modifying categories (for having more/different sliders), remember this pattern "x,y,z,w..."

## Stack

- React
- Redux, redux-toolkit, redux-persist
- Typescript
- SASS
- Vite
- React Testing Library (with vitest)

## Endpoints

The first thing is getting the genres informations. Once obtained that, next is this the list of films by genre.

- Get a list of genres: https://api.themoviedb.org/3/genre/movie/list?language=en-US
- Get a list of movies (page=1) for a specific genre: https://api.themoviedb.org/3/discover/movie?language=en-US&with_genres=18
- Get details of a specific movie: https://api.themoviedb.org/3/movie/945961?language=en-US

## Considerations

- This apps should have an SSR approach, for optimizing resources, preload and caché.
- Pagination of each carousel should be implemented to extend functionality (right now it is only bringing page=1 results of the API).
- Redux-persist was an option for storing wishlist, but I would consider if it is fully necessary in a next iteration.
-

## Features

- Looking for a movie in any of the three categorized carousels.
- Add/remove a movie of a wishlist (persisted in localStorage through redux-persist).
- Check details of a movie.
- Add customization for each category (differentiation) if desired.

## Enhancements

- Using react suspense to handle properly image loading.
- Refactoring some behavior in custom hooks to clean components.
- Adding SSR.

## Methodoloy

- Trello: Splitting the requiriments into minimal parts categorized by feature, component, enhancements, bonus etc.
- GitHub: Creating branch from main and then merging into main after my own review.
- Vercel for deploying and testing changes.
