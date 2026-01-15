/**
 * Validate & clean LinkedIn job data
 * Used before inserting into Airtable
 */

function validateJobs(jobs) {
  if (!Array.isArray(jobs)) {
    throw new Error("Input must be an array");
  }

  const seenUrls = new Set();

  return jobs
    .map(job => ({
      job_title: job.job_title?.trim(),
      company_name: job.company_name?.trim(),
      location: job.location?.trim(),
      apply_url: job.apply_url?.trim(),
      time_posted_days: Number(job.time_posted_days) || null,
      seniority_level: job.seniority_level || "Not specified",
      employment_type: job.employment_type || "Not specified",
      industries: job.industries || null,
      job_description: job.job_description || null,
    }))
    .filter(job => {
      if (!job.job_title) return false;
      if (!job.apply_url) return false;

      if (seenUrls.has(job.apply_url)) return false;
      seenUrls.add(job.apply_url);

      return true;
    });
}

module.exports = { validateJobs };