# Workflow Overview

This project implements a fully automated LinkedIn Job Scraper using n8n, Apify, and Airtable.

## High-Level Flow
1. Schedule Trigger runs every 12 hours
2. Static search parameters (job keywords, location) are defined
3. Apify LinkedIn Jobs Scraper is triggered via HTTP Request
4. Raw job data is transformed into structured format
5. Jobs are filtered by location and type
6. Duplicate jobs are detected using Airtable search
7. New jobs are stored in Airtable

## Key Features
- Fully automated (no manual input required)
- Duplicate prevention using Apply URL
- Clean and structured job data
- Easy to extend for new keywords or locations