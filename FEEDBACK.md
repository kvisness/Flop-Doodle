Feedback
========

You currently have two reducers, `admin` and `words`. Likely these are the same thing.

Your `admin` functionality is just managing your words. The admin page is just word management, although it may end up managing more than that eventually (like users, game names, etc). You probably don't really need a `words` reducer since *technically* your
admin reducer is managing all admin functionality, including (exclusivey for now) your
full list of game words.

Your other reducers will likely take on less admin roles, like:
   - a reducer to manage your current game (which 10 words, name of the game, etc)
   - a reducer to list all games for the user to pick from

Those can take on names like `currentGame` and `games` -- leaving the admin functionality
to the admin reducer.