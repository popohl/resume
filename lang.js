i18next.init({
	lng: 'en', // evtl. use language-detector https://github.com/i18next/i18next-browser-languageDetector
	resources: {
		en: {
			translation: {
				nav: {
					contact: "Contact me",
					mail: "Mail: ",
					phone: "Phone: "
				},
				me: {
					name: "Paul OHL",
					job: "Digital technologies architect",
					mail: {
						link: "mailto:paul.lv.ohl@gmail.com",
						view: "paul.lv.ohl@gmail.com"
					},
					phone: {
						link: "tel:+33781196316",
						view: "07.81.19.63.16"
					},
					linkedin: "https://www.linkedin.com/in/paul-ohl-19aaab196/",
					github: "https://github.com/popohl"
				}
			}
		},
		fr: {
			translation: {
				nav: {
					contact: "Contactez moi",
					mail: "E-mail: ",
					phone: "Téléphone: "
				},
				me: {
					name: "Paul OHL",
					job: "Français",
					mail: {
						link: "mailto:paul.lv.ohl@gmail.com",
						view: "paul.lv.ohl@gmail.com"
					},
					phone: {
						link: "tel:+33781196316",
						view: "07.81.19.63.16"
					},
					linkedin: "https://www.linkedin.com/in/paul-ohl-19aaab196/",
					github: "https://github.com/popohl"
				}
			}
		}
	}
}, function (err, t) {
	localize = locI18next.init(i18next);
	updateContent();
});

function updateContent() {
	localize('nav');
}

function changeLng(lng) {
	i18next.changeLanguage(lng);
}

i18next.on('languageChanged', () => {
	updateContent();
});
