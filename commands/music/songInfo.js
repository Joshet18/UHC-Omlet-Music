module.exports = ({
    name: "song-info",
    aliases: ['sf'],
    description: "mostrar información de la música",
    usage: "",
    category: "music",
    code: `$color[08ffc1]
$title[**🎵 Song Info**]
$addField[📀 | Añadida por;$usertag[$songInfo[userID]]]
$addField[⏳ | Duracion;$songInfo[duration]]
$addField[Nombre; [$songInfo[title]\\]($songInfo[url])]
`
})
