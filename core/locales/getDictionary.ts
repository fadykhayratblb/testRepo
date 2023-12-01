import enCommon from './en/common.json';
import enAbout from './en/about.json';
import arCommon from './ar/common.json';
import arAbout from './ar/about.json';

type DictionaryContent = {
  [key: string]: string;
};

type Dictionary = {
  [key: string]: { [module: string]: DictionaryContent };
};

const dictionaries: Dictionary = {
  en: {
    common: enCommon,
    about: enAbout,
  },
  ar: {
    common: arCommon,
    about: arAbout,
  },
};

export const getDictionary = (
  lang: string,
  module: string
): DictionaryContent | null => {
  const dictionaryContent = dictionaries[lang]?.[module];
  return typeof dictionaryContent === 'object' && dictionaryContent !== null
    ? dictionaryContent
    : null;
};
