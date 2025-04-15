
const database = "BD3-NoSQL-AtlasMongoDB";

use(database);

const collection = 'bd3-nosql-atv3';

db.createCollection(collection);


//  db["bd3-nosql-atv3"].insertMany([
//         {
//           "nome": "Notebook Dell Inspiron 15",
//           "valor": 3899.90,
//           "quantidade_estoque": 25,
//           "fabricante": "Dell",
//           "categoria": "Informática",
//           "descricao": "Notebook com processador Intel Core i7, 16GB de RAM, SSD de 512GB e tela Full HD de 15.6 polegadas."
//         },
//         {
//           "nome": "Smartphone Samsung Galaxy S23",
//           "valor": 4999.00,
//           "quantidade_estoque": 30,
//           "fabricante": "Samsung",
//           "categoria": "Celulares",
//           "descricao": "Smartphone com câmera tripla, 256GB de armazenamento e tela AMOLED de 6.1 polegadas."
//         },
//         {
//           "nome": "Monitor LG UltraWide 29\"",
//           "valor": 1399.99,
//           "quantidade_estoque": 10,
//           "fabricante": "LG",
//           "categoria": "Informática",
//           "descricao": "Monitor LED com resolução Full HD UltraWide, ideal para multitarefa e produtividade."
//         },
//         {
//           "nome": "Teclado Mecânico Redragon Kumara",
//           "valor": 229.90,
//           "quantidade_estoque": 45,
//           "fabricante": "Redragon",
//           "categoria": "Periféricos",
//           "descricao": "Teclado mecânico com switches Outemu Blue, iluminação LED vermelha e estrutura robusta."
//         },
//         {
//           "nome": "Cadeira Gamer ThunderX3",
//           "valor": 1199.00,
//           "quantidade_estoque": 20,
//           "fabricante": "ThunderX3",
//           "categoria": "Móveis para Escritório",
//           "descricao": "Cadeira ergonômica com design gamer, apoio lombar e encosto reclinável até 180º."
//         },
//         {
//           "nome": "Headset Logitech G733",
//           "valor": 699.90,
//           "quantidade_estoque": 15,
//           "fabricante": "Logitech",
//           "categoria": "Periféricos",
//           "descricao": "Headset sem fio com som surround, iluminação RGB e microfone removível."
//         },
//         {
//           "nome": "Mouse Razer DeathAdder V2",
//           "valor": 349.90,
//           "quantidade_estoque": 50,
//           "fabricante": "Razer",
//           "categoria": "Periféricos",
//           "descricao": "Mouse gamer com sensor óptico de 20.000 DPI e switches mecânicos duráveis."
//         },
//         {
//           "nome": "Tablet Apple iPad 9ª Geração",
//           "valor": 3899.00,
//           "quantidade_estoque": 18,
//           "fabricante": "Apple",
//           "categoria": "Tablets",
//           "descricao": "Tablet com chip A13 Bionic, tela Retina de 10.2 polegadas e compatibilidade com Apple Pencil."
//         },
//         {
//           "nome": "Impressora Epson EcoTank L3250",
//           "valor": 1299.00,
//           "quantidade_estoque": 12,
//           "fabricante": "Epson",
//           "categoria": "Impressoras",
//           "descricao": "Impressora multifuncional com sistema de tanque de tinta, Wi-Fi e impressão econômica."
//         },
//         {
//           "nome": "HD Externo Seagate 1TB",
//           "valor": 359.90,
//           "quantidade_estoque": 60,
//           "fabricante": "Seagate",
//           "categoria": "Armazenamento",
//           "descricao": "HD portátil com 1TB de capacidade e conexão USB 3.0 para transferência rápida de arquivos."
//         },
//         {
//           "nome": "Smart TV Samsung 50\" 4K",
//           "valor": 2699.00,
//           "quantidade_estoque": 14,
//           "fabricante": "Samsung",
//           "categoria": "TVs",
//           "descricao": "Smart TV com resolução 4K UHD, HDR e sistema Tizen com aplicativos integrados."
//         },
//         {
//           "nome": "Placa de Vídeo NVIDIA RTX 3060",
//           "valor": 2399.00,
//           "quantidade_estoque": 8,
//           "fabricante": "NVIDIA",
//           "categoria": "Hardware",
//           "descricao": "Placa de vídeo com 12GB GDDR6 e suporte a ray tracing para jogos de última geração."
//         },
//         {
//           "nome": "Processador AMD Ryzen 5 5600X",
//           "valor": 1149.00,
//           "quantidade_estoque": 35,
//           "fabricante": "AMD",
//           "categoria": "Hardware",
//           "descricao": "Processador de 6 núcleos e 12 threads com excelente desempenho para jogos e tarefas intensivas."
//         },
//         {
//           "nome": "Memória RAM Corsair Vengeance 16GB",
//           "valor": 399.00,
//           "quantidade_estoque": 40,
//           "fabricante": "Corsair",
//           "categoria": "Hardware",
//           "descricao": "Módulo de memória DDR4 com frequência de 3200MHz e dissipador de calor."
//         },
//         {
//           "nome": "Fonte Corsair 650W 80 Plus Bronze",
//           "valor": 479.00,
//           "quantidade_estoque": 22,
//           "fabricante": "Corsair",
//           "categoria": "Hardware",
//           "descricao": "Fonte de alimentação com certificação 80 Plus Bronze e cabos modulares."
//         },
//             {
//               "nome": "Placa mãe com suporte DDR4",
//               "valor": 1328.67,
//               "quantidade_estoque": 91,
//               "fabricante": "Asus",
//               "categoria": "Hardware",
//               "descricao": "Dispositivo confiável com conectividade moderna para melhor desempenho multitarefa."
//             },
//             {
//               "nome": "Monitor gamer curvo Full HD",
//               "valor": 1742.32,
//               "quantidade_estoque": 67,
//               "fabricante": "Samsung",
//               "categoria": "Informática",
//               "descricao": "Exibição imersiva com tempo de resposta rápido ideal para jogos competitivos."
//             },
//             {
//               "nome": "Tablet resistente ao impacto",
//               "valor": 2084.45,
//               "quantidade_estoque": 33,
//               "fabricante": "LG",
//               "categoria": "Tablets",
//               "descricao": "Design reforçado e bateria de longa duração para uso em campo."
//             },
//             {
//               "nome": "Cadeira executiva reclinável",
//               "valor": 844.67,
//               "quantidade_estoque": 25,
//               "fabricante": "ThunderX3",
//               "categoria": "Móveis para Escritório",
//               "descricao": "Conforto premium com apoio de cabeça ajustável e rodinhas de silicone."
//             },
//             {
//               "nome": "Smartphone com câmera dupla",
//               "valor": 1450.12,
//               "quantidade_estoque": 42,
//               "fabricante": "Motorola",
//               "categoria": "Celulares",
//               "descricao": "Desempenho equilibrado e câmeras de boa qualidade para o dia a dia."
//             },
//             {
//               "nome": "Roteador Wi-Fi Dual Band",
//               "valor": 389.00,
//               "quantidade_estoque": 58,
//               "fabricante": "TP-Link",
//               "categoria": "Acessórios",
//               "descricao": "Sinal estável e alcance aprimorado com várias antenas externas."
//             },
//             {
//               "nome": "SSD M.2 NVMe 1TB",
//               "valor": 599.90,
//               "quantidade_estoque": 77,
//               "fabricante": "Kingston",
//               "categoria": "Armazenamento",
//               "descricao": "Alta velocidade de leitura e gravação para desempenho superior em jogos e trabalho."
//             },
//             {
//               "nome": "Scanner de documentos portátil",
//               "valor": 732.25,
//               "quantidade_estoque": 19,
//               "fabricante": "Epson",
//               "categoria": "Impressoras",
//               "descricao": "Leve, compacto e compatível com Wi-Fi para digitalizações rápidas."
//             },
//             {
//               "nome": "Fonte de alimentação modular 750W",
//               "valor": 549.90,
//               "quantidade_estoque": 28,
//               "fabricante": "Corsair",
//               "categoria": "Hardware",
//               "descricao": "Alta eficiência energética e suporte a GPUs de última geração."
//             },
//             {
//               "nome": "Hub USB-C com múltiplas portas",
//               "valor": 199.90,
//               "quantidade_estoque": 81,
//               "fabricante": "Ugreen",
//               "categoria": "Acessórios",
//               "descricao": "Expanda a conectividade com portas HDMI, USB, leitor de cartão e mais."
//             },
//             {
//               "nome": "Mouse pad com carregador sem fio",
//               "valor": 149.99,
//               "quantidade_estoque": 63,
//               "fabricante": "Logitech",
//               "categoria": "Periféricos",
//               "descricao": "Superfície deslizante e recarregamento para smartphones compatíveis com Qi."
//             },
//             {
//               "nome": "Notebook ultrafino touchscreen",
//               "valor": 4590.00,
//               "quantidade_estoque": 22,
//               "fabricante": "Dell",
//               "categoria": "Informática",
//               "descricao": "Design elegante com tela sensível ao toque e SSD de 1TB."
//             },
//             {
//               "nome": "Projetor portátil com Bluetooth",
//               "valor": 1360.55,
//               "quantidade_estoque": 14,
//               "fabricante": "LG",
//               "categoria": "Acessórios",
//               "descricao": "Projeção sem fio em alta definição com som integrado."
//             },
//             {
//               "nome": "Webcam Full HD com microfone",
//               "valor": 299.00,
//               "quantidade_estoque": 72,
//               "fabricante": "Logitech",
//               "categoria": "Periféricos",
//               "descricao": "Imagem nítida com captação de áudio estéreo ideal para videoconferências."
//             },
//             {
//               "nome": "Kit upgrade gamer (CPU + RAM)",
//               "valor": 2899.99,
//               "quantidade_estoque": 16,
//               "fabricante": "AMD",
//               "categoria": "Hardware",
//               "descricao": "Processador Ryzen e 32GB DDR4 para melhorar o desempenho geral do PC."
//             },
//                 {
//                   "nome": "Mini PC com processador Intel",
//                   "valor": 2149.00,
//                   "quantidade_estoque": 32,
//                   "fabricante": "Intel",
//                   "categoria": "Informática",
//                   "descricao": "Computador compacto com desempenho ideal para tarefas de escritório e navegação."
//                 },
//                 {
//                   "nome": "Teclado ergonômico sem fio",
//                   "valor": 289.90,
//                   "quantidade_estoque": 54,
//                   "fabricante": "Microsoft",
//                   "categoria": "Periféricos",
//                   "descricao": "Design ergonômico que reduz a fadiga com conexão Bluetooth confiável."
//                 },
//                 {
//                   "nome": "Fone de ouvido Bluetooth com cancelamento",
//                   "valor": 649.99,
//                   "quantidade_estoque": 40,
//                   "fabricante": "Sony",
//                   "categoria": "Periféricos",
//                   "descricao": "Som imersivo com cancelamento ativo de ruído e bateria de longa duração."
//                 },
//                 {
//                   "nome": "Impressora a laser monocromática",
//                   "valor": 1199.00,
//                   "quantidade_estoque": 18,
//                   "fabricante": "HP",
//                   "categoria": "Impressoras",
//                   "descricao": "Alta velocidade de impressão e eficiência para ambientes corporativos."
//                 },
//                 {
//                   "nome": "Estabilizador de energia 600VA",
//                   "valor": 199.90,
//                   "quantidade_estoque": 70,
//                   "fabricante": "SMS",
//                   "categoria": "Acessórios",
//                   "descricao": "Proteção contra surtos elétricos e quedas de tensão."
//                 },
//                 {
//                   "nome": "Controle para PC e Xbox sem fio",
//                   "valor": 379.00,
//                   "quantidade_estoque": 37,
//                   "fabricante": "Microsoft",
//                   "categoria": "Periféricos",
//                   "descricao": "Controle ergonômico com vibração e compatibilidade multiplataforma."
//                 },
//                 {
//                   "nome": "Câmera de segurança IP Wi-Fi",
//                   "valor": 449.00,
//                   "quantidade_estoque": 29,
//                   "fabricante": "Intelbras",
//                   "categoria": "Acessórios",
//                   "descricao": "Monitoramento remoto via app, com visão noturna e detecção de movimento."
//                 },
//                 {
//                   "nome": "Repetidor de sinal Wi-Fi",
//                   "valor": 159.00,
//                   "quantidade_estoque": 62,
//                   "fabricante": "TP-Link",
//                   "categoria": "Acessórios",
//                   "descricao": "Expande o sinal da internet em casa com instalação fácil e rápida."
//                 },
//                 {
//                   "nome": "Caixa de som Bluetooth portátil",
//                   "valor": 299.90,
//                   "quantidade_estoque": 45,
//                   "fabricante": "JBL",
//                   "categoria": "Acessórios",
//                   "descricao": "Som potente com bateria de até 12 horas e resistência à água."
//                 },
//                 {
//                   "nome": "Monitor 4K UHD para design gráfico",
//                   "valor": 2849.90,
//                   "quantidade_estoque": 15,
//                   "fabricante": "LG",
//                   "categoria": "Informática",
//                   "descricao": "Alta fidelidade de cores e resolução para profissionais criativos."
//                 },
//                 {
//                   "nome": "Smartwatch com GPS integrado",
//                   "valor": 899.00,
//                   "quantidade_estoque": 48,
//                   "fabricante": "Samsung",
//                   "categoria": "Acessórios",
//                   "descricao": "Monitoramento de saúde, GPS e integração com celular Android."
//                 },
//                 {
//                   "nome": "Hub HDMI com 3 entradas",
//                   "valor": 139.90,
//                   "quantidade_estoque": 73,
//                   "fabricante": "Multilaser",
//                   "categoria": "Acessórios",
//                   "descricao": "Permite conectar múltiplos dispositivos em uma única entrada HDMI."
//                 },
//                 {
//                   "nome": "Estação de trabalho portátil",
//                   "valor": 4799.99,
//                   "quantidade_estoque": 11,
//                   "fabricante": "Dell",
//                   "categoria": "Informática",
//                   "descricao": "Notebook potente para tarefas de engenharia, edição e renderização."
//                 },
//                 {
//                   "nome": "Cooler RGB para processador",
//                   "valor": 249.00,
//                   "quantidade_estoque": 35,
//                   "fabricante": "Cooler Master",
//                   "categoria": "Hardware",
//                   "descricao": "Refrigeração eficiente com visual gamer e iluminação personalizável."
//                 },
//                 {
//                   "nome": "Leitor de código de barras USB",
//                   "valor": 229.00,
//                   "quantidade_estoque": 60,
//                   "fabricante": "Elgin",
//                   "categoria": "Acessórios",
//                   "descricao": "Leitura rápida e precisa para uso em caixas e estoques."
//                 },
//                 {
//                   "nome": "Notebook com tela antirreflexo",
//                   "valor": 3279.00,
//                   "quantidade_estoque": 24,
//                   "fabricante": "Lenovo",
//                   "categoria": "Informática",
//                   "descricao": "Desempenho equilibrado com visual confortável para uso prolongado."
//                 },
//                 {
//                   "nome": "Câmera DSLR semi-profissional",
//                   "valor": 3989.00,
//                   "quantidade_estoque": 10,
//                   "fabricante": "Canon",
//                   "categoria": "Acessórios",
//                   "descricao": "Qualidade de imagem incrível com recursos avançados para fotógrafos."
//                 },
//                 {
//                   "nome": "Servidor rack compacto",
//                   "valor": 7399.00,
//                   "quantidade_estoque": 5,
//                   "fabricante": "HP",
//                   "categoria": "Hardware",
//                   "descricao": "Ideal para pequenas empresas com alto desempenho e redundância."
//                 },
//                 {
//                   "nome": "Pen drive 128GB USB 3.2",
//                   "valor": 99.90,
//                   "quantidade_estoque": 90,
//                   "fabricante": "SanDisk",
//                   "categoria": "Armazenamento",
//                   "descricao": "Transferência rápida de arquivos com design compacto e durável."
//                 },
//                 {
//                   "nome": "Fonte ATX 500W silenciosa",
//                   "valor": 309.90,
//                   "quantidade_estoque": 38,
//                   "fabricante": "EVGA",
//                   "categoria": "Hardware",
//                   "descricao": "Fonte confiável com baixo ruído e proteções de voltagem integradas."
//                 },
        
//                   ])

                 /*db["bd3-nosql-atv3"].find().sort({ valor: -1 }).limit(1)*/
                 /*db["bd3-nosql-atv3"].find().sort({ valor: 1 }).limit(1)*/
                 /*db["bd3-nosql-atv3"].find({valor: { $gte: 49.9, $lte: 499.90 }}).limit(5)*/
                 /*db["bd3-nosql-atv3"].find({categoria: "Acessórios"}).limit(5)*/
                 /*db["bd3-nosql-atv3"].find({ categoria: { $in: ["Acessórios", "Hardware"] }}).limit(10)*/
                 /*db["bd3-nosql-atv3"].find({categoria: { $nin: ["Acessórios", "Hardware"] }}).limit(10)*/
                 /*db["bd3-nosql-atv3"].find().sort({ valor: 1})*/
                 /*db["bd3-nosql-atv3"].find().sort({ valor: -1})*/
                 /*db["bd3-nosql-atv3"].find({ categoria: "Acessórios" }).sort({ valor: 1 })*/
                 /*db["bd3-nosql-atv3"].find({ categoria: "Armazenamento" }).sort({ valor: -1 })*/









  