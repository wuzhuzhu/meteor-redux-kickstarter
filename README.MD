# Kick starter for web project 

based on Meteor 1.3, react, redux, material-ui.

### Get Started:
1. npm i
2. meteor
3. rpm run storybook

Your Project:
http://localhost:3000
Storybook for ui-components preview:
http://localhost:9001

---

### How to reveal material-ui components on storybook:
```
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';


storiesOf('HelloWorld', module)
  .addDecorator(story => {
    return <MuiThemeProvider muiTheme={getMuiTheme(baseTheme)}>
        {story()}
    </MuiThemeProvider>
  })
  .add('Default', () => {
    return <HelloWorld/>
  })
```

And `injectTapEventPlugin();` might be needed sometime.