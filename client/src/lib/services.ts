export interface Service {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

export const eyeServices: Service[] = [
  {
    icon: "fas fa-cut",
    title: "Cataract Treatment & Surgeries",
    description: "Advanced phacoemulsification and surgical techniques for cataract removal",
    features: ["Phacoemulsification surgery", "Premium IOL implants", "Micro-incision techniques", "Quick recovery"]
  },
  {
    icon: "fas fa-eye",
    title: "Oculoplasty & Eyelid Surgery",
    description: "Eyelid and orbital surgery, tear duct procedures for cosmetic and functional improvement",
    features: ["Eyelid reconstruction", "Tear duct surgery", "Orbital procedures", "Cosmetic enhancement"]
  },
  {
    icon: "fas fa-tint",
    title: "Cornea Care & Management",
    description: "Comprehensive treatment for degenerative, infectious, and traumatic corneal conditions",
    features: ["Corneal transplants", "Infection treatment", "Trauma management", "Degenerative care"]
  },
  {
    icon: "fas fa-search",
    title: "Glaucoma Diagnosis",
    description: "Early detection and comprehensive management of glaucoma conditions",
    features: ["Pressure monitoring", "OCT imaging", "Laser therapy", "Surgical intervention"]
  },
  {
    icon: "fas fa-child",
    title: "Pediatric Eye Care",
    description: "Specialized eye care for children including squint correction and refractive errors",
    features: ["Squint correction", "Refractive error treatment", "Childhood screening", "Pediatric surgery"]
  },
  {
    icon: "fas fa-first-aid",
    title: "Eye Injury Management",
    description: "Emergency and surgical care for ocular trauma and injuries",
    features: ["Emergency treatment", "Trauma surgery", "Injury assessment", "Rehabilitation care"]
  }
];

export const neuropsychiatryServices: Service[] = [
  {
    icon: "fas fa-heart",
    title: "Anxiety, Depression & Stress",
    description: "Comprehensive treatment for mood disorders with holistic approach",
    features: ["Individual therapy", "Medication management", "CBT & DBT approaches", "Stress management"]
  },
  {
    icon: "fas fa-hand-holding-heart",
    title: "De-addiction Therapy",
    description: "Specialized rehabilitation programs for addiction recovery",
    features: ["Detoxification programs", "Counseling sessions", "Group therapy", "Relapse prevention"]
  },
  {
    icon: "fas fa-child",
    title: "Child & Adolescent Psychiatry",
    description: "Specialized mental health care for young patients",
    features: ["ADHD treatment", "Behavioral therapy", "Family counseling", "School interventions"]
  },
  {
    icon: "fas fa-memory",
    title: "Memory & Cognitive Disorders",
    description: "Assessment and treatment of cognitive impairments and memory issues",
    features: ["Dementia care", "Cognitive assessment", "Memory training", "Family support"]
  },
  {
    icon: "fas fa-users",
    title: "Family Counseling",
    description: "Clinical family therapy and relationship counseling services",
    features: ["Family therapy", "Couples counseling", "Parenting support", "Communication skills"]
  },
  {
    icon: "fas fa-brain",
    title: "Neuropsychiatric Disorders",
    description: "Treatment for complex neurological and psychiatric conditions",
    features: ["Epilepsy management", "Seizure disorders", "Complex cases", "Multidisciplinary care"]
  },
  {
    icon: "fas fa-random",
    title: "Bipolar Disorder & Mania",
    description: "Stabilization and long-term care for mood elevation and depressive episodes",
    features: ["Mood stabilizers", "Psychoeducation", "Crisis intervention", "Ongoing monitoring"]
  },
  {
    icon: "fas fa-sync-alt",
    title: "Obsessive-Compulsive Disorder (OCD)",
    description: "Evidence-based treatment for intrusive thoughts and compulsive behaviors",
    features: ["ERP therapy", "SSRIs", "Cognitive restructuring", "Habit reversal training"]
  },
  {
    icon: "fas fa-venus-mars",
    title: "Sexual Disorders",
    description: "Confidential care for psychosexual and intimacy-related concerns",
    features: ["Sexual dysfunction therapy", "Psychosexual counseling", "Couples therapy", "Medication support"]
  },
  {
    icon: "fas fa-moon",
    title: "Insomnia & Sleep Disorders",
    description: "Diagnosis and treatment of chronic sleep disturbances",
    features: ["Sleep hygiene training", "CBT-I", "Relaxation techniques", "Medication management"]
  },
  {
    icon: "fas fa-puzzle-piece",
    title: "Autism Spectrum Disorders",
    description: "Supportive care for children and adults with ASD",
    features: ["Behavioral therapy", "Social skills training", "Parental guidance", "Multidisciplinary coordination"]
  },
  {
    icon: "fas fa-user-md",
    title: "Schizophrenia & Psychotic Disorders",
    description: "Comprehensive care for hallucinations, delusions, and disorganized thinking",
    features: ["Antipsychotic treatment", "Rehabilitation programs", "Family psychoeducation", "Relapse prevention"]
  }
];

