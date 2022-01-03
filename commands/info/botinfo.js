module.exports = ({
    name: "botinfo", 
    aliases: ['botstats'],
    description: "Check the bot's information",
    usage: "",
    category: "info",
    code: `$title[$usertag[$clientID] informacion]
    $color[70ff73]
    $thumbnail[$userAvatar[$clientID]]
    $addField[CPU usado; $cpu%]
    $addField[Ping; $ping]
    $addField[UP Time;$uptime]
    $addField[Commandos; $commandsCount]
    $addField[Miembros;$allMembersCount]
    $addField[Canales;$allChannelsCount]
    $addField[Servidores;$serverCount]
    $addField[Version;1.0]
    $addField[Creado;$creationDate[$clientID]]
    $addField[Developer;$userTag[$botOwnerID]]
    $addTimestamp
`
    })