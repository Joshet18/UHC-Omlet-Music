module.exports = ({
    name: "play",
    aliases: ['p'],
    description: "poner música",
    usage: "play <música/url>",
    category: "music",
    code: `
    $color[08ffad]
    $description[Añadido a la cola **$playSong[$message;1m;yes;yes;{color:ff0c08}{description:No se puedo encontrar la música}]**]
    $footer[De $userTag]
    $addTimestamp
    $onlyIf[false!=$checkContains[$channelPermissionsFor[$voiceID;$clientID];View Channel];{description:No tengo permisos para ver tu canal de voz}{color:eb3434}{delete:10s}]
$onlyIf[false!=$checkContains[$channelPermissionsFor[$voiceID;$clientID];Connect];{description:No tengo permiso para unirme a tu canal de voz}{color:eb3434}{delete:10s}]
    $onlyIf[$voiceID!=;{color:ff0c08}{description:Nesesitas estar en un canal de voz}]
    $onlyIf[$message!=;{description:Nombre de música no válido, intente con $getServerVar[prefix]play musica/url}{color:ff0c08}]
    $onlyIf[$checkContains[$channelType;text;news]==true;]
    $botTyping[1s]`
})
