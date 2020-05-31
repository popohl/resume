i18next.init({
	lng: 'en', // evtl. use language-detector https://github.com/i18next/i18next-browser-languageDetector
	fallbackLng: ['constants', 'en', 'fr'],
	resources: {
		constants: {
			translation: {
				author: {
					name: "Paul OHL",
					mail: {
						link: "mailto:paul.lv.ohl@gmail.com",
						value: "paul.lv.ohl@gmail.com"
					},
					phone: {
						link: "tel:+33781196316",
						value: "07.81.19.63.16"
					},
					linkedin: {
						link: "https://www.linkedin.com/in/paul-ohl-19aaab196/",
						value: "Paul OHL"
					},
					github: {
						link: "https://github.com/popohl",
						value: "pohl"
					},
				}
			}
		},
		en: {
			translation: {
				nav: {
					contact: "Contact me",
					mail: "Mail: ",
					phone: "Phone: ",
					linkedin: "Linkedin: ",
					github: "Github: "
				},
				author: {
					job: "Digital technologies architect"
				},
				sections: {
					profile: {
						title: "My Profile",
						text: "I am always looking for experiences that will expand my horizons as a developper. I am willing to work hard in order to acquire skills that will allow me to improve myself, and give meaning to what I do."
					},
					education: {
						title: "Education",
					},
					experience: {
						title: "Experience",
					},
					software_skills: {
						title: "Software skills",
					},
					other_skills: {
						title: "Other skills",
					}
				}
			}
		},
		fr: {
			translation: {
				nav: {
					contact: "Contactez moi",
					mail: "E-mail : ",
					phone: "Téléphone : ",
					linkedin: "Linkedin : ",
					github: "Github : "
				},
				author: {
					job: "Architecte en technologies du numérique"
				},
				sections: {
					profile: {
						title: "Mon Profil",
						text: "Je recherche avant tout des expériences qui me permettent d'avancer dans mon parcours de développeur. Je suis prêt à travailler dur pour acquérir des compétences qui me permettront de m'améliorer et de donner du sens à ce que je fais."
					},
					education: {
						title: "Éducation",
						
					},
					experience: {
						title: "Expérience",
						
					},
					software_skills: {
						title: "Compétences en programmation",
						
					},
					other_skills: {
						title: "Autres compétences",

					}
				}
			}
		}
	}
}, function (err, t) {
	localize = locI18next.init(i18next);
	updateContent();
});

function updateContent() {
	localize('body');
}

function changeLng(lng) {
	i18next.changeLanguage(lng);
}

i18next.on('languageChanged', () => {
	updateContent();
});

var author = {
	name: "Paul OHL",
	mail: {
		link: "mailto:paul.lv.ohl@gmail.com",
		value: "paul.lv.ohl@gmail.com"
	},
	phone: {
		link: "tel:+33781196316",
		value: "07.81.19.63.16"
	},
	linkedin: "https://www.linkedin.com/in/paul-ohl-19aaab196/",
	github: "https://github.com/popohl"
}
