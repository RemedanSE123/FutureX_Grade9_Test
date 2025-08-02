import type { Subject, Question } from "@/app/page"

const questionsData: Record<Subject, Question[]> = {
  biology: [
    {
      id: 1,
      question: "Which of the following best describes the importance of biotechnology in modern society?",
      options: [
        "It has no significant impact on society.",
        "It helps in conservation efforts and sustainable development.",
        "It primarily focuses on entertainment industry advancements.",
        "It only benefits a select group of individuals.",
      ],
      correctAnswer: 1,
      explanation:
        "Biotechnology plays a crucial role in conservation efforts and sustainable development by providing solutions for food security, environmental protection, and healthcare advancements.",
    },
    {
      id: 2,
      question:
        "What is the process by which genetic information is passed from parent to offspring in a stable manner known as?",
      options: ["Mitosis", "Meiosis", "Heredity", "Mutation"],
      correctAnswer: 2,
      explanation:
        "Heredity refers to the passing of genetic information from parent to offspring, ensuring stable transmission of traits over generations.",
    },
    {
      id: 3,
      question: "Which of the following correctly describes the role of the nervous system in the human body?",
      options: [
        "Controls voluntary movements only",
        "Regulates hormonal balance",
        "Receives and processes sensory information",
        "Produces energy for cellular activities",
      ],
      correctAnswer: 2,
      explanation:
        "The nervous system receives and processes sensory information from the environment, allowing the body to respond to stimuli appropriately.",
    },
    {
      id: 4,
      question: "In which organelle does the process of photosynthesis primarily take place?",
      options: ["Nucleus", "Mitochondria", "Chloroplast", "Endoplasmic reticulum"],
      correctAnswer: 2,
      explanation:
        "Photosynthesis primarily occurs in chloroplasts, where chlorophyll absorbs light energy and converts it into chemical energy.",
    },
    {
      id: 5,
      question: "What is the primary cause of climate change?",
      options: [
        "Natural factors only",
        "Human activities and natural factors",
        "Volcanic eruptions",
        "Changes in Earth's orbit",
      ],
      correctAnswer: 1,
      explanation:
        "Climate change is primarily caused by human activities such as deforestation, burning fossil fuels, and industrial processes, along with natural factors.",
    },
    {
      id: 6,
      question: "Which of the following is NOT a mode of disease transmission?",
      options: ["Airborne", "Waterborne", "Vector-borne", "Contact with non-infected individuals"],
      correctAnswer: 3,
      explanation:
        "Contact with non-infected individuals does not contribute to disease transmission; it is not a recognized mode of transmission.",
    },
    {
      id: 7,
      question: "What is the main product of cellular respiration?",
      options: ["Glucose", "Oxygen", "Carbon dioxide", "ATP (adenosine triphosphate)"],
      correctAnswer: 3,
      explanation: "The main product of cellular respiration is ATP, which is the primary energy currency of cells.",
    },
    {
      id: 8,
      question:
        "Which of the following best describes the purpose of the United Nations Framework Convention on Climate Change (UNFCCC)?",
      options: [
        "To promote climate change denial",
        "To establish binding emission reduction targets",
        "To facilitate international cooperation on climate change issues",
        "To exploit natural resources for economic gain",
      ],
      correctAnswer: 2,
      explanation:
        "The UNFCCC aims to facilitate international cooperation on climate change issues, promote sustainable development, and mitigate greenhouse gas emissions.",
    },
    {
      id: 9,
      question: "What is the primary function of enzymes in biological systems?",
      options: [
        "To provide structural support to cells",
        "To transport molecules across cell membranes",
        "To catalyze chemical reactions",
        "To store genetic information",
      ],
      correctAnswer: 2,
      explanation:
        "Enzymes function as biological catalysts, speeding up chemical reactions within cells without being consumed in the process.",
    },
    {
      id: 10,
      question: "How do fungi primarily obtain nutrients?",
      options: [
        "Through photosynthesis",
        "By absorbing nutrients from their surroundings",
        "By capturing prey",
        "By performing chemosynthesis",
      ],
      correctAnswer: 1,
      explanation: "Fungi obtain nutrients by absorbing them from their surroundings through external digestion.",
    },
    {
      id: 11,
      question: "Which blood component is responsible for oxygen transport?",
      options: ["White blood cells", "Red blood cells", "Platelets", "Plasma"],
      correctAnswer: 1,
      explanation: "Red blood cells contain hemoglobin, which binds to oxygen and transports it throughout the body.",
    },
    {
      id: 12,
      question: "What is the basic unit of heredity?",
      options: ["Chromosome", "Gene", "DNA", "RNA"],
      correctAnswer: 1,
      explanation: "A gene is the basic unit of heredity that carries information from parents to offspring.",
    },
    {
      id: 13,
      question: "Which process converts glucose into energy in cells?",
      options: ["Photosynthesis", "Cellular respiration", "Fermentation", "Digestion"],
      correctAnswer: 1,
      explanation: "Cellular respiration is the process that breaks down glucose to produce ATP energy for cells.",
    },
    {
      id: 14,
      question: "What is the function of the ribosomes in a cell?",
      options: ["DNA replication", "Protein synthesis", "Energy production", "Waste removal"],
      correctAnswer: 1,
      explanation: "Ribosomes are the cellular structures responsible for protein synthesis.",
    },
    {
      id: 15,
      question: "Which type of reproduction produces genetically identical offspring?",
      options: ["Sexual reproduction", "Asexual reproduction", "Cross-pollination", "Fertilization"],
      correctAnswer: 1,
      explanation: "Asexual reproduction produces offspring that are genetically identical to the parent.",
    },
    {
      id: 16,
      question: "What is the role of chlorophyll in photosynthesis?",
      options: ["Absorbs light energy", "Stores glucose", "Produces oxygen", "Transports water"],
      correctAnswer: 0,
      explanation: "Chlorophyll is the green pigment that absorbs light energy for photosynthesis.",
    },
    {
      id: 17,
      question: "Which system in the human body is responsible for fighting infections?",
      options: ["Circulatory system", "Immune system", "Nervous system", "Digestive system"],
      correctAnswer: 1,
      explanation: "The immune system protects the body from infections and diseases.",
    },
    {
      id: 18,
      question: "What is the process by which plants lose water through their leaves?",
      options: ["Respiration", "Transpiration", "Photosynthesis", "Absorption"],
      correctAnswer: 1,
      explanation: "Transpiration is the process by which plants lose water vapor through their leaves.",
    },
    {
      id: 19,
      question: "Which organelle controls cell activities and contains DNA?",
      options: ["Mitochondria", "Nucleus", "Ribosome", "Vacuole"],
      correctAnswer: 1,
      explanation: "The nucleus controls cell activities and contains the cell's DNA.",
    },
    {
      id: 20,
      question: "What is the main difference between prokaryotic and eukaryotic cells?",
      options: ["Size difference", "Presence or absence of nucleus", "Number of chromosomes", "Type of reproduction"],
      correctAnswer: 1,
      explanation: "Prokaryotic cells lack a nucleus, while eukaryotic cells have a membrane-bound nucleus.",
    },
  ],
  geography: [
    {
      id: 21,
      question: "The concept of geography encompasses:",
      options: [
        "Only the physical features of the Earth",
        "Only the human-made features of the Earth",
        "Both the physical and human-made features of the Earth",
        "None of the above",
      ],
      correctAnswer: 2,
      explanation:
        "Geography is the study of both physical features (landforms, climate, etc.) and human-made features (cities, cultures, etc.) of the Earth and their interactions.",
    },
    {
      id: 22,
      question: "What are the effects of climate change?",
      options: [
        "Rising sea levels",
        "More frequent extreme weather events",
        "Disruption of ecosystems",
        "All of the above",
      ],
      correctAnswer: 3,
      explanation:
        "Climate change leads to rising sea levels, more frequent extreme weather events (such as hurricanes and heatwaves), and disruption of ecosystems (including loss of biodiversity).",
    },
    {
      id: 23,
      question: "What are the pillars of the Climate Resilient Green Economy of Ethiopia?",
      options: [
        "Sustainable agriculture and forestry",
        "Renewable energy",
        "Water resource management",
        "All of the above",
      ],
      correctAnswer: 3,
      explanation:
        "The Climate Resilient Green Economy of Ethiopia focuses on sustainable agriculture and forestry, renewable energy, and water resource management as its pillars.",
    },
    {
      id: 24,
      question: "What is the relationship between population and socio-economic development?",
      options: [
        "Higher population always leads to higher socio-economic development",
        "Lower population always leads to higher socio-economic development",
        "Population growth can either positively or negatively impact socio-economic development depending on various factors",
        "There is no relationship between population and socio-economic development",
      ],
      correctAnswer: 2,
      explanation:
        "The relationship between population and socio-economic development is complex and can vary depending on factors such as education, healthcare, and economic policies.",
    },
    {
      id: 25,
      question: "What are some measures taken to curb population growth?",
      options: [
        "Family planning programs",
        "Education and empowerment of women",
        "Access to contraceptives",
        "All of the above",
      ],
      correctAnswer: 3,
      explanation:
        "Measures to curb population growth include family planning programs, education and empowerment of women, and access to contraceptives.",
    },
    {
      id: 26,
      question: "What are the major geological processes associated with plate tectonics?",
      options: [
        "Volcanism and earthquakes",
        "Erosion and weathering",
        "Sedimentation and deposition",
        "None of the above",
      ],
      correctAnswer: 0,
      explanation:
        "Plate tectonics involves the movement and interaction of Earth's lithospheric plates, resulting in processes such as volcanism and earthquakes.",
    },
    {
      id: 27,
      question: "What are the basic concepts of climate change?",
      options: [
        "Changes in temperature and precipitation patterns",
        "Human-induced alterations to the Earth's climate system",
        "Long-term shifts in atmospheric conditions",
        "All of the above",
      ],
      correctAnswer: 3,
      explanation:
        "The basic concepts of climate change include changes in temperature and precipitation patterns, human-induced alterations to the Earth's climate system, and long-term shifts in atmospheric conditions.",
    },
    {
      id: 28,
      question: "Which region of Ethiopia is known for its coffee production?",
      options: ["Tigray", "Oromia", "Amhara", "SNNPR"],
      correctAnswer: 1,
      explanation:
        "Oromia region is the largest coffee-producing region in Ethiopia, contributing significantly to the country's coffee exports.",
    },
    {
      id: 29,
      question: "What is the highest mountain in Ethiopia?",
      options: ["Mount Entoto", "Ras Dejen", "Mount Zuqualla", "Mount Guna"],
      correctAnswer: 1,
      explanation:
        "Ras Dejen, located in the Simien Mountains, is the highest peak in Ethiopia at 4,550 meters above sea level.",
    },
    {
      id: 30,
      question: "Which river is the main source of the Blue Nile?",
      options: ["Lake Tana", "Lake Ziway", "Lake Hawassa", "Lake Chamo"],
      correctAnswer: 0,
      explanation: "Lake Tana, located in the Ethiopian Highlands, is the source of the Blue Nile River.",
    },
    {
      id: 31,
      question: "What is the capital city of Ethiopia?",
      options: ["Dire Dawa", "Bahir Dar", "Addis Ababa", "Mekelle"],
      correctAnswer: 2,
      explanation:
        "Addis Ababa is the capital and largest city of Ethiopia, serving as the political and economic center of the country.",
    },
    {
      id: 32,
      question: "Which climate zone is predominant in the Ethiopian Highlands?",
      options: ["Tropical", "Temperate", "Desert", "Mediterranean"],
      correctAnswer: 1,
      explanation:
        "The Ethiopian Highlands have a temperate climate due to their high elevation, despite being located near the equator.",
    },
    {
      id: 33,
      question: "What is the Great Rift Valley known for in Ethiopia?",
      options: ["Oil deposits", "Lakes and volcanic activity", "Dense forests", "Desert landscapes"],
      correctAnswer: 1,
      explanation:
        "The Great Rift Valley in Ethiopia is characterized by numerous lakes, volcanic activity, and unique geological formations.",
    },
    {
      id: 34,
      question: "Which neighboring country shares the longest border with Ethiopia?",
      options: ["Kenya", "Sudan", "Somalia", "Eritrea"],
      correctAnswer: 1,
      explanation:
        "Sudan shares the longest border with Ethiopia, extending along the western boundary of the country.",
    },
    {
      id: 35,
      question: "What is the main economic activity in the Ethiopian Highlands?",
      options: ["Mining", "Agriculture", "Manufacturing", "Tourism"],
      correctAnswer: 1,
      explanation:
        "Agriculture is the main economic activity in the Ethiopian Highlands, with crops like teff, barley, and wheat being widely cultivated.",
    },
    {
      id: 36,
      question: "Which desert region is located in eastern Ethiopia?",
      options: ["Sahara Desert", "Kalahari Desert", "Danakil Desert", "Namib Desert"],
      correctAnswer: 2,
      explanation: "The Danakil Desert, one of the hottest and lowest places on Earth, is located in eastern Ethiopia.",
    },
    {
      id: 37,
      question: "What is the significance of the Ethiopian calendar?",
      options: ["It has 12 months", "It has 13 months", "It follows the Gregorian calendar", "It has 10 months"],
      correctAnswer: 1,
      explanation:
        "The Ethiopian calendar has 13 months, with 12 months of 30 days each and a 13th month of 5 or 6 days.",
    },
    {
      id: 38,
      question: "Which UNESCO World Heritage site is located in northern Ethiopia?",
      options: ["Lalibela", "Axum", "Harar", "All of the above"],
      correctAnswer: 3,
      explanation:
        "Ethiopia has multiple UNESCO World Heritage sites including Lalibela, Axum, and Harar, all showcasing the country's rich cultural heritage.",
    },
    {
      id: 39,
      question: "What is the main cause of soil erosion in the Ethiopian Highlands?",
      options: ["Wind erosion", "Deforestation and overgrazing", "Industrial pollution", "Volcanic activity"],
      correctAnswer: 1,
      explanation:
        "Deforestation and overgrazing are the main causes of soil erosion in the Ethiopian Highlands, leading to land degradation.",
    },
    {
      id: 40,
      question: "Which season brings the main rains to most parts of Ethiopia?",
      options: ["Belg (small rains)", "Kiremt (main rains)", "Bega (dry season)", "All seasons equally"],
      correctAnswer: 1,
      explanation:
        "Kiremt (June to September) is the main rainy season in Ethiopia, bringing most of the annual precipitation.",
    },
  ],
  chemistry: [
    {
      id: 41,
      question: "What is the chemical symbol for gold?",
      options: ["Go", "Gd", "Au", "Ag"],
      correctAnswer: 2,
      explanation: "Au comes from the Latin word 'aurum', meaning gold.",
    },
    {
      id: 42,
      question: "What is the pH of pure water at 25°C?",
      options: ["6", "7", "8", "9"],
      correctAnswer: 1,
      explanation: "Pure water has a pH of 7 at 25°C, which is considered neutral on the pH scale.",
    },
    {
      id: 43,
      question: "Which gas makes up approximately 78% of Earth's atmosphere?",
      options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Argon"],
      correctAnswer: 2,
      explanation: "Nitrogen makes up about 78% of Earth's atmosphere, while oxygen makes up about 21%.",
    },
    {
      id: 44,
      question: "What is the atomic number of carbon?",
      options: ["4", "6", "8", "12"],
      correctAnswer: 1,
      explanation: "Carbon has an atomic number of 6, meaning it has 6 protons in its nucleus.",
    },
    {
      id: 45,
      question: "Which type of chemical bond involves the sharing of electrons?",
      options: ["Ionic bond", "Covalent bond", "Metallic bond", "Hydrogen bond"],
      correctAnswer: 1,
      explanation: "Covalent bonds form when atoms share electrons to achieve stable electron configurations.",
    },
    {
      id: 46,
      question: "What is the most abundant element in the universe?",
      options: ["Helium", "Oxygen", "Carbon", "Hydrogen"],
      correctAnswer: 3,
      explanation: "Hydrogen is the most abundant element in the universe, making up about 75% of normal matter.",
    },
    {
      id: 47,
      question: "Which acid is commonly found in vinegar?",
      options: ["Hydrochloric acid", "Sulfuric acid", "Acetic acid", "Nitric acid"],
      correctAnswer: 2,
      explanation: "Acetic acid (CH₃COOH) is the main component that gives vinegar its sour taste and smell.",
    },
    {
      id: 48,
      question: "What is the chemical formula for table salt?",
      options: ["NaCl", "KCl", "CaCl₂", "MgCl₂"],
      correctAnswer: 0,
      explanation: "Table salt is sodium chloride, with the chemical formula NaCl.",
    },
    {
      id: 49,
      question: "Which process involves the breakdown of compounds using electrical energy?",
      options: ["Electrolysis", "Oxidation", "Reduction", "Combustion"],
      correctAnswer: 0,
      explanation: "Electrolysis is the process of using electrical energy to break down chemical compounds.",
    },
    {
      id: 50,
      question: "What is the molecular formula for glucose?",
      options: ["C₆H₁₂O₆", "C₁₂H₂₂O₁₁", "C₂H₆O", "CH₄"],
      correctAnswer: 0,
      explanation: "Glucose has the molecular formula C₆H₁₂O₆, making it a simple sugar.",
    },
    {
      id: 51,
      question: "Which element is essential for all organic compounds?",
      options: ["Oxygen", "Nitrogen", "Carbon", "Hydrogen"],
      correctAnswer: 2,
      explanation:
        "Carbon is the essential element for all organic compounds, forming the backbone of organic molecules.",
    },
    {
      id: 52,
      question: "What is the process called when a solid changes directly to a gas?",
      options: ["Melting", "Evaporation", "Sublimation", "Condensation"],
      correctAnswer: 2,
      explanation:
        "Sublimation is the process where a solid changes directly to a gas without passing through the liquid phase.",
    },
    {
      id: 53,
      question: "Which type of reaction releases energy?",
      options: ["Endothermic", "Exothermic", "Isothermic", "Adiabatic"],
      correctAnswer: 1,
      explanation: "Exothermic reactions release energy, usually in the form of heat, to the surroundings.",
    },
    {
      id: 54,
      question: "What is the oxidation state of oxygen in most compounds?",
      options: ["-1", "-2", "+1", "+2"],
      correctAnswer: 1,
      explanation: "Oxygen typically has an oxidation state of -2 in most compounds.",
    },
    {
      id: 55,
      question: "Which gas is produced when metals react with acids?",
      options: ["Oxygen", "Carbon dioxide", "Hydrogen", "Nitrogen"],
      correctAnswer: 2,
      explanation: "When metals react with acids, hydrogen gas is typically produced along with a salt.",
    },
    {
      id: 56,
      question: "What is the main component of natural gas?",
      options: ["Ethane", "Propane", "Methane", "Butane"],
      correctAnswer: 2,
      explanation: "Methane (CH₄) is the main component of natural gas, typically making up 70-90% of its composition.",
    },
    {
      id: 57,
      question: "Which indicator turns red in acidic solutions?",
      options: ["Litmus paper", "Phenolphthalein", "Methyl orange", "Universal indicator"],
      correctAnswer: 0,
      explanation: "Blue litmus paper turns red in acidic solutions, making it a simple acid-base indicator.",
    },
    {
      id: 58,
      question: "What is the chemical name for baking soda?",
      options: ["Sodium carbonate", "Sodium bicarbonate", "Sodium hydroxide", "Sodium chloride"],
      correctAnswer: 1,
      explanation: "Baking soda is sodium bicarbonate (NaHCO₃), commonly used in cooking and as an antacid.",
    },
    {
      id: 59,
      question: "Which type of bond is formed between a metal and a non-metal?",
      options: ["Covalent bond", "Ionic bond", "Metallic bond", "Hydrogen bond"],
      correctAnswer: 1,
      explanation: "Ionic bonds are typically formed between metals and non-metals through the transfer of electrons.",
    },
    {
      id: 60,
      question: "What is the process of a liquid changing to a gas called?",
      options: ["Condensation", "Sublimation", "Evaporation", "Freezing"],
      correctAnswer: 2,
      explanation:
        "Evaporation is the process by which a liquid changes to a gas at temperatures below its boiling point.",
    },
  ],
  physics: [
    {
      id: 61,
      question: "What is the speed of light in vacuum?",
      options: ["3 × 10⁸ m/s", "3 × 10⁶ m/s", "3 × 10¹⁰ m/s", "3 × 10⁴ m/s"],
      correctAnswer: 0,
      explanation:
        "The speed of light in vacuum is approximately 3 × 10⁸ meters per second, a fundamental constant in physics.",
    },
    {
      id: 62,
      question: "Which law states that force equals mass times acceleration?",
      options: ["Newton's First Law", "Newton's Second Law", "Newton's Third Law", "Law of Gravitation"],
      correctAnswer: 1,
      explanation: "Newton's Second Law states that F = ma, where force equals mass times acceleration.",
    },
    {
      id: 63,
      question: "What is the SI unit of electric current?",
      options: ["Volt", "Ohm", "Ampere", "Watt"],
      correctAnswer: 2,
      explanation: "The ampere (A) is the SI unit of electric current, measuring the flow of electric charge.",
    },
    {
      id: 64,
      question: "Which type of wave requires a medium to travel through?",
      options: ["Light wave", "Radio wave", "Sound wave", "X-ray"],
      correctAnswer: 2,
      explanation: "Sound waves are mechanical waves that require a medium (like air, water, or solids) to propagate.",
    },
    {
      id: 65,
      question: "What is the acceleration due to gravity on Earth?",
      options: ["9.8 m/s²", "10.8 m/s²", "8.8 m/s²", "11.8 m/s²"],
      correctAnswer: 0,
      explanation:
        "The acceleration due to gravity on Earth is approximately 9.8 m/s² or 9.81 m/s² to be more precise.",
    },
    {
      id: 66,
      question: "Which particle has no electric charge?",
      options: ["Proton", "Electron", "Neutron", "Ion"],
      correctAnswer: 2,
      explanation: "Neutrons are electrically neutral particles found in the nucleus of atoms.",
    },
    {
      id: 67,
      question: "What is the relationship between wavelength and frequency of electromagnetic waves?",
      options: ["Directly proportional", "Inversely proportional", "No relationship", "Exponentially related"],
      correctAnswer: 1,
      explanation:
        "Wavelength and frequency are inversely proportional: as frequency increases, wavelength decreases (λ = c/f).",
    },
    {
      id: 68,
      question: "Which law of thermodynamics states that energy cannot be created or destroyed?",
      options: ["Zeroth Law", "First Law", "Second Law", "Third Law"],
      correctAnswer: 1,
      explanation: "The First Law of Thermodynamics is the law of conservation of energy.",
    },
    {
      id: 69,
      question: "What is the SI unit of power?",
      options: ["Joule", "Newton", "Watt", "Pascal"],
      correctAnswer: 2,
      explanation: "The watt (W) is the SI unit of power, equal to one joule per second.",
    },
    {
      id: 70,
      question: "What is the formula for kinetic energy?",
      options: ["KE = mv", "KE = ½mv²", "KE = mv²", "KE = ½mv"],
      correctAnswer: 1,
      explanation: "Kinetic energy is given by KE = ½mv², where m is mass and v is velocity.",
    },
    {
      id: 71,
      question: "Which principle explains how hydraulic systems work?",
      options: ["Archimedes' Principle", "Bernoulli's Principle", "Pascal's Principle", "Hooke's Law"],
      correctAnswer: 2,
      explanation:
        "Pascal's Principle states that pressure applied to a confined fluid is transmitted equally in all directions.",
    },
    {
      id: 72,
      question: "What is the unit of electrical resistance?",
      options: ["Volt", "Ampere", "Ohm", "Watt"],
      correctAnswer: 2,
      explanation: "The ohm (Ω) is the SI unit of electrical resistance.",
    },
    {
      id: 73,
      question: "Which type of lens is used to correct nearsightedness?",
      options: ["Convex lens", "Concave lens", "Cylindrical lens", "Bifocal lens"],
      correctAnswer: 1,
      explanation: "Concave lenses (diverging lenses) are used to correct nearsightedness by spreading out light rays.",
    },
    {
      id: 74,
      question: "What is Ohm's Law?",
      options: ["V = IR", "P = IV", "F = ma", "E = mc²"],
      correctAnswer: 0,
      explanation: "Ohm's Law states that voltage (V) equals current (I) times resistance (R): V = IR.",
    },
    {
      id: 75,
      question: "Which color of light has the highest frequency in the visible spectrum?",
      options: ["Red", "Green", "Blue", "Violet"],
      correctAnswer: 3,
      explanation: "Violet light has the highest frequency and shortest wavelength in the visible spectrum.",
    },
    {
      id: 76,
      question: "What is the principle behind the operation of electric motors?",
      options: [
        "Electromagnetic induction",
        "Electrostatic force",
        "Magnetic force on current",
        "Photoelectric effect",
      ],
      correctAnswer: 2,
      explanation:
        "Electric motors work on the principle of magnetic force acting on a current-carrying conductor in a magnetic field.",
    },
    {
      id: 77,
      question: "Which law describes the relationship between pressure and volume of a gas at constant temperature?",
      options: ["Boyle's Law", "Charles's Law", "Gay-Lussac's Law", "Avogadro's Law"],
      correctAnswer: 0,
      explanation:
        "Boyle's Law states that pressure and volume are inversely proportional at constant temperature: PV = constant.",
    },
    {
      id: 78,
      question: "What is the unit of frequency?",
      options: ["Meter", "Second", "Hertz", "Joule"],
      correctAnswer: 2,
      explanation: "The hertz (Hz) is the SI unit of frequency, representing cycles per second.",
    },
    {
      id: 79,
      question: "Which phenomenon explains the bending of light when it passes from one medium to another?",
      options: ["Reflection", "Refraction", "Diffraction", "Interference"],
      correctAnswer: 1,
      explanation:
        "Refraction is the bending of light when it passes from one medium to another with different optical density.",
    },
    {
      id: 80,
      question: "What is the relationship between current, voltage, and power in electrical circuits?",
      options: ["P = IV", "P = I²R", "P = V²/R", "All of the above"],
      correctAnswer: 3,
      explanation:
        "Power in electrical circuits can be calculated using P = IV, P = I²R, or P = V²/R, depending on known quantities.",
    },
  ],
  history: [
    {
      id: 81,
      question: "When did Ethiopia defeat the Italian forces at the Battle of Adwa?",
      options: ["1895", "1896", "1897", "1898"],
      correctAnswer: 1,
      explanation:
        "The Battle of Adwa took place on March 1, 1896, where Ethiopian forces under Emperor Menelik II defeated the Italian army.",
    },
    {
      id: 82,
      question: "Who was the founder of the Solomonic dynasty in Ethiopia?",
      options: ["Yekuno Amlak", "Lalibela", "Zara Yaqob", "Menelik I"],
      correctAnswer: 0,
      explanation:
        "Yekuno Amlak founded the Solomonic dynasty in 1270, claiming descent from King Solomon and the Queen of Sheba.",
    },
    {
      id: 83,
      question: "Which Ethiopian emperor is known for modernizing the country in the early 20th century?",
      options: ["Haile Selassie", "Menelik II", "Yohannes IV", "Tewodros II"],
      correctAnswer: 1,
      explanation:
        "Emperor Menelik II (1889-1913) is known for modernizing Ethiopia, expanding its territory, and founding Addis Ababa.",
    },
    {
      id: 84,
      question: "What was the ancient name of Ethiopia mentioned in classical texts?",
      options: ["Nubia", "Abyssinia", "Kush", "Axum"],
      correctAnswer: 1,
      explanation: "Abyssinia was the ancient name for Ethiopia used in classical and medieval texts.",
    },
    {
      id: 85,
      question: "Which ancient Ethiopian kingdom was known for its trade with Rome and India?",
      options: ["Zagwe", "Solomonic", "Axum", "Shewa"],
      correctAnswer: 2,
      explanation:
        "The Kingdom of Axum (1st-8th centuries CE) was a major trading empire that connected Africa with the Mediterranean and Indian Ocean.",
    },
    {
      id: 86,
      question: "When did the Italian occupation of Ethiopia begin?",
      options: ["1935", "1936", "1937", "1938"],
      correctAnswer: 1,
      explanation:
        "The Italian occupation of Ethiopia began in 1936 after the Second Italo-Ethiopian War, lasting until 1941.",
    },
    {
      id: 87,
      question: "Who was the last emperor of Ethiopia?",
      options: ["Menelik II", "Haile Selassie", "Yohannes IV", "Iyasu V"],
      correctAnswer: 1,
      explanation:
        "Haile Selassie I was the last emperor of Ethiopia, ruling from 1930 until he was overthrown in 1974.",
    },
    {
      id: 88,
      question: "Which rock-hewn churches are famous UNESCO World Heritage sites in Ethiopia?",
      options: ["Axum churches", "Lalibela churches", "Gondar churches", "Harar churches"],
      correctAnswer: 1,
      explanation:
        "The rock-hewn churches of Lalibela, built in the 12th century, are famous UNESCO World Heritage sites.",
    },
    {
      id: 89,
      question: "What was the Derg in Ethiopian history?",
      options: ["A religious movement", "A military government", "A trade organization", "A cultural festival"],
      correctAnswer: 1,
      explanation:
        "The Derg was the military government that ruled Ethiopia from 1974 to 1987 after overthrowing Emperor Haile Selassie.",
    },
    {
      id: 90,
      question: "Which Ethiopian city served as the capital before Addis Ababa?",
      options: ["Gondar", "Axum", "Lalibela", "Harar"],
      correctAnswer: 0,
      explanation: "Gondar served as the capital of Ethiopia from 1636 to 1855 during the Gondarine period.",
    },
    {
      id: 91,
      question: "When did Ethiopia adopt its current federal system of government?",
      options: ["1991", "1995", "1994", "1996"],
      correctAnswer: 1,
      explanation:
        "Ethiopia adopted its current federal system with the ratification of the Federal Democratic Republic of Ethiopia Constitution in 1995.",
    },
    {
      id: 92,
      question: "Which European country first established diplomatic relations with Ethiopia?",
      options: ["Britain", "France", "Portugal", "Italy"],
      correctAnswer: 2,
      explanation:
        "Portugal was the first European country to establish diplomatic relations with Ethiopia in the 16th century.",
    },
    {
      id: 93,
      question: "What was the significance of the Treaty of Wuchale (1889)?",
      options: [
        "It established trade relations",
        "It led to territorial disputes with Italy",
        "It modernized the army",
        "It abolished slavery",
      ],
      correctAnswer: 1,
      explanation:
        "The Treaty of Wuchale led to territorial disputes with Italy due to different interpretations of the treaty's terms regarding Ethiopian sovereignty.",
    },
    {
      id: 94,
      question: "Which ancient Ethiopian script is still used today?",
      options: ["Latin", "Arabic", "Ge'ez", "Greek"],
      correctAnswer: 2,
      explanation:
        "Ge'ez script, derived from ancient South Arabian scripts, is still used for writing several Ethiopian languages.",
    },
    {
      id: 95,
      question: "When did the Ethiopian People's Revolutionary Democratic Front (EPRDF) come to power?",
      options: ["1989", "1990", "1991", "1992"],
      correctAnswer: 2,
      explanation: "The EPRDF came to power in 1991 after overthrowing the Derg military government.",
    },
    {
      id: 96,
      question: "Which Ethiopian emperor is associated with the construction of Fasilides Castle?",
      options: ["Fasilides", "Iyasu I", "Bakaffa", "Iyoas I"],
      correctAnswer: 0,
      explanation:
        "Emperor Fasilides (1632-1667) built the famous Fasilides Castle in Gondar, which became a symbol of the Gondarine period.",
    },
    {
      id: 97,
      question: "What was the main cause of the 1973-1974 famine in Ethiopia?",
      options: ["War", "Drought", "Locust invasion", "Economic policies"],
      correctAnswer: 1,
      explanation:
        "The 1973-1974 famine in Ethiopia was primarily caused by severe drought, leading to widespread hunger and contributing to political unrest.",
    },
    {
      id: 98,
      question: "Which international organization has its headquarters in Addis Ababa?",
      options: ["United Nations", "African Union", "World Bank", "International Monetary Fund"],
      correctAnswer: 1,
      explanation:
        "The African Union has its headquarters in Addis Ababa, making Ethiopia the diplomatic capital of Africa.",
    },
    {
      id: 99,
      question: "When did Ethiopia join the League of Nations?",
      options: ["1920", "1923", "1925", "1928"],
      correctAnswer: 1,
      explanation:
        "Ethiopia joined the League of Nations in 1923, becoming one of the few African members of the organization.",
    },
    {
      id: 100,
      question: "Which battle marked the end of Italian colonial ambitions in Ethiopia during the 19th century?",
      options: ["Battle of Dogali", "Battle of Adwa", "Battle of Amba Alagi", "Battle of Metemma"],
      correctAnswer: 1,
      explanation:
        "The Battle of Adwa (1896) decisively ended Italian colonial ambitions in Ethiopia and established Ethiopia's independence.",
    },
  ],
  civics: [
    {
      id: 101,
      question: "What is the supreme law of the Federal Democratic Republic of Ethiopia?",
      options: ["Civil Code", "Criminal Code", "Constitution", "Federal Laws"],
      correctAnswer: 2,
      explanation:
        "The Constitution of the Federal Democratic Republic of Ethiopia, adopted in 1995, is the supreme law of the country.",
    },
    {
      id: 102,
      question: "How many regional states does Ethiopia have under the current federal system?",
      options: ["9", "10", "11", "12"],
      correctAnswer: 2,
      explanation:
        "Ethiopia has 11 regional states under the current federal system, along with 2 city administrations.",
    },
    {
      id: 103,
      question: "What is the minimum age for voting in Ethiopian federal elections?",
      options: ["16", "17", "18", "21"],
      correctAnswer: 2,
      explanation:
        "The minimum age for voting in Ethiopian federal elections is 18 years, as stated in the Constitution.",
    },
    {
      id: 104,
      question: "Which house of parliament represents the regional states in Ethiopia?",
      options: [
        "House of Peoples' Representatives",
        "House of Federation",
        "Council of Ministers",
        "Federal Supreme Court",
      ],
      correctAnswer: 1,
      explanation:
        "The House of Federation represents the regional states and nations, nationalities, and peoples of Ethiopia.",
    },
    {
      id: 105,
      question: "What is the term length for members of the House of Peoples' Representatives?",
      options: ["3 years", "4 years", "5 years", "6 years"],
      correctAnswer: 2,
      explanation: "Members of the House of Peoples' Representatives serve five-year terms.",
    },
    {
      id: 106,
      question: "Which principle is fundamental to Ethiopia's federal system?",
      options: [
        "Centralization",
        "Self-determination of nations and nationalities",
        "Military rule",
        "One-party system",
      ],
      correctAnswer: 1,
      explanation:
        "The right to self-determination of nations, nationalities, and peoples is a fundamental principle of Ethiopia's federal system.",
    },
    {
      id: 107,
      question: "Who is the head of state in Ethiopia?",
      options: ["Prime Minister", "President", "Speaker of Parliament", "Chief Justice"],
      correctAnswer: 1,
      explanation:
        "The President is the head of state in Ethiopia, while the Prime Minister is the head of government.",
    },
    {
      id: 108,
      question: "What is the highest court in Ethiopia?",
      options: ["Regional Supreme Court", "Federal High Court", "Federal Supreme Court", "Constitutional Court"],
      correctAnswer: 2,
      explanation: "The Federal Supreme Court is the highest court in Ethiopia's judicial system.",
    },
    {
      id: 109,
      question: "Which article of the Ethiopian Constitution deals with human rights?",
      options: ["Article 13-44", "Article 25-44", "Article 14-28", "Article 30-44"],
      correctAnswer: 1,
      explanation: "Articles 25-44 of the Ethiopian Constitution deal with fundamental rights and freedoms.",
    },
    {
      id: 110,
      question: "What is the official working language of the federal government of Ethiopia?",
      options: ["Amharic", "Oromo", "Tigrinya", "English"],
      correctAnswer: 0,
      explanation: "Amharic is the official working language of the federal government of Ethiopia.",
    },
    {
      id: 111,
      question: "Which body has the power to interpret the Constitution in Ethiopia?",
      options: ["Federal Supreme Court", "House of Federation", "Council of Constitutional Inquiry", "Prime Minister"],
      correctAnswer: 2,
      explanation:
        "The Council of Constitutional Inquiry has the power to investigate constitutional disputes and interpret the Constitution.",
    },
    {
      id: 112,
      question: "What is the minimum age to be elected as Prime Minister in Ethiopia?",
      options: ["25", "30", "35", "40"],
      correctAnswer: 0,
      explanation:
        "The minimum age to be elected as a member of parliament (and thus potentially Prime Minister) is 25 years.",
    },
    {
      id: 113,
      question: "Which principle ensures that government power is divided among different branches?",
      options: ["Federalism", "Separation of powers", "Rule of law", "Democracy"],
      correctAnswer: 1,
      explanation:
        "Separation of powers ensures that government power is divided among the executive, legislative, and judicial branches.",
    },
    {
      id: 114,
      question: "What is the role of the Ethiopian Human Rights Commission?",
      options: ["To make laws", "To protect and promote human rights", "To elect officials", "To collect taxes"],
      correctAnswer: 1,
      explanation:
        "The Ethiopian Human Rights Commission is responsible for protecting and promoting human rights in the country.",
    },
    {
      id: 115,
      question: "Which electoral system is used for the House of Peoples' Representatives?",
      options: ["Proportional representation", "First-past-the-post", "Mixed system", "Indirect election"],
      correctAnswer: 1,
      explanation: "Ethiopia uses a first-past-the-post electoral system for the House of Peoples' Representatives.",
    },
    {
      id: 116,
      question: "What is the term of office for the President of Ethiopia?",
      options: ["4 years", "5 years", "6 years", "7 years"],
      correctAnswer: 2,
      explanation: "The President of Ethiopia serves a six-year term and can be re-elected for one additional term.",
    },
    {
      id: 117,
      question: "Which body elects the President of Ethiopia?",
      options: [
        "Direct popular vote",
        "House of Peoples' Representatives",
        "Joint session of both houses",
        "Regional councils",
      ],
      correctAnswer: 2,
      explanation:
        "The President is elected by a joint session of the House of Peoples' Representatives and the House of Federation.",
    },
    {
      id: 118,
      question: "What is the primary source of revenue for regional states in Ethiopia?",
      options: ["Federal subsidies", "Local taxes", "International aid", "Natural resources"],
      correctAnswer: 0,
      explanation:
        "Federal subsidies are the primary source of revenue for most regional states in Ethiopia's federal system.",
    },
    {
      id: 119,
      question: "Which right is guaranteed under Article 30 of the Ethiopian Constitution?",
      options: ["Right to vote", "Right to assembly", "Right to property", "Right to development"],
      correctAnswer: 1,
      explanation:
        "Article 30 of the Ethiopian Constitution guarantees the right of assembly, demonstration, and petition.",
    },
    {
      id: 120,
      question: "What is the role of the National Electoral Board of Ethiopia?",
      options: [
        "To make election laws",
        "To conduct and supervise elections",
        "To appoint candidates",
        "To fund political parties",
      ],
      correctAnswer: 1,
      explanation:
        "The National Electoral Board of Ethiopia is responsible for conducting and supervising elections at all levels.",
    },
  ],
}

export function getQuestionsForSubject(subject: Subject): Question[] {
  return questionsData[subject] || []
}
