# Sarvodaya Kisan Post Graduate College

Sarvodaya Kisan Post Graduate College (Koari Ram, Gorakhpur) is an institution serving students from Post Graduate level, with admissions, courses and campus information.

## Live Demo

Not deployed publicly. Run locally with:

```bash
python3 -m http.server <port> --directory .
```

See [Installation and Setup](#installation-and-setup).

## Screenshots

Real captured screenshots of the running site (desktop 1440x900, mobile 390x844). Relative paths — file names include the project slug so every repository is unique:

| Desktop | Mobile |
|---|---|
| `screenshots/desktop/skpg-college-website-index-1440x900.png` | `screenshots/mobile/skpg-college-website-index-390x844.png` |

## About the Project

Sarvodaya Kisan Post Graduate College (Koari Ram, Gorakhpur) is an institution serving students from Post Graduate level, with admissions, courses and campus information.

## Key Features

 - Homepage with college overview and admissions notice
 - About, Admissions, Courses, Facilities, Faculty, Gallery pages
 - Admission information and course listings
 - Contact page and college imagery


## Technology Stack

HTML, CSS, JavaScript; static site

## Project Structure

 - `.`
 - `images`
 - `images/gallery`
 - `screenshots/desktop`
 - `screenshots/mobile`


## Installation and Setup

python3 -m http.server 8104

```bash
cd skpg-college-website
python3 -m http.server <port>
# open http://localhost:<port>
```

## Environment Configuration

No environment variables are required for this static site. There are no `.env` files or secrets in the project.

## My Contribution

The original website was authored by its owner (as identified in the source), not by me. I prepared this repository for professional GitHub publication: I verified the source files, captured real screenshots, and generated the documentation. I did not rewrite the site's functionality or design.

## Responsive Design

Pages verified at 1440x900 (desktop) and 390x844 (mobile).

## Security and Privacy

Security audit performed during preparation. No API keys, tokens, private keys, database credentials, or SMTP credentials were found. Personal contact information present in the site (phone numbers, emails) is displayed on the live site and should not be republished beyond the repository.

## Known Limitations

- The site is a static site and is not deployed online; it must be served locally.
- Some pages reference local assets and third-party fonts/CDN resources.

## Future Improvements

- Deploy the site to a public host and add a real Live Demo link.
- Add a managed content backend (CMS) if content changes frequently.
- Optimise large images for faster page load.

## License

No license is present in the source code. The source code is therefore **not licensed for reuse**. Contact the project owner before reuse.
