module.exports = ({
    name: "volume",
    aliases: ['vol', 'v'],
    code: `$color[08ffad]
    $description[🔊 Volumen: **$message[1]%**]
    $volume[$message]
    $onlyIf[$voiceID==$voiceID[$clientID];{{color:ff0c08}{description:Ya estoy reproduciendo música en otro canal}] 
    $onlyIf[$queueLength>0;{description:La cola de música esta vacía}{color:ff0c08}]
    $onlyIf[$isNumber[$message[1]]==true;{description:Algumentos nuemerico no valido}{color:ff0c08}]
    $onlyIf[$message[1]<=200;{description:El volumen maximo es 200%}{color:ff0c08}] 
    $onlyIf[$message[1]>=1;{description:El volumen minimo es 1%}{color:RANDOM}] 
    $onlyIf[$checkContains[$channelType;text;news]==true;]
    $suppressErrors[{color:RANDOM}{description:uvo un error al usar este comando}]
    $onlyBotPerms[embedlinks; {description:No tengo los permisos nesesarios para éste comando, permiso a requerido **Embed Links**}{color:ff0c08}]`
    }) 