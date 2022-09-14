import { createDictionary, getLang } from './build-dictionary';

['browserLanguage', 'language'].forEach(property => {
	test(`should return the french version when the navigator.${property} is FR`, () => {
		expect(createDictionary('fr').summary).toBe('Sommaire');
	});

	test(`should return the english version when the navigator.${property} is EN`, () => {
		expect(createDictionary('en').summary).toBe('Summary');
	});

	test(`should return the english version the navigator.${property} is not supported`, () => {
		expect(createDictionary('de').welcome).toBeUndefined();
	});
});

test(`should return fr when we passe fr as a paremeter`, () => {
	expect(getLang('fr')).toBe('fr');
});

test(`should return fr when we passe fr-FR as a paremeter`, () => {
	expect(getLang('fr-FR')).toBe('fr');
});
