Define callback handler, then pass down handler, check to see if it works by doing debugger, then fill in callback function. 


1. add a call back prop to filter (a callback prop is passing a reference to a method )
2. <Filters onChangeType={this.onChangeType} /> add call back function to pass down to filters (this is referencing to the component)
3. pass the props down and put it on the select filter 
4. throw debugger in the app class in the onChange method
5. update state with the target value
6. make fetch requests for filter 
7. pass pets to pet browser, define event handler for adopt pet and pass it to petBrowser component as well. 
8. pass down to pet component from petBrowser