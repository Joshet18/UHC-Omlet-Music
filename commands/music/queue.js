module.exports = ({
    name: "queue",
    aliases: ['q'],
    category: "music",
    usage: "",
    description: "mostrar la cola de musica",
    code:
    `
    $color[RANDOM]
    $thumbnail[$songinfo[thumbnail]]
    $title[**Cola de musica**]
    $description[$queue[$replaceText[$replaceText[$checkCondition[$isnumber[$message[1]]==true];true;$replaceText[$replaceText[$checkCondition[$queue[$message[1];10;{title}]!=];false;1];true;$message[1]]];false;1];10;{number}. {title} | {duration}]]
    $addField[Musica actúar;[$songinfo[title]\\]($songinfo[url])]
   
    $footer[Pagina $replaceText[$replaceText[$checkCondition[$isnumber[$message[1]]==true];true;$replaceText[$replaceText[$checkCondition[$queue[$message[1];10;{title}]!=];false;1];true;$message[1]]];false;1] / $replaceText[$replaceText[$checkCondition[$getTextSplitLength==1];true;$truncate[$divide[$queueLength;10]]];false;$replaceText[$replaceText[$checkCondition[$splitText[2]==0];true;$truncate[$divide[$queueLength;10]]];false;$sum[$truncate[$divide[$queueLength;10]];1]]]]
    $addTimestamp
   
    $textSplit[$divide[$queueLength;10];.]
    $onlyIf[$voiceID==$voiceID[$clientID];{{color:ff0c08}{description:Ya estoy reproduciendo musica en otro canal}] 
    $onlyIf[$voiceID!=;{color:ff0c08}{description:Nesesitas estar en un canal de voz}]
    $onlyIf[$queueLength>0;{color:ff0c08}{description:La cola de música esta vacia}]
    $onlyIf[$checkContains[$channelType;text;news]==true;]
    $onlyBotPerms[embedlinks; {description:No tengo los permisos nesesarios para éste comando, permiso a requerido **Embed Links**}{color:ff0c08}]
    $suppressErrors[{color:ff0c08}{description:uvo un error al usar este comando}]
    `
   })