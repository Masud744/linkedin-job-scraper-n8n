/**
 * n8n Code Node
 * Transforms raw Apify job data into structured items
 */

const jobs = $json.items || [];

return jobs.map(job => ({
  json: {
    job_title: job.title,
    company_name: job.company,
    location: job.location,
    time_posted_days: job.posted_days,
    employment_type: job.employment_type,
    industries: job.industry,
    apply_url: job.url,
    job_description: job.description,
    easy_apply: job.easy_apply || false
  }
}));