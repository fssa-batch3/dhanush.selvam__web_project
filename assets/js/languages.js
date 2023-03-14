function googleTranslateElementInit(){
    new google.translate.TranslateElement(
        {pageLanguage: 'en',
        includedLanguages: 'en,as,bn,gu,hi,kn,ml,mr,ne,or,pa,sd,ta,te,ur'},
        'google_translate_element'
    );
}