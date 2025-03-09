const messages = [
    "Você é mais forte do que pensa! Tipo, nível Hulk, mas sem a parte verde.",
    "Os anjos estão te protegendo hoje. Mas não abuse, eles também precisam de folga!",
    "Lembre-se: a vida é curta. Coma a sobremesa primeiro!",
    "Defina metas realistas. Tipo, hoje vou respirar fundo pelo menos 3 vezes.",
    "Tudo bem chorar. Mas se for chorar, chore com estilo, tipo novela mexicana.",
    "Por que o livro de matemática estava triste? Porque ele tinha muitos problemas!",
    "Seu biscoito da sorte diz: Amanhã será um dia melhor. Ou não. Quem sabe?",
    "Dica do dia: sorria para os problemas. Eles vão ficar confusos e te deixar em paz.",
    "Acredite em milagres, mas não dependa deles. Tipo, compre um bilhete de loteria, mas continue trabalhando.",
    "Se a vida te der limões, faça uma limonada. Se não gostar de limonada, troque por chocolate.",
    "Seu anjo da guarda disse que você é VIP, mas sem regalias extras!",
    "Dica de vida: nunca discuta com quem compra o pão. Paz é café da manhã garantido!",
    "Seu biscoito da sorte diz: a vida é curta. Coma a sobremesa primeiro!",
    "O universo te ama, mas às vezes ele esquece de mandar o memo.",
    "Seu futuro é tão brilhante que você vai precisar de óculos escuros até dentro de casa!",
    "Os espíritos do bem estão torcendo por você. Os do mal? Esses tão com inveja!",
    "Pare de correr atrás do ônibus da vida. Pegue um café e espere o próximo!",
    "Quer um conselho de ouro? Seja preguiçoso com sabedoria: descanse antes de cansar.",
    "Se o dia tá ruim, lembre-se: até o café frio já foi quente um dia.",
    "Por que o esqueleto não brigou? Porque ele não tinha coragem!",
    "O cosmos tá conspirando a seu favor. Mas ele é meio lerdo, então paciência!",
    "Dica de mestre: finja que tá tudo bem até que realmente esteja. Funciona 60% das vezes!",
    "Você é uma estrela, mas não precisa explodir como uma supernova pra provar isso.",
    "Se a vida te derrubar, deite no chão e tire uma soneca. Problema resolvido!",
    "Você é tipo um Wi-Fi: nem todo mundo te pega, mas quem pega não vive sem!",
    "Os santos estão de olho em você. Mas relaxa, eles também curtem um feriado!",
    "Viva um dia de cada vez. Ou meia hora, se o dia tiver muito drama!",
    "Quer crescer na vida? Comece regando suas plantas. Elas não te julgam.",
    "Tá tudo bem se hoje não deu. O importante é que o delivery chega!",
    "Por que o tomate ficou vermelho? Porque viu a salada pelada!",
    "O universo te mandou um sinal. Mas ele tá em código Morse, então boa sorte!",
    "Seja como o café: forte, quente e indispensável pra alguém!",
    "Você já venceu hoje: acordou e não chutou o dedinho na quina!",
    "Se o plano A falhar, lembre-se: o alfabeto tem 25 letras pra tentar de novo!",
    "Você é um diamante bruto! Só falta alguém te lapidar... ou te pagar um salário melhor!",
    "Os anjos da guarda trocaram turno, mas o novo tá te cobrindo com capa extra!",
    "Não corra atrás da felicidade. Ela é lenta, você pega ela andando!",
    "Quer mudar o mundo? Comece arrumando a cama. Ou pelo menos fingindo que arrumou!",
    "Se o dia tá cinza, pinte ele com o glitter da sua imaginação. Ou com café, funciona também!",
    "Por que o fantasma desistiu da festa? Porque ninguém viu ele dançando!",
    "A sorte tá do seu lado, mas ela é tímida. Dê um oi pra ela hoje!",
    "Dica de vida: ria de si mesmo antes que os outros cheguem primeiro!",
    "Você é incrível, mesmo quando o espelho tá de mau humor e não te avisa!",
    "Se tudo der errado, lembre-se: amanhã tem pizza pra consertar o coração!",
    "Você é tipo um super-herói, mas sua capa tá na lavanderia hoje!",
    "Os guias espirituais te mandaram um like. Curta de volta com um sorriso!",
    "A vida é um jogo: às vezes você ganha, às vezes aprende a pedir pizza!",
    "Quer sucesso? Finja que é segunda-feira todo dia... ou não, melhor descansar!",
    "Tá difícil? Respire fundo e lembre: até o Wi-Fi volta depois de um tempo!",
    "Por que o cachorro sentou na sombra? Porque ele não queria virar hot dog!",
    "O destino tá te escrevendo uma carta, mas o correio tá em greve!",
    "Seja paciente: até o feijão demora pra cozinhar, mas fica uma delícia!",
    "Você é uma obra-prima, mesmo que o artista tenha usado tinta barata!",
    "Se o mundo te virar as costas, aproveite pra dar um chute no traseiro dele!",
    "Você é mais brilhante que o sol. Só não derreta a maquiagem, hein!",
    "Os astros dizem: hoje é dia de brilhar. Ou de tirar um cochilo, você escolhe!",
    "Não leve a vida tão a sério. Ela já é uma comédia sem roteiro!",
    "Quer um conselho? Dance como se ninguém tivesse gravando pro TikTok!",
    "Tá se sentindo pra baixo? Culpe o café que você não tomou ainda!",
    "Por que a galinha atravessou a rua? Pra te lembrar que você também consegue!",
    "A energia positiva tá chegando. Mas ela pegou trânsito, então espera aí!",
    "Você é o chefe da sua história. Só não demita o protagonista, tá?",
    "Se a vida te deu um soco, devolva um abraço. Ela vai ficar confusa!",
    "Hoje não deu certo? Relaxa, o mundo gira e o bolo assa amanhã!",
    "Você é tipo um unicórnio: raro, mágico e ninguém acredita direito!",
    "Os anjos te deram um escudo. Mas não testa em briga de bar, hein!",
    "Dica infalível: sorria pro espelho. Ele vai te achar mais rico que o Elon Musk!",
    "Quer vencer na vida? Comece vencendo a preguiça de levantar da cama!",
    "Tá tudo bagunçado? Ótimo, você é um artista da bagunça criativa!",
    "Por que o pão não canta? Porque ele é tímido, mas você não precisa ser!",
    "O universo te ama, mas às vezes ele curte te trollar um pouquinho!",
    "Você é uma estrela cadente: rápida, brilhante e deixa todo mundo de boca aberta!",
    "Se o dia tá pesado, jogue ele no colo do travesseiro e durma!",
    "A vida é um quebra-cabeça. Se não encaixa, força até virar arte moderna!",
    "Você é um tesouro escondido. Só falta o mapa pra te achar no sofá!",
    "Os espíritos do bem te mandaram um zap: ‘Força aí, a gente acredita em você!’",
    "Quer paz interior? Desligue as notificações e coma um brigadeiro!",
    "Se caiu, levante com estilo. Tipo, fingindo que foi coreografia!",
    "Por que o relógio tá sempre correndo? Pra te lembrar que você pode ir devagar!",
    "Você é tipo um foguete: pronto pra decolar, só falta o combustível da vontade!",
    "A proteção divina tá on. Mas não pisa no Lego descalço pra testar!",
    "Dica de ouro: ria alto, mesmo que o chefe ache que você pirou!",
    "Se o plano falhou, improvise. A vida é um stand-up mal ensaiado!",
    "Você é um raio de sol, mesmo quando tá chovendo na sua cabeça!",
    "Os santos te deram um cupom de desconto pro estresse. Use hoje!",
    "Não se preocupe, até o GPS da vida recalcula a rota às vezes!",
    "Quer motivação? Pense que o fim de semana tá logo ali te acenando!",
    "Tá se sentindo perdido? Normal, até o Google Maps se confunde às vezes!",
    "Por que a vaca foi pro bar? Pra te lembrar que até ela relaxa um pouco!",
    "Você é tipo um bolo: doce, único e todo mundo quer um pedaço!",
    "A luz no fim do túnel tá piscando pra você. Pode mandar um oi de volta!",
    "Se a vida te enrolou, desenrole com um café e um pão de queijo!",
    "Você é mais forte que o sinal de Wi-Fi na casa da vó!",
    "Os anjos tão cantando seu nome. Mas desafinado, porque ninguém é perfeito!",
    "Dica de mestre: viva como se o feriado fosse eterno. Até segunda-feira chegar!",
    "Se o dia tá amargo, adoça ele com um meme ou um chocolate!",
    "Você é tipo um filme cult: nem todo mundo entende, mas quem entende ama!",
    "A sorte tá te paquerando. Dá um sorriso pra ela fechar o date!",
    "Por que o celular não brigou? Porque ele sabia que você ia dar um reset!",
    "Você é um presente pra humanidade. Só falta alguém desembrulhar essa energia!",
    "Os guias espirituais te mandaram um recado: ‘Tá indo bem, mas capricha no carisma!’",
    "Se a vida tá um caos, organiza ela com uma soneca e um plano B!",
    "Você é tipo um hit do carnaval: todo mundo vai te curtir cedo ou tarde!",
    "Se o mundo te derrubou, levante com um passinho de dança pra impressionar!"
];

const messageDiv = document.getElementById('message');
const button = document.getElementById('get-message');

button.addEventListener('click', () => {
    messageDiv.classList.add('hidden');
    setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * messages.length);
        messageDiv.innerHTML = messages[randomIndex];
        messageDiv.classList.remove('hidden');
    }, 500);
});
