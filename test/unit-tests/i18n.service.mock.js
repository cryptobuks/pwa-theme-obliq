angular.module('appticles.i18n', ['pascalprecht.translate'])
  .factory('AppticlesTranslateLoader', AppticlesTranslateLoader)
  .config(AppticlesTranslateConfig);

function AppticlesTranslateLoader($q) {

  return () => {
    return $q.when(translations);
  };
}

/**
 * @name appticles.i18n.AppticlesTranslateConfig
 *
 * @description Configure the translation service, determine language based on the browser settings
 */
function AppticlesTranslateConfig($translateProvider) {

  $translateProvider
    .useLoader('AppticlesTranslateLoader')
    .useSanitizeValueStrategy('escape')
    .determinePreferredLanguage();
}

let translations = {
  'LINKS': {
    'VISIT_WEBSITE': 'Zur Website wechseln',
    'VISIT_APP': 'Schalter, um mobile Version',
    'HOME': 'Home',
    'CREDITS': 'Credits',
    'CATEGORIES': 'Kategorien',
    'GO_TO': 'Gehe zu',
    'OTHERS': 'Andere',
    'HEADLINES': 'Überschriften',
    'INSIDE': 'Inhalt',
    'MENU': 'Menu',
    'OPEN_APP': 'OPEN'
  },
  'TEXTS': {
    'NO_PAGES': 'Es gibt keine Seiten!',
    'NO_CATEGORIES': 'Es gibt keine Seiten!',
    'NO_ARTICLES': 'Es gibt keine Artikel!',
    'NO_COMMENTS': 'Es gibt keine Kommentare für diesen Artikel. Sei der erste der einen Kommentar dazu hinterlässt!',
    'NO_COMMENTS_SHORT': 'Es gibt keine Kommentare für diesen Artikel.',
    'GOOGLE_ADS': 'Ads by Google',
    'COMMENTS': 'Kommentare',
    'LEAVE_COMMENTS': 'Hinterlasse einen Kommentar',
    'BY_AUTHOR': 'von',
    'LOADING': 'Lädt',
    'LOAD_MORE': 'Mehr laden',
    'LATEST': 'Letzter',
    'PAGE': 'Seite',
    'SWIPE_FOR_MORE': 'Streichen für mehr',
    'SWIPE_TO_CONTINUE': 'Streichen um fortzusetzen',
    'WEBSITE_CONFIRM': 'Are you sure you want to access the desktop site?',
    'READ_MORE': 'Read more'
  },
  'PULL_REFRESH': {
    'PULL_COMMENTS': 'Nach unten ziehen für mehr neue Kommentare!',
    'RELEASE': 'Loslassen um zu aktualisieren',
    'LAST_UPDATED': 'Zuletzt aktualisiert'
  },
  'FORMS': {
    'SEND': 'Senden',
    'YOUR_NAME': 'Dein Name',
    'YOUR_NAME_ERROR': 'Bitte gib deinen Namen ein!',
    'YOUR_EMAIL': 'Deine E-Mail Adresse',
    'YOUR_EMAIL_ERROR': 'Bitte gib deine E-Mail Adresse ein!',
    'YOUR_EMAIL_ERROR2': 'Bitte gib eine gültige E-Mail Adresse ein!',
    'YOUR_COMMENT': 'Dein Kommentar',
    'YOUR_COMMENT_ERROR': 'Hinterlasse einen Kommentar!',
    'SUBMIT_ERROR': 'Es gab einen Fehler. Bitte versuchen Sie es später noch einmal.',
    'AWAITING_MODERATION': 'Ihr Kommentar wartet Genehmigung!'
  }
};

