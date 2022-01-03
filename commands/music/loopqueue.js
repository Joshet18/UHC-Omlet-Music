module.exports = ({
    name: "loopqueue",
    aliases: ['lpq', 'lq'],
    description: "bucle de la cola de musica",
    usage: "",
    category: "music",
    code: `$color[08ffad]
    $description[🔁 $replaceText[$replaceText[$loopQueue;true;Bucle de música establecido en Si];false;Bucle de música establecido en No]]
    $onlyIf[$voiceID!=;{color:ff0c08}{description:Nesesitas estar en un canal de voz}]
    $onlyIf[$queueLength>0;{color:ff0c08}{description:La cola de música esta vacía}]
    $onlyIf[$checkContains[$channelType;text;news]==true;]
    `
})
