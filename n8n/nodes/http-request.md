# HTTP Request Node

This node sends a POST request to Apify to fetch LinkedIn job listings.

## Configuration
- Method: POST
- URL: https://api.apify.com/v2/acts/apify~linkedin-jobs-scraper/run-sync-get-dataset-items
- Headers:
  - Content-Type: application/json
  - Authorization: Bearer YOUR_APIFY_API_TOKEN

## Body Example
See `apify/payload-example.json`