var language = {
    ptbr: {
        cover: {
            'subtitle': 'Realçando a beleza de pessoas incríveis',
            'heart': '❤'
        },
        about: {
            'title': 'Maquiagem. Arte da beleza',
            'subtitle': 'Sobre mim',
            'content-1': 'Profissional na área de Beleza em Campinas (SP).',
            'content-2': 'Graduada pelo <b>Instituto Embelleze</b> em Maquiagem Profissional, e pela <b>Ondina Beauty Academy</b> em Maquiagem Social Profissional. Possui diversos outros cursos de especialização com grandes e reconhecidos maquiadores do Brasil, como <b>Deisy Perozzo</b> e <b>Carou Freitas</b>.',
            'content-3': 'Já atua na área desde 2014 e em 2018 passou a administrar cursos de automaquiagem.',
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