var language = {
    ptbr: {
        about: {
            'title': 'QUEM SOU',
            'content-1': 'Maquiadora profissional, artista visual e empreendedora em série.',
            'content-2': 'Foi pela vontade de trabalhar com arte e beleza, que Thais Borba decidiu seguir carreira no mundo da maquiagem. Fugindo do convencional e seguindo uma linha de maquiagem mais artística, foi a forma com que Thais encontrou para expressar o seu processo criativo.',
            'content-3': 'Já atua como maquiadora profissional há 5 anos. Especializou-se em Maquiagem Social, Editorial e Artística. Possui diversos cursos de especialização na área com profissionais renomados como Brigitte Calegari..',
            'content-4':'',
            'content-5': 'Em 2020 criou Aquela Vênus, uma plataforma e comunidade sobre educação empreendedora e marketing digital para mulheres.'
        },
        contact: {
            'title': 'Contato',
            'content-1': 'Está com dúvidas ou precisando de um orçamento? Quer saber mais sobre meu trabalho? ',
            'content-2': 'Entre em contato pelo telefone/WhatsApp ou se preferir mande um e-mail para',
            'content-3': 'que te responderei o mais rápido possível. Será um prazer conversar com você :)'
        },
    }
}


function getLanguage() {
    var mLanguage = getCookie("language");
    var mActiveLanguage = language.ptbr;
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
