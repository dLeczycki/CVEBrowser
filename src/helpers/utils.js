export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

export const parseCveServerResponse = (response) => {
  const cveList = response.result.CVE_Items.map((cve) => {
    let metric;
    if (cve.impact.baseMetricV3) metric = cve.impact.baseMetricV3.cvssV3;
    else {
      metric = {
        baseScore: '',
        baseSeverity: 'NOT_SUPPLIED',
      };
    }

    return {
      cveId: cve.cve.CVE_data_meta.ID,
      description: cve.cve.description.description_data[0].value,
      problemTypes: cve.cve.problemtype.problemtype_data,
      references: cve.cve.references.reference_data.map((reference) => reference.url),
      cvssV3Metric: metric,
      lastModifiedDate: cve.lastModifiedDate,
      publishedDate: cve.publishedDate,
    };
  });

  const { totalResults } = response;

  return [cveList, totalResults];
};

export const parseDate = (date) => {
  // yyyy-MM-dd'T'HH:mm:ss:SSS z
  const year = date.getFullYear().toString();

  let month = (date.getMonth() + 1).toString();
  if (month.length === 1) month = `0${month}`;

  let day = date.getDate().toString();
  if (day.length === 1) day = `0${day}`;

  return `${year}-${month}-${day}T00:00:00:000 UTC-00:00`;
};
