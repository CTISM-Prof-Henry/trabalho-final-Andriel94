// ==================== BARRA DE PESQUISA GLOBAL - products.js ====================

const products = [

    // ==================== CANECAS====================
    {
        id: 1,
        name: "Caneca: Azzy Longo",
        price: 35,
        category: "Arte",
        tags: ["azzy", "longo", "streamer"],
        img: "../images/canecasMENU/1azzy_longo.png",
        hover: "../images/canecasMENU/1azzy_longo.png",
        images: ["../images/canecasMENU/1azzy_longo.png", "../images/canecasMENU/2azzy_longo.png", "../images/canecasMENU/3azzy_longo.png"],
        description: "Caneca premium com design exclusivo de Azzy Longo.",
        techDescription: "Material: Cerâmica de alta qualidade • Capacidade: 325ml • Impressão: Sublimação total • Resistente a micro-ondas e lava-louças"
    },
    {
        id: 2,
        name: "Caneca: Azzy Dark Signal",
        price: 55,
        category: "Tech",
        tags: ["dark", "signal", "misterioso"],
        img: "../images/canecasMENU/1AzzyDark.png",
        hover: "../images/canecasMENU/1AzzyDark.png",
        images: ["../images/canecasMENU/1AzzyDark.png", "../images/canecasMENU/2AzzyDark.png", "../images/canecasMENU/3AzzyDark.png"],
        description: "Design inspirado em vibes dark e misteriosas do evento mês assustador de 2025. Também usado como interface do servidor pessoal Linux com estética  Windows??",
        techDescription: "Material: Cerâmica de alta qualidade • Capacidade: 325ml • Impressão: Sublimação total • Resistente a micro-ondas e lava-louças"
    },
    {
        id: 3,
        name: "Caneca: < DOCTYPE Azzy >",
        price: 35,
        category: "Tech",
        tags: ["html", "css", "javascript", "developer", "doctype"],
        img: "../images/canecasMENU/1AzzyDoctype.png",
        hover: "../images/canecasMENU/1AzzyDoctype.png",
        images: ["../images/canecasMENU/1AzzyDoctype.png", "../images/canecasMENU/2AzzyDoctype.png", "../images/canecasMENU/3AzzyDoctype.png"],
        description: "Pra quem já tentou criar uma página web e sabe exatamente como é viver com um olho no CSS tentando deixar tudo bonito, enquanto o outro fica preso no JavaScript tentando descobrir por que alguma coisa simplesmente parou de funcionar do nada.",
        techDescription: "Material: Cerâmica de alta qualidade • Capacidade: 325ml • Impressão: Sublimação total • Resistente a micro-ondas e lava-louças",
        video: "../images/canecasMENU/4azzyDoctype.mp4"
    }
];

window.products = products;