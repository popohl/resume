var resources =
{
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
					items: [
						{
							title: "October 2019 - Present",
							content: "Started school at 42 school of code",
						},
						{
							title: "February 2019 - August 2019",
							content: "OpenClassrooms Junior Developper course - Graduated"
						},
						{
							title: "September 2017 - July 2018",
							content: "1st year of Diploma in accounting and management in work-study"
						},
						{
							title: "June 2017",
							content: "Final exams in science section of Highschool (Graduated with honors)"
						},
					],
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
					items: [
						{
							title: "Octobre 2019 - Aujourd'hui",
							content: "Début de formation à l’école 42",
						},
						{
							title: "Février 2019 - Août 2019",
							content: "Formation OpenClassrooms Développeur Junior - Diplôme obtenu"
						},
						{
							title: "Septembre 2017 - Juillet 2018",
							content: "1ère Année de DCG (Diplôme de comptabilité et gestion) en alternance"
						},
						{
							title: "Juin 2017",
							content: "Bac S (Mention Très Bien obtenue)"
						},
					],
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
};

/* <div class="card">
	<h3 data-i18n="sections.education.items.2.title"></h3>
	<p data-i18n="sections.education.items.2.content"></p>
</div> */

Object.entries(resources.fr.translation.sections).forEach(([section_name, { items }]) => {
	// console.log(section_name);
	if (typeof items == "object") {
		for (let index = 0; index < items.length; index++) {
			var card = document.createElement("div");
			var card_title = document.createElement("h3");
			var card_content = document.createElement("p");
			card.setAttribute('class', 'card');
			card.appendChild(card_title);
			card.appendChild(card_content);
			card_title.dataset.i18n = `sections.${section_name}.items.${index}.title`;
			card_content.dataset.i18n = `sections.${section_name}.items.${index}.content`;
			document.getElementById(section_name).appendChild(card);
		}
	}
	// if (typeof section[1].items == "object") {
	// 	section[1].items.forEach(item => {
	// 	});
	// }
});

i18next.init({
	lng: 'fr', // evtl. use language-detector https://github.com/i18next/i18next-browser-languageDetector
	fallbackLng: ['constants', 'en', 'fr'],
	resources
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
