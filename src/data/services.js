export const serviceCategories = [
  {
    category: "General Services",
    services: [
      { id: "reg", name: "Registration", price: 100 },
      { id: "reg-child", name: "Registration (Child)", price: 80 },
      { id: "consult", name: "Consultation", price: 250 },
      { id: "consult-refraction", name: "Consultation with Refraction", price: 350 },
      { id: "review-free", name: "Review within 1 week", price: 0, isFree: true },
      { id: "subsequent", name: "Subsequent Visits", price: 200 },
      { id: "iop-first", name: "IOP (First Visit)", price: 100 },
      { id: "iop-sub", name: "IOP (Subsequent Visit)", price: 50 },
      { id: "fast-track", name: "Fast Track Services (Corporate Staff)", price: null, isInquiry: true },
    ],
  },
  {
    category: "Ophthalmic Imaging & Investigation",
    services: [
      { id: "keratometry", name: "Keratometry", price: 100 },
      { id: "oct-pachy", name: "OCT Pachymetry", price: 150 },
      { id: "oct-rnfl", name: "OCT (RNFL Analysis)", price: 250 },
      { id: "oct-gcc", name: "OCT (GCC/GCA)", price: 250 },
      { id: "oct-rnfl-gca", name: "OCT (RNFL + GCA)", price: 300 },
      { id: "macular-oct", name: "Macular OCT", price: 250 },
      { id: "oct-mac-glauc", name: "OCT (Macular + Glaucoma)", price: 450 },
      { id: "tonometry", name: "Non-contact Tonometry (External)", price: 100 },
      { id: "visual-field", name: "Visual Field Test", price: 150 },
    ],
  },
  {
    category: "Optical Services",
    services: [
      { id: "refraction", name: "Refraction", price: 250 },
      { id: "cycloplegic", name: "Cycloplegic Refraction", price: 300 },
    ],
  },
];
