module.exports = ({
    name: "resume",
    aliases: ['rs'],
    description: "reanudar la música en pausa",
    usage: "",
    category: "music",
    code: `$color[08ffad]
    $description[La música fue reanudada]
    $resumeSong
    $onlyIf[$voiceID!=;{color:ff0c08}{description:Nesesitas estar en un canal de voz}]
    $onlyIf[$queueLength>0;{color:ff0c08}{description:La cola de música esta vacia}]
    $onlyIf[$checkContains[$channelType;text;news]==true;]`
})