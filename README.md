# Automated LinkedIn Job Scraper using n8n

This repository contains a production-ready automation workflow that collects LinkedIn job postings on a scheduled basis, processes and filters them, prevents duplicates, and stores structured data into Airtable.

The system is built using **n8n**, **Apify**, and **Airtable**, focusing on reliability, clean data flow, and real-world usability rather than experimental scraping.

---

## Project Overview

The goal of this project is to automatically track relevant job opportunities (IoT, AI, Internship, and related roles) without manual searching.

The workflow:

- Runs automatically on a fixed schedule
- Fetches job data from LinkedIn using Apify
- Cleans and normalizes raw job data
- Filters jobs by location and job type
- Prevents duplicate job entries
- Stores clean data into Airtable for further use

This project is suitable for:

- Job tracking and research
- Career automation
- Data pipelines and workflow automation portfolios
- Learning production-grade n8n workflows

---

## Key Features

- Scheduled execution (every 12 hours)
- Apify-based LinkedIn job scraping
- Clean data transformation using n8n Code nodes
- Smart filtering by keyword and location
- Duplicate prevention using Airtable search
- Structured and extensible data schema
- Clear documentation and modular repository structure

---

## Architecture Overview

High-level workflow:

1. Schedule Trigger starts the workflow automatically
2. Static search parameters are defined
3. Apify LinkedIn Jobs Scraper is triggered via HTTP request
4. Raw data is transformed into structured job objects
5. Jobs are filtered based on relevance
6. Airtable is queried to detect duplicates
7. Only new jobs are inserted into Airtable

---

## Tech Stack

- n8n (Workflow Automation)
- Apify (LinkedIn Job Scraping)
- Airtable (Data Storage)
- JavaScript (Data Transformation)
- GitHub (Version Control & Documentation)

---

## Demo Video

A full walkthrough and live demo of this project is available here:

[Demo Video – YouTube Link Placeholder]

(https://youtu.be/9YKwLY13b0M)

---

## Repository Structure

```
.
├── README.md
├── .gitignore
├── workflow.json
├── docs/
├── n8n/
├── apify/
├── data/
└── scripts/
```

Each folder contains focused documentation and examples to help understand and reproduce the workflow.

---

## Setup Instructions

A complete setup guide is available in:

```
docs/setup-guide.md
```

It covers:

- Importing the workflow into n8n
- Setting Apify credentials
- Configuring Airtable
- Activating the scheduled trigger

---

## Data Storage

Jobs are stored in Airtable using a predefined schema.

Details are documented in:

```
docs/airtable-schema.md
```

The **Apply URL** field is used as the unique identifier for duplicate prevention.

---

## Security Notes

- API keys are never committed to this repository
- Use `env.example` to configure credentials safely
- Always store secrets in n8n credentials or environment variables

---

## Customization

You can easily customize:

- Job keywords
- Locations
- Schedule frequency
- Output fields
- Storage destination

This workflow is designed to be reusable and extendable.

---

## Limitations

- Dependent on Apify actor availability
- Subject to LinkedIn and Apify usage limits
- Not intended for high-frequency scraping

---

## Future Improvements

- Keyword rotation strategy
- Telegram or email notifications
- Job scoring and ranking
- Multi-country support
- Dashboard integration

---

## License

This project is released under the MIT License.
