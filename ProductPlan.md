# shop1stop

## Product Plan

###__Problem Statement__

You have access to a few supermarkets but only want to go to one store to do all your shopping. You would like to make this decision based on what you would like to buy that week and which store would give you the lowest bottom line when taking weekly specials into account. However, it is not worth the hassle to manually look up each weekly circular and compare the products you are interested in.

###__Market Research__

Competition:

  - There are several apps that allow you to browse weekly circulars and add items to a shopping list or create and sync a shopping list without any pricing information. I was only able find one Android app that does the math with pricing and allows you to create a list without having to browse the circular first. The closest competitor is Grocery Pal by Twicular.

  - In app reviews, users complain that the app is confusing, not easy to use, has incorrect pricing, does not have regular store pricing, has bad product search matches, has connectivity issues and has outdated information. You are able to compare prices from stores you add, but it must be done item by item. This is likely due to the fact that multiple potential matches may come up for each item and the user has to determine whether one of them is a good match.

  - The primary focus of my app will be on a user story that begins with the shopping list and will compare prices for the entire list. You may still need to approve matches individually, but the goal is to minimize the number of screens/clicks you need to go through in order to make a selection. I will also incorporate any regular store pricing (that is available online) so that non-sale item pricing can be incorporated in the totals. The key purpose is to save shoppers time and money. I will not have a coupon component.

###__User Personas__

The main target user group includes shoppers who want to get the most value when grocery shopping but do not want to go to more than one store. It is for shoppers who may already make shopping lists and are looking for an app that can keep the list and also potentially save them money. Using coupons is too much effort for these shoppers but they still enjoy buying things on sale and spending less. They want shop efficiently, so list items should be categorized by store sections, and the total item count would tell users quickly if they can use the express lane.

###__Trello Board__
https://trello.com/b/pNfYzYZQ

###__Technology selections__

__Front-end:__
  - React Native
  - Javascript / ES6
  - Jest

__Back-end:__
  - Firebase Auth and Database

__API:__
  [Groceries-on-Rails](https://github.com/esther-ng/groceries)
  - Ruby on Rails
  - PostgreSQL

__Infrastructure - Deployment or Code:__
  - Digital Ocean
  - Capistrano

###__Wireframes__
  - see wireframe.jpg
