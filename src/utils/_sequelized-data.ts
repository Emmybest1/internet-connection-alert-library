enum AfricanCountries {
  Nigeria = 'Nigeria',
  Kenya = 'Kenya',
  Egypt = 'Egypt',
}

enum EuropeanCountries {
  Estonia = 'Estonia',
  UK = 'UK',
  Russia = 'Russia',
}

enum AsianCountries {
  India = 'India',
  Nepal = 'Nepal',
  China = 'China',
}

type T_Operations = {
  isAfricanCountry: boolean;
  isAsianCountry: boolean;
  isEuropeanCountry: boolean;
};

const _countryEvaluator = (africanCountry: string, asianCountry: string, europeanCountry: string): T_Operations => {
  return {
    isAfricanCountry:
      africanCountry === AfricanCountries.Nigeria ||
      africanCountry === AfricanCountries.Kenya ||
      africanCountry === AfricanCountries.Egypt
        ? true
        : false,
    isAsianCountry:
      asianCountry === AsianCountries.India ||
      asianCountry === AsianCountries.Nepal ||
      asianCountry === AsianCountries.China
        ? true
        : false,
    isEuropeanCountry:
      europeanCountry === EuropeanCountries.Estonia ||
      europeanCountry === EuropeanCountries.UK ||
      europeanCountry === EuropeanCountries.Russia
        ? true
        : false,
  };
};

export const _truthyOrFalsyDetector = (): boolean => {
  const result = Object.create(
    _countryEvaluator(AfricanCountries.Nigeria, AsianCountries.India, EuropeanCountries.Estonia)
  );

  if (result.isAfricanCountry && result.isAsianCountry && result.isEuropeanCountry) {
    return true;
  }

  return false;
};
