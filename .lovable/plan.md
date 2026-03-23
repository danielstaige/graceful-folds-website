
## What We're Changing

`src/pages/Index.tsx` only — replace the `testimonials` array (lines 36–42) with 6 new entries using real quotes from Dana's actual website (foldsofgrace.com), attributed to the six cities she requested.

### Real quotes sourced from foldsofgrace.com

The site has 11 named reviews. I'll select the best 6, trim them to a comfortable quote length for the card layout, and assign the cities Dana specified:

| Name | City | Source |
|---|---|---|
| Stephanie Snow | Southlake, TX | Real quote from foldsofgrace.com |
| Jennifer Stockett | Grapevine, TX | Real quote from foldsofgrace.com |
| Baylee Cypress | Mansfield, TX | Real quote from foldsofgrace.com |
| Jana Mayfield | Midlothian, TX | Real quote from foldsofgrace.com |
| Susan Lawson | Waxahachie, TX | Real quote from foldsofgrace.com |
| Angela Swan | Arlington, TX | Real quote from foldsofgrace.com |

### New array content

```ts
const testimonials = [
  {
    name: "Stephanie Snow",
    location: "Southlake, TX",
    quote: "Folds of Grace was such a help to me this week! To see it all clean and meticulously folded without having done any of the work was wonderful. And to know that while we went about our day someone was praying for us is such an encouragement!",
  },
  {
    name: "Jennifer Stockett",
    location: "Grapevine, TX",
    quote: "As a working mom, this takes one thing off my never-ending to-do list and gives me more time to be a mom. My Folder is so attentive to all our high-maintenance requests. I've been impressed with the attention to detail, timeliness, and all-around customer service.",
  },
  {
    name: "Baylee Cypress",
    location: "Mansfield, TX",
    quote: "This service was gifted to us and it was such a treat! I loved being able to set my laundry on the porch and find it neatly folded the next morning. They even got some stubborn stains out and left a note about what they prayed for us. I highly recommend Folds of Grace!",
  },
  {
    name: "Jana Mayfield",
    location: "Midlothian, TX",
    quote: "Folds of Grace exceeded my expectation for a laundry service! They picked up my laundry, treated stains, washed, dried, folded incredibly, and delivered it all back to my front door. They even wrote a handwritten note of how they prayed for our family. I'm thankful for their care!",
  },
  {
    name: "Susan Lawson",
    location: "Waxahachie, TX",
    quote: "Folds of Grace exceeded my expectations! The laundry was returned the same day! The kids were able to take their bags to their room and immediately put their clothes away. They even added a personal touch with a handwritten note of how the Lord led them to pray over my family. Do yourself a favor — give them a try!",
  },
  {
    name: "Angela Swan",
    location: "Arlington, TX",
    quote: "They picked my clothes up on Tuesday and actually had them back that afternoon — which I was pleasantly surprised about! They smelled amazing, folded so neat. The prayer cards were just the sweetest! I loved it. Just the best and hope to continue!",
  },
];
```

### Slicing update (lines 44–46)

The array now has 6 items. The current slicing logic (`slice(0,3)` left, `slice(2,5)` right) already handles 6 correctly — left col gets items 0–2 (Stephanie, Jennifer, Baylee), right col gets items 2–5 (Baylee, Jana, Susan, Angela → 4 items, so slice(3,6) is cleaner). I'll update the right column slice to `slice(3, 6)` so there's no overlap and each column has exactly 3 unique cards.

### Files changed

`src/pages/Index.tsx` only — lines 36–46.
