# Sarvodaya Kisan Post Graduate College

A college site for the Sarvodaya Kisan Post Graduate College campus. The homepage leans on an admissions notice and an overview of courses and facilities.

## Live Demo

Not deployed publicly. Start locally:

```bash
cd skpg-college-website
python3 -m http.server 8104 --directory .
# open http://localhost:8104/
```

## Screenshots

The site shown below was running during capture. Relative paths, file names carry the project slug:

| Desktop | Mobile |
|---|---|
| `screenshots/desktop/skpg-college-website-index-1440x900.png` | `screenshots/mobile/skpg-college-website-index-390x844.png` |

## About the Project

Sarvodaya Kisan Post Graduate College is a postgraduate college at Koari Ram, Gorakhpur. The site carries admissions, courses, facilities and faculty information.

## Key Features


 - Homepage with a college overview and admissions notice
 - Admissions, Courses, Facilities, Faculty, Gallery pages
 - Contact page with general enquiry route

## Technology Stack


HTML, CSS, JavaScript; plain static site

## Project Structure


 - index, about, admissions, courses, facilities, faculty, gallery, contact + css, js, images, events.json, notices.json

## Installation and Setup


```bash

cd skpg-college-website

python3 -m http.server 8104 --directory .

# open http://localhost:8104/

```


## My Contribution


The college site was put together by the owner, who still holds the source. I prepared this repository: copied the files over, checked them, and added the screenshots and setup notes. The originals were left untouched.

## Responsive Design


Homepage and inner pages were captured at 1440x900 (desktop) and 390x844 (mobile) earlier this session.

## Security and Privacy


No API keys, tokens, private keys, database credentials, or SMTP credentials were found anywhere in the repository. Public contact details that sit on the live site belong to the organisation or its people and are not something to republish beyond the repo.

## Known Limitations


- The site is a static site and is not deployed online; it is served here for review.

## Future Improvements


- Serve the site from a public host and swap in a live demo link when one becomes available.

## License


No license was found in the source, so the code is not offered for reuse. Speak to the project owner before reusing it.
