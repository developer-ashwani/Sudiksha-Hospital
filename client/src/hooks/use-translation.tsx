import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/lib/translations';

type TranslationKey = keyof typeof translations.en;

export function useTranslation() {
  const { language } = useLanguage();

  const t = (key: string): string => {
    // Navigate through nested keys (e.g., "home.hero.title")
    const keys = key.split('.');
    let value: any = translations[language];

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k as keyof typeof value];
      } else {
        // Fallback to English if translation not found
        value = translations.en;
        for (const fallbackKey of keys) {
          if (value && typeof value === 'object' && fallbackKey in value) {
            value = value[fallbackKey as keyof typeof value];
          } else {
            return key; // Return key if translation not found
          }
        }
        break;
      }
    }

    return typeof value === 'string' ? value : key;
  };

  return { t, language };
}

