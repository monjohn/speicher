# speicher
to set up testing: http://www.lispcast.com/testing-clojurescript


To start development server: `lein run`

Start sass to edit styles: `sass --watch sass/style.scss:resources/public/css/style.css`

Then start Figwheel for live reloading of css and ClojureScript: on osx `rlwrap lein figwheel` otherwise `lein figwheel`

To run browser tests: `lein doo chrome browser-tests`
