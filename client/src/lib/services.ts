import { translations } from './translations';

const ASSET_BASE = '/images/services';

function imgPath(section: 'eye' | 'mind', name: string) {
  // name should match the image filename (without extension)
  return `${ASSET_BASE}/${section}/${name}.png`;
}

export interface Service {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

type Language = 'en' | 'hi';

export function getEyeServices(language: Language = 'en'): Service[] {
  const t = translations[language].home.services.eyeServices;
  
  return [
    {
      icon: imgPath('eye', 'cataract'),
      title: t.cataract.title,
      description: t.cataract.description,
      features: t.cataract.features
    },
    {
      icon: imgPath('eye', 'oculoplasty'),
      title: t.oculoplasty.title,
      description: t.oculoplasty.description,
      features: t.oculoplasty.features
    },
    {
      icon: imgPath('eye', 'cornea'),
      title: t.cornea.title,
      description: t.cornea.description,
      features: t.cornea.features
    },
    {
      icon: imgPath('eye', 'glaucoma'),
      title: t.glaucoma.title,
      description: t.glaucoma.description,
      features: t.glaucoma.features
    },
    {
      icon: imgPath('eye', 'pediatric'),
      title: t.pediatric.title,
      description: t.pediatric.description,
      features: t.pediatric.features
    },
    {
      icon: imgPath('eye', 'eye-injury'),
      title: t.injury.title,
      description: t.injury.description,
      features: t.injury.features
    }
  ];
}

export function getNeuropsychiatryServices(language: Language = 'en'): Service[] {
  const t = translations[language].home.services.neuropsychiatryServices;
  
  return [
    {
      icon: imgPath('mind', 'anxiety'),
      title: t.anxiety.title,
      description: t.anxiety.description,
      features: t.anxiety.features
    },
    {
      icon: imgPath('mind', 'de-addiction-therapy'),
      title: t.deAddiction.title,
      description: t.deAddiction.description,
      features: t.deAddiction.features
    },
    {
      icon: imgPath('mind', 'child-adolescent psychiatry'),
      title: t.childPsychiatry.title,
      description: t.childPsychiatry.description,
      features: t.childPsychiatry.features
    },
    {
      icon: imgPath('mind', 'memory-cognitive-disorders'),
      title: t.memory.title,
      description: t.memory.description,
      features: t.memory.features
    },
    {
      icon: imgPath('mind', 'family-counseling'),
      title: t.familyCounseling.title,
      description: t.familyCounseling.description,
      features: t.familyCounseling.features
    },
    {
      icon: imgPath('mind', 'neuropsychiatric-disorders'),
      title: t.neuropsychiatric.title,
      description: t.neuropsychiatric.description,
      features: t.neuropsychiatric.features
    },
    {
      icon: imgPath('mind', 'bipolar-disorder-mania'),
      title: t.bipolar.title,
      description: t.bipolar.description,
      features: t.bipolar.features
    },
    {
      icon: imgPath('mind', 'obsessive-compulsive-disorder'),
      title: t.ocd.title,
      description: t.ocd.description,
      features: t.ocd.features
    },
    {
      icon: imgPath('mind', 'sexual-disorders'),
      title: t.sexual.title,
      description: t.sexual.description,
      features: t.sexual.features
    },
    {
      icon: imgPath('mind', 'insomnia-sleep-disorders'),
      title: t.insomnia.title,
      description: t.insomnia.description,
      features: t.insomnia.features
    },
    {
      icon: imgPath('mind', 'autism-spectrum-disorders'),
      title: t.autism.title,
      description: t.autism.description,
      features: t.autism.features
    },
    {
      icon: imgPath('mind', 'schizophrenia'),
      title: t.schizophrenia.title,
      description: t.schizophrenia.description,
      features: t.schizophrenia.features
    }
  ];
}

// Legacy exports for backward compatibility (default to English)
export const eyeServices = getEyeServices('en');
export const neuropsychiatryServices = getNeuropsychiatryServices('en');

