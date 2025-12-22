const BASE_URL = 'https://search-lot.atresmedia.com';

const getProxyUrl = (drawPath) => {
  const fullUrl = `${BASE_URL}/${drawPath}/result.json`;
  return import.meta.env.DEV
    ? `/api/atresmedia/${drawPath}/result.json`
    : `https://corsproxy.io/?${encodeURIComponent(fullUrl)}`;
};

export const fetchAllResults = async (drawPath) => {
  try {
    const url = getProxyUrl(drawPath);
    const response = await fetch(url);
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching all results for ${drawPath}:`, error);
    return null;
  }
};

/**
 * Utility to find a specific number in the results array
 * @param {Object} data The data returned from fetchAllResults
 * @param {string} number The number to look for
 */
export const findNumberInResults = (data, number) => {
  if (!data || !data.compruebe) return null;
  // Ensure the number is 6 digits with leading zeros if necessary (though the API seems to use 6 digits)
  const paddedNumber = number.toString().padStart(6, '0');
  return data.compruebe.find(item => item.decimo === paddedNumber) || { decimo: paddedNumber, prize: 0 };
};

/**
 * Extracts and categorizes main prizes from the results
 * @param {Object} data 
 */
export const getMainPrizes = (data) => {
  if (!data || !data.compruebe) return {};

  const extract = (typePrefix) => {
    return data.compruebe
      .filter(item => item.prizeType.startsWith(typePrefix))
      .map(item => item.decimo)
      .sort();
  };

  const extractTerminations = (type, digits) => {
    const numbers = data.compruebe
      .filter(item => item.prizeType === type)
      .map(item => item.decimo.slice(-digits));
    return [...new Set(numbers)].sort();
  };

  return {
    // Navidad
    gordo: extract('G'),
    segundo: extract('Z'),
    tercero: extract('Y'),
    cuartos: extract('H'),
    quintos: extract('I'),
    // Niño / Extra
    p4: extractTerminations('P4', 4),
    p3: extractTerminations('P3', 3),
    p2: extractTerminations('P2', 2),
    reintegros: [...new Set([
      ...extractTerminations('P1', 1),
      ...extractTerminations('R1', 1)
    ])].sort()
  };
};
