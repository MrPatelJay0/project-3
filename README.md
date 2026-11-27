# Book_A_Taxi — Taxi Ride Booking Front-End

A front-end starter for a taxi booking application built with React (Vite),
Bootstrap 5, and React Router. Developed with the assistance of generative AI prompts.

## Tech Stack
- React 18 + Vite
- Bootstrap 5 + Bootstrap Icons
- React Router DOM v6

## Run Locally
npm install
npm run dev

## Pages
| Page | Route | Features |
|------|-------|----------|
| Home | / | Hero, highlights, popular services |
| About Us | /about | Company info, stats, mission |
| Services | /services | 4 service tiers with pricing |
| Contact | /contact | Validated contact form |
| Book a Ride | /book | Booking form with validation + live summary |

## Form Validation (Book a Ride)
- All fields required
- 10-digit phone check
- Email format check
- Pickup ≠ Drop-off check
- Date cannot be in the past (calendar blocks past dates)
- Time must be in the future when booking for today

## AI Tools Used
This project's initial structure, components, and validation logic were
generated and refined using AI prompts, then tested and adjusted manually.
