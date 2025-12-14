// Données des projets
const projects = [
  {
    title: "Stage 2eme Année",
    category: "UX.UI/3D",
    img: "./image/STAGE_MP.png",
    desc: " Durant ce stage, j’ai réalisé la maquette de la partie paywall d’une application mobile nommée HeyChef!. Ce projet m’a amené à proposer plusieurs pistes de design en travaillant par itération, afin d’affiner l’interface et l’expérience utilisateur en fonction des retours. En parallèle, j’ai également participé à la conception de spectacles de drones sur Blender, en animant des objets et en programmant le déplacement des drones pour qu’ils suivent précisément ces formes. Ces travaux m’ont permis de développer à la fois ma rigueur technique et ma créativité sur des projets aux formats variés.",
    tags: ["UX Research", "Figma", "3D Blender", "3D Animation"],
    gallery: ["./image/STAGE_P1.png", "./image/STAGE_P2.png", "./image/STAGE_P3.png", "./image/STAGE_P4.png", "./image/STAGE_P5.png", "./image/STAGE_P6.png"]
  },
  {
    title: "Greener Earth",
    category: "UI.UX.Prototypage",
    img: "./image/GE_P1.png",
    desc: "Greener Earth est un projet pour lequel j’ai réalisé une maquette fonctionnelle autour du thème de l’impact environnemental de nos achats. Il s’agit également de l’un de mes premiers projets pensés spécifiquement pour le mobile, ce qui m’a permis d’adapter mon design aux contraintes et usages de ce support. J’y ai exploité plusieurs concepts clés du UI design, notamment la gamification et la création de composants au sein de Figma. Ce projet a été particulièrement formateur, notamment sur la cohérence globale de la maquette et l’application de différents principes essentiels du design d’interface.",
    tags: ["UI Design", "Figma", "Prototypage", "Mobile"],
    gallery: ["./image/GE_P2.png", "./image/GE_P3.png", "./image/GE_P4.png"]
  },
  {
    title: "Accesware",
    category: "UX.UI",
    img: "./image/ACW_P1.png",
    desc: "Accessware est un projet de groupe dans lequel nous devions proposer une idée d’entreprise. Nous avons imaginé un logiciel multifonction composé de modules personnalisables, visant à simplifier la gestion d’entreprise et des employés. Dans ce cadre, j’ai réalisé une User Journey Map ainsi qu’une Empathy Map afin de mieux comprendre les besoins des utilisateurs et de concevoir une maquette cohérente, fonctionnelle et centrée sur leurs usages.",
    tags: ["Empathy Map", "User Journey Map", "Figma", "UX Design"],
    gallery: ["./image/ACW_P2.png", "./image/ACW_P3.png"]
  },
  {
    title: "Divers",
    category: "Graphisme/Dessin",
    img: "./image/DIVERS_3.png",
    desc: "Cette section regroupe une compilation de différents travaux liés au graphisme que j’ai réalisés. Elle met en lumière mon évolution, notamment à travers l’utilisation de la 3D pour la création de publicités Instagram, comme celles réalisées pour Displate. Je souhaite également montrer que ma palette créative s’étend au dessin, une pratique que je poursuis encore aujourd’hui. Elle me permet de stimuler ma créativité et de réaliser des brouillons de maquettes sur papier, servant de base à la conception de futurs sites web.",
    tags: ["3D/Blender", "Photoshop", "InDesign","Procreate"],
    gallery: ["./image/DIVERS_2.png", "./image/DIVERS_1.png", "./image/DIVERS_4.png", "./image/DIVERS_5.png", "./image/DIVERS_6.png"]
  }
];

// Initialisation des icônes
if (window.lucide) {
  lucide.createIcons();
}

/**
 * OUVRIR LA MODALE PROJET
 */
window.openProject = function(index) {
  const p = projects[index];
  if (!p) return;

  const modal = document.getElementById('project-modal');
  const backdrop = document.getElementById('modal-backdrop');
  const content = document.getElementById('modal-content');

  // Injecter les données
  document.getElementById('modal-img').src = p.img;
  document.getElementById('modal-category').innerText = p.category;
  document.getElementById('modal-title').innerText = p.title;
  document.getElementById('modal-desc').innerText = p.desc;

  // Tags
  const tagsContainer = document.getElementById('modal-tags');
  tagsContainer.innerHTML = p.tags.map(tag => 
    `<span class="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-bold uppercase rounded-md">${tag}</span>`
  ).join('');

  // Galerie avec onClick pour la lightbox
  const galleryContainer = document.getElementById('modal-gallery');
  galleryContainer.innerHTML = p.gallery.map(img => 
    `<div class="relative group overflow-hidden rounded-lg h-24 cursor-zoom-in" onclick="window.openLightbox('${img}')">
       <img src="${img}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
       <div class="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
    </div>`
  ).join('');

  // Afficher le conteneur
  modal.classList.remove('hidden');
  document.body.classList.add('modal-open');

  // Animation d'entrée
  requestAnimationFrame(() => {
    backdrop.classList.remove('opacity-0');
    content.classList.remove('opacity-0', 'scale-95');
    content.classList.add('scale-100');
  });
};

/**
 * FERMER LA MODALE PROJET
 */
window.closeModal = function() {
  const modal = document.getElementById('project-modal');
  const backdrop = document.getElementById('modal-backdrop');
  const content = document.getElementById('modal-content');

  backdrop.classList.add('opacity-0');
  content.classList.remove('scale-100');
  content.classList.add('opacity-0', 'scale-95');

  document.body.classList.remove('modal-open');

  setTimeout(() => {
    modal.classList.add('hidden');
  }, 300);
};

/**
 * OUVRIR LA LIGHTBOX (Nouvelle fonctionnalité)
 */
window.openLightbox = function(src) {
    const lightbox = document.getElementById('lightbox-modal');
    const imgElement = document.getElementById('lightbox-img');
    
    imgElement.src = src;
    
    lightbox.classList.remove('hidden');
    
    // Petite animation d'entrée
    requestAnimationFrame(() => {
        imgElement.classList.remove('scale-95', 'opacity-0');
        imgElement.classList.add('scale-100', 'opacity-100');
    });
};

/**
 * FERMER LA LIGHTBOX
 */
window.closeLightbox = function() {
    const lightbox = document.getElementById('lightbox-modal');
    const imgElement = document.getElementById('lightbox-img');
    
    imgElement.classList.remove('scale-100', 'opacity-100');
    imgElement.classList.add('scale-95', 'opacity-0');
    
    setTimeout(() => {
        lightbox.classList.add('hidden');
        imgElement.src = ""; // Clean up
    }, 300);
};

// Gestion intelligente de la touche Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const lightbox = document.getElementById('lightbox-modal');
    
    // Si la lightbox est ouverte (pas hidden), on la ferme en priorité
    if (lightbox && !lightbox.classList.contains('hidden')) {
        window.closeLightbox();
    } else {
        // Sinon on ferme le modal projet
        window.closeModal();
    }
  }
});
