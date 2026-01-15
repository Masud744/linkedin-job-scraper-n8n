# Setup Guide

Follow these steps to run the workflow successfully.

## Prerequisites
- n8n (cloud or self-hosted)
- Apify account
- Airtable account

## Step 1: Import Workflow
- Open n8n
- Import `workflow.json` from the repository

## Step 2: Set Credentials
- Add Apify API token in n8n credentials
- Add Airtable API key and Base ID

## Step 3: Configure Schedule Trigger
- Set Schedule Trigger to run every 12 hours
- Activate workflow

## Step 4: Test Run
- Execute workflow manually once
- Verify data appears in Airtable