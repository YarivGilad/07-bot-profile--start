<!-- prettier-ignore-start -->

-----------------------------------------------------------------
* Copyright © Written by [Yariv Gilad](https://yarivgilad.com) ©  
-----------------------------------------------------------------


==================================
  ## Pick a Bot!!
==================================

1. Finish implementing the <Profile> component
2. import and instanciate <Profile> in the <App> component.
3. Every time the user clicks on an item in <List>,
   the <Profile> component needs to be updated and display the selcted item data.
4. We will use the same technique as we did with the filter list task.
   The <App> is the only component that manages a state.
   We can pass a setter function of a state variable from the <App> as a prop to the <List>
   You can modify the <App> state as you see fit.
5. In the `src/api/robots.api.ts` module.
   expose an async function called `getRobotsList` and extract the networking implementation details from the <App> into this function

## Bonus tasks 
-----------------
1. You may have noticed the avatars aren't always succesfull in
   loading the images. Create a new component called <ImageLoader> that can be used in the <card> component and the <Profile> component.
   It will have a built in behaviour of trying x times to load the image.
   While the image is trying to load - display a default 🤖 robot emoji.
   If the image still doesn't load after x attempts, display the 🤖 emoji.
   
  ,_,
 (O,O)
 (   )
--"-"-------
Good luck!!
Yariv

💡"Luck is the residue of good design" - Branch Rickey
---

[linkedin connect](https://www.linkedin.com/in/yarivgilad/)

<!-- prettier-ignore-end -->
