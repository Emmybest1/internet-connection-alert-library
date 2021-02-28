import React from 'react';
import {
  AfricanCountries,
  AsianCountries,
  EuropeanCountries,
  countryEvaluator,
  _truthyOrFalsyDetector,
  TOperations,
} from './__booleanGenerator';

describe('Test for __booleanGenerator.ts', () => {
  test('should pass with Egypt,India and Russia as the () argument', () => {
    const returnedValue: TOperations = countryEvaluator(
      AfricanCountries.Egypt,
      AsianCountries.India,
      EuropeanCountries.Russia
    ) as TOperations;

    expect(returnedValue).toEqual({isAfricanCountry: true, isAsianCountry: true, isEuropeanCountry: true});
  });

  test('should pass with Kenya,Nepal and Estonia as the () argument', () => {
    const returnedValue: TOperations = countryEvaluator(
      AfricanCountries.Kenya,
      AsianCountries.Nepal,
      EuropeanCountries.Estonia
    ) as TOperations;

    expect(returnedValue).toEqual({isAfricanCountry: true, isAsianCountry: true, isEuropeanCountry: true});
  });

  test('should pass with Nigeria,China and UK as the () argument', () => {
    const returnedValue: TOperations = countryEvaluator(
      AfricanCountries.Nigeria,
      AsianCountries.China,
      EuropeanCountries.UK
    ) as TOperations;

    expect(returnedValue).toEqual({isAfricanCountry: true, isAsianCountry: true, isEuropeanCountry: true});
  });

  test('should fail only when first arg is America for negative testing', () => {
    const returnedValue: TOperations = countryEvaluator(
      'America',
      AsianCountries.India,
      EuropeanCountries.Russia
    ) as TOperations;

    expect(returnedValue).toEqual({isAfricanCountry: false, isAsianCountry: true, isEuropeanCountry: true});
  });

  test('should fail only when second arg is Nigeria for negative testing', () => {
    const returnedValue: TOperations = countryEvaluator(
      AfricanCountries.Nigeria,
      'Nigeria',
      EuropeanCountries.Russia
    ) as TOperations;

    expect(returnedValue).toEqual({isAfricanCountry: true, isAsianCountry: false, isEuropeanCountry: true});
  });

  test('should fail only when third arg is India for negative testing', () => {
    const returnedValue: TOperations = countryEvaluator(
      AfricanCountries.Nigeria,
      AsianCountries.India,
      'India'
    ) as TOperations;

    expect(returnedValue).toEqual({isAfricanCountry: true, isAsianCountry: true, isEuropeanCountry: false});
  });

  test('should return true for _truthyOrFalsyDetector function evaluation', () => {
    const returnedValue: TOperations = countryEvaluator(
      AfricanCountries.Nigeria,
      AsianCountries.China,
      EuropeanCountries.UK
    ) as TOperations;

    const detectedBoolean = _truthyOrFalsyDetector(returnedValue);

    expect(detectedBoolean).toBeTruthy();
  });

  test('should return false for _truthyOrFalsyDetector function evaluation', () => {
    const returnedValue: TOperations = countryEvaluator(
      'America',
      AsianCountries.India,
      EuropeanCountries.Russia
    ) as TOperations;

    const detectedBoolean = _truthyOrFalsyDetector(returnedValue);

    expect(detectedBoolean).toBeFalsy();
  });
});
