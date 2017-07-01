var language = {
    ptbr: {
        cover: {
            'subtitle': 'Realçando a beleza de pessoas incríveis',
            'heart': '❤'
        },
        about: {
            'title': 'Maquiagem. Arte da beleza',
            'subtitle': 'Sobre mim',
            'content-1': 'Sou Maquiadora profissional atendendo na região de Campinas(SP)',
            'content-2': 'Formada pelo <b>instituto lala</b> e <b>tanana</b>, já realizei cursos com grandes maquiadoras do brasil como <b>tanana</b> e <b>lalala</b>',
            'content-3': 'Trabalho com todos os tipos de maquiagens e para qualquer ocasião que você desejar ;)',
            'content-4': ''
        },
        contact: {
            'title': 'Contato',
            'content-1': 'Está com dúvidas ou precisando de um orçamento? Quer saber mais sobre meu trabalho? ',
            'content-2': 'Entre em contato pelo telefone/WhatsApp ou se preferir mande um e-mail para',
            'content-3': 'que te responderei o mais rápido possivel. Será um prazer conversar com você :)'
        },
    }
}

function getLanguage() {
    var mLanguage = getCookie("language");
    var mActiveLanguage = language.en;
    if (!mLanguage) {
        //Set Portuguese if no have set language
        setCookie("language", 1, 99);
        mLanguage = 1;
    }

    if (mLanguage == 1) {
        mActiveLanguage = language.ptbr;
    }
    return mActiveLanguage;
}

function setLanguage(language) {
    if (language == "ptbr") {
        setCookie("language", 1, 99);
    }

    location.reload();
}

window.activeLanguage = getLanguage();