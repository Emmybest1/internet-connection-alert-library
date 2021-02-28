export enum AfricanCountries {
  Nigeria = 'Nigeria',
  Kenya = 'Kenya',
  Egypt = 'Egypt',
}

export enum AsianCountries {
  India = 'India',
  Nepal = 'Nepal',
  China = 'China',
}

export enum EuropeanCountries {
  Estonia = 'Estonia',
  UK = 'UK',
  Russia = 'Russia',
}

type TOperations = {
  isAfricanCountry: boolean;
  isAsianCountry: boolean;
  isEuropeanCountry: boolean;
};

const countryEvaluator = (africanCountry: string, asianCountry: string, europeanCountry: string): TOperations => {
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

const result = Object.create(
  countryEvaluator(AfricanCountries.Nigeria, AsianCountries.India, EuropeanCountries.Estonia)
);

export const truthyOrFalsyDetector = (): boolean => {
  if (result.isAfricanCountry && result.isAsianCountry && result.isEuropeanCountry) {
    return true;
  }

  return false;
};
