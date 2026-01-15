# Apify Setup Guide (n8n Integration)

This folder contains Apify-related configuration and examples
used in the n8n LinkedIn Job Scraper workflow.

---

## 1. Create an Apify Account
- Go to https://apify.com
- Sign up and log in

---

## 2. Get Your Apify API Token
1. Open **Apify Console**
2. Go to **Settings → Integrations**
3. Copy your **API Token**

⚠️ Keep this token secret. Do NOT commit it to GitHub.

---

## 3. Set Apify API Token in n8n

### Option A: Using n8n Credentials (Recommended)
1. Open n8n
2. Go to **Credentials**
3. Create new credential → **HTTP Header Auth**
4. Header Name:
   Authorization
5. Header Value:
   Bearer YOUR_APIFY_API_TOKEN

Save the credential.

---

### Option B: Using Environment Variable
Set environment variable:

APIFY_API_TOKEN=your_token_here

Then reference it in HTTP Request headers:
Authorization: Bearer {{$env.APIFY_API_TOKEN}}

---

## 4. HTTP Request Node Setup in n8n

- Method: POST
- URL:
  https://api.apify.com/v2/acts/apify~linkedin-jobs-scraper/run-sync-get-dataset-items

- Headers:
  Content-Type: application/json
  Authorization: Bearer YOUR_APIFY_API_TOKEN

- Body (JSON):
  See `payload-example.json`

---

## 5. Files in This Folder

- actor-config.json
  Basic information about the Apify actor used

- payload-example.json
  Example request body sent from n8n to Apify

---

## Notes
- This project uses Apify only as a data source
- All processing, filtering, and deduplication happens inside n8n