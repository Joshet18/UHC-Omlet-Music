module.exports = ({
    name: "stop",
    aliases: ['st'],
    description: "detener la música",
    usage: "",
    category: "music",
    code: `$color[08ffad]
    $description[La música se detuvo]
    $stopSong
    $onlyIf[$voiceID!=;{color:ff0c08}{description:Nesesitas estar en un canal de voz}]
    $onlyIf[$queueLength>0;{color:ff0c08}{description:La cola de música esta vacía}]
    $onlyIf[$checkContains[$channelType;text;news]==true;]`
})