export const GenderOptions = ["Männlich", "Weiblich", "Divers"];

export const PatientFormDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  birthDate: new Date(Date.now()),
  gender: "Männlich" as Gender,
  address: "",
  occupation: "",
  emergencyContactName: "",
  emergencyContactNumber: "",
  primaryPhysician: "",
  insuranceProvider: "",
  insurancePolicyNumber: "",
  allergies: "",
  currentMedication: "",
  familyMedicalHistory: "",
  pastMedicalHistory: "",
  identificationType: "Krankenversicherungskarte/police",
  identificationNumber: "",
  identificationDocument: [],
  treatmentConsent: false,
  disclosureConsent: false,
  privacyConsent: false,
};

export const IdentificationTypes = [
  "Krankenversicherungskarte/police",
  "Führerschein",
  "Geburtsurkunde",
  "Militärausweis",
  "Personalausweis",
  "Reisepass",
  "Aufenthaltserlaubnis (Green Card)",
  "Sozialversicherungsausweis",
  "Staatlicher Personalausweis",
  "Studentenausweis",
  "Wählerausweis",
];

export const Doctors = [
  {
    image: "/assets/images/dr-green.png",
    name: "Dr. Angelika Dietzel",
  },
  {
    image: "/assets/images/dr-cameron.png",
    name: "Frau Dr. med. Elzbieta Symank",
  },
  {
    image: "/assets/images/dr-livingston.png",
    name: "Medic Center Fürth Hauptbahnhof",
  },
  {
    image: "/assets/images/dr-peter.png",
    name: "Herr Dr. med. Miroslav Rolf Karan",
  },
  {
    image: "/assets/images/dr-powell.png",
    name: "Frau Dr. med. Karin Pumpf",
  },
  {
    image: "/assets/images/dr-remirez.png",
    name: "Herr Dr. med. Matthias Uebler",
  },
  {
    image: "/assets/images/dr-lee.png",
    name: "Frau Dr. med. Judith Siegert",
  },
  {
    image: "/assets/images/dr-cruz.png",
    name: "Frau Dr. med. Regina Krohmer",
  },
  {
    image: "/assets/images/dr-sharma.png",
    name: "Herr Dr. med. Ralf Bürger",
  },
];

export const StatusIcon = {
  scheduled: "/assets/icons/check.svg",
  pending: "/assets/icons/pending.svg",
  cancelled: "/assets/icons/cancelled.svg",
};
