let handler = async (m, { conn, args, participants }) => {
    let grup = await conn.getName(m.key.remoteJid)
    let mimin = m.isGroup ? NgeriAtmin(participants) : ''
    let txt = `List Admin Group *${grup}*\n*Total:* ${mimin.length}\n\n`
    for (let min of mimin) {
    txt += `• @${min.split('@')[0]}\n`
      }
conn.reply(m.chat, txt, m, { mention: await conn.parseMention(txt) })
}
handler.help = ['listadmin']
handler.tags = ['group']
handler.command = /^(adminlist|listadmin)$/i
handler.group = true
handler.register = false
module.exports = handler

const NgeriAtmin = (participants) => {
        atminn = []
	for (let b of participants) {
		b.admin === "admin" ? atminn.push(b.id) : ''
		b.admin === "superadmin" ? atminn.push(b.id) : ''
	}
	return atminn
}
