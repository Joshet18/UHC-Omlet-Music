module.exports = ({
    name: "pause",
    aliases: ['ps'],
    description: "pausar la música",
    usage: "",
    category: "music",
    code: `$color[RANDOM]
    $description[⏸ Música en pausa]
    $pauseSong
    $onlyIf[$queueLength>0;{color:ff0c08}{description:La cola de música esta vacia}]
    $onlyIf[$voiceID!=;{color:ff0c08}{description:Nesesiatas estar en un canal de voz}]
    $onlyIf[$checkContains[$channelType;text;news]==true;]`
})