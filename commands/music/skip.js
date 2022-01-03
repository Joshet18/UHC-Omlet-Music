module.exports = ({
    name: "skip",
    aliases: ['s'],
    description: "Saltar la música",
    usage: "",
    category: "music",
    code: `$color[08ffad]
    $description[La música fue saltada]
    $skipSong
    $onlyIf[$voiceID!=;{color:ff0c08}{description:Nesesiatas estar en un canal de voz}]
    $onlyIf[$queueLength>0;{color:ff0c08}{description:la cola de música esta vacía}]
    $onlyIf[$checkContains[$channelType;text;news]==true;]`
})