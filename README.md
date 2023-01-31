# Name of Project: Nashville Walking Club

Brief Proposal:
The problem you’re solving: Connecting walkers with a community of walkers and routes in Nashville.
How your app will address that problem: Provide walking meet-ups and routes around Nashville.    



## Application Overview 

### Overview of Application: 
Who are the target users of this application? Walkers in Nashville looking for new friendships. Specifically women between 22-35. 
What can a user do with this application? Find and connect with a community of walkers in Nashville, through Nashville Walking Club


### Features included in MVP Definition ( a bullet list of each unique feature) : 
Allow all users to see Meet-ups
Allow all users to suggest new Meet-ups
Allow all users to filter Meet-ups by area of town
Allow all users to delete their Meet-ups


### User Stories 
**1. See Meet-ups**
    Given: The user wants to find upcoming walks
    When: The user clicks the navigation link for upcoming walks, “See Meetups”
    Then: The user will see a list of upcoming walks including, walk name, address, walk date, walk leader, and the location image
**2. New Meet-ups**
    Given: A user wants to suggest new walking routes
    When: A user fills out a form, via a navigation link labeled, “Suggest a Meet-up”
    Then: The suggested route will show on a  “Suggestions List” that is only accessible for users labeled as “walk leaders”
        - Users labeled as “walker” will see a list of “Suggested Walks” that they can delete if needed
**3. Filter Meet-ups by Area of Town**
    Given: A user wants to filter upcoming meet-ups based on location
    When: A user selects a drop down on the meet-ups page
    Then: A user will see a filtered list of meet-ups by area of town: North, South, East, West 
**4. Delete Meet-ups**
    Given: A user wants to delete a suggested meet-up, they submitted
    When: A user selects the link labeled, “delete” by a suggested meet-up
    Then: The suggested meetup will be deleted from the “Your Suggested Meet-ups” and be deleted from the json server
